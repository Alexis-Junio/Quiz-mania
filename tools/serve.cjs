// Local preview only. Binds to loopback and serves only public application files.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const files = {'/index.html':'text/html; charset=utf-8','/styles.css':'text/css; charset=utf-8',
  '/app.js':'text/javascript; charset=utf-8','/core.js':'text/javascript; charset=utf-8',
  '/storage.js':'text/javascript; charset=utf-8','/questions.js':'text/javascript; charset=utf-8',
  '/statistics.js':'text/javascript; charset=utf-8','/battle.js':'text/javascript; charset=utf-8','/extras.js':'text/javascript; charset=utf-8'};
const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const file = url.pathname === '/' ? '/index.html' : url.pathname;
  if (!Object.hasOwn(files, file)) {res.writeHead(404);res.end('Not found');return;}
  res.setHeader('Content-Type', files[file]); res.setHeader('Cache-Control','no-store');
  res.end(fs.readFileSync(path.join(root,file)));
});
server.listen(4173,'127.0.0.1',()=>console.log('Quiz Mania local: http://127.0.0.1:4173'));
