const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const C=require('../core'), S=require('../storage');
const preservedIds=new Set(require('./fixtures/stage4-bank.cjs').map(q=>q.id));
const bank=require('../questions').filter(q=>preservedIds.has(q.id));
const audit=require('../editorial/review.json'), additions=require('../editorial/additions.json');
const now=Date.UTC(2026,8,14,12), cfg={player:'p-test',mode:'individual',level:'facil',themes:S.THEMES};
const memory=(initial={})=>{const data={...initial};return {data,getItem:k=>Object.hasOwn(data,k)?data[k]:null,setItem:(k,v)=>data[k]=v};};
test('102 originais possuem decisão editorial e IDs preservados ou aposentados',()=>{
 const old=require('./fixtures/stage3-bank.cjs');assert.equal(audit.length,102);
 for(const q of old){const entry=audit.find(e=>e.id===q.id);assert.ok(entry);assert.equal(bank.some(n=>n.id===q.id),entry.decision!=='rejected');}
 assert.equal(audit.filter(e=>e.decision==='rejected').length,3);
});
test('119 aprovadas: quatro alternativas distintas e um único índice correto',()=>{
 assert.equal(bank.length,119);
 for(const q of bank){assert.equal(C.editorialEligible(q,now),true,q.id);assert.equal(q.o.length,4);assert.equal(new Set(q.o.map(C.normalize)).size,4);assert.ok(Number.isInteger(q.a)&&q.a>=0&&q.a<4);}
});
test('IDs literais permanentes e únicos; nenhum novo ID reaproveita rejeitadas',()=>{
 assert.equal(new Set(bank.map(q=>q.id)).size,bank.length);
 assert.equal(new Set(bank.map(q=>q.factId)).size,bank.length);
 for(const q of additions){assert.match(q.id,/^qm-\d{4}$/);assert.ok(bank.some(b=>b.id===q.id));assert.ok(!audit.some(e=>e.id===q.id));}
});
test('explicações preenchidas em todas as perguntas',()=>{for(const q of bank)assert.ok(q.explanation.trim().length>=15,q.id);});
test('fonte obrigatória em atualidades e conteúdo não matemático',()=>{
 for(const q of bank.filter(q=>q.topic!=='matematica')){assert.ok(q.source.name);assert.equal(new URL(q.source.url).protocol,'https:');assert.equal(C.editorialEligible({...q,source:null},now),false);}
});
test('atuais têm período no enunciado e revisão em 90 dias',()=>{
 for(const q of bank.filter(q=>q.topic==='atualidades')){assert.ok(q.referencePeriod&&q.q.includes(q.referencePeriod));assert.ok(Date.parse(q.expiresAt)-Date.parse(q.verifiedAt)<=92*C.DAY);}
});
test('datas inválidas, impossíveis, ausentes ou futuras bloqueiam',()=>{
 for(const verifiedAt of [null,'','amanhã','2026-02-30T00:00:00.000Z','2026-13-01T00:00:00.000Z','2099-01-01T00:00:00.000Z'])assert.equal(C.editorialEligible({...bank[0],verifiedAt},now),false);
});
test('expiração exata exclui automaticamente de seleção e diagnóstico',()=>{
 const q={...bank[0],expiresAt:new Date(now).toISOString()};
 assert.equal(C.editorialEligible(q,now-1),true);assert.equal(C.editorialEligible(q,now),false);
 assert.equal(C.select([q],S.fresh(),cfg,1,now).available,0);
 assert.equal(C.diagnostics([q],S.fresh(),cfg,now).total,0);
});
test('revisão anterior à verificação e fonte insegura bloqueiam',()=>{
 assert.equal(C.editorialEligible({...bank[0],expiresAt:'2020-01-01T00:00:00.000Z'},now),false);
 assert.equal(C.editorialEligible({...bank[0],source:{name:'x',url:'javascript:alert(1)'}},now),false);
});
test('nova verificação explícita torna pergunta novamente elegível',()=>{
 const expired={...bank[0],expiresAt:new Date(now).toISOString()};assert.equal(C.editorialEligible(expired,now),false);
 assert.equal(C.editorialEligible({...expired,verifiedAt:new Date(now).toISOString(),expiresAt:new Date(now+C.DAY).toISOString()},now),true);
});
test('rejeitadas, distratores repetidos e índice inválido não entram',()=>{
 for(const q of [{...bank[0],status:'rejected'},{...bank[0],o:['A','a','B','C']},{...bank[0],a:4},{...bank[0],explanation:''}])assert.equal(C.editorialEligible(q,now),false);
});
test('vinte temas cobertos; ampliação de cinco por lote e níveis distribuídos',()=>{
 assert.equal(new Set(bank.map(q=>q.topic)).size,20);assert.equal(new Set(additions.map(q=>q.topic)).size,20);
 for(let i=1;i<=4;i++){const batch=JSON.parse(fs.readFileSync(`editorial/batch-${i}.json`));assert.equal(batch.ids.length,5);assert.equal(batch.status,'approved');}
 const counts=S.LEVELS.map(level=>bank.filter(q=>q.level===level).length);assert.ok(Math.max(...counts)/Math.min(...counts)<1.5);
 const newCounts=S.LEVELS.map(level=>additions.filter(q=>q.level===level).length);assert.ok(Math.max(...newCounts)-Math.min(...newCounts)<=2);
 const themes=[...new Set(bank.map(q=>q.topic))].map(t=>bank.filter(q=>q.topic===t).length);assert.ok(Math.max(...themes)/bank.length<0.15);
});
test('dois Alexis possuem IDs, históricos e recordes distintos',()=>{
 const data=S.fresh(),a=S.createProfile(data,'Alexis'),b=S.createProfile(data,'Alexis');assert.notEqual(a.id,b.id);
 C.presented(data,{...cfg,player:a.id},bank[0],now);C.recordGame(data,{...cfg,player:a.id},10,1,1,now);
 assert.equal(C.available(bank,data,{...cfg,player:a.id},now).blocked,1);assert.equal(C.available(bank,data,{...cfg,player:b.id},now).blocked,0);
 assert.equal(data.best[b.id],undefined);assert.equal(S.valid(data),true);
});
test('renomear preserva identidade e colisão explícita de ID é recusada',()=>{
 const data=S.fresh(),p=S.createProfile(data,'Ana',now,()=> 'fixed');p.name='Bia';assert.equal(p.id,'p-fixed');
 assert.throws(()=>S.createProfile(data,'Outra',now,()=> 'fixed'));assert.equal(data.profiles.length,1);
});
test('migração v1 preserva original, jogador ativo, histórico e recordes',()=>{
 const old={version:1,preferences:{name:'Alexis',level:'facil',themes:['geral'],period:30},best:{alexis:{facil:100},bia:{medio:20}},history:[{...cfg,player:'alexis',id:bank[0].id,factId:bank[0].factId,at:now}],games:[{...cfg,player:'bia',score:20,hits:1,total:1,at:now}],legacy:{best:{facil:90},used:{'facil|geral':['old-id']},migratedAt:now-1000}};
 const raw=JSON.stringify(old),mem=memory({[S.PREVIOUS_KEY]:raw}),store=S.open(mem,now);
 assert.equal(store.blocked,false);assert.equal(mem.getItem(S.PREVIOUS_KEY),raw);assert.equal(store.data.version,2);
 const alexis=store.data.profiles.find(p=>p.name==='Alexis'),bia=store.data.profiles.find(p=>p.name==='bia');
 assert.equal(store.data.activeProfileId,alexis.id);assert.equal(store.data.history[0].player,alexis.id);assert.equal(store.data.games[0].player,bia.id);
 assert.equal(store.data.best[alexis.id].facil,100);assert.deepEqual(store.data.legacy,old.legacy);
 const newer=S.createProfile(store.data,'Alexis');assert.notEqual(newer.id,alexis.id);assert.equal(store.save(),true);
 assert.deepEqual(S.open(mem,now).data,store.data);
});
test('migração v1 inválida ou sem espaço não sobrescreve originais',()=>{
 const mem=memory({[S.PREVIOUS_KEY]:'{'});assert.equal(S.open(mem,now).blocked,true);assert.equal(mem.getItem(S.PREVIOUS_KEY),'{');assert.equal(mem.getItem(S.KEY),null);
 const old={...S.fresh(),version:1};delete old.profiles;delete old.activeProfileId;
 const raw=JSON.stringify(old),full=memory({[S.PREVIOUS_KEY]:raw});full.setItem=()=>{throw Error('quota');};assert.equal(S.open(full,now).blocked,true);assert.equal(full.getItem(S.PREVIOUS_KEY),raw);
});
test('versão 2 recusa perfis duplicados e referências órfãs',()=>{
 const d=S.fresh(),p=S.createProfile(d,'Alexis');d.profiles.push({...p});assert.equal(S.valid(d),false);d.profiles.pop();
 d.history.push({...cfg,id:'x',factId:'x',at:now});assert.equal(S.valid(d),false);
});
