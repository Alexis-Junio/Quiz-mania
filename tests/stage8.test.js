const {test}=require('node:test'),assert=require('node:assert/strict');
const bank=require('../questions');
const C=require('../core');
const now=Date.UTC(2026,8,14,12);

// Helper to get the 20 new ciencia questions
function getNewCiencia(){
  return bank.filter(q => {
    const match=q.id.match(/^qm-0(\d+)$/);
    if(!match)return false;
    const num=parseInt(match[1]);
    return q.topic==='ciencia' && num>=289 && num<=308;
  });
}

test('stage8: banco total tem 227 perguntas',()=>{
  assert.equal(bank.length,227);
});

test('stage8: IDs qm-0289 a qm-0308 presentes exatamente uma vez',()=>{
  const ids=bank.map(q=>q.id);
  for(let i=289;i<=308;i++){
    const id=`qm-${i.toString().padStart(4,'0')}`;
    const count=ids.filter(x=>x===id).length;
    assert.equal(count,1,`ID ${id} deve aparecer exatamente uma vez`);
  }
});

test('stage8: 20 perguntas novas de ciencia',()=>{
  const nova= getNewCiencia();
  assert.equal(nova.length,20);
});

test('stage8: distribuição 7 facil, 7 medio, 6 dificil',()=>{
  const nova= getNewCiencia();
  const facil=nova.filter(q=>q.level==='facil').length;
  const medio=nova.filter(q=>q.level==='medio').length;
  const dificil=nova.filter(q=>q.level==='dificil').length;
  assert.equal(facil,7,`Esperado 7 facil, encontrado ${facil}`);
  assert.equal(medio,7,`Esperado 7 medio, encontrado ${medio}`);
  assert.equal(dificil,6,`Esperado 6 dificil, encontrado ${dificil}`);
});

test('stage8: IDs únicos',()=>{
  const ids=bank.map(q=>q.id);
  assert.equal(new Set(ids).size,ids.length);
});

test('stage8: factIds únicos',()=>{
  const factIds=bank.map(q=>q.factId);
  assert.equal(new Set(factIds).size,factIds.length);
});

test('stage8: 4 alternativas por pergunta',()=>{
  for(const q of bank){
    assert.ok(Array.isArray(q.o),`${q.id}: alternativas devem ser array`);
    assert.equal(q.o.length,4,`${q.id}: deve ter 4 alternativas`);
  }
});

test('stage8: índice correto entre 0 e 3',()=>{
  for(const q of bank){
    assert.ok(Number.isInteger(q.a),`${q.id}: índice deve ser inteiro`);
    assert.ok(q.a>=0 && q.a<=3,`${q.id}: índice deve estar entre 0 e 3`);
  }
});

test('stage8: topic ciencia para as 20 novas',()=>{
  const nova= getNewCiencia();
  for(const q of nova){
    assert.equal(q.topic,'ciencia',`${q.id}: topic deve ser ciencia`);
  }
});

test('stage8: schema válido para as 20 novas perguntas',()=>{
  const nova= getNewCiencia();
  for(const q of nova){
    assert.ok(q.c,`${q.id}: deve ter categoria`);
    assert.ok(q.q,`${q.id}: deve ter enunciado`);
    assert.ok(q.o,`${q.id}: deve ter alternativas`);
    assert.ok(Number.isInteger(q.a),`${q.id}: deve ter índice correto`);
    assert.ok(q.t,`${q.id}: deve ter tipo`);
    assert.ok(q.id,`${q.id}: deve ter ID`);
    assert.ok(q.level,`${q.id}: deve ter nível`);
    assert.ok(q.factId,`${q.id}: deve ter factId`);
    assert.ok(q.topic,`${q.id}: deve ter topic`);
    assert.ok(q.explanation,`${q.id}: deve ter explicação`);
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