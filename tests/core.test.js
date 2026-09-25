const {test} = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const C = require('../core');
const S = require('../storage');
// Stable scenario fixture keeps the 14-question exhaustion boundary of stages 1–3.
// Current editorial bank has its own stage4 tests; no equality requirement on revised text.
const bank = require('./fixtures/stage3-bank.cjs').map(q=>({...q,status:'approved',topic:'matematica',explanation:'Fixture de regressão.',verifiedAt:'2000-01-01T00:00:00.000Z',expiresAt:'2099-01-01T00:00:00.000Z'}));
const seedProfiles=data=>{if(!data.profiles.length)data.profiles=['ana','bia','__proto__'].map(id=>({id,name:id,createdAt:0}));return data;};
const fresh=()=>seedProfiles(S.fresh());
const openFixture=(...args)=>{const store=S.open(...args);if(!store.blocked)seedProfiles(store.data);return store;};
const config = {player: 'Ana', mode: 'individual', level: 'facil', themes: ['geral']};
const now = Date.UTC(2026, 8, 13);
function memory(initial = {}) {
  const data = {...initial};
  return {data, getItem: key => Object.hasOwn(data, key) ? data[key] : null, setItem: (key, value) => {data[key] = value;}};
}
test('banco preservado integralmente e IDs permanentes iguais aos antigos', () => {
  const source = fs.readFileSync('tests/fixtures/legacy.html','utf8').match(/<script>([\s\S]*?)<\/script>/)[1];
  const context = vm.createContext({});
  vm.runInContext(source.slice(0, source.indexOf('let level=')) + ';globalThis.old=Object.values(bank).flat();', context);
  for (const old of JSON.parse(JSON.stringify(context.old))) {
    const q = bank.find(q => q.id === old.id);
    assert.deepEqual({c:q.c,q:q.q,o:q.o,a:q.a,t:q.t,id:q.id},old);
  }
  assert.equal(bank.length, 102);
});
test('banco: IDs e enunciados únicos, alternativas válidas, tema e nível existentes', () => {
  assert.equal(new Set(bank.map(q => q.id)).size,bank.length);
  assert.equal(new Set(bank.map(q => C.normalize(q.q))).size,bank.length);
  for (const q of bank) {
    assert.ok(q.id && q.factId && q.q && q.c);
    assert.ok(S.LEVELS.includes(q.level)); assert.ok(S.THEMES.includes(q.t));
    assert.equal(q.o.length,4); assert.equal(new Set(q.o.map(C.normalize)).size,4);
    assert.ok(q.o.every(o => typeof o === 'string' && o.trim()));
    assert.ok(Number.isInteger(q.a) && q.a >= 0 && q.a < 4);
  }
});
test('detecção de textos e fatos duplicados mesmo com alternativas reordenadas', () => {
  const original = bank[0], duplicate = {...original,id:'duplicate',q:'Em que cidade fica a capital brasileira?',o:[...original.o].reverse()};
  const data = fresh(); C.presented(data,config,original,now);
  assert.equal(C.available([original,duplicate],data,config,now).remaining.length,0);
  assert.equal(C.duplicates([original,duplicate])[0].reason,'mesmo fato');
  assert.equal(C.duplicates([original,{...original,id:'other',factId:'other'}])[0].reason,'texto duplicado');
});
test('nenhuma repetição de ID ou fato dentro da rodada', () => {
  const data = fresh();
  for (let i = 0; i < 100; i++) {
    const selection = C.select([...bank,{...bank[0],id:'duplicate'}],data,config,10,now);
    assert.equal(selection.ok,true); assert.equal(new Set(selection.questions.map(q=>q.factId)).size,10);
    assert.equal(new Set(selection.questions.map(q=>q.id)).size,10);
  }
});
for (const period of [7,15,30,60]) test(`bloqueio de ${period} dias: fronteira exata e liberação`, () => {
  const data = fresh(); data.preferences.period = period; C.presented(data,config,bank[0],now);
  assert.equal(C.available(bank,data,config,now + period*C.DAY-1).blocked,1);
  assert.equal(C.available(bank,data,config,now + period*C.DAY).blocked,0);
  assert.equal(data.history.length,1);
});
test('padrão 30 dias, ciclo não reinicia sozinho mesmo depois de esgotado', () => {
  const data = fresh(); assert.equal(data.preferences.period,30); data.preferences.period='cycle';
  const pool = C.available(bank,data,config,now).pool;
  pool.forEach(q=>C.presented(data,config,q,now));
  const before = JSON.stringify(data);
  assert.equal(C.select(bank,data,config,10,now+10000*C.DAY).ok,false);
  assert.equal(JSON.stringify(data),before);
  C.resetHistory(data,config); assert.equal(C.select(bank,data,config,10,now).ok,true);
});
test('histórico separado por jogador, modo, nível e conjunto de temas', () => {
  const data=fresh(); C.presented(data,config,bank[0],now);
  assert.equal(C.available(bank,data,{...config,player:'  ANA  '},now).blocked,1);
  for (const change of [{player:'Bia'},{mode:'future-mode'},{level:'medio'},{themes:['geral','entretenimento']}]) {
    assert.equal(C.available(bank,data,{...config,...change},now).blocked,0);
  }
  assert.equal(C.configKey({...config,themes:['geral','atualidades']}),C.configKey({...config,themes:['atualidades','geral']}));
});
test('menos de dez: recusa sem reposição, redução explícita e seleção vazia', () => {
  const data=fresh(); const picked=C.select(bank,data,config,10,now);
  picked.questions.forEach(q=>C.presented(data,config,q,now));
  const before=JSON.stringify(data);
  assert.deepEqual(C.select(bank,data,config,10,now),{ok:false,available:4,questions:[]});
  assert.equal(C.select(bank,data,config,4,now).questions.length,4);
  assert.equal(C.select(bank,data,{...config,themes:[]},10,now).available,0);
  assert.equal(JSON.stringify(data),before);
});
test('somente pergunta apresentada fica bloqueada; seleção não reserva dez', () => {
  const data=fresh(); const selection=C.select(bank,data,config,10,now);
  assert.equal(data.history.length,0);
  C.presented(data,config,selection.questions[0],now);
  assert.equal(data.history.length,1);
  assert.equal(C.available(bank,data,config,now).remaining.length,13);
});
test('persistência, recordes pessoais, partidas e reabertura', () => {
  const storage=memory(), store=openFixture(storage,now);
  C.presented(store.data,config,bank[0],now);
  assert.equal(C.recordGame(store.data,config,100,10,10,now),100);
  assert.equal(C.recordGame(store.data,config,20,2,10,now),100);
  assert.equal(C.recordGame(store.data,{...config,player:'Bia'},0,0,10,now),0);
  store.save(); const reopened=openFixture(storage,now);
  assert.equal(reopened.blocked,false); assert.equal(reopened.data.history.length,1);
  assert.equal(reopened.data.games.length,3); assert.equal(reopened.data.best.ana.facil,100);
  assert.equal(reopened.data.best.bia.facil,0);
  assert.deepEqual(C.points,{facil:10,medio:20,dificil:30});
});
test('nome de jogador __proto__ não modifica o protótipo', () => {
  const data=fresh(); C.recordGame(data,{...config,player:'__proto__'},10,1,10,now);
  assert.equal(Object.getPrototypeOf(data.best),Object.prototype);
  assert.equal(Object.hasOwn(data.best,'__proto__'),true); assert.equal(S.valid(data),true);
});
test('migração preserva originais, recordes e IDs antigos sem inventar jogador/data', () => {
  const storage=memory({quizName:'Ana',quizBest:'{"facil":90}',quizUsed:JSON.stringify({'facil|geral':[bank[0].id]})});
  const store=openFixture(storage,now);
  assert.equal(store.blocked,false); assert.equal(store.data.preferences.name,'Ana');
  assert.equal(store.data.legacy.best.facil,90); assert.deepEqual(store.data.best,{});
  assert.equal(C.available(bank,store.data,{...config,player:'Bia'},now).blocked,1);
  assert.equal(C.available(bank,store.data,config,now+30*C.DAY).blocked,0);
  assert.equal(storage.data.quizBest,'{"facil":90}');
  assert.equal(store.messages.length,1);
  assert.equal(openFixture(storage,now+5*C.DAY).data.legacy.migratedAt,now);
});
for (const value of ['{','null','[]','{"version":99}']) test(`base inválida ${value} abre em modo protegido e preserva dados`, () => {
  const storage=memory({[S.KEY]:value}), store=openFixture(storage,now);
  assert.equal(store.blocked,true); assert.equal(store.save(),false); assert.equal(storage.data[S.KEY],value);
  assert.equal(store.data.preferences.period,30);
  assert.equal(store.recover(),true); assert.equal(openFixture(storage).blocked,false);
  const recovery=Object.keys(storage.data).find(k=>k.startsWith('quizMania.recovery.'));
  assert.equal(JSON.parse(storage.data[recovery]).raw[S.KEY],value);
});
test('formatos internos inválidos não causam reset nem migração silenciosa', () => {
  const cases = [d=>d.history.push({}),d=>d.best.ana={facil:-10},d=>d.preferences.period=0,d=>d.history='bad',d=>d.preferences.themes=['unknown']];
  for (const mutate of cases) {
    const data=fresh(); mutate(data); const raw=JSON.stringify(data), storage=memory({[S.KEY]:raw});
    assert.equal(openFixture(storage).blocked,true); assert.equal(storage.data[S.KEY],raw);
  }
});
test('legado corrompido é preservado e não gera nova base automaticamente', () => {
  const storage=memory({quizUsed:'{'}), store=openFixture(storage);
  assert.equal(store.blocked,true); assert.equal(storage.getItem(S.KEY),null); assert.equal(storage.getItem('quizUsed'),'{');
});
test('armazenamento indisponível ou cheio bloqueia novas gravações e recuperação insegura', () => {
  const store=openFixture({getItem(){throw new Error('Denied');}});
  assert.equal(store.blocked,true); assert.equal(store.recover(),false);
  const full=openFixture({getItem(){return null;},setItem(){throw new Error('Quota');}});
  assert.equal(full.blocked,true); assert.equal(full.save(),false);
});
test('reinício explícito preserva recordes, partidas e outros jogadores/configurações', () => {
  const data=fresh(); C.presented(data,config,bank[0],now);
  C.presented(data,{...config,player:'Bia'},bank[0],now); C.recordGame(data,config,10,1,10,now);
  C.resetHistory(data,config);
  assert.equal(data.history.length,1); assert.equal(data.history[0].player,'bia');
  assert.equal(data.games.length,1); assert.equal(data.best.ana.facil,10);
});
test('diagnóstico apresenta total, bloqueadas, restantes e temas insuficientes', () => {
  const data=fresh(); C.select(bank,data,config,10,now).questions.forEach(q=>C.presented(data,config,q,now));
  const d=C.diagnostics(bank,data,config,now);
  assert.equal(d.total,14); assert.equal(d.blocked,10); assert.equal(d.remaining,4);
  assert.ok(d.lowThemes.some(t=>t.theme==='geral' && t.count===4));
});
test('perguntas vencidas não entram no sorteio', () => {
  const q={...bank[0],expiresAt:new Date(now).toISOString()};
  assert.equal(C.available([q],fresh(),config,now).pool.length,0);
});
test('diagnóstico identifica o mesmo fato em perguntas inversas sobre Dear Algo e Threads', () => {
  assert.ok(C.duplicates(bank).some(pair => pair.ids.includes('medio-atualidades-12') && pair.ids.includes('dificil-atualidades-13') && pair.reason === 'mesmo fato'));
});
test('gravação obsoleta não sobrescreve histórico alterado por outra sessão', () => {
  const storage=memory(), first=openFixture(storage), second=openFixture(storage);
  C.presented(second.data,config,bank[0],now);assert.equal(second.save(),true);
  first.data.preferences.name='Obsoleto';assert.equal(first.save(),false);
  assert.equal(openFixture(storage).data.history.length,1);
});
test('migração bloqueia reformulações do mesmo fato, não apenas o ID antigo', () => {
  const data=fresh(), original=bank[0], duplicate={...original,id:'new-wording'};
  data.legacy={best:{},used:{'facil|geral':[original.id]},migratedAt:now};
  assert.equal(C.available([original,duplicate],data,config,now).remaining.length,0);
});
test('arquivos locais referenciados existem e scripts não são inline', () => {
  const html=fs.readFileSync('index.html','utf8');
  for (const [,url] of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
    if (!url.startsWith('data:')) assert.equal(fs.existsSync(url),true,url);
  }
  assert.equal(/<script>/.test(html),false);
});

const bankExp = require('../questions').filter(q => q.status === 'approved');
test('expirationStatus: mais de 90 dias retorna normal', () => {
  assert.equal(C.expirationStatus(91), 'normal');
  assert.equal(C.expirationStatus(100), 'normal');
});
test('expirationStatus: exatamente 90 dias retorna informativo', () => {
  assert.equal(C.expirationStatus(90), 'informativo');
});
test('expirationStatus: 60 dias retorna atencao', () => {
  assert.equal(C.expirationStatus(60), 'atencao');
});
test('expirationStatus: 30 dias retorna urgente', () => {
  assert.equal(C.expirationStatus(30), 'urgente');
});
test('expirationStatus: 1 dia retorna urgente', () => {
  assert.equal(C.expirationStatus(1), 'urgente');
});
test('expirationStatus: instante exato de expiração (0) retorna vencida', () => {
  assert.equal(C.expirationStatus(0), 'vencida');
});
test('expirationStatus: data já vencida (-1) retorna vencida', () => {
  assert.equal(C.expirationStatus(-1), 'vencida');
  assert.equal(C.expirationStatus(-30), 'vencida');
});
test('expirationInfo: nenhum item próximo de expirar retorna null', () => {
  const futureBank = bankExp.map(q => ({...q, expiresAt: new Date(Date.now() + 200 * C.DAY).toISOString()}));
  assert.equal(C.expirationInfo(futureBank, Date.now()), null);
});
test('expirationInfo: várias perguntas vencendo juntas', () => {
  const now = Date.now();
  const exp = new Date(now + 30 * C.DAY).toISOString();
  const testBank = [
    {...bankExp[0], id: 'test-exp-1', topic: 'atualidades', level: 'facil', expiresAt: exp},
    {...bankExp[0], id: 'test-exp-2', topic: 'atualidades', level: 'medio', expiresAt: exp},
    {...bankExp[0], id: 'test-exp-3', topic: 'ciencia', level: 'facil', expiresAt: exp}
  ];
  const info = C.expirationInfo(testBank, now);
  assert.ok(info);
  assert.equal(info.total, 3);
  assert.equal(info.nearest.days, 30);
  assert.equal(info.nearest.status, 'urgente');
  const topics = info.topics.map(t => t.topic).sort();
  assert.deepEqual(topics, ['atualidades', 'ciencia']);
  const atualidades = info.topics.find(t => t.topic === 'atualidades');
  assert.equal(atualidades.count, 2);
  assert.deepEqual(atualidades.levels.sort(), ['facil', 'medio']);
});
test('expirationInfo: perguntas com diferentes datas prioriza a mais próxima', () => {
  const now = Date.now();
  const testBank = [
    {...bankExp[0], id: 'test-exp-4', topic: 'atualidades', level: 'facil', expiresAt: new Date(now + 60 * C.DAY).toISOString()},
    {...bankExp[0], id: 'test-exp-5', topic: 'ciencia', level: 'medio', expiresAt: new Date(now + 10 * C.DAY).toISOString()}
  ];
  const info = C.expirationInfo(testBank, now);
  assert.ok(info);
  assert.equal(info.nearest.days, 10);
  assert.equal(info.nearest.status, 'urgente');
  assert.equal(info.topics[0].topic, 'ciencia');
});
test('expirationInfo: pergunta editorialmente inelegível é ignorada', () => {
  const now = Date.now();
  const ineligible = {...bankExp[0], id: 'test-ineligible', status: 'rejected', expiresAt: new Date(now + 5 * C.DAY).toISOString()};
  const eligible = {...bankExp[0], id: 'test-eligible', topic: 'atualidades', level: 'facil', expiresAt: new Date(now + 5 * C.DAY).toISOString()};
  const info = C.expirationInfo([ineligible, eligible], now);
  assert.ok(info);
  assert.equal(info.total, 1);
  assert.equal(info.topics[0].ids[0], 'test-eligible');
});
test('diagnostics inclui expirationInfo', () => {
  const S = require('../storage');
  const data = S.fresh();
  const d = C.diagnostics(bankExp, data, {player: 'p1', mode: 'individual', level: 'facil', themes: S.THEMES}, Date.now());
  assert.ok(d.hasOwnProperty('expiration'));
  assert.ok(d.expiration !== null);
  assert.equal(d.expiration.nearest.status, 'informativo');
  assert.ok(d.expiration.total >= 11);
});
test('expirationInfo não altera seleção de perguntas', () => {
  const S = require('../storage');
  const now = Date.now();
  const base = bankExp[0];
  const testBank = [
    {...base, id: 'test-sel-1', factId: 'test-sel-1', t: 'geral', level: 'facil', expiresAt: new Date(now + 5 * C.DAY).toISOString()},
    {...base, id: 'test-sel-2', factId: 'test-sel-2', t: 'geral', level: 'facil', expiresAt: new Date(now + 200 * C.DAY).toISOString()}
  ];
  const data = S.fresh();
  const cfg = {player: 'p1', mode: 'individual', level: 'facil', themes: ['geral']};
  const avail = C.available(testBank, data, cfg, now);
  assert.equal(avail.pool.length, 2);
  const sel = C.select(testBank, data, cfg, 2, now);
  assert.equal(sel.ok, true);
  assert.equal(sel.questions.length, 2);
});
test('perguntas vencidas continuam inelegíveis pela regra editorialEligible', () => {
  const now = Date.now();
  const expired = {...bankExp[0], id: 'test-expired', expiresAt: new Date(now - C.DAY).toISOString()};
  assert.equal(C.editorialEligible(expired, now), false);
  const info = C.expirationInfo([expired], now);
  assert.ok(info);
  assert.equal(info.nearest.status, 'vencida');
});
