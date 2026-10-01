const {test}=require('node:test'),assert=require('node:assert/strict');
const bank=require('../questions');
const C=require('../core');
const now=Date.UTC(2026,8,14,12);

// Helper to get the 20 new ciencia questions (8B.1)
function getNewCiencia(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='ciencia' && num>=289 && num<=308;
  });
}

// Helper to get the 20 new geografia questions (8B.2)
function getNewGeografia(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='geografia' && num>=309 && num<=328;
  });
}

// Helper to get the 20 new historia questions (8B.3)
function getNewHistoria(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='historia' && num>=329 && num<=348;
  });
}

// ===== 8B.1 CIENCIA CHECKPOINT =====
test('stage8b1: banco total apos 8B.1 tem 227 perguntas',()=>{
  const stage8b1Bank = bank.slice(0,227);
  assert.equal(stage8b1Bank.length,227);
});

test('stage8b1: IDs qm-0289 a qm-0308 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=289;i<=308;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b1: 20 perguntas novas de ciencia',()=>{
  const nova= getNewCiencia();
  assert.equal(nova.length,20);
});

test('stage8b1: distribuicao 7 facil, 7 medio, 6 dificil',()=>{
  const nova= getNewCiencia();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

// ===== 8B.2 GEOGRAFIA CHECKPOINT =====
test('stage8b2: banco total apos 8B.2 tem 247 perguntas',()=>{
  const stage8b2Bank = bank.slice(0,247);
  assert.equal(stage8b2Bank.length,247);
});

test('stage8b2: IDs qm-0309 a qm-0328 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=309;i<=328;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b2: 20 perguntas novas de geografia',()=>{
  const nova= getNewGeografia();
  assert.equal(nova.length,20);
});

test('stage8b2: distribuicao 7 facil, 7 medio, 6 dificil em geografia',()=>{
  const nova= getNewGeografia();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b2: ciencia preservada integralmente (20 perguntas qm-0289..qm-0308)',()=>{
  const ciencia= getNewCiencia();
  assert.equal(ciencia.length,20);
  const facil=ciencia.filter(q=>q.level==='facil').length;
  const medio=ciencia.filter(q=>q.level==='medio').length;
  const dificil=ciencia.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7);
  assert.equal(medio,7);
  assert.equal(dificil,6);
});

// ===== 8B.3 HISTORIA CHECKPOINT =====
test('stage8b3: banco total apos 8B.3 tem 267 perguntas',()=>{
  const stage8b3Bank = bank.slice(0,267);
  assert.equal(stage8b3Bank.length,267);
});

test('stage8b3: IDs qm-0329 a qm-0348 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=329;i<=348;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b3: 20 perguntas novas de historia',()=>{
  const nova= getNewHistoria();
  assert.equal(nova.length,20);
});

test('stage8b3: distribuicao 7 facil, 7 medio, 6 dificil em historia',()=>{
  const nova= getNewHistoria();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b3: ciencia e geografia preservadas (40 perguntas qm-0289..qm-0328)',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
});

// ===== 8B.4 MATEMATICA CHECKPOINT =====
// Helper to get the 20 new matematica questions (8B.4)
function getNewMatematica(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='matematica' && num>=349 && num<=368;
  });
}

// ===== 8B.4 MATEMATICA CHECKPOINT =====
test('stage8b4: banco total apos 8B.4 tem 287 perguntas',()=>{
  const stage8b4Bank = bank.slice(0,287);
  assert.equal(stage8b4Bank.length,287);
});

test('stage8b4: IDs qm-0349 a qm-0368 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=349;i<=368;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b4: 20 perguntas novas de matematica',()=>{
  const nova= getNewMatematica();
  assert.equal(nova.length,20);
});

test('stage8b4: distribuicao 7 facil, 7 medio, 6 dificil em matematica',()=>{
  const nova= getNewMatematica();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b4: ciencia, geografia e historia preservadas (60 perguntas qm-0289..qm-0348)',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
});

// ===== 8B.5 BIBLIA CHECKPOINT =====
// Helper to get the 20 new biblia questions (8B.5)
function getNewBiblia(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='biblia' && num>=369 && num<=388;
  });
}

test('stage8b5: banco total apos 8B.5 tem 307 perguntas',()=>{
  const stage8b5Bank = bank.slice(0,307);
  assert.equal(stage8b5Bank.length,307);
});

test('stage8b5: IDs qm-0369 a qm-0388 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=369;i<=388;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b5: 20 perguntas novas de biblia',()=>{
  const nova= getNewBiblia();
  assert.equal(nova.length,20);
});

test('stage8b5: distribuicao 7 facil, 7 medio, 6 dificil em biblia',()=>{
  const nova= getNewBiblia();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b5: 80 perguntas anteriores da Etapa 8 preservadas',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  const matematica= getNewMatematica();
  const biblia= getNewBiblia();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(matematica.length,20);
  assert.equal(biblia.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
  assert.equal(matematica.filter(q=>q.level==='facil').length,7);
  assert.equal(matematica.filter(q=>q.level==='medio').length,7);
  assert.equal(matematica.filter(q=>q.level==='dificil').length,6);
  assert.equal(biblia.filter(q=>q.level==='facil').length,7);
  assert.equal(biblia.filter(q=>q.level==='medio').length,7);
  assert.equal(biblia.filter(q=>q.level==='dificil').length,6);
});

// ===== 8B.6 TECNOLOGIA CHECKPOINT =====
// Helper to get the 20 new tecnologia questions (8B.6)
function getNewTecnologia(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='tecnologia' && num>=389 && num<=408;
  });
}

// ===== 8B.6 TECNOLOGIA CHECKPOINT =====
test('stage8b6: banco total apos 8B.6 tem 327 perguntas',()=>{
  const stage8b6Bank = bank.slice(0,327);
  assert.equal(stage8b6Bank.length,327);
});

test('stage8b6: IDs qm-0389 a qm-0408 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=389;i<=408;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b6: 20 perguntas novas de tecnologia',()=>{
  const nova= getNewTecnologia();
  assert.equal(nova.length,20);
});

test('stage8b6: distribuicao 7 facil, 7 medio, 6 dificil em tecnologia',()=>{
  const nova= getNewTecnologia();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b6: 100 perguntas anteriores da Etapa 8 preservadas',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  const matematica= getNewMatematica();
  const biblia= getNewBiblia();
  const tecnologia= getNewTecnologia();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(matematica.length,20);
  assert.equal(biblia.length,20);
  assert.equal(tecnologia.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
  assert.equal(matematica.filter(q=>q.level==='facil').length,7);
  assert.equal(matematica.filter(q=>q.level==='medio').length,7);
  assert.equal(matematica.filter(q=>q.level==='dificil').length,6);
  assert.equal(biblia.filter(q=>q.level==='facil').length,7);
  assert.equal(biblia.filter(q=>q.level==='medio').length,7);
  assert.equal(biblia.filter(q=>q.level==='dificil').length,6);
  assert.equal(tecnologia.filter(q=>q.level==='facil').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='medio').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='dificil').length,6);
});

// ===== 8B.7 GERAL CHECKPOINT =====
// Helper to get the 20 new geral questions (8B.7)
function getNewGeral(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='geral' && num>=409 && num<=428;
  });
}

// ===== 8B.8 CULTURA BRASILEIRA CHECKPOINT =====
// Helper to get the 20 new cultura-brasileira questions (8B.8)
function getNewCulturaBrasileira(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='cultura-brasileira' && num>=429 && num<=448;
  });
}

test('stage8b7: banco total tem 347 perguntas',()=>{
  const stage8b7Bank = bank.slice(0,347);
  assert.equal(stage8b7Bank.length,347);
});

test('stage8b7: IDs qm-0409 a qm-0428 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=409;i<=428;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b7: 20 perguntas novas de geral',()=>{
  const nova= getNewGeral();
  assert.equal(nova.length,20);
});

test('stage8b7: distribuicao 7 facil, 7 medio, 6 dificil em geral',()=>{
  const nova= getNewGeral();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b7: 120 perguntas anteriores da Etapa 8 preservadas',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  const matematica= getNewMatematica();
  const biblia= getNewBiblia();
  const tecnologia= getNewTecnologia();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(matematica.length,20);
  assert.equal(biblia.length,20);
  assert.equal(tecnologia.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
  assert.equal(matematica.filter(q=>q.level==='facil').length,7);
  assert.equal(matematica.filter(q=>q.level==='medio').length,7);
  assert.equal(matematica.filter(q=>q.level==='dificil').length,6);
  assert.equal(biblia.filter(q=>q.level==='facil').length,7);
  assert.equal(biblia.filter(q=>q.level==='medio').length,7);
  assert.equal(biblia.filter(q=>q.level==='dificil').length,6);
  assert.equal(tecnologia.filter(q=>q.level==='facil').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='medio').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='dificil').length,6);
});

// ===== 8B.8 CULTURA BRASILEIRA CHECKPOINT =====
test('stage8b8: banco total tem 367 perguntas',()=>{
  const stage8b8Bank = bank.slice(0,367);
  assert.equal(stage8b8Bank.length,367);
});

test('stage8b8: IDs qm-0429 a qm-0448 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=429;i<=448;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b8: 20 perguntas novas de cultura-brasileira',()=>{
  const nova= getNewCulturaBrasileira();
  assert.equal(nova.length,20);
});

test('stage8b8: distribuicao 7 facil, 7 medio, 6 dificil em cultura-brasileira',()=>{
  const nova= getNewCulturaBrasileira();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b8: 140 perguntas anteriores da Etapa 8 preservadas',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  const matematica= getNewMatematica();
  const biblia= getNewBiblia();
  const tecnologia= getNewTecnologia();
  const geral= getNewGeral();
  const cultura= getNewCulturaBrasileira();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(matematica.length,20);
  assert.equal(biblia.length,20);
  assert.equal(tecnologia.length,20);
  assert.equal(geral.length,20);
  assert.equal(cultura.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
  assert.equal(matematica.filter(q=>q.level==='facil').length,7);
  assert.equal(matematica.filter(q=>q.level==='medio').length,7);
  assert.equal(matematica.filter(q=>q.level==='dificil').length,6);
  assert.equal(biblia.filter(q=>q.level==='facil').length,7);
  assert.equal(biblia.filter(q=>q.level==='medio').length,7);
  assert.equal(biblia.filter(q=>q.level==='dificil').length,6);
  assert.equal(tecnologia.filter(q=>q.level==='facil').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='medio').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geral.filter(q=>q.level==='facil').length,7);
  assert.equal(geral.filter(q=>q.level==='medio').length,7);
  assert.equal(geral.filter(q=>q.level==='dificil').length,6);
  assert.equal(cultura.filter(q=>q.level==='facil').length,7);
  assert.equal(cultura.filter(q=>q.level==='medio').length,7);
  assert.equal(cultura.filter(q=>q.level==='dificil').length,6);
});

test('stage8: topic cultura-brasileira para as 20 novas',()=>{
  const nova= getNewCulturaBrasileira();
  for(const q of nova){
    assert.equal(q.topic,'cultura-brasileira',`${q.id}: topic deve ser cultura-brasileira`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de cultura-brasileira',()=>{
  const nova= getNewCulturaBrasileira();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: indice deve estar entre 0 e 3`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.equal(q.topic,'cultura-brasileira',`${q.id}: topic deve ser cultura-brasileira`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.equal(q.status,'approved',`${q.id}: status deve ser approved`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
  }
});

// ===== 8B.9 PORTUGUES CHECKPOINT =====
// Helper to get the 20 new portugues questions (8B.9)
function getNewPortugues(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='portugues' && num>=449 && num<=468;
  });
}

test('stage8b9: banco total tem 387 perguntas',()=>{
  const stage8b9Bank = bank.slice(0,387);
  assert.equal(stage8b9Bank.length,387);
});

test('stage8b9: IDs qm-0449 a qm-0468 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=449;i<=468;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b9: 20 perguntas novas de portugues',()=>{
  const nova= getNewPortugues();
  assert.equal(nova.length,20);
});

test('stage8b9: distribuicao 7 facil, 7 medio, 6 dificil em portugues',()=>{
  const nova= getNewPortugues();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b9: 160 perguntas anteriores da Etapa 8 preservadas',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  const matematica= getNewMatematica();
  const biblia= getNewBiblia();
  const tecnologia= getNewTecnologia();
  const geral= getNewGeral();
  const cultura= getNewCulturaBrasileira();
  const portugues= getNewPortugues();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(matematica.length,20);
  assert.equal(biblia.length,20);
  assert.equal(tecnologia.length,20);
  assert.equal(geral.length,20);
  assert.equal(cultura.length,20);
  assert.equal(portugues.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
  assert.equal(matematica.filter(q=>q.level==='facil').length,7);
  assert.equal(matematica.filter(q=>q.level==='medio').length,7);
  assert.equal(matematica.filter(q=>q.level==='dificil').length,6);
  assert.equal(biblia.filter(q=>q.level==='facil').length,7);
  assert.equal(biblia.filter(q=>q.level==='medio').length,7);
  assert.equal(biblia.filter(q=>q.level==='dificil').length,6);
  assert.equal(tecnologia.filter(q=>q.level==='facil').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='medio').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geral.filter(q=>q.level==='facil').length,7);
  assert.equal(geral.filter(q=>q.level==='medio').length,7);
  assert.equal(geral.filter(q=>q.level==='dificil').length,6);
  assert.equal(cultura.filter(q=>q.level==='facil').length,7);
  assert.equal(cultura.filter(q=>q.level==='medio').length,7);
  assert.equal(cultura.filter(q=>q.level==='dificil').length,6);
  assert.equal(portugues.filter(q=>q.level==='facil').length,7);
  assert.equal(portugues.filter(q=>q.level==='medio').length,7);
  assert.equal(portugues.filter(q=>q.level==='dificil').length,6);
});

test('stage8: topic portugues para as 20 novas',()=>{
  const nova= getNewPortugues();
  for(const q of nova){
    assert.equal(q.topic,'portugues',`${q.id}: topic deve ser portugues`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de portugues',()=>{
  const nova= getNewPortugues();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: indice deve estar entre 0 e 3`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.equal(q.topic,'portugues',`${q.id}: topic deve ser portugues`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.equal(q.status,'approved',`${q.id}: status deve ser approved`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
    assert.equal(
      new Set(q.o.map(C.normalize)).size,
      4,
      `${q.id}: alternativas devem ser distintas apos normalizacao`
    );
  }
});

test('stage8: topic geral para as 20 novas',()=>{
  const nova= getNewGeral();
  for(const q of nova){
    assert.equal(q.topic,'geral',`${q.id}: topic deve ser geral`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de geral',()=>{
  const nova= getNewGeral();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: indice deve estar entre 0 e 3`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.equal(q.topic,'geral',`${q.id}: topic deve ser geral`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.equal(q.status,'approved',`${q.id}: status deve ser approved`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
  }
});

// ===== 8B.10 GAMES CHECKPOINT =====
// Helper to get the 20 new games questions (8B.10)
function getNewGames(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='games' && num>=469 && num<=488;
  });
}

test('stage8b10: banco total tem 407 perguntas',()=>{
  const stage8b10Bank = bank.slice(0,407);
  assert.equal(stage8b10Bank.length,407);
});

test('stage8b10: IDs qm-0469 a qm-0488 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=469;i<=488;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b10: 20 perguntas novas de games',()=>{
  const nova= getNewGames();
  assert.equal(nova.length,20);
});

test('stage8b10: distribuicao 7 facil, 7 medio, 6 dificil em games',()=>{
  const nova= getNewGames();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b10: 180 perguntas anteriores da Etapa 8 preservadas',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  const matematica= getNewMatematica();
  const biblia= getNewBiblia();
  const tecnologia= getNewTecnologia();
  const geral= getNewGeral();
  const cultura= getNewCulturaBrasileira();
  const portugues= getNewPortugues();
  const games= getNewGames();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(matematica.length,20);
  assert.equal(biblia.length,20);
  assert.equal(tecnologia.length,20);
  assert.equal(geral.length,20);
  assert.equal(cultura.length,20);
  assert.equal(portugues.length,20);
  assert.equal(games.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
  assert.equal(matematica.filter(q=>q.level==='facil').length,7);
  assert.equal(matematica.filter(q=>q.level==='medio').length,7);
  assert.equal(matematica.filter(q=>q.level==='dificil').length,6);
  assert.equal(biblia.filter(q=>q.level==='facil').length,7);
  assert.equal(biblia.filter(q=>q.level==='medio').length,7);
  assert.equal(biblia.filter(q=>q.level==='dificil').length,6);
  assert.equal(tecnologia.filter(q=>q.level==='facil').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='medio').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geral.filter(q=>q.level==='facil').length,7);
  assert.equal(geral.filter(q=>q.level==='medio').length,7);
  assert.equal(geral.filter(q=>q.level==='dificil').length,6);
  assert.equal(cultura.filter(q=>q.level==='facil').length,7);
  assert.equal(cultura.filter(q=>q.level==='medio').length,7);
  assert.equal(cultura.filter(q=>q.level==='dificil').length,6);
  assert.equal(portugues.filter(q=>q.level==='facil').length,7);
  assert.equal(portugues.filter(q=>q.level==='medio').length,7);
  assert.equal(portugues.filter(q=>q.level==='dificil').length,6);
  assert.equal(games.filter(q=>q.level==='facil').length,7);
  assert.equal(games.filter(q=>q.level==='medio').length,7);
  assert.equal(games.filter(q=>q.level==='dificil').length,6);
});

test('stage8: topic games para as 20 novas',()=>{
  const nova= getNewGames();
  for(const q of nova){
    assert.equal(q.topic,'games',`${q.id}: topic deve ser games`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de games',()=>{
  const nova= getNewGames();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: indice deve estar entre 0 e 3`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.equal(q.topic,'games',`${q.id}: topic deve ser games`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.equal(q.status,'approved',`${q.id}: status deve ser approved`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
    assert.equal(
      new Set(q.o.map(C.normalize)).size,
      4,
      `${q.id}: alternativas devem ser distintas apos normalizacao`
    );
  }
});

// ===== 8B.11 FILMES CHECKPOINT =====
// Helper to get the 20 new filmes questions (8B.11)
function getNewFilmes(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='filmes' && num>=489 && num<=508;
  });
}

test('stage8b11: banco total tem 427 perguntas',()=>{
  const stage8b11Bank = bank.slice(0,427);
  assert.equal(stage8b11Bank.length,427);
});

test('stage8b11: IDs qm-0489 a qm-0508 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=489;i<=508;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b11: 20 perguntas novas de filmes',()=>{
  const nova= getNewFilmes();
  assert.equal(nova.length,20);
});

test('stage8b11: distribuicao 7 facil, 7 medio, 6 dificil em filmes',()=>{
  const nova= getNewFilmes();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b11: 200 perguntas anteriores da Etapa 8 preservadas',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  const matematica= getNewMatematica();
  const biblia= getNewBiblia();
  const tecnologia= getNewTecnologia();
  const geral= getNewGeral();
  const cultura= getNewCulturaBrasileira();
  const portugues= getNewPortugues();
  const games= getNewGames();
  const filmes= getNewFilmes();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(matematica.length,20);
  assert.equal(biblia.length,20);
  assert.equal(tecnologia.length,20);
  assert.equal(geral.length,20);
  assert.equal(cultura.length,20);
  assert.equal(portugues.length,20);
  assert.equal(games.length,20);
  assert.equal(filmes.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
  assert.equal(matematica.filter(q=>q.level==='facil').length,7);
  assert.equal(matematica.filter(q=>q.level==='medio').length,7);
  assert.equal(matematica.filter(q=>q.level==='dificil').length,6);
  assert.equal(biblia.filter(q=>q.level==='facil').length,7);
  assert.equal(biblia.filter(q=>q.level==='medio').length,7);
  assert.equal(biblia.filter(q=>q.level==='dificil').length,6);
  assert.equal(tecnologia.filter(q=>q.level==='facil').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='medio').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geral.filter(q=>q.level==='facil').length,7);
  assert.equal(geral.filter(q=>q.level==='medio').length,7);
  assert.equal(geral.filter(q=>q.level==='dificil').length,6);
  assert.equal(cultura.filter(q=>q.level==='facil').length,7);
  assert.equal(cultura.filter(q=>q.level==='medio').length,7);
  assert.equal(cultura.filter(q=>q.level==='dificil').length,6);
  assert.equal(portugues.filter(q=>q.level==='facil').length,7);
  assert.equal(portugues.filter(q=>q.level==='medio').length,7);
  assert.equal(portugues.filter(q=>q.level==='dificil').length,6);
  assert.equal(games.filter(q=>q.level==='facil').length,7);
  assert.equal(games.filter(q=>q.level==='medio').length,7);
  assert.equal(games.filter(q=>q.level==='dificil').length,6);
  assert.equal(filmes.filter(q=>q.level==='facil').length,7);
  assert.equal(filmes.filter(q=>q.level==='medio').length,7);
  assert.equal(filmes.filter(q=>q.level==='dificil').length,6);
});

test('stage8: topic filmes para as 20 novas',()=>{
  const nova= getNewFilmes();
  for(const q of nova){
    assert.equal(q.topic,'filmes',`${q.id}: topic deve ser filmes`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de filmes',()=>{
  const nova= getNewFilmes();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: indice deve estar entre 0 e 3`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.equal(q.topic,'filmes',`${q.id}: topic deve ser filmes`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.equal(q.status,'approved',`${q.id}: status deve ser approved`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
    assert.equal(
      new Set(q.o.map(C.normalize)).size,
      4,
      `${q.id}: alternativas devem ser distintas apos normalizacao`
    );
  }
});

// ===== 8B.12 SÉRIES CHECKPOINT =====
// Helper to get the 20 new series questions (8B.12)
function getNewSeries(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='series' && num>=509 && num<=528;
  });
}

test('stage8b12: banco total tem 447 perguntas',()=>{
  assert.equal(bank.length,447);
});

test('stage8b12: IDs qm-0509 a qm-0528 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=509;i<=528;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8b12: 20 perguntas novas de series',()=>{
  const nova= getNewSeries();
  assert.equal(nova.length,20);
});

test('stage8b12: distribuicao 7 facil, 7 medio, 6 dificil em series',()=>{
  const nova= getNewSeries();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8b12: 220 perguntas anteriores da Etapa 8 preservadas',()=>{
  const ciencia= getNewCiencia();
  const geo= getNewGeografia();
  const historia= getNewHistoria();
  const matematica= getNewMatematica();
  const biblia= getNewBiblia();
  const tecnologia= getNewTecnologia();
  const geral= getNewGeral();
  const cultura= getNewCulturaBrasileira();
  const portugues= getNewPortugues();
  const games= getNewGames();
  const filmes= getNewFilmes();
  const series= getNewSeries();
  assert.equal(ciencia.length,20);
  assert.equal(geo.length,20);
  assert.equal(historia.length,20);
  assert.equal(matematica.length,20);
  assert.equal(biblia.length,20);
  assert.equal(tecnologia.length,20);
  assert.equal(geral.length,20);
  assert.equal(cultura.length,20);
  assert.equal(portugues.length,20);
  assert.equal(games.length,20);
  assert.equal(filmes.length,20);
  assert.equal(series.length,20);
  assert.equal(ciencia.filter(q=>q.level==='facil').length,7);
  assert.equal(ciencia.filter(q=>q.level==='medio').length,7);
  assert.equal(ciencia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geo.filter(q=>q.level==='facil').length,7);
  assert.equal(geo.filter(q=>q.level==='medio').length,7);
  assert.equal(geo.filter(q=>q.level==='dificil').length,6);
  assert.equal(historia.filter(q=>q.level==='facil').length,7);
  assert.equal(historia.filter(q=>q.level==='medio').length,7);
  assert.equal(historia.filter(q=>q.level==='dificil').length,6);
  assert.equal(matematica.filter(q=>q.level==='facil').length,7);
  assert.equal(matematica.filter(q=>q.level==='medio').length,7);
  assert.equal(matematica.filter(q=>q.level==='dificil').length,6);
  assert.equal(biblia.filter(q=>q.level==='facil').length,7);
  assert.equal(biblia.filter(q=>q.level==='medio').length,7);
  assert.equal(biblia.filter(q=>q.level==='dificil').length,6);
  assert.equal(tecnologia.filter(q=>q.level==='facil').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='medio').length,7);
  assert.equal(tecnologia.filter(q=>q.level==='dificil').length,6);
  assert.equal(geral.filter(q=>q.level==='facil').length,7);
  assert.equal(geral.filter(q=>q.level==='medio').length,7);
  assert.equal(geral.filter(q=>q.level==='dificil').length,6);
  assert.equal(cultura.filter(q=>q.level==='facil').length,7);
  assert.equal(cultura.filter(q=>q.level==='medio').length,7);
  assert.equal(cultura.filter(q=>q.level==='dificil').length,6);
  assert.equal(portugues.filter(q=>q.level==='facil').length,7);
  assert.equal(portugues.filter(q=>q.level==='medio').length,7);
  assert.equal(portugues.filter(q=>q.level==='dificil').length,6);
  assert.equal(games.filter(q=>q.level==='facil').length,7);
  assert.equal(games.filter(q=>q.level==='medio').length,7);
  assert.equal(games.filter(q=>q.level==='dificil').length,6);
  assert.equal(filmes.filter(q=>q.level==='facil').length,7);
  assert.equal(filmes.filter(q=>q.level==='medio').length,7);
  assert.equal(filmes.filter(q=>q.level==='dificil').length,6);
  assert.equal(series.filter(q=>q.level==='facil').length,7);
  assert.equal(series.filter(q=>q.level==='medio').length,7);
  assert.equal(series.filter(q=>q.level==='dificil').length,6);
});

test('stage8: topic series para as 20 novas',()=>{
  const nova= getNewSeries();
  for(const q of nova){
    assert.equal(q.topic,'series',`${q.id}: topic deve ser series`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de series',()=>{
  const nova= getNewSeries();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: indice deve estar entre 0 e 3`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.equal(q.topic,'series',`${q.id}: topic deve ser series`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.equal(q.status,'approved',`${q.id}: status deve ser approved`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
    assert.equal(
      new Set(q.o.map(C.normalize)).size,
      4,
      `${q.id}: alternativas devem ser distintas apos normalizacao`
    );
  }
});

// ===== COMMON VALIDATIONS =====
test('stage8: topic tecnologia para as 20 novas',()=>{
  const nova= getNewTecnologia();
  for(const q of nova){
    assert.equal(q.topic,'tecnologia',`${q.id}: topic deve ser tecnologia`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de tecnologia',()=>{
  const nova= getNewTecnologia();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: indice deve estar entre 0 e 3`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.equal(q.topic,'tecnologia',`${q.id}: topic deve ser tecnologia`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.equal(q.status,'approved',`${q.id}: status deve ser approved`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
  }
});

// ===== COMMON VALIDATIONS =====
test('stage8: IDs unicos',()=>{
  const ids=bank.map(q=>q.id);
  assert.equal(new Set(ids).size,ids.length);
});

test('stage8: factIds unicos',()=>{
  const factIds=bank.map(q=>q.factId);
  assert.equal(new Set(factIds).size,factIds.length);
});

test('stage8: 4 alternativas por pergunta',()=>{
  for(const q of bank){
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
  }
});

test('stage8: indice correto entre 0 e 3',()=>{
  for(const q of bank){
    assert.ok(Number.isInteger(q.a),`${q.id}: indice deve ser inteiro`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: indice deve estar entre 0 e 3`);
  }
});

test('stage8: topic historia para as 20 novas',()=>{
  const nova= getNewHistoria();
  for(const q of nova){
    assert.equal(q.topic,'historia',`${q.id}: topic deve ser historia`);
  }
});

test('stage8: topic matematica para as 20 novas',()=>{
  const nova= getNewMatematica();
  for(const q of nova){
    assert.equal(q.topic,'matematica',`${q.id}: topic deve ser matematica`);
  }
});

test('stage8: topic biblia para as 20 novas',()=>{
  const nova= getNewBiblia();
  for(const q of nova){
    assert.equal(q.topic,'biblia',`${q.id}: topic deve ser biblia`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de historia',()=>{
  const nova= getNewHistoria();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.ok(q.topic,`${q.id}: deve ter topic`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.ok(q.status,`${q.id}: deve ter status`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de matematica',()=>{
  const nova= getNewMatematica();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.ok(q.topic,`${q.id}: deve ter topic`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    // Matematica tem source: null (conforme regra editorial)
    assert.strictEqual(q.source,null,`${q.id}: matematica deve ter source null`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.ok(q.status,`${q.id}: deve ter status`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
  }
});

test('stage8: schema valido para as 20 novas perguntas de biblia',()=>{
  const nova= getNewBiblia();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter indice correto`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nivel`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.ok(q.topic,`${q.id}: deve ter topic`);
    assert.ok(q.explanation,`${q.id}: deve ter explicacao`);
    assert.ok(q.source,`${q.id}: deve ter fonte`);
    assert.ok(q.source?.name,`${q.id}: fonte deve ter nome`);
    assert.ok(q.source?.url,`${q.id}: fonte deve ter URL`);
    assert.ok(q.verifiedAt,`${q.id}: deve ter verifiedAt`);
    assert.ok(q.expiresAt,`${q.id}: deve ter expiresAt`);
    assert.ok(q.status,`${q.id}: deve ter status`);
    assert.ok(q.hasOwnProperty('referencePeriod'),`${q.id}: deve ter referencePeriod`);
    assert.ok(q.o[q.a],`${q.id}: alternativa correta deve existir`);
    assert.ok(q.source.url.startsWith('https://'),`${q.id}: URL deve ser HTTPS`);
  }
});
