const {test}=require('node:test'),assert=require('node:assert/strict');
const C=require('../core'),S=require('../storage'),T=require('../statistics'),B=require('../battle'),bank=require('../questions');
const previous=require('./fixtures/stage4-bank.cjs'),now=Date.UTC(2026,8,14,12);
const cfg={mode:'battle',level:'facil',themes:S.THEMES,topics:[]};
const question=i=>({...bank[0],id:`test-${i}`,factId:`test-${i}`});
function data(){const d=S.fresh();S.createProfile(d,'Alexis',now,()=> 'a');S.createProfile(d,'Alexis',now,()=> 'b');return d;}
const ids=['p-a','p-b'];
function pair(b,q,choices){b.begin(q);b.ready();let v=b.view();b.answer(choices[v.turn]);b.ready();v=b.view();return b.answer(choices[v.turn]);}
test('etapa 4 preservada integralmente e 88 novas perguntas válidas',()=>{
 assert.equal(bank.length,207);for(const q of previous)assert.deepEqual(bank.find(n=>n.id===q.id),q);
 assert.equal(new Set(bank.map(q=>q.id)).size,207);assert.equal(new Set(bank.map(q=>q.factId)).size,207);
 for(const q of bank)assert.ok(C.editorialEligible(q,now),q.id);
 for(const q of bank.slice(previous.length))assert.ok(q.source?.url&&q.explanation&&q.verifiedAt&&q.expiresAt);
});
test('todos os 20 assuntos têm dez utilizáveis e os três níveis',()=>{
 const topics=[...new Set(bank.map(q=>q.topic))];assert.equal(topics.length,20);
 for(const topic of topics){const items=bank.filter(q=>q.topic===topic&&C.editorialEligible(q,now));assert.ok(items.length>=10,topic);for(const level of S.LEVELS)assert.ok(items.some(q=>q.level===level),topic+level);}
});
test('batalha recusa mesmo UUID e aceita mesmo nome com UUID distinto',()=>{
 assert.throws(()=>B.create(['p-a','p-a'],cfg,1));assert.doesNotThrow(()=>B.create(ids,cfg,1));
 for(const count of [0,21,1.5,NaN])assert.throws(()=>B.create(ids,cfg,count));
});
test('primeira escolha não aparece no estado público e pontuação só muda após ambas',()=>{
 const views=[];for(let choice=0;choice<4;choice++){const b=B.create(ids,cfg,1,()=>0);b.begin(question(0));b.ready();const v=b.answer(choice);assert.deepEqual(v.scores,[0,0]);assert.equal(v.reveal,null);assert.equal(v.question,null);b.ready();views.push(b.view());}
 for(const v of views)assert.deepEqual(v,views[0]);
 assert.deepEqual(Object.keys(views[0].question).sort(),['o','q']);
});
for(const level of S.LEVELS)test(`pontuação individual na batalha: ${level}`,()=>{
 const b=B.create(ids,{...cfg,level},1,()=>0),q=question(0);const v=pair(b,q,[q.a,(q.a+1)%4]);assert.deepEqual(v.scores,[C.points[level],0]);assert.equal(b.next().winner,'p-a');
});
test('bônus nos acertos 3 e 6; erro rompe sequência',()=>{
 const b=B.create(ids,cfg,8,()=>0);
 for(let i=0;i<6;i++){const q=question(i),v=pair(b,q,[q.a,q.a]);assert.deepEqual(v.reveal.bonuses,(i+1)%3===0?[10,10]:[0,0]);b.next();}
 assert.deepEqual(b.view().scores,[80,80]);let q=question(6);pair(b,q,[(q.a+1)%4,q.a]);b.next();q=question(7);const v=pair(b,q,[q.a,q.a]);assert.equal(v.streaks[0],1);assert.equal(v.reveal.bonuses[0],0);
});
test('ordem sorteada inicialmente e alternada inclusive nos desempates',()=>{
 for(const random of [()=>0,()=>.9]){const b=B.create(ids,cfg,1,random);const first=b.view().first;for(let i=0;i<4;i++){const q=question(i);pair(b,q,[q.a,q.a]);b.next();assert.equal(b.view().first,(first+i+1)%2);assert.equal(b.view().phase,'next');}}
});
test('empate com múltiplas extras termina apenas com vencedor',()=>{
 const b=B.create(ids,cfg,1,()=>0);for(let i=0;i<3;i++){const q=question(i);pair(b,q,[q.a,q.a]);assert.equal(b.next().phase,'next');}
 const q=question(3);pair(b,q,[q.a,(q.a+1)%4]);assert.equal(b.next().winner,'p-a');
});
test('falta de banco no desempate produz empate declarado sem vencedor',()=>{
 const b=B.create(ids,cfg,1,()=>0),q=question(0);pair(b,q,[q.a,q.a]);b.next();assert.equal(b.exhaust().phase,'exhausted');assert.equal(b.view().winner,null);
});
test('revanche reutiliza configuração, mas não perguntas já apresentadas',()=>{
 const d=data(),b=B.create(ids,cfg,1,()=>0),q=bank[0];ids.forEach(player=>C.presented(d,{...cfg,player},q,now));
 const settings=b.settings(),rematch=B.create(settings.players,settings.config,settings.count,()=>.9);assert.deepEqual(rematch.settings(),settings);
 assert.ok(!B.candidates(bank,d,cfg,ids,[],now).some(n=>n.id===q.id));
});
test('batalha usa interseção de inéditas dos dois perfis, separada do individual',()=>{
 const d=data(),q=bank[0];C.presented(d,{...cfg,player:ids[0],mode:'individual'},q,now);
 assert.ok(B.candidates(bank,d,cfg,ids,[],now).some(n=>n.id===q.id));C.presented(d,{...cfg,player:ids[1]},q,now);
 assert.ok(!B.candidates(bank,d,cfg,ids,[],now).some(n=>n.id===q.id));assert.throws(()=>{const b=B.create(ids,cfg,2);pair(b,q,[q.a,q.a]);b.next();b.begin(q);});
});
test('candidatos respeitam assunto e validade sem liberar por troca de adversário',()=>{
 const d=data(),q=bank[0];C.presented(d,{...cfg,player:ids[0]},q,now);
 S.createProfile(d,'Terceiro',now,()=> 'c');assert.ok(!B.candidates(bank,d,cfg,[ids[0],'p-c'],[],now).some(n=>n.id===q.id));
 assert.ok(B.candidates(bank,d,{...cfg,topics:['games']},ids,[],now).every(q=>q.topic==='games'));
 assert.equal(B.candidates(bank,d,cfg,ids,[],Date.UTC(2028,0,1)).length,0);
});
test('abandono apaga escolhas da máquina; recarga marca sessões ativas abandonadas',()=>{
 const d=data(),s=T.start(d,cfg,ids,1,now,'session'),b=B.create(ids,cfg,1,()=>0),q=question(0);b.begin(q);b.ready();b.answer(q.a);T.answer(d,s.id,ids[0],q,null,0,0,now);
 assert.equal(b.abandon().reveal,null);const reloaded=JSON.parse(JSON.stringify(d));T.interrupt(reloaded);assert.equal(reloaded.statistics.sessions[0].status,'abandoned');assert.equal(reloaded.statistics.answers[0].correct,null);assert.ok(!JSON.stringify(reloaded).includes('choices'));
});
test('estatísticas por UUID, tema e nível, sequência e pendências sem inventar erros',()=>{
 const d=data(),s=T.start(d,cfg,ids,4,now,'stats');
 for(let i=0;i<3;i++)T.answer(d,s.id,ids[0],{...question(i),topic:i===2?'games':'biblia'},true,10,i,now+i);
 T.answer(d,s.id,ids[0],question(3),false,0,3,now+3);T.answer(d,s.id,ids[1],question(0),null,0,0,now);
 const a=T.summary(d,ids[0]),b=T.summary(d,ids[1]);assert.equal(a.answered,4);assert.equal(a.hits,3);assert.equal(a.errors,1);assert.equal(a.accuracy,75);assert.equal(a.bestStreak,3);assert.equal(a.byTopic.biblia.hits,2);assert.equal(a.byLevel.facil.answered,4);assert.equal(b.pending,1);assert.equal(b.errors,0);assert.equal(b.accuracy,null);assert.equal(S.valid(d),true);
});
test('estatísticas não duplicam envio e confirmam resposta pendente uma única vez',()=>{
 const d=data(),s=T.start(d,cfg,ids,1,now,'dedupe'),q=question(0);T.answer(d,s.id,ids[0],q,null,0,0,now);T.answer(d,s.id,ids[0],q,true,10,0,now);assert.equal(T.answer(d,s.id,ids[0],q,false,0,0,now),false);assert.equal(T.summary(d,ids[0]).hits,1);
});
test('totais legados preservados, sem inventar assuntos e sequência',()=>{
 const d=data();d.games.push({player:ids[0],mode:'individual',level:'medio',themes:['geral'],score:100,hits:5,total:10,at:now});d.best[ids[0]]={medio:120};const s=T.summary(d,ids[0]);assert.equal(s.games,1);assert.equal(s.answered,10);assert.equal(s.hits,5);assert.equal(s.errors,5);assert.equal(s.bestStreak,0);assert.deepEqual(s.byTopic,{});assert.equal(s.byLevel.medio.hits,5);assert.equal(s.records['individual / medio'],120);
});
test('comparação limita modo, nível, quantidade e assuntos; recordes por modo',()=>{
 const d=data();for(const [mode,score,total]of [['individual',20,10],['battle',40,10],['individual',30,10],['individual',50,5]])d.games.push({player:ids[0],mode,level:'facil',themes:['geral'],score,hits:2,total,at:now});
 const s=T.summary(d,ids[0]);assert.equal(s.history[2].delta,10);assert.equal(s.history[3].delta,null);assert.equal(s.records['battle / facil'],40);assert.equal(T.summary(d,ids[0],'battle').games,1);
});
test('extensão estatística arquiva v2 anterior antes da primeira gravação',()=>{
 const d=data(),raw=JSON.stringify(d),values={[S.KEY]:raw},mem={getItem:k=>values[k]??null,setItem:(k,v)=>values[k]=v};const store=S.open(mem,now);T.ensure(store.data);assert.equal(store.save(),true);assert.equal(values['quizMania.before-stage5'],raw);assert.equal(S.open(mem,now).blocked,false);
});
test('dados estatísticos inválidos bloqueiam armazenamento sem substituir',()=>{
 const d=data();T.ensure(d);d.statistics.answers.push({bad:true});assert.equal(S.valid(d),false);const raw=JSON.stringify(d),mem={getItem:k=>k===S.KEY?raw:null,setItem(){throw Error('não gravar');}};assert.equal(S.open(mem,now).blocked,true);
});
