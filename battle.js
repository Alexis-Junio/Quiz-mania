(function(root,factory){const api=factory(typeof module==='object'&&module.exports?require('./core'):root.QuizCore);if(typeof module==='object'&&module.exports)module.exports=api;else root.QuizBattle=api;})(globalThis,function(C){
 'use strict';
 const BONUS=10;
 function candidates(bank,data,config,players,seen=[] ,now=Date.now()){
  const sets=players.map(player=>new Set(C.available(bank,data,{...config,player,mode:'battle'},now).remaining.map(q=>q.id)));
  return bank.filter(q=>sets.every(s=>s.has(q.id))&&(!config.topics?.length||config.topics.includes(q.topic))&&!seen.includes(q.factId));
 }
 function create(players,config,count,random=Math.random){
  if(players.length!==2||players[0]===players[1]||players.some(p=>typeof p!=='string'||!p)||!Number.isInteger(count)||count<1||count>20)throw Error('Selecione dois perfis diferentes e de 1 a 20 perguntas.');
  let phase='next',q=null,choices=[null,null],index=0,starter=random()<.5?0:1,reveal=null;
  const scores=[0,0],streaks=[0,0],hits=[0,0],seen=[];
  function view(){return {phase,index,first:starter,turn:phase==='second-handoff'||phase==='second-answer'?1-starter:starter,players:[...players],scores:[...scores],streaks:[...streaks],hits:[...hits],count,extra:index>=count,question:phase.endsWith('answer')?{q:q.q,o:[...q.o]}:null,reveal:phase==='reveal'?structuredClone(reveal):null,winner:phase==='finished'&&scores[0]!==scores[1]?players[scores[0]>scores[1]?0:1]:null};}
  function begin(question){if(phase!=='next')throw Error('Transição inválida.');if(seen.includes(question.factId))throw Error('Pergunta repetida.');q=question;seen.push(q.factId);choices=[null,null];reveal=null;phase='first-handoff';return view();}
  function ready(){if(phase==='first-handoff')phase='first-answer';else if(phase==='second-handoff')phase='second-answer';else throw Error('Transição inválida.');return view();}
  function answer(choice){
   if(!['first-answer','second-answer'].includes(phase)||!Number.isInteger(choice)||choice<0||choice>3)throw Error('Resposta inválida.');
   const turn=phase==='first-answer'?starter:1-starter;choices[turn]=choice;
   if(phase==='first-answer'){phase='second-handoff';return view();}
   const earned=[0,0],correct=choices.map(c=>c===q.a),bonuses=[0,0];
   correct.forEach((ok,i)=>{streaks[i]=ok?streaks[i]+1:0;if(ok){hits[i]++;bonuses[i]=streaks[i]%3===0?BONUS:0;earned[i]=C.points[config.level]+bonuses[i];scores[i]+=earned[i];}});
   reveal={choices:[...choices],correct,earned,bonuses,answer:q.a,explanation:q.explanation,options:[...q.o],source:q.source};phase='reveal';return view();
  }
  function next(){if(phase!=='reveal')throw Error('Transição inválida.');index++;starter=1-starter;phase=index>=count&&scores[0]!==scores[1]?'finished':'next';return view();}
  function exhaust(){if(phase!=='next')throw Error('Transição inválida.');phase='exhausted';return view();}
  function abandon(){choices=[null,null];q=null;reveal=null;phase='abandoned';return view();}
  return {view,begin,ready,answer,next,exhaust,abandon,seen:()=>[...seen],settings:()=>({players:[...players],config:structuredClone(config),count})};
 }
 return {BONUS,candidates,create};
});
