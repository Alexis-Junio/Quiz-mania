// Build mobile — copia apenas arquivos da allowlist para dist/
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

const ALLOWLIST = [
  'index.html',
  'styles.css',
  'app.js',
  'core.js',
  'storage.js',
  'statistics.js',
  'battle.js',
  'extras.js',
  'questions.js',
];

function cleanDist() {
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true, force: true });
  }
  fs.mkdirSync(DIST, { recursive: true });
}

function validateSources() {
  const missing = ALLOWLIST.filter(f => !fs.existsSync(path.join(ROOT, f)));
  if (missing.length > 0) {
    console.error('❌ Arquivos obrigatórios ausentes:', missing.join(', '));
    process.exit(1);
  }
}

function copyFiles() {
  for (const file of ALLOWLIST) {
    const src = path.join(ROOT, file);
    const dest = path.join(DIST, file);
    fs.copyFileSync(src, dest);
    console.log(`✅ ${file}`);
  }
}

function auditDist() {
  const files = fs.readdirSync(DIST);
  const unexpected = files.filter(f => !ALLOWLIST.includes(f));
  if (unexpected.length > 0) {
    console.error('❌ Arquivos não autorizados em dist/:', unexpected.join(', '));
    process.exit(1);
  }
  console.log('✅ Auditoria dist/ OK — apenas arquivos da allowlist');
}

function main() {
  console.log('🔨 Iniciando build:mobile...');
  cleanDist();
  validateSources();
  copyFiles();
  auditDist();
  console.log('✅ build:mobile concluído com sucesso');
}

main();