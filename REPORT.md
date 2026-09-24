# Relatório — Etapa 5

Data: 14/09/2026. Projeto: `C:\Users\USUARIO\Projetos\quiz-mania-mobile`.

## Resultado

Etapa 5 implementada localmente: banco equilibrado por assunto, estatísticas individuais por UUID e Modo Batalha. Bateria completa: **71 testes de lógica e 33 cenários no Chrome aprovados; zero reprovados**. Também passaram as verificações de sintaxe dos sete módulos JavaScript e `git diff --check`.

O banco contém **207 perguntas aprovadas**: 119 anteriores preservadas integralmente e 88 adicionadas em 18 lotes de até cinco. Nesta etapa: zero perguntas anteriores corrigidas, zero novas rejeitadas e zero expiradas na data da revisão. A Etapa 4 já havia corrigido 31 e rejeitado três das 102 originais. Todos os vinte assuntos alcançam dez perguntas utilizáveis, com os três níveis representados; não há garantia de dez por assunto em cada nível.

## Distribuição editorial

| Assunto | Fácil | Médio | Difícil | Total |
| --- | ---: | ---: | ---: | ---: |
| geografia | 3 | 4 | 3 | 10 |
| ciencia | 4 | 6 | 3 | 13 |
| historia | 2 | 5 | 3 | 10 |
| futebol | 4 | 3 | 3 | 10 |
| tecnologia | 4 | 3 | 3 | 10 |
| geral | 3 | 3 | 4 | 10 |
| matematica | 4 | 3 | 3 | 10 |
| biblia | 3 | 4 | 3 | 10 |
| cultura-brasileira | 4 | 3 | 3 | 10 |
| curiosidades | 6 | 3 | 3 | 12 |
| filmes | 2 | 5 | 3 | 10 |
| series | 3 | 3 | 4 | 10 |
| animacoes | 6 | 2 | 2 | 10 |
| musica | 3 | 5 | 2 | 10 |
| internet | 4 | 4 | 3 | 11 |
| atualidades | 3 | 4 | 4 | 11 |
| esportes | 3 | 4 | 3 | 10 |
| portugues | 3 | 4 | 3 | 10 |
| artistas | 2 | 4 | 4 | 10 |
| games | 4 | 3 | 3 | 10 |

As perguntas novas têm IDs permanentes `qm-0201` a `qm-0288`, quatro alternativas distintas, uma resposta correta, explicação e fonte. Verificação em 14/09/2026; revisão até 14/09/2027 às 00:00 UTC. Metadados e vencimentos anteriores foram preservados. Atualidades anteriores com prazo mais curto continuam sujeitas ao seu vencimento individual.

A revisão editorial considerou enunciados, alternativas, fatos distintos e dificuldade. Testes estruturais complementam a revisão humana; não comprovam sozinhos a verdade de uma afirmação ou a dificuldade percebida pelos jogadores.

### Fontes utilizadas

A lista completa, com nomes, URLs e IDs das perguntas correspondentes, está em [editorial/SOURCES.md](editorial/SOURCES.md). Os novos registros estão em [stage5-sources.json](editorial/stage5-sources.json) e os enunciados em [stage5.tsv](editorial/stage5.tsv). Foram priorizadas fontes primárias: Nintendo, IFAB, FIBA, FIVB, ITF, organizadores esportivos, MoMA, MALBA, Projeto Portinari, Iphan, textos bíblicos, IBM, Intel, RFC, SQLite, NOAA, NASA, BIPM, OpenStax, Warner, Pixar e Yamaha, além de referências linguísticas como Infopédia e Ciberdúvidas. O [balanço dos lotes](editorial/stage5-summary.json) permite conferir as quantidades.

## Funcionalidades entregues

### Estatísticas

Sessões e respostas ficam vinculadas ao UUID. Homônimos mantêm históricos separados. São apresentados partidas, abandonos, perguntas respondidas, acertos, erros, percentual, melhor sequência, desempenho por assunto e dificuldade, recordes e histórico. A comparação considera partidas equivalentes por modo, nível, quantidade e assuntos. Recordes dos modos permanecem separados.

Resultados antigos contribuem apenas com informações disponíveis. Não se inventam assunto, sequência ou respostas individuais que o armazenamento antigo não registrava. A extensão `statistics.version = 1` é compatível com o armazenamento v2; o conteúdo anterior à primeira gravação é arquivado em `quizMania.before-stage5` e incluído na exportação de recuperação.

Respostas pendentes em batalhas interrompidas contam como respondidas, mas ficam sem acerto, erro ou pontos. O percentual usa resultados confirmados. Recarregar marca sessões ativas como abandonadas, preservando eventos já confirmados.

### Batalha

Dois UUIDs distintos, configuração de assuntos, dificuldade e quantidade de 1 a 20. Sorteio inicial, alternância a cada pergunta, mesma pergunta para ambos, entrega explícita do aparelho e revelação conjunta. Pontuação base de 10/20/30 e bônus de dez pontos a cada bloco de três acertos consecutivos; erro interrompe a sequência.

Empates recebem perguntas extras sucessivas. Se o banco disponível acabar, o jogo declara empate por esgotamento, sem vencedor artificial. Revanche preserva configuração e histórico contra repetição.

A disponibilidade cruza os históricos dos dois participantes no modo Batalha, separadamente do individual. Trocar adversário, quantidade ou assuntos não libera perguntas já usadas nessa dificuldade. O reinício exige confirmação. A reserva para ambos ocorre antes da primeira apresentação; abandono na entrega inicial não consome pergunta. Após apresentação, a reserva permanece para ambos, inclusive se o segundo não responder.

### Isolamento da primeira resposta

A escolha fica na memória privada do controlador. As telas são reconstruídas antes de passar o aparelho; não conservam opção marcada, cor, texto, foco ou atributo de acessibilidade da primeira escolha. Até ambos responderem, nada revela seu resultado ou pontuação. O armazenamento registra apenas resposta pendente, sem alternativa escolhida.

O teste de privacidade percorre as quatro escolhas possíveis e compara DOM, árvore de acessibilidade, foco, cores, posições e estado dos botões na entrega e na segunda resposta. Recarregar não restaura a escolha secreta. A proteção cobre a interface e a persistência da aplicação, não observação física da tela enquanto o primeiro jogador responde.

## Arquivos alterados nesta etapa

- Aplicação: `questions.js`, `storage.js`, `app.js`, `index.html`, `styles.css`, `package.json`, `tools/serve.cjs`.
- Novos módulos: `battle.js`, `statistics.js`, `extras.js`.
- Editorial: `editorial/stage5.tsv`, `editorial/stage5-sources.json`, `editorial/stage5-summary.json`, `editorial/SOURCES.md`, `tools/build-stage5-bank.cjs`.
- Testes: `tests/stage5.test.js`, `tests/battle-browser.cjs`, `tests/fixtures/stage4-bank.cjs`, ajustes em `tests/stage4.test.js` e `tests/browser.cjs` preservando a cobertura anterior.
- Documentação: `README.md`, `CHANGELOG.md`, `REPORT.md`.

Os arquivos de etapas anteriores continuam preservados, incluindo a base de regras de `core.js`. Backups e evidências locais são ignorados pelo Git.

## Testes e evidências

Executados: `npm test`, `npm run check` e `npm run test:browser`. Foram preservados os 50 testes de lógica e 18 cenários de navegador anteriores, acrescentando 21 e 15, respectivamente. Total: **104 aprovados, zero reprovados**.

A cobertura inclui fontes, datas, expiração e exclusão automática, IDs, alternativas, explicações, equilíbrio, migração, homônimos, estatísticas, pontuação individual, bônus, alternância, múltiplos desempates, revanche, banco insuficiente, repetição, abandono e recarga em diferentes fases. Os cenários visuais exercitam mobile e desktop, navegação por teclado e foco. Não houve erro de JavaScript ou de recursos nos cenários finais.

Evidências: `test-results/unit-tests.tap`, `test-results/browser-results.json` e vinte capturas de tela, incluindo entrega, pergunta, revelação e estatísticas em 320×568 e 1440×900. Tabelas podem rolar horizontalmente dentro de uma região acessível no celular; não ampliam a largura do documento.

### Testes de lógica aprovados

- baseline: 102 perguntas, 34 por nível e pontos 10/20/30
- baseline: dez perguntas únicas e filtro de temas
- baseline: reproduz repetição silenciosa na segunda rodada com banco de 14
- baseline: reproduz falha com histórico JSON corrompido
- banco preservado integralmente e IDs permanentes iguais aos antigos
- banco: IDs e enunciados únicos, alternativas válidas, tema e nível existentes
- detecção de textos e fatos duplicados mesmo com alternativas reordenadas
- nenhuma repetição de ID ou fato dentro da rodada
- bloqueio de 7 dias: fronteira exata e liberação
- bloqueio de 15 dias: fronteira exata e liberação
- bloqueio de 30 dias: fronteira exata e liberação
- bloqueio de 60 dias: fronteira exata e liberação
- padrão 30 dias, ciclo não reinicia sozinho mesmo depois de esgotado
- histórico separado por jogador, modo, nível e conjunto de temas
- menos de dez: recusa sem reposição, redução explícita e seleção vazia
- somente pergunta apresentada fica bloqueada; seleção não reserva dez
- persistência, recordes pessoais, partidas e reabertura
- nome de jogador __proto__ não modifica o protótipo
- migração preserva originais, recordes e IDs antigos sem inventar jogador/data
- base inválida { abre em modo protegido e preserva dados
- base inválida null abre em modo protegido e preserva dados
- base inválida [] abre em modo protegido e preserva dados
- base inválida {"version":99} abre em modo protegido e preserva dados
- formatos internos inválidos não causam reset nem migração silenciosa
- legado corrompido é preservado e não gera nova base automaticamente
- armazenamento indisponível ou cheio bloqueia novas gravações e recuperação insegura
- reinício explícito preserva recordes, partidas e outros jogadores/configurações
- diagnóstico apresenta total, bloqueadas, restantes e temas insuficientes
- perguntas vencidas não entram no sorteio
- diagnóstico identifica o mesmo fato em perguntas inversas sobre Dear Algo e Threads
- gravação obsoleta não sobrescreve histórico alterado por outra sessão
- migração bloqueia reformulações do mesmo fato, não apenas o ID antigo
- arquivos locais referenciados existem e scripts não são inline
- 102 originais possuem decisão editorial e IDs preservados ou aposentados
- 119 aprovadas: quatro alternativas distintas e um único índice correto
- IDs literais permanentes e únicos; nenhum novo ID reaproveita rejeitadas
- explicações preenchidas em todas as perguntas
- fonte obrigatória em atualidades e conteúdo não matemático
- atuais têm período no enunciado e revisão em 90 dias
- datas inválidas, impossíveis, ausentes ou futuras bloqueiam
- expiração exata exclui automaticamente de seleção e diagnóstico
- revisão anterior à verificação e fonte insegura bloqueiam
- nova verificação explícita torna pergunta novamente elegível
- rejeitadas, distratores repetidos e índice inválido não entram
- vinte temas cobertos; ampliação de cinco por lote e níveis distribuídos
- dois Alexis possuem IDs, históricos e recordes distintos
- renomear preserva identidade e colisão explícita de ID é recusada
- migração v1 preserva original, jogador ativo, histórico e recordes
- migração v1 inválida ou sem espaço não sobrescreve originais
- versão 2 recusa perfis duplicados e referências órfãs
- etapa 4 preservada integralmente e 88 novas perguntas válidas
- todos os 20 assuntos têm dez utilizáveis e os três níveis
- batalha recusa mesmo UUID e aceita mesmo nome com UUID distinto
- primeira escolha não aparece no estado público e pontuação só muda após ambas
- pontuação individual na batalha: facil
- pontuação individual na batalha: medio
- pontuação individual na batalha: dificil
- bônus nos acertos 3 e 6; erro rompe sequência
- ordem sorteada inicialmente e alternada inclusive nos desempates
- empate com múltiplas extras termina apenas com vencedor
- falta de banco no desempate produz empate declarado sem vencedor
- revanche reutiliza configuração, mas não perguntas já apresentadas
- batalha usa interseção de inéditas dos dois perfis, separada do individual
- candidatos respeitam assunto e validade sem liberar por troca de adversário
- abandono apaga escolhas da máquina; recarga marca sessões ativas abandonadas
- estatísticas por UUID, tema e nível, sequência e pendências sem inventar erros
- estatísticas não duplicam envio e confirmam resposta pendente uma única vez
- totais legados preservados, sem inventar assuntos e sequência
- comparação limita modo, nível, quantidade e assuntos; recordes por modo
- extensão estatística arquiva v2 anterior antes da primeira gravação
- dados estatísticos inválidos bloqueiam armazenamento sem substituir

### Cenários de navegador

- [PASS] fluxo completo: dez acertos, recorde, histórico, redução e reinício confirmado
- [PASS] resposta bloqueada: cliques repetidos não duplicam pontos
- [PASS] pontuação e recorde no nível medio
- [PASS] pontuação e recorde no nível dificil
- [PASS] abandono/reload: apenas pergunta exibida fica bloqueada; outro jogador separado
- [PASS] migração no navegador e escolha de prazo persistente
- [PASS] JSON corrompido: menu abre, original preservado, recuperação requer confirmação
- [PASS] quota indisponível bloqueia partida sem erro de console
- [PASS] duas abas: a segunda aguarda e assume após fechar a primeira
- [PASS] layout small-portrait: menu, partida e resultado sem overflow
- [PASS] layout large-portrait: menu, partida e resultado sem overflow
- [PASS] layout landscape: menu, partida e resultado sem overflow
- [PASS] layout desktop: menu, partida e resultado sem overflow
- [PASS] teclado e movimento reduzido
- [PASS] abertura direta file:// preservada e rodada concluída
- [PASS] dois Alexis no navegador: selecionar, renomear e separar históricos
- [PASS] explicação e fonte visíveis; expiração entre perguntas interrompe rodada
- [PASS] batalha: DOM, ARIA, foco e aparência do segundo independem das quatro escolhas
- [PASS] batalha: placar, bônus de três, alternância, estatísticas e revanche
- [PASS] batalha: empate e duas perguntas extras até vencedor
- [PASS] batalha: banco insuficiente no desempate, sem repetir nem inventar vencedor
- [PASS] batalha: recarga em handoff preserva bloqueios e interrompe com segurança
- [PASS] batalha: recarga em first-answer preserva bloqueios e interrompe com segurança
- [PASS] batalha: recarga em second-answer preserva bloqueios e interrompe com segurança
- [PASS] batalha: recarga em reveal preserva bloqueios e interrompe com segurança
- [PASS] batalha: abandono explícito requer confirmação e não libera perguntas
- [PASS] batalha: cria homônimos, recusa mesmo UUID e respeita assuntos
- [PASS] estatísticas: resposta individual abandonada aparece por UUID e por assunto
- [PASS] batalha: expiração na troca protege a escolha pendente
- [PASS] batalha: reinício explícito preserva estatísticas e bloqueios individuais
- [PASS] batalha e estatísticas: layout e teclado em mobile
- [PASS] batalha e estatísticas: layout e teclado em desktop
- [PASS] nenhum erro de JavaScript ou recurso no console

## Qualidades

- Regras e interface separadas, com regressão automatizada dos comportamentos anteriores.
- Histórico e estatísticas por UUID; migração conservadora e arquivo recuperável dos dados anteriores.
- Rastreabilidade editorial, IDs permanentes e bloqueio de perguntas vencidas.
- Privacidade da primeira resposta verificada por múltiplos canais de interface.
- Esgotamento, interrupção e gravações inválidas tratados explicitamente.

## Defeitos, riscos e pendências por gravidade

**Alta — limitação residual:** a aplicação depende do relógio e do armazenamento locais. Alterar o relógio ou apagar dados pode invalidar a confiança nos prazos e históricos. Não existe autoridade de tempo ou persistência remota nesta edição.

**Média — cobertura de conteúdo:** dez perguntas por assunto não asseguram dez por nível. Configurações restritas ou desempates longos podem esgotar o banco. O fluxo informa a limitação; ampliar com qualidade continua pendente.

**Média — validação editorial:** dificuldade é uma classificação editorial, ainda sem calibração com jogadores. Fontes e prazos exigem revisão futura; a aplicação bloqueia vencidas, mas não renova fatos automaticamente.

**Média — compatibilidade:** os testes foram executados no Chrome, com dimensões mobile e desktop. Testes em aparelhos Android/iOS físicos, Safari e Firefox permanecem pendentes.

**Média — legado e interrupções:** perfis antigos que já compartilhavam dados pelo nome não podem ser separados retroativamente sem evidência. Dados antigos não fornecem todas as dimensões estatísticas. Uma primeira resposta interrompida antes da revelação permanece sem classificação, para preservar sua privacidade.

**Baixa — recursos ausentes:** não há autenticação, sincronização entre aparelhos ou importação de recuperação por interface.

Nenhuma falha funcional foi detectada na bateria final. Isso não elimina as limitações descritas nem substitui validação em dispositivos físicos.

## Preservação e Git

Backup recuperável: `backups/before-stage-5`; manifesto `backups/before-stage-5-hashes.json`. Foram conferidos os 30 arquivos por SHA-256, com zero divergências. O backup de arquivos é separado do armazenamento do navegador.

Branch: `main`, acompanhando `origin/main` do repositório existente `https://github.com/Alexis-Junio/Quiz-mania.git`. HEAD preservado: `7d3eb05be44dc44f78aecaa3fd127529c275ffd2`. As alterações continuam locais, sem staging, commit, push, PR, deploy ou publicação. O estado completo está em `test-results/git-status.txt`.

Etapa encerrada para análise do usuário. Nenhuma publicação foi realizada.
