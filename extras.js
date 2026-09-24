/* Separate UI for battle and statistics. Unrevealed choices exist only inside QuizBattle's closure. */
globalThis.QuizExtras={mount(api){
 'use strict';
 const C=QuizCore,S=QuizStorage,T=QuizStatistics,B=QuizBattle,bank=api.bank;
 const $=id=>document.getElementById(id),el=(tag,text,attrs={})=>{const n=document.createElement(tag);if(text!==null)n.textContent=text;for(const [k,v] of Object.entries(attrs))n.setAttribute(k,v);return n;};
 const root=el('section',null,{id:'extras',class:'screen'});document.querySelector('main').append(root);
 const topicLabels={'geral':'Conhecimentos gerais','historia':'História','geografia':'Geografia','ciencia':'Ciência','tecnologia':'Tecnologia','internet':'Internet','futebol':'Futebol','esportes':'Outros esportes','biblia':'Bíblia','filmes':'Filmes','series':'Séries','animacoes':'Animações','games':'Games','musica':'Música','artistas':'Artistas','cultura-brasileira':'Cultura brasileira','atualidades':'Atualidades','curiosidades':'Curiosidades','matematica':'Matemática','portugues':'Língua portuguesa'};
 const levels={facil:'Fácil',medio:'Médio',dificil:'Difícil'};
 let engine=null,session=null,current=null,lastSettings=null,presented=false;
 function button(parent,text,id,fn){const b=el('button',text,{type:'button',class:'btn secondary',id});b.onclick=fn;parent.append(b);return b;}
 function page(title){
  // Destroy old buttons and their focus/ARIA states before rendering the next handoff or answer screen.
  root.replaceChildren();document.querySelectorAll('.screen').forEach(s=>s.classList.toggle('active',s===root));
  const card=el('article',null,{class:'card'}),heading=el('h2',title,{tabindex:'-1',id:'extraTitle'});card.append(heading);root.append(card);heading.focus();return card;
 }
 function select(parent,label,id,items,value){parent.append(el('label',label,{for:id}));const s=el('select',null,{id});items.forEach(([v,t])=>s.append(el('option',t,{value:v})));if(value!==undefined)s.value=value;parent.append(s);return s;}
 const playerLabel=id=>{const data=api.getStore().data,i=data.profiles.findIndex(p=>p.id===id);return i<0?'Perfil indisponível':`${data.profiles[i].name} · Perfil ${i+1}`;};
 function save(){if(!api.getStore().save()){engine?.abandon();api.home();return false;}return true;}
 function setup(settings){
  if(!api.allowed())return;api.reopen();engine=null;const card=page('Modo Batalha');
  card.append(el('p','Duas pessoas, uma pergunta. Cada escolha fica oculta até os dois responderem. Bônus de 10 pontos a cada três acertos consecutivos. Empates recebem perguntas extras enquanto houver questões inéditas para ambos.'));
  const data=api.getStore().data,items=[['','Selecione um perfil'],...data.profiles.map(p=>[p.id,playerLabel(p.id)])];
  for(let i=0;i<2;i++){
   select(card,`Jogador ${i+1}`,`battlePlayer${i}`,items,settings?.players[i]||'');
   card.append(el('label',`Criar perfil para jogador ${i+1}`,{for:`battleName${i}`}));const input=el('input',null,{id:`battleName${i}`,maxlength:'18',placeholder:'Nome do novo jogador'});card.append(input);
   button(card,'Criar e selecionar',`battleCreate${i}`,()=>{
    if(!api.allowed())return;if(!input.value.trim()){input.focus();return;}
    const selected=[$('battlePlayer0').value,$('battlePlayer1').value],keep={players:selected,config:readConfig(),count:Number($('battleCount').value)};
    const previous=data.activeProfileId,name=data.preferences.name;
    try{selected[i]=S.createProfile(data,input.value).id;data.activeProfileId=previous;data.preferences.name=name;if(save())setup(keep);}catch{notice.textContent='Não foi possível criar o perfil.';}
   });
  }
  select(card,'Dificuldade','battleLevel',Object.entries(levels),settings?.config.level||'facil');
  card.append(el('label','Perguntas na fase principal (1 a 20)',{for:'battleCount'}));card.append(el('input',null,{id:'battleCount',type:'number',min:'1',max:'20',value:String(settings?.count||10)}));
  const group=el('fieldset',null,{id:'battleTopics'});group.append(el('legend','Assuntos'));card.append(group);
  Object.entries(topicLabels).forEach(([value,text])=>{const label=el('label',null,{class:'topic-choice'}),input=el('input',null,{type:'checkbox',value});input.checked=!settings||settings.config.topics.includes(value);label.append(input,document.createTextNode(text));group.append(label);});
  const notice=el('p','',{id:'battleNotice',role:'status'});card.append(notice);
  function readConfig(){return {mode:'battle',level:$('battleLevel').value,themes:[...S.THEMES],topics:[...group.querySelectorAll('input:checked')].map(n=>n.value).sort()};}
  function availability(){const players=[$('battlePlayer0').value,$('battlePlayer1').value],cfg=readConfig();notice.textContent=players.every(Boolean)&&players[0]!==players[1]&&cfg.topics.length?`${B.candidates(bank,data,cfg,players).length} perguntas inéditas disponíveis para ambos.`:'Selecione dois perfis diferentes e ao menos um assunto.';}
  card.addEventListener('change',availability);availability();
  button(card,'Reiniciar bloqueios de batalha destes perfis e nível','battleReset',()=>{
   const players=[$('battlePlayer0').value,$('battlePlayer1').value];if(!api.allowed()||!players.every(Boolean)||players[0]===players[1])return;
   if(confirm('Liberar as perguntas vistas em batalha por estes dois perfis neste nível? Isso vale para todos os assuntos da batalha. Estatísticas e partidas serão preservadas.')){players.forEach(player=>C.resetHistory(data,{...readConfig(),player}));if(save())availability();}
  });
  button(card,'Sortear primeiro jogador e começar','battleStart',()=>{
   if(!api.allowed())return;
   const cfg=readConfig(),players=[$('battlePlayer0').value,$('battlePlayer1').value],count=Number($('battleCount').value);
   if(!cfg.topics.length||!players.every(Boolean)||players[0]===players[1]){notice.textContent='Escolha dois UUIDs diferentes e ao menos um assunto.';return;}
   try{engine=B.create(players,cfg,count);}catch(e){notice.textContent=e.message;return;}
   if(B.candidates(bank,data,cfg,players).length<count){notice.textContent='Banco insuficiente para a fase principal. Reduza a quantidade ou amplie os assuntos.';engine=null;return;}
   lastSettings={players,config:cfg,count};session=T.start(data,cfg,players,count).id;if(save())nextQuestion();
  });
  button(card,'Voltar ao menu','battleBack',api.home);
 }
 function nextQuestion(){
  if(!api.allowed())return;const store=api.reopen(),settings=engine.settings(),pool=B.candidates(bank,store.data,settings.config,settings.players,engine.seen());
  if(!pool.length){engine.exhaust();finishBattle('exhausted');return;}
  current=C.shuffle(pool)[0];
  presented=false;engine.begin(current);handoff();
 }
 function quit(){if(confirm('Abandonar a batalha? Perguntas apresentadas continuam bloqueadas. Escolhas ainda não reveladas serão descartadas.')){engine.abandon();T.close(api.getStore().data,session,'abandoned');if(save())api.home();}}
 function handoff(){
  const v=engine.view(),card=page('Entregue o aparelho');
  card.append(el('p',`Vez de ${playerLabel(v.players[v.turn])}.`,{id:'handoffPlayer'}));
  card.append(el('p','O outro jogador deve afastar o olhar. Toque abaixo quando estiver pronto.'));
  button(card,'Estou pronto','battleReady',()=>{
   if(!C.editorialEligible(current)){engine.abandon();T.close(api.getStore().data,session,'abandoned');save();const stop=page('Pergunta vencida');stop.append(el('p','A revisão venceu durante a troca. A batalha foi interrompida sem revelar a escolha pendente.'));button(stop,'Voltar ao menu','battleExpiredBack',api.home);return;}
   if(!presented){
    // Reserve the shared question for both immediately before its first actual display.
    const settings=engine.settings();settings.players.forEach(player=>C.presented(api.getStore().data,{...settings.config,player},current));
    if(!save())return;presented=true;
   }
   engine.ready();answerScreen();
  });
  button(card,'Abandonar batalha','battleQuit',quit);
 }
 function answerScreen(){
  const v=engine.view(),card=page(v.extra?`Desempate ${v.index-v.count+1}`:`Pergunta ${v.index+1} de ${v.count}`);
  card.append(el('p',playerLabel(v.players[v.turn]),{id:'battleTurn'}));
  card.append(el('h3',v.question.q,{id:'battleQuestion'}));
  const options=el('div',null,{class:'options',id:'battleOptions'});card.append(options);
  v.question.o.forEach((text,index)=>{
   const b=el('button',`${String.fromCharCode(65+index)}. ${text}`,{type:'button',class:'option'});options.append(b);
   b.onclick=()=>{
    if(!api.allowed()||!engine.view().phase.endsWith('answer'))return;
    // Record only that an answer was submitted. No choice or correctness is persisted before both answer.
    T.answer(api.getStore().data,session,v.players[v.turn],current,null,0,v.index);
    const after=engine.answer(index);
    if(after.phase==='reveal')after.players.forEach((player,i)=>T.answer(api.getStore().data,session,player,current,after.reveal.correct[i],after.reveal.earned[i],v.index));
    if(!save())return;after.phase==='reveal'?revealScreen():handoff();
   };
  });
  button(card,'Abandonar batalha','battleQuit',quit);
 }
 function revealScreen(){
  const v=engine.view(),r=v.reveal,card=page('Respostas reveladas');
  card.append(el('h3',current.q));
  r.choices.forEach((choice,i)=>card.append(el('p',`${playerLabel(v.players[i])}: ${r.options[choice]} — ${r.correct[i]?'acertou':'errou'}; +${r.earned[i]} pontos${r.bonuses[i]?` (bônus +${r.bonuses[i]})`:''}.`)));
  card.append(el('p',`Resposta correta: ${r.options[r.answer]}`),el('p',r.explanation));
  if(r.source)card.append(el('a',r.source.name,{href:r.source.url,target:'_blank',rel:'noopener noreferrer'}));
  card.append(el('p',`Verificada em ${current.verifiedAt.slice(0,10)} · revisão até ${current.expiresAt.slice(0,10)}.`,{class:'small'}));
  card.append(el('p',`Placar: ${v.scores[0]} × ${v.scores[1]}`,{id:'battleScore',role:'status'}));
  button(card,v.index+1>=v.count&&v.scores[0]===v.scores[1]?'Empate: jogar pergunta extra':'Continuar','battleNext',()=>{const next=engine.next();next.phase==='finished'?finishBattle('completed'):nextQuestion();});
  button(card,'Abandonar batalha','battleQuit',quit);
 }
 function finishBattle(status){
  const v=engine.view(),data=api.getStore().data,settings=engine.settings();T.close(data,session,status);
  if(v.index>0&&!data.games.some(g=>g.sessionId===session))v.players.forEach((player,i)=>data.games.push({player,mode:'battle',level:settings.config.level,themes:settings.config.themes,topics:settings.config.topics,score:v.scores[i],hits:v.hits[i],total:v.index,at:Date.now(),sessionId:session,outcome:status}));
  if(!save())return;
  const card=page(status==='exhausted'?'Empate — banco esgotado':'Batalha concluída');
  card.append(el('p',status==='exhausted'?'Não há outra pergunta inédita e válida para os dois jogadores. Nenhum vencedor foi atribuído.':`Vencedor: ${playerLabel(v.winner)}.`));
  card.append(el('p',`${playerLabel(v.players[0])}: ${v.scores[0]} pontos. ${playerLabel(v.players[1])}: ${v.scores[1]} pontos.`,{id:'battleFinalScore'}));
  button(card,'Revanche com estas configurações','battleRematch',()=>setup(lastSettings));button(card,'Voltar ao menu','battleHome',api.home);
 }
 function stats(mode='all',chosen){
  if(!api.allowed())return;api.reopen();const data=api.getStore().data,player=chosen||data.activeProfileId,card=page('Estatísticas individuais');
  const chooser=select(card,'Perfil','statsProfile',[['','Selecione'],...data.profiles.map(p=>[p.id,playerLabel(p.id)])],player||'');chooser.onchange=()=>stats(mode,chooser.value);
  const modeChooser=select(card,'Modo','statsMode',[['all','Todos'],['individual','Individual'],['battle','Batalha']],mode);modeChooser.onchange=()=>stats(modeChooser.value,player);
  if(player){
   const s=T.summary(data,player,mode),rate=v=>v===null?'—':`${v.toFixed(1)}%`;
   card.append(el('p',`${s.games} partidas concluídas · ${s.abandoned} abandonadas · ${s.answered} respostas · ${s.hits} acertos · ${s.errors} erros · ${rate(s.accuracy)} de acerto · melhor sequência: ${s.bestStreak}.`,{id:'statsSummary'}));
   if(s.pending)card.append(el('p',`${s.pending} respostas de batalhas interrompidas ficaram sem confirmação conjunta. Contam como respondidas, mas não como acerto/erro ou no percentual, para preservar a escolha oculta.`));
   if(s.legacyGames)card.append(el('p',`${s.legacyGames} partidas anteriores às estatísticas detalhadas: totais e nível preservados; tema e sequência antigos não são conhecidos.`));
   function table(title,rows){card.append(el('h3',title));const wrap=el('div',null,{class:'table-scroll',tabindex:'0',role:'region','aria-label':title+'; role para consultar todas as colunas'}),table=el('table'),head=el('tr');['Categoria','Respondidas','Acertos','Erros','Acerto'].forEach(t=>head.append(el('th',t,{scope:'col'})));const thead=el('thead');thead.append(head);table.append(thead);const body=el('tbody');for(const [key,row] of Object.entries(rows)){const tr=el('tr');[topicLabels[key]||levels[key]||key,row.answered,row.hits,row.errors,rate(row.accuracy)].forEach(t=>tr.append(el('td',String(t))));body.append(tr);}table.append(body);wrap.append(table);card.append(wrap);}
   table('Desempenho por assunto',s.byTopic);table('Desempenho por dificuldade',s.byLevel);
   card.append(el('h3','Recordes pessoais'));for(const [key,score] of Object.entries(s.records))card.append(el('p',`${key}: ${score} pontos.`));
   card.append(el('h3','Histórico e comparação'));card.append(el('p','Comparação com a partida anterior do mesmo modo, nível, assuntos e número de perguntas.'));
   const list=el('ol',null,{id:'statsHistory'});[...s.history].reverse().forEach(g=>list.append(el('li',`${new Date(g.at).toLocaleString('pt-BR')} · ${g.mode} / ${levels[g.level]} · ${g.hits}/${g.total} · ${g.score} pontos · ${g.delta===null?'sem partida comparável':`${g.delta>=0?'+':''}${g.delta} pontos sobre a anterior`}`)));card.append(list);
  }else card.append(el('p','Crie ou selecione um perfil para ver suas estatísticas.'));
  button(card,'Voltar ao menu','statsBack',api.home);
 }
 $('battleMenu').onclick=()=>setup();$('statsMenu').onclick=()=>stats();
}};
