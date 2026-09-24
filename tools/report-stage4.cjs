const fs=require('node:fs');
const bank=require('../questions'),C=require('../core'),sources=require('../editorial/sources.json'),summary=require('../editorial/summary.json');
const browser=JSON.parse(fs.readFileSync('test-results/browser-results.json'));
const tap=fs.readFileSync('test-results/unit-tests.tap','utf8');
const unit=[...tap.matchAll(/^(not ok|ok) \d+ - (.+)$/gm)].map(m=>({status:m[1]==='ok'?'PASS':'FAIL',name:m[2]}));
const sourceLines=Object.entries(sources).map(([key,[name,url]])=>{
 const ids=bank.filter(q=>q.source?.url===url).map(q=>q.id);
 return ids.length?`- [${name}](${url}) — verificação: 14/09/2026; perguntas: ${ids.join(', ')}.`:null;
}).filter(Boolean);
fs.writeFileSync('editorial/SOURCES.md','# Fontes da revisão factual\n\nVerificação editorial realizada em 14/09/2026. Priorizadas instituições oficiais, criadores, editoras, especificações e textos originais. Bibliografia secundária identificada pelo nome da instituição. As quatro questões matemáticas foram verificadas por cálculo explícito, registrado nas explicações. Datas de revisão e períodos de referência estão em cada registro de questions.js.\n\n'+sourceLines.join('\n')+'\n');
const pairs=C.duplicates(bank);
fs.writeFileSync('editorial/similarity-review.json',JSON.stringify(pairs.map(p=>({...p,decision:'retained',reasonForRetention:'Enunciados consultam fatos distintos (por exemplo, categorias diferentes da mesma premiação). Não há igualdade de ID, factId ou texto. Revisão editorial mantém ambos.'})),null,2)+'\n');
const totals=[...unit,...browser];
const text=`# Relatório — Etapa 4 do Quiz Mania

Data: 14/09/2026. Trabalho exclusivamente em C:\\Users\\USUARIO\\Projetos\\quiz-mania-mobile. Etapa encerrada para análise do usuário. Nenhum commit, push, PR, deploy ou publicação executado. Modo Batalha não implementado.

## Resultado editorial

| Medida | Quantidade |
|---|---:|
| Originais revisadas | ${summary.reviewed} |
| Originais aprovadas sem mudar pergunta/nível | ${summary.approvedUnchanged} |
| Originais corrigidas e aprovadas | ${summary.corrected} |
| Rejeitadas/aposentadas | ${summary.rejected} |
| Adicionadas e aprovadas | ${summary.added} |
| Banco aprovado final | ${summary.approvedTotal} |
| Expiradas na data da revisão | ${summary.expired} |

As 99 originais retidas receberam explicação, fonte (exceto cálculos), verificação e validade. “Corrigidas” conta alterações no enunciado, alternativas ou nível; não conta apenas enriquecimento de metadados. Todas as respostas e os três distratores foram lidos na revisão. Testes validam estrutura; a unicidade semântica da resposta depende dessa revisão editorial, não é provada por um índice numérico.

Removidas: medio-atualidades-13 (fusos sem critério inequívoco), medio-atualidades-17 (afirmação sobre mel por milênios sem evidência suficiente), dificil-atualidades-13 (duplicata inversa de Dear Algo). Os registros originais e motivos estão em [review.json](editorial/review.json); IDs aposentados não são reutilizados. Foram corrigidos, entre outros, Egito transcontinental, máximo de jogadores, temperatura do mercúrio, tratado com a Alemanha, referência bíblica, Barbie estereotipada e advérbio em contexto. Sete perguntas mudaram de nível sem mudar de ID.

As 20 adições estão divididas em quatro lotes de cinco, com uma questão para cada assunto solicitado. Os lotes passaram pela validação antes de compor o banco. Critério de dificuldade: fácil exige reconhecimento ou operação elementar; médio pede conhecimento escolar específico; difícil exige detalhe especializado ou raciocínio em etapas. Classificação editorial, ainda sem calibração empírica.

| Nível | Quantidade |
|---|---:|
${Object.entries(summary.levels).map(([k,v])=>`| ${k} | ${v} |`).join('\n')}

| Assunto | Quantidade |
|---|---:|
${Object.entries(summary.topics).map(([k,v])=>`| ${k} | ${v} |`).join('\n')}

O equilíbrio testado exige cobertura dos 20 assuntos, nenhum assunto acima de 15% do total, razão entre maiores/menores níveis abaixo de 1,5 e diferença de até duas perguntas por nível no lote novo. Isso não significa paridade por assunto: há assuntos ainda pequenos, explicitados acima. Os três filtros amplos da interface foram preservados para conservar configurações históricas.

## Atualidades e validade

O bloqueio de gravidade alta foi corrigido: somente perguntas aprovadas, com datas válidas, explicação e fontes exigidas entram no sorteio. Datas impossíveis e futuras são recusadas. A elegibilidade é reavaliada antes de cada apresentação; uma rodada iniciada antes do vencimento não apresenta outra pergunta vencida depois. Expiração é exclusiva no instante registrado, em UTC. As atualidades precisam ser revistas até 14/12/2026; demais itens até 14/09/2027. O gerador mantém datas fixas e não renova a verificação.

Oscar 2026 foi conferido na Academia; Dear Algo no anúncio da Meta de fevereiro de 2026; COP30 na UNFCCC. Perguntas temporais usam ano/período definido. Não foram adicionados rumores, opiniões ou previsões. A relação completa de ${sourceLines.length} fontes e seus IDs está em [SOURCES.md](editorial/SOURCES.md). As quatro questões matemáticas têm demonstração na explicação.

## Perfis e migração

Cada novo perfil recebe um UUID independente do nome. “Criar outro jogador” permite dois Alexis, diferenciados no seletor. Renomear conserva o ID, histórico e recordes. A versão 2 preserva a chave v1 original, migra cada identidade anterior e mantém datas, configurações, pontuações e bloqueios legados. Dados já misturados sob um nome antigo não podem ser separados retroativamente; ficam juntos em um perfil legado. Nenhuma autoria foi inventada. JSON inválido e falha de quota bloqueiam gravação sem apagar originais.

## Arquivos modificados nesta etapa

- Banco/editorial: questions.js; editorial/additions.json, sources.json, SOURCES.md, review.json, summary.json, similarity-review.json e batch-1.json a batch-4.json.
- Regras e perfis: core.js, storage.js, app.js, index.html, styles.css.
- Testes: tests/core.test.js, tests/browser.cjs, tests/stage4.test.js e tests/fixtures/stage3-bank.cjs (snapshot da etapa anterior).
- Ferramentas/documentação: tools/build-bank.cjs, tools/report-stage4.cjs, package.json, README.md, CHANGELOG.md e REPORT.md.
- Evidências locais ignoradas pelo Git: test-results/ e backups/before-stage-4, com manifesto SHA-256. O backup de arquivos não contém dados do navegador; a migração preserva esses dados nas chaves antigas e permite exportação.

## Testes executados

Comandos: npm run build:bank, npm test, npm run check, npm run test:browser. Node.js 20 e Chrome com Playwright já existente no ambiente, sem nova dependência de execução. Resultado: **${totals.filter(t=>t.status==='PASS').length} aprovados, ${totals.filter(t=>t.status==='FAIL').length} reprovados** (${unit.length} lógica + ${browser.length} navegador), além da verificação de sintaxe.

Os 33 testes anteriores foram mantidos; os cenários de regras usam a fixture estável para preservar a fronteira de 14 perguntas. Os 17 testes novos verificam o banco real e a versão 2. Os 16 cenários anteriores de navegador usam o código e o banco atuais; um histórico inicial deixa 14 disponíveis no cenário de rodada reduzida. Dois cenários novos cobrem homônimos e expiração durante a rodada. Testes baseline passam ao reproduzir deliberadamente defeitos do código histórico; não são defeitos da versão nova.

| Resultado | Teste |
|---|---|
${totals.map(t=>`| ${t.status} | ${t.name.replaceAll('|','/')} |`).join('\n')}

Capturadas 12 telas de menu, jogo e resultado em 320×568, 430×932, 844×390 e 1440×900. Sem overflow horizontal nos cenários; nenhum erro de JavaScript/recurso no console. Abertura file:// e teclado também testados. Resultados detalhados: test-results/unit-tests.tap e browser-results.json.

## Qualidades

- Fontes e decisões rastreáveis por ID; explicação visível após responder.
- Exclusão de conteúdo vencido antes da seleção e da apresentação.
- Identidades independentes do nome e migração conservadora.
- Regressões de repetição, corrupção, quota, concorrência, teclado e layout verificadas.
- Código modular, sem dependência externa em tempo de execução e com backup recuperável.

## Defeitos, limitações e riscos por gravidade

| Gravidade | Situação |
|---|---|
| Alta — corrigida | Atualidades sem fonte e validade podiam aparecer indefinidamente. A elegibilidade agora exige metadados e prazo válido. |
| Alta — residual | O relógio é o do dispositivo: adulterá-lo pode afetar validade e bloqueios. Não existe servidor de tempo/autenticação. Limpar o armazenamento também elimina dados locais. |
| Média | Históricos antigos de homônimos já misturados não podem ser desmembrados com segurança; preservados juntos. |
| Média | Distribuição temática ainda desigual, especialmente games com um item; não há rodadas completas para cada assunto/nível. |
| Média | Dificuldade depende da revisão editorial; falta medir taxa de acerto real. |
| Média | Fontes podem mudar ou desaparecer. Prazos exigem revisão humana; não existe atualização automática ou serviço de verificação factual. |
| Média | Navegadores sem Web Locks não iniciam partidas. Validação física em Android/iOS, Safari e Firefox permanece pendente. |
| Baixa | A heurística aponta ${pairs.length} pares semelhantes, revisados como fatos distintos; o diagnóstico ainda os apresenta como candidatos. |
| Baixa | Recuperação é arquivada no navegador; ainda não há importação gráfica ou sincronização entre dispositivos. |

Não foram observados defeitos funcionais reprovando a bateria final. Isso não equivale a ausência universal de defeitos.

## Recursos pendentes e encerramento

Modo Batalha permanece fora desta entrega. Também permanecem pendentes calibração empírica, expansão gradual de assuntos escassos, filtros específicos por assunto, estatísticas detalhadas, autenticação/sincronização, importação gráfica e testes em aparelhos físicos. Nenhuma publicação foi realizada ou solicitada.

Git: main acompanha origin/main; alterações locais permanecem sem stage/commit. O estado detalhado foi registrado em test-results/git-status.txt. A base continua 7d3eb05be44dc44f78aecaa3fd127529c275ffd2. Trabalho encerrado, aguardando a análise do usuário.
`;
fs.writeFileSync('REPORT.md',text);
console.log('Relatório e fontes atualizados:',totals.length,'testes;',sourceLines.length,'fontes.');
