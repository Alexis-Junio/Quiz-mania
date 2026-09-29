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
test('stage8b3: banco total tem 267 perguntas',()=>{
  assert.equal(bank.length,267);
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