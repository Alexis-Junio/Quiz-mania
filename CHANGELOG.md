# Histórico de alterações

## 1.3.0 — 2026-09-14 — somente local

- Preservadas 119 perguntas e adicionadas 88 em 18 lotes: 207 perguntas, com pelo menos dez em cada um dos vinte assuntos e todos os níveis representados.
- Implementadas estatísticas por UUID, assunto e dificuldade, recordes, histórico e comparação de partidas equivalentes.
- Adicionada extensão versionada de estatísticas e arquivo recuperável do armazenamento anterior à Etapa 5.
- Implementado Modo Batalha com perfis distintos, seleção de assuntos, sorteio, alternância e revelação conjunta das respostas.
- Aplicados bônus de dez pontos a cada três acertos, desempates sucessivos, tratamento explícito de banco esgotado e revanche.
- Separado o histórico de repetição de batalha, considerando os dois participantes e reinício confirmado.
- Protegida a primeira escolha no DOM, acessibilidade, foco e estilos; abandono e recarga descartam a escolha pendente sem fabricar resultados.
- Preservados todos os testes anteriores; adicionados 21 testes de lógica e 15 cenários de navegador. Resultado final: 104 aprovados e nenhum reprovado.
- Backup de 30 arquivos verificado por SHA-256. Sem commit, push, PR, deploy ou publicação.

## 1.2.0 — 2026-09-14 — somente local

- Revisadas as 102 perguntas: 68 mantidas, 31 corrigidas e 3 rejeitadas; as 99 mantidas receberam explicações e metadados de verificação.
- Adicionadas 20 perguntas em quatro lotes de cinco, uma por assunto solicitado: banco final de 119.
- Corrigidas ambiguidades de Egito, futebol, bandeira, temperatura do mercúrio, Bíblia, Barbie, advérbio e Tratado de Versalhes; delimitadas referências temporais e revistos sete níveis.
- Registradas fontes e datas; perguntas vencidas ou sem metadados válidos são excluídas antes do sorteio e de cada apresentação.
- Adicionadas explicações e links de fontes ao feedback da resposta.
- Migrado armazenamento para versão 2, com UUID por perfil, seletor de jogadores e criação explícita de homônimos; original v1 preservado.
- Acrescentados 17 testes de lógica e dois cenários de navegador; repetidas as 33 verificações anteriores e os 16 cenários de navegador.
- Preservado backup recuperável da etapa 3. Sem commit, push, PR, deploy ou publicação.

### Pendências após a etapa 4

- Aumentar gradualmente assuntos com poucos itens e calibrar dificuldade com jogadores reais.
- Filtros específicos dos 20 assuntos, importação gráfica, autenticação/sincronização e estatísticas detalhadas.
- Modo Batalha e validação em aparelhos físicos/outros motores de navegador.

## 1.1.0 — 2026-09-13 — somente local

- Associada a pasta existente a `origin/main`, após comparação idêntica e backup; sem publicação.
- Separados HTML, CSS, banco, regras, persistência e interface.
- Preservadas as 102 perguntas, enunciados, alternativas, respostas e IDs anteriores.
- Fixados IDs literais e vinculadas duas perguntas ao mesmo `factId`.
- Adicionados bloqueios de 7/15/30/60 dias e ciclo com reinício confirmado, separados por jogador e configuração.
- Eliminadas reposição automática e reserva de perguntas ainda não apresentadas.
- Adicionadas rodada reduzida explícita, seleção de todos/nenhum tema e diagnóstico de disponibilidade/duplicatas.
- Implementadas migração versionada e preservação de recordes/histórico legados, sem atribuição fictícia de autoria ou datas.
- Adicionados recordes pessoais, armazenamento de partidas, exportação e recuperação com arquivo prévio e confirmação.
- Adicionadas proteção contra dados inválidos, falhas de quota e sobrescrita entre abas.
- Preservados valores de pontuação, correção imediata, resultado, repetição de partida e abertura direta do HTML.
- Melhorados foco de teclado, estado acessível dos seletores, áreas seguras e movimento reduzido.
- Adicionados testes de referência, regras, navegador, responsividade e ferramentas de prévia local.

### Pendente, fora do escopo desta edição

- Ampliação e revisão factual do banco, explicações, fontes e validade editorial.
- Estatísticas detalhadas, sequência de acertos e comparação entre partidas na interface.
- Modo Batalha, bônus, troca de jogador, empate/desempate e revanche.
- Validação em aparelhos físicos e outros motores de navegador.

