const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = fs.readFileSync('tests/fixtures/legacy.html', 'utf8');
const script = source.match(/<script>([\s\S]*?)<\/script>/)[1];
function baseline() {
  const data = {};
  const context = vm.createContext({localStorage: {
    getItem: key => data[key] ?? null,
    setItem: (key, value) => {data[key] = value;}
  }});
  vm.runInContext(script.slice(0, script.indexOf('const $=')), context);
  const functions = script.slice(script.indexOf('function shuffle'), script.indexOf('function updateBest'));
  vm.runInContext(functions, context);
  vm.runInContext(script.slice(script.indexOf('function startGame'), script.indexOf('function renderQuestion')), context);
  vm.runInContext('const $ = () => ({}); function show(){}; function renderQuestion(){};', context);
  return { run: expression => vm.runInContext(expression, context), data };
}
test('baseline: 102 perguntas, 34 por nível e pontos 10/20/30', () => {
  const b = baseline();
  assert.equal(b.run('Object.values(bank).flat().length'), 102);
  assert.equal(b.run('Object.values(bank).every(list=>list.length===34)'), true);
  assert.equal(b.run('JSON.stringify(points)'), '{"facil":10,"medio":20,"dificil":30}');
});
test('baseline: dez perguntas únicas e filtro de temas', () => {
  const b = baseline();
  b.run('selectedThemes=new Set(["geral"]); startGame()');
  assert.equal(b.run('round.length'), 10);
  assert.equal(b.run('new Set(round.map(q=>q.id)).size'), 10);
  assert.equal(b.run('round.every(q=>q.t==="geral")'), true);
});
test('baseline: reproduz repetição silenciosa na segunda rodada com banco de 14', () => {
  const b = baseline();
  b.run('selectedThemes=new Set(["geral"]); startGame(); const first=round.map(q=>q.id); startGame()');
  assert.ok(b.run('round.filter(q=>first.includes(q.id)).length') >= 6);
});
test('baseline: reproduz falha com histórico JSON corrompido', () => {
  const b = baseline(); b.data.quizUsed = '{';
  assert.throws(() => b.run('startGame()'));
});
