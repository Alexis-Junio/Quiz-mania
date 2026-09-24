# Quiz Mania Mobile

Quiz individual e Modo Batalha para dois jogadores no mesmo aparelho, com banco editorial, perfis por UUID e estatísticas locais. Versão 1.3.0, Etapa 5.

## Executar

Execute `npm start` e abra http://127.0.0.1:4173. O servidor serve somente os arquivos da aplicação na interface local. Encerre com Ctrl+C. Também é possível abrir `index.html` diretamente no Chrome.

O jogo precisa de armazenamento local e Web Locks. Apenas uma aba pode controlar os dados por origem. Chrome foi testado; outros navegadores e aparelhos físicos ainda precisam de validação. Dados de `file://` e HTTP podem ficar em armazenamentos diferentes.

## Estrutura

- `questions.js`: banco gerado; `core.js`: seleção, elegibilidade, pontuação e repetição.
- `storage.js`: validação, migração, proteção de gravações e recuperação.
- `statistics.js`: sessões, respostas e estatísticas por UUID.
- `battle.js`: regras e estados da batalha; `extras.js`: telas de batalha e estatísticas.
- `app.js`, `index.html`, `styles.css`: integração e interface.
- `editorial/stage5.tsv`, `stage5-sources.json` e `stage5-summary.json`: lote editorial e balanço.
- [Fontes](editorial/SOURCES.md), [relatório](REPORT.md), [histórico de alterações](CHANGELOG.md).

## Banco e revisão

São 207 perguntas: as 119 da Etapa 4 foram preservadas e 88 foram adicionadas em 18 lotes de até cinco. Cada um dos 20 assuntos tem pelo menos dez perguntas, com os três níveis representados. Isso não significa dez perguntas por assunto em cada nível.

Todas têm ID permanente, quatro alternativas distintas, índice de uma resposta correta, explicação e datas. Todas as novas têm fonte. Quatro questões matemáticas anteriores usam demonstração na explicação. A revisão editorial ocorreu em 14/09/2026; as novas perguntas vencem em 14/09/2027 às 00:00 UTC. Parte das perguntas anteriores de atualidades exige revisão em 14/12/2026. Consulte os metadados individuais.

Perguntas vencidas, com verificação futura ou metadados inválidos ficam fora da seleção; a validade é conferida novamente antes da apresentação. Não há renovação automática. `npm run build:bank` reconstrói o banco a partir do retrato preservado da Etapa 4 e dos lotes da Etapa 5, validando-os antes da escrita. IDs e datas são explícitos. Os antigos `tools/build-bank.cjs` e `tools/report-stage4.cjs` são históricos e não devem ser usados para regenerar esta edição.

## Individual e perfis

Cada perfil tem UUID independente do nome; homônimos podem ter históricos separados. Pontos por acerto: fácil 10, médio 20, difícil 30. O jogo individual oferece dez perguntas e informa quando a seleção exige uma partida menor ou reinício confirmado do histórico.

A repetição é controlada por UUID, modo, dificuldade e configuração de temas, nos períodos de 7, 15, 30 ou 60 dias ou por ciclo. Reiniciar perguntas não apaga estatísticas.

## Modo Batalha

Escolha ou crie dois perfis distintos, os assuntos, a dificuldade e de uma a vinte perguntas. O primeiro jogador é sorteado e a ordem se alterna a cada pergunta. Ambos respondem à mesma pergunta, separados por uma tela de entrega do aparelho. As duas escolhas, a resposta correta, a explicação, a fonte e os pontos aparecem somente depois da segunda resposta.

Cada acerto vale a pontuação do nível. Há bônus de dez pontos a cada três acertos consecutivos; um erro interrompe a sequência. Empates recebem perguntas extras até surgir um vencedor. Se o banco elegível acabar, o resultado informa empate por esgotamento, sem inventar vencedor. A revanche mantém as configurações e respeita as perguntas já utilizadas.

O banco disponível é a interseção dos históricos dos dois UUIDs no modo Batalha. Trocar adversário, assuntos ou quantidade não libera perguntas já usadas nessa dificuldade. O histórico individual permanece separado. Há reinício explícito e confirmado do histórico de batalha dos participantes.

A pergunta é reservada para ambos imediatamente antes da primeira apresentação. Abandonar na tela inicial de entrega não consome perguntas. Após a apresentação, a reserva para ambos é conservadora, mesmo se o segundo não chegar a responder.

A primeira escolha fica somente na memória privada do controlador. As telas são reconstruídas, sem conservar a alternativa escolhida no DOM, acessibilidade, foco ou estilos. Antes da revelação, o armazenamento registra apenas que houve resposta, sem alternativa, resultado ou pontos. Recarregar abandona a sessão; a escolha pendente não é recuperada.

## Estatísticas e migração

Estatísticas por UUID e modo incluem partidas, abandonos, perguntas respondidas, acertos, erros, percentual, melhor sequência, desempenho por assunto e dificuldade, recordes e histórico. Comparações usam partidas equivalentes em modo, nível, quantidade e assuntos. Recordes de batalha ficam separados dos individuais.

Respostas pendentes de uma batalha interrompida contam como respondidas, mas não recebem acerto, erro ou pontos. O percentual considera apenas resultados confirmados. Dados antigos contribuem com os totais disponíveis; temas e sequências que nunca foram registrados não são inventados.

A chave `quizMania.v2` recebe uma extensão compatível `statistics.version = 1`. Antes da primeira gravação com estatísticas, a versão anterior é arquivada integralmente em `quizMania.before-stage5`. A exportação de recuperação inclui essa cópia. A migração anterior preserva `quizMania.v1`; históricos antigos já compartilhados por nome não podem ser separados retroativamente com segurança.

JSON inválido, falta de espaço e concorrência bloqueiam gravações inseguras. O armazenamento é local: limpar os dados do navegador remove os históricos; alterar o relógio pode afetar validade e períodos. Não há autenticação, sincronização ou importação por interface.

## Verificação

```powershell
npm test
npm run check
npm run test:browser
```

O teste de navegador requer Playwright disponível; neste ambiente foi usado `PLAYWRIGHT_MODULE` apontando para o runtime instalado do Codex. A bateria final aprovou 71 testes de lógica e 33 cenários no Chrome, preservando os anteriores. Foram verificados isolamento de resposta, bônus, desempates, revanche, abandono, recarga, migração, estatísticas, teclado e layouts mobile/desktop. Evidências locais ficam em `test-results/`.

## Backup e estado local

O backup anterior à Etapa 5 está em `backups/before-stage-5`, com 30 arquivos conferidos pelo manifesto SHA-256 `backups/before-stage-5-hashes.json`. Backups e evidências não entram no Git. O backup de arquivos é separado dos dados do navegador; exporte estes antes de recuperar uma versão antiga.

A branch permanece `main`, acompanhando `origin/main` do repositório existente. Não houve commit, push, PR, deploy ou publicação. Consulte o relatório para limitações e pendências.
