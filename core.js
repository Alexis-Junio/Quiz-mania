(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.QuizCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const DAY = 86400000;
  const validDate = value => typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value) && Number.isFinite(Date.parse(value)) && new Date(value).toISOString() === value;
  function editorialEligible(q, now = Date.now()) {
    if (q.status !== 'approved' || !validDate(q.verifiedAt) || !validDate(q.expiresAt) ||
      Date.parse(q.verifiedAt) > now || Date.parse(q.expiresAt) <= now || Date.parse(q.expiresAt) <= Date.parse(q.verifiedAt)) return false;
    if (!q.id || !q.factId || !q.explanation?.trim() || !Array.isArray(q.o) || q.o.length !== 4 ||
      !q.o.every(o => typeof o === 'string' && o.trim()) || new Set(q.o.map(normalize)).size !== 4 ||
      !Number.isInteger(q.a) || q.a < 0 || q.a > 3) return false;
    if (q.topic !== 'matematica') {
      if (!q.source?.name?.trim()) return false;
      try { const url = new URL(q.source.url); if (url.protocol !== 'https:' || !url.hostname) return false; } catch { return false; }
    }
    return q.topic !== 'atualidades' || (!!q.referencePeriod && q.q.includes(q.referencePeriod));
  }
  const points = {facil: 10, medio: 20, dificil: 30};
  // Preserve symbols: alternatives such as @, #, & and % are distinct answers.
  const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();
  const playerId = name => name.normalize('NFC').trim().replace(/\s+/g, ' ').toLocaleLowerCase('pt-BR');
  const configKey = config => JSON.stringify([playerId(config.player), config.mode, config.level, [...config.themes].sort()]);
  const legacyKey = config => config.level + '|' + [...config.themes].sort().join('-');
  const shuffle = (items, random = Math.random) => {
    const result = [...items];
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  };
  function available(bank, data, config, now = Date.now()) {
    const pool = bank.filter(q => editorialEligible(q, now) && q.level === config.level && config.themes.includes(q.t));
    const active = at => data.preferences.period === 'cycle' || now - at < data.preferences.period * DAY;
    const records = data.history.filter(e => configKey(e) === configKey(config) && active(e.at));
    const ids = new Set(records.map(e => e.id)), facts = new Set(records.map(e => e.factId));
    if (config.mode === 'individual' && data.legacy.migratedAt !== null && active(data.legacy.migratedAt)) {
      for (const id of data.legacy.used[legacyKey(config)] || []) ids.add(id);
    }
    // Apply the current fact mapping to old IDs too, including migrated records.
    for (const q of bank) if (ids.has(q.id)) facts.add(q.factId);
    const remaining = pool.filter(q => !ids.has(q.id) && !facts.has(q.factId));
    return {pool, remaining, blocked: pool.length - remaining.length};
  }
  function select(bank, data, config, count = 10, now = Date.now(), random = Math.random) {
    const {remaining} = available(bank, data, config, now);
    const facts = new Set(), ids = new Set();
    const unique = shuffle(remaining, random).filter(q => {
      if (facts.has(q.factId) || ids.has(q.id)) return false;
      facts.add(q.factId); ids.add(q.id); return true;
    });
    if (!Number.isInteger(count) || count < 1 || unique.length < count) return {ok: false, available: unique.length, questions: []};
    return {ok: true, available: unique.length, questions: unique.slice(0, count)};
  }
  function presented(data, config, question, now = Date.now()) {
    data.history.push({player: playerId(config.player), mode: config.mode, level: config.level,
      themes: [...config.themes].sort(), id: question.id, factId: question.factId, at: now});
  }
  function resetHistory(data, config) {
    data.history = data.history.filter(e => configKey(e) !== configKey(config));
    // Legacy records have no player: only explicit reset can release this shared configuration.
    if (config.mode === 'individual') delete data.legacy.used[legacyKey(config)];
  }
  function recordGame(data, config, score, hits, total, now = Date.now()) {
    const player = playerId(config.player);
    if (!Object.hasOwn(data.best, player)) Object.defineProperty(data.best, player, {value: {}, enumerable: true, writable: true, configurable: true});
    data.best[player][config.level] = Math.max(data.best[player][config.level] || 0, score);
    data.games.push({player, mode: config.mode, level: config.level, themes: [...config.themes].sort(), score, hits, total, at: now});
    return data.best[player][config.level];
  }
  function duplicates(bank) {
    const results = [];
    for (let i = 0; i < bank.length; i++) for (let j = i + 1; j < bank.length; j++) {
      const a = bank[i], b = bank[j];
      const wordsA = new Set(normalize(a.q).split(' ').filter(w => w.length > 3));
      const wordsB = new Set(normalize(b.q).split(' ').filter(w => w.length > 3));
      const overlap = [...wordsA].filter(w => wordsB.has(w)).length;
      const similarity = overlap / new Set([...wordsA, ...wordsB]).size;
      if (a.factId === b.factId || normalize(a.q) === normalize(b.q) || similarity >= 0.55) {
        results.push({ids: [a.id, b.id], reason: a.factId === b.factId ? 'mesmo fato' : normalize(a.q) === normalize(b.q) ? 'texto duplicado' : 'texto semelhante: revisar'});
      }
    }
    return results;
  }
  function expirationStatus(days) {
    if (days <= 0) return 'vencida';
    if (days <= 30) return 'urgente';
    if (days <= 60) return 'atencao';
    if (days <= 90) return 'informativo';
    return 'normal';
  }
  function expirationInfo(bank, now = Date.now()) {
    const approved = bank.filter(q => q.status === 'approved' && validDate(q.expiresAt));
    if (!approved.length) return null;
    const items = approved.map(q => {
      const exp = Date.parse(q.expiresAt);
      const days = Math.ceil((exp - now) / DAY);
      return {id: q.id, topic: q.topic, level: q.level, expiresAt: q.expiresAt, days, status: expirationStatus(days)};
    });
    const expiring = items.filter(i => i.days <= 90).sort((a, b) => a.days - b.days);
    if (!expiring.length) return null;
    const nearest = expiring[0];
    const byTopic = {};
    for (const item of expiring) {
      byTopic[item.topic] = byTopic[item.topic] || {count: 0, ids: [], levels: new Set(), nearestDays: item.days, nearestExpiresAt: item.expiresAt};
      byTopic[item.topic].count++;
      byTopic[item.topic].ids.push(item.id);
      byTopic[item.topic].levels.add(item.level);
    }
    const topics = Object.entries(byTopic).map(([topic, info]) => ({
      topic,
      count: info.count,
      ids: info.ids,
      levels: [...info.levels].sort(),
      days: info.nearestDays,
      expiresAt: info.nearestExpiresAt,
      status: expirationStatus(info.nearestDays)
    })).sort((a, b) => a.days - b.days);
    return {
      nearest: {days: nearest.days, expiresAt: nearest.expiresAt, status: nearest.status},
      topics,
      total: expiring.length
    };
  }
  function diagnostics(bank, data, config, now = Date.now(), duplicatePairs = duplicates(bank)) {
    const state = available(bank, data, config, now);
    return {total: state.pool.length, blocked: state.blocked,
      remaining: new Set(state.remaining.map(q => q.factId)).size,
      duplicates: duplicatePairs, lowThemes: [...new Set(bank.map(q => q.t))].map(theme => ({theme,
        count: select(bank, data, {...config, themes: [theme]}, 1, now).available})).filter(t => t.count < 10),
      expiration: expirationInfo(bank, now)};
  }
  return {DAY, points, normalize, playerId, configKey, shuffle, available, select, presented, resetHistory, recordGame, duplicates, diagnostics, validDate, editorialEligible, expirationStatus, expirationInfo};
});
