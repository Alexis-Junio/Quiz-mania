(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.QuizStorage = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';
  const KEY = 'quizMania.v2', PREVIOUS_KEY = 'quizMania.v1';
  const LEVELS = ['facil', 'medio', 'dificil'];
  const THEMES = ['geral', 'entretenimento', 'atualidades'];
  const PERIODS = [7, 15, 30, 60, 'cycle'];
  const object = value => value !== null && typeof value === 'object' && !Array.isArray(value);
  const number = value => Number.isFinite(value) && value >= 0;
  const scores = value => object(value) && Object.entries(value).every(([key, score]) => LEVELS.includes(key) && number(score));
  const themes = value => Array.isArray(value) && value.every(t => THEMES.includes(t)) && new Set(value).size === value.length;
  function fresh() {
    return {version: 2, profiles: [], activeProfileId: null, preferences: {name: '', level: 'facil', themes: [...THEMES], period: 30},
      best: {}, history: [], games: [], legacy: {best: {}, used: {}, migratedAt: null}};
  }
  function validPrevious(data) {
    return object(data) && data.version === 1 && object(data.preferences) &&
      typeof data.preferences.name === 'string' && LEVELS.includes(data.preferences.level) &&
      themes(data.preferences.themes) && PERIODS.includes(data.preferences.period) &&
      object(data.best) && Object.values(data.best).every(scores) &&
      Array.isArray(data.history) && data.history.every(e => object(e) &&
        typeof e.player === 'string' && e.player.length > 0 && typeof e.mode === 'string' &&
        LEVELS.includes(e.level) && themes(e.themes) && e.themes.length > 0 &&
        typeof e.id === 'string' && e.id.length > 0 && typeof e.factId === 'string' && number(e.at)) &&
      Array.isArray(data.games) && data.games.every(g => object(g) && typeof g.player === 'string' &&
        typeof g.mode === 'string' && LEVELS.includes(g.level) && themes(g.themes) &&
        number(g.at) && number(g.score) && Number.isInteger(g.hits) && g.hits >= 0 &&
        Number.isInteger(g.total) && g.total > 0 && g.hits <= g.total) &&
      object(data.legacy) && scores(data.legacy.best) && validLegacyUsed(data.legacy.used) &&
      (data.legacy.migratedAt === null || number(data.legacy.migratedAt));
  }
  function valid(data) {
    if (!object(data) || data.version !== 2 || !validPrevious({...data,version:1}) || !Array.isArray(data.profiles)) return false;
    const ids = new Set();
    for (const p of data.profiles) {
      if (!object(p) || typeof p.id !== 'string' || !p.id.trim() || ids.has(p.id) ||
        typeof p.name !== 'string' || !p.name.trim() || !number(p.createdAt)) return false;
      ids.add(p.id);
    }
    return validStatistics(data.statistics,ids) && (data.activeProfileId === null || ids.has(data.activeProfileId)) &&
      data.history.every(e => ids.has(e.player)) && data.games.every(e => ids.has(e.player)) && Object.keys(data.best).every(id => ids.has(id));
  }
  function validStatistics(stats,profiles) {
    if(stats===undefined)return true; // Additive v2 extension; old records stay readable.
    if(!object(stats)||stats.version!==1||!Array.isArray(stats.sessions)||!Array.isArray(stats.answers))return false;
    const sessions=new Map();
    for(const s of stats.sessions){
      if(!object(s)||typeof s.id!=='string'||!s.id||sessions.has(s.id)||!['individual','battle'].includes(s.mode)||!LEVELS.includes(s.level)||!themes(s.themes)||!Array.isArray(s.topics)||!s.topics.every(t=>typeof t==='string')||!Array.isArray(s.players)||s.players.length!==(s.mode==='battle'?2:1)||new Set(s.players).size!==s.players.length||!s.players.every(id=>profiles.has(id))||!Number.isInteger(s.count)||s.count<1||!number(s.at)||!['active','completed','abandoned','exhausted'].includes(s.status))return false;
      sessions.set(s.id,s);
    }
    const keys=new Set();
    for(const a of stats.answers){
      if(!object(a))return false;const s=sessions.get(a.sessionId),key=JSON.stringify([a.sessionId,a.player,a.index]);
      if(!s||!s.players.includes(a.player)||keys.has(key)||typeof a.id!=='string'||!a.id||typeof a.topic!=='string'||!a.topic||!LEVELS.includes(a.level)||![true,false,null].includes(a.correct)||!number(a.points)||!Number.isInteger(a.index)||a.index<0||!number(a.at))return false;
      keys.add(key);
    }
    return true;
  }
  function createProfile(data, name, now = Date.now(), uuid = () => globalThis.crypto.randomUUID()) {
    if (typeof name !== 'string' || !name.trim()) throw new Error('Nome obrigatório.');
    const id = 'p-' + uuid();
    if (data.profiles.some(p => p.id === id)) throw new Error('Identificador já existente.');
    const profile = {id, name:name.trim(), createdAt:now};
    data.profiles.push(profile); data.activeProfileId=id; data.preferences.name=profile.name;
    return profile;
  }
  function migrate(previous, now) {
    if (!validPrevious(previous)) throw new Error('Base v1 inválida.');
    const result = {...previous, preferences:{...previous.preferences}, version:2, profiles:[], activeProfileId:null, best:{}};
    const names = new Set([...Object.keys(previous.best), ...previous.history.map(e=>e.player), ...previous.games.map(e=>e.player)]);
    const normalized = name => name.normalize('NFC').trim().replace(/\s+/g,' ').toLocaleLowerCase('pt-BR');
    if (previous.preferences.name.trim()) names.add(normalized(previous.preferences.name));
    const mapping = new Map();
    for (const name of names) {
      const display = normalized(previous.preferences.name) === name ? previous.preferences.name : name;
      mapping.set(name, createProfile(result, display, now).id);
    }
    result.history = previous.history.map(e=>({...e,player:mapping.get(e.player)}));
    result.games = previous.games.map(e=>({...e,player:mapping.get(e.player)}));
    for (const [name, scores] of Object.entries(previous.best)) result.best[mapping.get(name)] = {...scores};
    result.activeProfileId=mapping.get(normalized(previous.preferences.name)) || null;
    result.preferences={...previous.preferences};
    if (!valid(result)) throw new Error('Migração inválida.');
    return result;
  }
  function validLegacyUsed(used) {
    return object(used) && Object.entries(used).every(([key, ids]) => {
      const [level, selection, extra] = key.split('|');
      return !extra && LEVELS.includes(level) && typeof selection === 'string' &&
        themes(selection.split('-')) && Array.isArray(ids) && ids.every(id => typeof id === 'string');
    });
  }
  function open(storage, now = Date.now()) {
    let data = fresh(), blocked = false, expectedRaw = null;
    const messages = [];
    function save() {
      if (blocked) return false;
      try {
        if (!valid(data)) {blocked=true;messages.push('Dados internos inválidos; gravação bloqueada.');return false;}
        if (storage.getItem(KEY) !== expectedRaw) {
          blocked = true; messages.push('Os dados mudaram em outra aba. Recarregue antes de continuar; nada foi sobrescrito.'); return false;
        }
        if(data.statistics && expectedRaw && !JSON.parse(expectedRaw).statistics && storage.getItem('quizMania.before-stage5')===null)storage.setItem('quizMania.before-stage5',expectedRaw);
        const raw = JSON.stringify(data); storage.setItem(KEY, raw); expectedRaw = raw; return true;
      }
      catch { blocked = true; messages.push('Não foi possível salvar. A partida foi bloqueada para proteger o histórico. Libere espaço ou permita o armazenamento e recarregue.'); return false; }
    }
    try {
      const raw = storage.getItem(KEY);
      expectedRaw = raw;
      if (raw !== null) {
        const parsed = JSON.parse(raw);
        if (!valid(parsed)) throw new Error('Formato de dados inválido ou versão não suportada.');
        data = parsed;
        if (Object.keys(data.legacy.best).length || Object.keys(data.legacy.used).length) messages.push('Dados legados preservados: recordes compartilhados e bloqueios antigos na configuração original, contados desde a migração, pois o formato antigo não registrava jogador nem data.');
      } else if (storage.getItem(PREVIOUS_KEY) !== null) {
        data = migrate(JSON.parse(storage.getItem(PREVIOUS_KEY)), now);
        messages.push('Perfis migrados da versão 1. O original foi preservado. Históricos que antes compartilhavam o mesmo nome continuam juntos em um perfil legado; crie novos perfis para separar jogadores daqui em diante.');
        save();
      } else {
        const name = storage.getItem('quizName');
        const bestRaw = storage.getItem('quizBest'), usedRaw = storage.getItem('quizUsed');
        const best = bestRaw === null ? {} : JSON.parse(bestRaw);
        const used = usedRaw === null ? {} : JSON.parse(usedRaw);
        if (!scores(best) || !validLegacyUsed(used)) throw new Error('Dados antigos inválidos.');
        data.preferences.name = name || '';
        if (name?.trim()) createProfile(data, name, now);
        data.legacy = {best, used, migratedAt: now};
        if (name !== null || bestRaw !== null || usedRaw !== null) {
          messages.push('Dados antigos preservados. Recordes legados são compartilhados; perguntas antigas ficam bloqueadas para todos os jogadores na configuração original, contando o prazo a partir desta migração, pois não há jogador nem data no histórico antigo.');
        }
        save();
      }
    } catch {
      blocked = true;
      messages.push('Armazenamento inválido, inacessível ou de versão não suportada. Os dados originais foram preservados. O menu funciona, mas novas partidas estão bloqueadas. Exporte os dados antes de confirmar uma recuperação.');
    }
    function exportRaw() {
      const raw = {};
      for (const key of [KEY, PREVIOUS_KEY, 'quizMania.before-stage5', 'quizName', 'quizBest', 'quizUsed']) raw[key] = storage.getItem(key);
      return JSON.stringify({exportedAt: new Date().toISOString(), raw}, null, 2);
    }
    // Only called after an explicit confirmation in the interface. Never delete originals.
    function recover() {
      try {
        const snapshot = exportRaw();
        storage.setItem('quizMania.recovery.' + Date.now(), snapshot);
        const replacement = fresh();
        const raw = JSON.stringify(replacement); storage.setItem(KEY, raw); expectedRaw = raw;
        data = replacement; blocked = false;
        messages.length = 0;
        messages.push('Recuperação confirmada: um arquivo dos dados anteriores foi preservado no navegador. Nova base ativa criada.');
        return true;
      } catch { messages.push('Recuperação não concluída: não foi possível arquivar e salvar. Nenhum histórico foi apagado.'); return false; }
    }
    return {get data() {return data;}, get blocked() {return blocked;}, messages, save, exportRaw, recover};
  }
  return {KEY, PREVIOUS_KEY, LEVELS, THEMES, PERIODS, fresh, valid, validPrevious, createProfile, migrate, open};
});
