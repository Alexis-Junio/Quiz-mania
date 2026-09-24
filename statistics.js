(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.QuizStatistics=api;})(globalThis,function(){
 'use strict';
 const ensure=data=>data.statistics ||= {version:1,sessions:[],answers:[]};
 function start(data,config,players,count,now=Date.now(),id=globalThis.crypto.randomUUID()){
  const stats=ensure(data);
  if(stats.sessions.some(s=>s.id===id)||new Set(players).size!==players.length||!players.length)throw Error('Sessão inválida.');
  const session={id,players:[...players],mode:config.mode,level:config.level,themes:[...config.themes],topics:[...(config.topics||[])],count,at:now,status:'active'};
  stats.sessions.push(session);return session;
 }
 function answer(data,sessionId,player,q,correct,points,index,now=Date.now()){
  const stats=ensure(data),session=stats.sessions.find(s=>s.id===sessionId);
  if(!session||session.status!=='active'||!session.players.includes(player))throw Error('Sessão encerrada.');
  const existing=stats.answers.find(a=>a.sessionId===sessionId&&a.player===player&&a.index===index);
  if(existing){if(existing.correct!==null||correct===null)return false;existing.correct=correct;existing.points=points;return true;}
  stats.answers.push({sessionId,player,id:q.id,topic:q.topic,level:q.level,correct,points,index,at:now});return true;
 }
 function close(data,id,status='completed'){const s=ensure(data).sessions.find(s=>s.id===id);if(s&&s.status==='active')s.status=status;}
 function interrupt(data){for(const s of ensure(data).sessions)if(s.status==='active')s.status='abandoned';}
 function summary(data,player,mode='all'){
  const stats=data.statistics||{sessions:[],answers:[]};
  const sessions=stats.sessions.filter(s=>s.players.includes(player)&&(mode==='all'||s.mode===mode));
  const sessionIds=new Set(sessions.map(s=>s.id));
  const answers=stats.answers.filter(a=>a.player===player&&sessionIds.has(a.sessionId));
  const games=data.games.filter(g=>g.player===player&&(mode==='all'||g.mode===mode));
  const legacy=games.filter(g=>!g.sessionId);
  const result={games:games.length,abandoned:sessions.filter(s=>s.status==='abandoned').length,answered:answers.length+legacy.reduce((n,g)=>n+g.total,0),hits:legacy.reduce((n,g)=>n+g.hits,0),errors:legacy.reduce((n,g)=>n+g.total-g.hits,0),pending:0,bestStreak:0,byTopic:{},byLevel:{},records:{},history:[],legacyGames:legacy.length};
  const add=(map,key,correct)=>{const row=map[key]||={answered:0,hits:0,errors:0,pending:0};row.answered++;if(correct===null)row.pending++;else if(correct)row.hits++;else row.errors++;};
  for(const s of sessions){let streak=0;for(const a of answers.filter(a=>a.sessionId===s.id).sort((a,b)=>a.index-b.index)){
   if(a.correct===null)result.pending++;else if(a.correct)result.hits++;else result.errors++;
   streak=a.correct===true?streak+1:0;result.bestStreak=Math.max(result.bestStreak,streak);add(result.byTopic,a.topic,a.correct);add(result.byLevel,a.level,a.correct);
  }}
  for(const g of legacy){const row=result.byLevel[g.level]||={answered:0,hits:0,errors:0,pending:0};row.answered+=g.total;row.hits+=g.hits;row.errors+=g.total-g.hits;}
  for(const g of games){const key=g.mode+' / '+g.level;result.records[key]=Math.max(result.records[key]||0,g.score);}
  // Keep older record values that predate full game records; never mix battle bonuses into individual records.
  if(mode==='all'||mode==='individual')for(const [level,score] of Object.entries(data.best[player]||{})){const key='individual / '+level;result.records[key]=Math.max(result.records[key]||0,score);}
  const rate=(h,e)=>h+e?100*h/(h+e):null;
  result.accuracy=rate(result.hits,result.errors);
  for(const map of [result.byTopic,result.byLevel])for(const row of Object.values(map))row.accuracy=rate(row.hits,row.errors);
  for(const g of games){const prior=result.history.findLast(p=>p.mode===g.mode&&p.level===g.level&&p.total===g.total&&JSON.stringify([...p.themes].sort())===JSON.stringify([...g.themes].sort())&&JSON.stringify(p.topics||[])===JSON.stringify(g.topics||[]));result.history.push({...g,delta:prior?g.score-prior.score:null});}
  return result;
 }
 return {ensure,start,answer,close,interrupt,summary};
});
