const fs=require('node:fs'),assert=require('node:assert/strict'),C=require('../core');
const old=require('../tests/fixtures/stage4-bank.cjs');
const sources={...require('../editorial/sources.json'),...require('../editorial/stage5-sources.json')};
const lines=fs.readFileSync('editorial/stage5.tsv','utf8').split(/\r?\n/).filter(l=>l&&!l.startsWith('#'));
const at='2026-09-14T00:00:00.000Z',expiry='2027-09-14T00:00:00.000Z',bank=[...old],batches=[];
const entertainment=new Set(['games','artistas','filmes','series','animacoes','musica','internet']);
for(let offset=0;offset<lines.length;offset+=5){const ids=[];
 for(const line of lines.slice(offset,offset+5)){
  const fields=line.split('|');assert.equal(fields.length,10,line);
  const [id,topic,level,key,q,correct,...rest]=fields,explanation=rest.pop(),wrong=rest;
  assert.ok(sources[key],key);assert.ok(!bank.some(q=>q.id===id),id);
  // Position is fixed in the authored output; the permanent ID is explicitly provided in TSV.
  const a=Number(id.slice(-1))%4,o=[...wrong];o.splice(a,0,correct);
  const item={id,factId:id,topic,t:entertainment.has(topic)?'entretenimento':'geral',c:topic,level,q,o,a,explanation,source:{name:sources[key][0],url:sources[key][1]},verifiedAt:at,expiresAt:expiry,status:'approved',referencePeriod:q.match(/(?:19|20)\d{2}/)?.[0]||null};
  assert.equal(C.editorialEligible(item,Date.parse(at)),true,id);assert.ok(!bank.some(other=>C.normalize(other.q)===C.normalize(q)),id);bank.push(item);ids.push(id);
 }
 batches.push({batch:batches.length+1,ids,status:'approved',verifiedAt:at});
}
const topics={};for(const q of bank){topics[q.topic]||={total:0,facil:0,medio:0,dificil:0};topics[q.topic].total++;topics[q.topic][q.level]++;}
assert.equal(Object.keys(topics).length,20);for(const [topic,c]of Object.entries(topics)){assert.ok(c.total>=10,topic);assert.ok(c.facil&&c.medio&&c.dificil,topic+' precisa de todos os níveis');}
fs.writeFileSync('questions.js','// Permanent IDs; stage 4 preserved; stage 5 inputs: editorial/stage5.tsv\n(function(root){const questions='+JSON.stringify(bank,null,2)+';if(typeof module==="object"&&module.exports)module.exports=questions;else root.QuizQuestions=questions;})(globalThis);\n');
fs.writeFileSync('editorial/stage5-summary.json',JSON.stringify({previous:old.length,added:lines.length,total:bank.length,verifiedAt:at,topics,batches},null,2)+'\n');
const links=Object.entries(sources).filter(([key,[name,url]])=>bank.some(q=>q.source?.url===url)).map(([key,[name,url]])=>`- [${name}](${url}) — ${bank.filter(q=>q.source?.url===url).map(q=>q.id).join(', ')}.`);
fs.writeFileSync('editorial/SOURCES.md','# Fontes — etapas 4 e 5\n\nVerificação: 14/09/2026. Prazo e referência em cada pergunta. Fontes oficiais e primárias priorizadas; cálculos novos demonstrados na explicação.\n\n'+links.join('\n')+'\n');
console.log(JSON.stringify({added:lines.length,total:bank.length,topics},null,2));
