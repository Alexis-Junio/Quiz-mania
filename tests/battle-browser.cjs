const assert=require('node:assert/strict'),path=require('node:path');
const S=require('../storage'),C=require('../core');
module.exports=async({check,setup,url,bank,root})=>{
 const seed=()=>{const d=S.fresh();S.createProfile(d,'Alexis',Date.now(),()=> 'a');S.createProfile(d,'Alexis',Date.now(),()=> 'b');return d;};
 async function begin(page,count=1,level='facil'){
  await page.locator('#battleMenu').click();await page.locator('#battlePlayer0').selectOption('p-a');await page.locator('#battlePlayer1').selectOption('p-b');await page.locator('#battleCount').fill(String(count));await page.locator('#battleLevel').selectOption(level);await page.locator('#battleStart').click();
 }
 async function playPair(page,a=true,b=true){
  const turns=[];let q;
  for(let i=0;i<2;i++){
   await page.locator('#battleReady').click();const text=await page.locator('#battleQuestion').textContent();q=bank.find(q=>q.q===text);assert.ok(q);
   const player=await page.locator('#battleTurn').textContent();turns.push(player);const correct=player.includes('Perfil 1')?a:b;
   await page.locator('#battleOptions button').nth(correct?q.a:(q.a+1)%4).click();
  }
  return {turns,q};
 }
 await check('batalha: DOM, ARIA, foco e aparência do segundo independem das quatro escolhas',async()=>{
  const snapshots=[];
  for(let choice=0;choice<4;choice++){
   const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed())},init:()=>{Math.random=()=>.1;}});
   try{
    await begin(page);await page.locator('#battleReady').click();await page.locator('#battleOptions button').nth(choice).click();
    assert.equal(await page.locator('#battleOptions').count(),0);assert.equal(await page.locator('#battleScore').count(),0);
    const handoff=await page.locator('#extras').innerHTML();assert.equal(await page.evaluate(()=>document.activeElement.id),'extraTitle');
    const pending=await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')).statistics.answers);assert.equal(pending.length,1);assert.equal(pending[0].correct,null);assert.ok(!Object.hasOwn(pending[0],'choice'));
    await page.locator('#battleReady').click();
    snapshots.push({handoff,html:await page.locator('#extras').innerHTML(),aria:await page.locator('#extras').ariaSnapshot(),focus:await page.evaluate(()=>document.activeElement.id),buttons:await page.locator('#battleOptions button').evaluateAll(nodes=>nodes.map(n=>({color:getComputedStyle(n).color,bg:getComputedStyle(n).backgroundColor,disabled:n.disabled,tabIndex:n.tabIndex,rect:{x:n.getBoundingClientRect().x,y:n.getBoundingClientRect().y,width:n.getBoundingClientRect().width,height:n.getBoundingClientRect().height}})))});
   }finally{await context.close();}
  }
  snapshots.forEach(s=>assert.deepEqual(s,snapshots[0]));
 });
 await check('batalha: placar, bônus de três, alternância, estatísticas e revanche',async()=>{
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed())}});
  try{
   await begin(page,3);const firsts=[];
   for(let i=0;i<3;i++){firsts.push((await playPair(page,true,false)).turns[0]);await page.locator('#battleNext').click();}
   assert.notEqual(firsts[0],firsts[1]);assert.equal(firsts[0],firsts[2]);
   assert.match(await page.locator('#battleFinalScore').textContent(),/40 pontos/);
   let data=await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')));assert.equal(data.games.length,2);assert.equal(data.games[0].score,40);assert.equal(data.games[1].score,0);assert.equal(data.statistics.answers.length,6);
   const seen=new Set(data.history.map(h=>h.id));await page.locator('#battleRematch').click();assert.equal(await page.locator('#battleCount').inputValue(),'3');assert.equal(await page.locator('#battlePlayer0').inputValue(),'p-a');
   await page.locator('#battleStart').click();await page.locator('#battleReady').click();const text=await page.locator('#battleQuestion').textContent(),q=bank.find(q=>q.q===text);assert.ok(!seen.has(q.id));
  }finally{await context.close();}
 });
 await check('batalha: empate e duas perguntas extras até vencedor',async()=>{
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed())}});
  try{await begin(page);await playPair(page,true,true);await page.locator('#battleNext').click();await playPair(page,false,false);await page.locator('#battleNext').click();await playPair(page,true,false);await page.locator('#battleNext').click();assert.match(await page.locator('#extraTitle').textContent(),/concluída/);const games=await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')).games);assert.equal(games[0].total,3);assert.equal(games[0].score,20);assert.equal(games[1].score,10);}finally{await context.close();}
 });
 await check('batalha: banco insuficiente no desempate, sem repetir nem inventar vencedor',async()=>{
  const d=seed(),questions=bank.filter(q=>q.level==='facil');questions.slice(1).forEach(q=>['p-a','p-b'].forEach(player=>C.presented(d,{player,mode:'battle',level:'facil',themes:S.THEMES},q)));
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(d)}});
  try{await begin(page);await playPair(page,true,true);await page.locator('#battleNext').click();assert.match(await page.locator('#extraTitle').textContent(),/banco esgotado/);assert.match(await page.locator('#extras').textContent(),/Nenhum vencedor/);await page.locator('#battleRematch').click();await page.locator('#battleStart').click();assert.match(await page.locator('#battleNotice').textContent(),/insuficiente/);}finally{await context.close();}
 });
 for(const point of ['handoff','first-answer','second-answer','reveal'])await check(`batalha: recarga em ${point} preserva bloqueios e interrompe com segurança`,async()=>{
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed())}});
  try{
   await begin(page);if(point!=='handoff'){await page.locator('#battleReady').click();if(point!=='first-answer'){await page.locator('#battleOptions button').first().click();await page.locator('#battleReady').click();if(point==='reveal')await page.locator('#battleOptions button').first().click();}}
   await page.reload();await page.waitForFunction(()=>!document.querySelector('#battleMenu').disabled);
   const d=await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')));assert.equal(d.history.length,point==='handoff'?0:2);assert.equal(d.statistics.sessions[0].status,'abandoned');assert.equal(d.games.length,0);assert.equal(await page.locator('#battleQuestion').count(),0);
   if(point==='second-answer'){assert.equal(d.statistics.answers[0].correct,null);await page.locator('#statsMenu').click();await page.locator('#statsProfile').selectOption('p-a');await page.locator('#statsProfile').selectOption(d.statistics.answers[0].player);assert.match(await page.locator('#extras').textContent(),/sem confirmação/);}
  }finally{await context.close();}
 });
 await check('batalha: abandono explícito requer confirmação e não libera perguntas',async()=>{
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed())}});
  try{await begin(page);await page.locator('#battleReady').click();page.once('dialog',d=>d.dismiss());await page.locator('#battleQuit').click();assert.equal(await page.locator('#battleOptions').count(),1);page.once('dialog',d=>d.accept());await page.locator('#battleQuit').click();assert.equal(await page.locator('#start').evaluate(n=>n.classList.contains('active')),true);const data=await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')));assert.equal(data.history.length,2);assert.equal(data.statistics.sessions[0].status,'abandoned');}finally{await context.close();}
 });
 await check('batalha: cria homônimos, recusa mesmo UUID e respeita assuntos',async()=>{
  const {page,context}=await setup(url);
  try{
   await page.locator('#battleMenu').click();await page.locator('#battleName0').fill('Alexis');await page.locator('#battleCreate0').click();await page.locator('#battleName1').fill('Alexis');await page.locator('#battleCreate1').click();
   const first=await page.locator('#battlePlayer0').inputValue(),second=await page.locator('#battlePlayer1').inputValue();assert.notEqual(first,second);
   await page.locator('#battlePlayer1').selectOption(first);await page.locator('#battleStart').click();assert.match(await page.locator('#battleNotice').textContent(),/UUIDs diferentes/);await page.locator('#battlePlayer1').selectOption(second);
   await page.locator('#battleTopics input').evaluateAll(nodes=>nodes.forEach(n=>n.checked=n.value==='games'));await page.locator('#battleCount').fill('1');await page.locator('#battleStart').click();await page.locator('#battleReady').click();const text=await page.locator('#battleQuestion').textContent();assert.equal(bank.find(q=>q.q===text).topic,'games');
  }finally{await context.close();}
 });
 await check('estatísticas: resposta individual abandonada aparece por UUID e por assunto',async()=>{
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed())}});
  try{await page.locator('#profile').selectOption('p-a');await page.locator('#startButton').click();const text=await page.locator('#question').textContent(),q=bank.find(q=>q.q===text);await page.locator('#options button').nth(q.a).click();page.once('dialog',d=>d.accept());await page.locator('#quit').click();await page.locator('#statsMenu').click();assert.match(await page.locator('#statsSummary').textContent(),/1 respostas · 1 acertos · 0 erros · 100.0%/);await page.locator('#statsProfile').selectOption('p-b');assert.match(await page.locator('#statsSummary').textContent(),/0 respostas/);}finally{await context.close();}
 });
 await check('batalha: expiração na troca protege a escolha pendente',async()=>{
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed())}});
  try{await begin(page);await page.locator('#battleReady').click();await page.locator('#battleOptions button').first().click();await page.evaluate(()=>{Date.now=()=>Date.UTC(2028,0,1);});await page.locator('#battleReady').click();assert.equal(await page.locator('#extraTitle').textContent(),'Pergunta vencida');const d=await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')));assert.equal(d.statistics.answers[0].correct,null);assert.equal(d.statistics.sessions[0].status,'abandoned');assert.equal(d.games.length,0);}finally{await context.close();}
 });
 await check('batalha: reinício explícito preserva estatísticas e bloqueios individuais',async()=>{
  const d=seed(),q=bank[0];for(const mode of ['battle','individual'])C.presented(d,{player:'p-a',mode,level:'facil',themes:S.THEMES},q);
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(d)}});
  try{await page.locator('#battleMenu').click();await page.locator('#battlePlayer0').selectOption('p-a');await page.locator('#battlePlayer1').selectOption('p-b');page.once('dialog',d=>d.dismiss());await page.locator('#battleReset').click();assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')).history.length),2);page.once('dialog',d=>d.accept());await page.locator('#battleReset').click();const history=await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')).history);assert.equal(history.length,1);assert.equal(history[0].mode,'individual');}finally{await context.close();}
 });
 for(const [name,width,height]of [['mobile',320,568],['desktop',1440,900]])await check(`batalha e estatísticas: layout e teclado em ${name}`,async()=>{
  const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed())},viewport:{width,height}});
  try{
   const shot=async suffix=>{assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));await page.screenshot({path:path.join(root,`test-results/stage5-${name}-${suffix}.png`),fullPage:true});};
   await begin(page);await shot('handoff');await page.locator('#battleReady').focus();await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>document.activeElement.id),'extraTitle');await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.className),'option');await shot('question');await page.keyboard.press('Enter');await page.locator('#battleReady').click();await page.locator('#battleOptions button').first().click();await shot('reveal');
   page.once('dialog',d=>d.accept());await page.locator('#battleQuit').click();await page.locator('#statsMenu').click();await shot('statistics');
  }finally{await context.close();}
 });
};
