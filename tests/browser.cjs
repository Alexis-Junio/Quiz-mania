// Set PLAYWRIGHT_MODULE to a local Playwright module path when it is not installed here.
const {chromium} = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const {pathToFileURL} = require('node:url');
const bank = require('../questions');
const root = path.resolve(__dirname,'..');
const S = require('../storage');
const C = require('../core');
const generalCount=bank.filter(q=>q.level==='facil'&&q.t==='geral').length;
const easyCount=bank.filter(q=>q.level==='facil').length;
const results=[];
let browser, server;
const errors=[];
async function check(name, work) {
  try {await work(); results.push({name,status:'PASS'}); console.log('PASS',name);}
  catch (e) {results.push({name,status:'FAIL',error:e.stack}); console.error('FAIL',name,e.message);}
}
async function setup(url, {data={},viewport={width:390,height:844},init}={}) {
  const context=await browser.newContext({viewport});
  await context.addInitScript(({data})=>{
    if(!sessionStorage.getItem('seeded')) {for(const [key,value] of Object.entries(data))localStorage.setItem(key,value);sessionStorage.setItem('seeded','1');}
  },{data});
  if(init)await context.addInitScript(init);
  const page=await context.newPage();
  page.on('pageerror',error=>errors.push(error.message));
  page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
  await page.goto(url);
  await page.waitForFunction(()=>document.querySelector('#storageNotice')?.textContent.indexOf('Aguardando acesso exclusivo')===-1);
  return {context,page};
}
async function chooseGeneral(page) {
  await page.locator('#clearThemes').click(); await page.locator('[data-theme="geral"]').click();
}
async function play(page,count,correct=true) {
  for(let i=0;i<count;i++) {
    const text=await page.locator('#question').textContent();
    const q=bank.find(q=>q.q===text); assert.ok(q);
    await page.locator('.option').nth(correct?q.a:(q.a+1)%4).click();
    await page.locator('#next').click();
  }
}
(async()=>{
  fs.mkdirSync(path.join(root,'test-results'),{recursive:true});
  server=http.createServer((req,res)=>{
    const pathname=new URL(req.url,'http://localhost').pathname;
    const target=path.resolve(root,'.'+(pathname==='/'?'/index.html':pathname));
    if(!target.startsWith(root+path.sep)||!fs.existsSync(target)||!fs.statSync(target).isFile()){res.writeHead(404);res.end();return;}
    res.setHeader('Content-Type',target.endsWith('.js')?'text/javascript':target.endsWith('.css')?'text/css':'text/html');
    res.end(fs.readFileSync(target));
  });
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  const url=`http://127.0.0.1:${server.address().port}/`;
  browser=await chromium.launch({executablePath:process.env.BROWSER_EXE || 'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
  await check('fluxo completo: dez acertos, recorde, histórico, redução e reinício confirmado',async()=>{
    // Seed prior presentations to leave exactly 14, preserving the shortage boundary on the expanded bank.
    const seed=S.fresh(),profile=S.createProfile(seed,'Ana');
    bank.filter(q=>q.level==='facil'&&q.t==='geral').slice(14).forEach(q=>C.presented(seed,{player:profile.id,mode:'individual',level:'facil',themes:['geral']},q));
    const seedCount=seed.history.length;
    const {page,context}=await setup(url,{data:{[S.KEY]:JSON.stringify(seed)}});
    try {
      await page.locator('#name').fill('Ana'); await chooseGeneral(page);
      assert.match(await page.locator('#cycleInfo').textContent(),/14 perguntas disponíveis/);
      await page.locator('#startButton').click();
      assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')).history.length),seedCount+1);
      await play(page,10);
      assert.equal(await page.locator('#finalScore').textContent(),'100');
      assert.equal(await page.locator('#hits').textContent(),'10/10');
      assert.equal(await page.locator('#bestResult').textContent(),'100');
      await page.locator('#again').click();
      assert.equal(await page.locator('#start').evaluate(el=>el.classList.contains('active')),true);
      assert.match(await page.locator('#shortageText').textContent(),/4 perguntas disponíveis/);
      await page.locator('#shortRound').click(); await play(page,4,false);
      assert.equal(await page.locator('#finalScore').textContent(),'0'); assert.equal(await page.locator('#hits').textContent(),'0/4');
      assert.equal(await page.locator('#bestResult').textContent(),'100');
      await page.locator('#home').click(); await page.locator('summary').click();
      page.once('dialog',d=>d.dismiss()); await page.locator('#resetHistory').click();
      assert.match(await page.locator('#cycleInfo').textContent(),/0 perguntas disponíveis/);
      page.once('dialog',d=>d.accept()); await page.locator('#resetHistory').click();
      assert.match(await page.locator('#cycleInfo').textContent(),new RegExp(`${generalCount} perguntas disponíveis`));
      await page.reload(); await page.waitForFunction(()=>!document.querySelector('#startButton').disabled);
      assert.equal(await page.locator('#name').inputValue(),'Ana');
      assert.match(await page.locator('#best').textContent(),/100 pontos/);
      assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')).games.length),2);
    }finally{await context.close();}
  });
  await check('resposta bloqueada: cliques repetidos não duplicam pontos',async()=>{
    const {page,context}=await setup(url);
    try {
      await page.locator('#name').fill('Teste');await page.locator('#startButton').click();
      const text=await page.locator('#question').textContent(), q=bank.find(q=>q.q===text);
      await page.locator('.option').nth(q.a).evaluate(button=>{button.onclick();button.onclick();});
      assert.equal(await page.locator('#liveScore').textContent(),'10 pontos');
      await page.locator('#next').click();assert.equal(await page.locator('#count').textContent(),'Pergunta 2 de 10');
    }finally{await context.close();}
  });
  for(const [level,total] of [['medio',200],['dificil',300]])await check(`pontuação e recorde no nível ${level}`,async()=>{
    const {page,context}=await setup(url);
    try{
      await page.locator('#name').fill('Pontos');await page.locator(`[data-level="${level}"]`).click();
      await page.locator('#startButton').click();await play(page,10);
      assert.equal(await page.locator('#finalScore').textContent(),String(total));
    }finally{await context.close();}
  });
  await check('abandono/reload: apenas pergunta exibida fica bloqueada; outro jogador separado',async()=>{
    const {page,context}=await setup(url);
    try{
      await page.locator('#name').fill('Ana');await chooseGeneral(page);await page.locator('#startButton').click();
      await page.reload();await page.waitForFunction(()=>!document.querySelector('#startButton').disabled);
      assert.match(await page.locator('#cycleInfo').textContent(),new RegExp(`${generalCount-1} perguntas disponíveis`));
      await page.locator('#newProfile').click();await page.locator('#name').fill('Bia');assert.match(await page.locator('#cycleInfo').textContent(),new RegExp(`${generalCount} perguntas disponíveis`));
      await page.locator('#clearThemes').click();await page.locator('#startButton').click();
      assert.match(await page.locator('#shortageText').textContent(),/0 perguntas disponíveis/);
      await page.locator('#allThemes').click();assert.match(await page.locator('#cycleInfo').textContent(),new RegExp(`${easyCount} perguntas disponíveis`));
    }finally{await context.close();}
  });
  await check('migração no navegador e escolha de prazo persistente',async()=>{
    const {page,context}=await setup(url,{data:{quizName:'Antigo',quizBest:'{"facil":80}',quizUsed:JSON.stringify({'facil|geral':[bank[0].id]})}});
    try{
      assert.equal(await page.locator('#name').inputValue(),'Antigo');await chooseGeneral(page);
      assert.match(await page.locator('#cycleInfo').textContent(),new RegExp(`${generalCount-1} perguntas disponíveis`));
      assert.match(await page.locator('#best').textContent(),/legado compartilhado: 80/);
      await page.locator('summary').click();await page.locator('#period').selectOption('60');
      await page.reload();await page.waitForFunction(()=>!document.querySelector('#startButton').disabled);
      assert.equal(await page.locator('#period').inputValue(),'60');
      assert.equal(await page.evaluate(()=>localStorage.getItem('quizBest')),'{"facil":80}');
    }finally{await context.close();}
  });
  await check('JSON corrompido: menu abre, original preservado, recuperação requer confirmação',async()=>{
    const {page,context}=await setup(url,{data:{[S.KEY]:'{'}});
    try{
      assert.equal(await page.locator('#startButton').isDisabled(),true);
      assert.equal(await page.evaluate(()=>localStorage.getItem('quizMania.v2')),'{');
      await page.locator('summary').click();page.once('dialog',d=>d.dismiss());await page.locator('#recoverData').click();
      assert.equal(await page.evaluate(()=>localStorage.getItem('quizMania.v2')),'{');
      page.once('dialog',d=>d.accept());await page.locator('#recoverData').click();
      assert.equal(await page.locator('#startButton').isDisabled(),false);
      assert.equal(await page.evaluate(()=>Object.keys(localStorage).some(k=>k.startsWith('quizMania.recovery.'))),true);
    }finally{await context.close();}
  });
  await check('quota indisponível bloqueia partida sem erro de console',async()=>{
    const {page,context}=await setup(url,{init:()=>{const original=Storage.prototype.setItem;Storage.prototype.setItem=function(...args){if(this===localStorage)throw new DOMException('Quota','QuotaExceededError');return original.apply(this,args);};}});
    try{assert.equal(await page.locator('#startButton').isDisabled(),true);assert.match(await page.locator('#storageNotice').textContent(),/salvar/);}
    finally{await context.close();}
  });
  await check('duas abas: a segunda aguarda e assume após fechar a primeira',async()=>{
    const {page,context}=await setup(url);
    try{
      const second=await context.newPage();await second.goto(url);
      assert.equal(await second.locator('#startButton').isDisabled(),true);
      assert.match(await second.locator('#storageNotice').textContent(),/Aguardando acesso exclusivo/);
      await page.close();await second.waitForFunction(()=>!document.querySelector('#startButton').disabled);
    }finally{await context.close();}
  });
  for(const [name,width,height] of [['small-portrait',320,568],['large-portrait',430,932],['landscape',844,390],['desktop',1440,900]])await check(`layout ${name}: menu, partida e resultado sem overflow`,async()=>{
    const {page,context}=await setup(url,{viewport:{width,height}});
    try{
      const noOverflow=async()=>assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
      await noOverflow();await page.screenshot({path:path.join(root,`test-results/${name}-menu.png`),fullPage:true});
      await page.locator('#name').fill('Jogador');await page.locator('#startButton').click();await noOverflow();
      await page.screenshot({path:path.join(root,`test-results/${name}-game.png`),fullPage:true});
      assert.ok(await page.locator('.option').first().evaluate(el=>el.getBoundingClientRect().height>=44));
      await play(page,10);await noOverflow();
      await page.screenshot({path:path.join(root,`test-results/${name}-result.png`),fullPage:true});
    }finally{await context.close();}
  });
  await check('teclado e movimento reduzido',async()=>{
    const {page,context}=await setup(url);
    try{
      await page.emulateMedia({reducedMotion:'reduce'});await page.locator('#name').fill('Teclado');
      await page.locator('#startButton').focus();await page.keyboard.press('Enter');
      assert.equal(await page.evaluate(()=>document.activeElement.id),'question');
      await page.keyboard.press('Tab');assert.equal(await page.evaluate(()=>document.activeElement.className),'option');
      await page.keyboard.press('Enter');assert.equal(await page.evaluate(()=>document.activeElement.id),'next');
      assert.equal(await page.locator('#bar').evaluate(el=>getComputedStyle(el).transitionDuration),'0s');
    }finally{await context.close();}
  });
  await check('abertura direta file:// preservada e rodada concluída',async()=>{
    const {page,context}=await setup(pathToFileURL(path.join(root,'index.html')).href);
    try{await page.locator('#name').fill('Arquivo');await page.locator('#startButton').click();await play(page,10);assert.equal(await page.locator('#hits').textContent(),'10/10');}
    finally{await context.close();}
  });
  await check('dois Alexis no navegador: selecionar, renomear e separar históricos',async()=>{
    const {page,context}=await setup(url);
    try{
      await page.locator('#name').fill('Alexis');await chooseGeneral(page);await page.locator('#startButton').click();
      await page.reload();await page.waitForFunction(()=>!document.querySelector('#startButton').disabled);
      const first=await page.locator('#profile').inputValue();
      await page.locator('#newProfile').click();await page.locator('#name').fill('Alexis');await page.locator('#startButton').click();
      const data=await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')));
      assert.equal(data.profiles.length,2);assert.equal(new Set(data.profiles.map(p=>p.id)).size,2);
      assert.equal(new Set(data.history.map(h=>h.player)).size,2);
      await page.reload();await page.waitForFunction(()=>!document.querySelector('#startButton').disabled);
      await page.locator('#profile').selectOption(first);await page.locator('#name').fill('Alexis antigo');
      assert.equal(await page.locator('#profile').inputValue(),first);
      assert.match(await page.locator('#cycleInfo').textContent(),new RegExp(`${generalCount-1} perguntas disponíveis`));
    }finally{await context.close();}
  });
  await check('explicação e fonte visíveis; expiração entre perguntas interrompe rodada',async()=>{
    const {page,context}=await setup(url);
    try{
      await page.locator('#name').fill('Validade');await page.locator('#startButton').click();
      const questionText=await page.locator('#question').textContent(),q=bank.find(q=>q.q===questionText);
      await page.locator('.option').nth(q.a).click();assert.match(await page.locator('#feedback').textContent(),/Verificada em/);
      assert.ok((await page.locator('#feedback').textContent()).includes(q.explanation));
      if(q.source)assert.equal(await page.locator('#feedback a').getAttribute('href'),q.source.url);
      await page.evaluate(()=>{Date.now=()=>Date.UTC(2028,0,1);});await page.locator('#next').click();
      assert.equal(await page.locator('#start').evaluate(el=>el.classList.contains('active')),true);
      assert.match(await page.locator('#cycleInfo').textContent(),/0 perguntas disponíveis/);
      assert.equal(await page.evaluate(()=>JSON.parse(localStorage.getItem('quizMania.v2')).history.length),1);
    }finally{await context.close();}
  });
  await check('Web Locks indisponível: orientação de HTTPS sem falsa espera por outra aba',async()=>{
    const {page,context}=await setup(url,{init:()=>Object.defineProperty(navigator,'locks',{value:undefined})});
    try{
      const notice=await page.locator('#storageNotice').textContent();
      assert.match(notice,/Web Locks está indisponível/);assert.match(notice,/HTTPS/);
      assert.doesNotMatch(notice,/Aguardando acesso exclusivo/);
      assert.equal(await page.locator('#startButton').isDisabled(),true);
      assert.equal(await page.locator('#battleMenu').isDisabled(),true);
    }finally{await context.close();}
  });
  await require('./battle-browser.cjs')({check,setup,url,bank,root});
  await check('nenhum erro de JavaScript ou recurso no console',async()=>assert.deepEqual(errors,[]));
})().catch(e=>{results.push({name:'runner',status:'FAIL',error:e.stack});console.error(e);}).finally(async()=>{
  if(browser)await browser.close();if(server)server.close();
  fs.writeFileSync(path.join(root,'test-results/browser-results.json'),JSON.stringify(results,null,2));
  if(results.some(r=>r.status==='FAIL'))process.exitCode=1;
});
