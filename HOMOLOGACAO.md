# Homologação final — Quiz Mania

> Identificadores ambientais foram substituídos por exemplos genéricos. Endereços, modelo de aparelho e PID abaixo não identificam o ambiente real; não execute comandos com o PID de exemplo.

Data: 14/09/2026. Pasta exclusiva: `C:\Users\USUARIO\Projetos\quiz-mania-mobile`.

## Resultado e endereços

Prévia iniciada e mantida em execução: **http://127.0.0.1:4173** (também http://localhost:4173). Servidor padrão, limitado ao próprio computador. Sem alteração nos arquivos da aplicação.

O IPv4 Wi-Fi identificado é `192.0.2.10`. O endereço esperado para a mesma rede seria **http://192.0.2.10:4173**, mas **não está habilitado para acesso pelo celular**. A revisão automática rejeitou a tentativa de abrir a prévia em todas as interfaces, pelo risco de expor arquivos da aplicação a outros dispositivos. A tentativa não iniciou o servidor de rede; não foi feito contorno da rejeição. Nenhuma regra de firewall foi alterada.

Além disso, HTTP por IP de rede normalmente não fornece o contexto seguro necessário a Web Locks. O comportamento do aplicativo sem essa API foi confirmado por simulação: partidas bloqueadas. Portanto, liberar a escuta de rede por si só não resolve a homologação física. Proposta sujeita a autorização: preparar HTTPS local confiável e acesso restrito à rede/dispositivo de homologação, sem publicação e sem remover a proteção de concorrência. O endereço HTTPS só poderá ser informado como utilizável após configuração e teste.

## Testes executados

Chrome automatizado em contextos isolados, preservando os dados do navegador pessoal. Reexecutados os 33 cenários da aplicação, com modos Individual e Batalha. Acrescentados dois cenários de homologação na prévia de porta 4173: toque emulado, resposta individual, estatísticas após recarga, navegação para fora e retorno, e ausência de transbordamento horizontal do documento em 390×844 e 844×390.

**35 cenários aprovados; zero cenários funcionais reprovados.** Uma verificação adicional confirmou a limitação de ausência de Web Locks. A meta de acesso por celular na rede está **bloqueada/não homologada**, e não deve ser contada como aprovada. Os 71 testes de lógica aprovados na Etapa 5 não foram repetidos nesta etapa curta e não entram no total 35.

Os cenários anteriores verificam criação, seleção, renomeação, homônimos por UUID, temas e dificuldades, ausência de reinício silencioso, filtros insuficientes, estatísticas, privacidade, troca de jogador, pontos, bônus, empate e múltiplos desempates, revanche, recarga, abandono, teclado e layouts. Console e exceções JavaScript monitorados: nenhum erro nos cenários. Armazenamento validado em perfis isolados, incluindo migração, corrupção, quota, concorrência, respostas pendentes e persistência após recarga.

Toque emulado não comprova toque em aparelho físico. Navegar para fora e retornar não comprova todos os comportamentos de gestos de voltar ou suspensão do sistema operacional. Bloqueio e desbloqueio físicos da tela não foram executados.

### Cenários anteriores reexecutados

- PASS: fluxo completo: dez acertos, recorde, histórico, redução e reinício confirmado
- PASS: resposta bloqueada: cliques repetidos não duplicam pontos
- PASS: pontuação e recorde no nível medio
- PASS: pontuação e recorde no nível dificil
- PASS: abandono/reload: apenas pergunta exibida fica bloqueada; outro jogador separado
- PASS: migração no navegador e escolha de prazo persistente
- PASS: JSON corrompido: menu abre, original preservado, recuperação requer confirmação
- PASS: quota indisponível bloqueia partida sem erro de console
- PASS: duas abas: a segunda aguarda e assume após fechar a primeira
- PASS: layout small-portrait: menu, partida e resultado sem overflow
- PASS: layout large-portrait: menu, partida e resultado sem overflow
- PASS: layout landscape: menu, partida e resultado sem overflow
- PASS: layout desktop: menu, partida e resultado sem overflow
- PASS: teclado e movimento reduzido
- PASS: abertura direta file:// preservada e rodada concluída
- PASS: dois Alexis no navegador: selecionar, renomear e separar históricos
- PASS: explicação e fonte visíveis; expiração entre perguntas interrompe rodada
- PASS: batalha: DOM, ARIA, foco e aparência do segundo independem das quatro escolhas
- PASS: batalha: placar, bônus de três, alternância, estatísticas e revanche
- PASS: batalha: empate e duas perguntas extras até vencedor
- PASS: batalha: banco insuficiente no desempate, sem repetir nem inventar vencedor
- PASS: batalha: recarga em handoff preserva bloqueios e interrompe com segurança
- PASS: batalha: recarga em first-answer preserva bloqueios e interrompe com segurança
- PASS: batalha: recarga em second-answer preserva bloqueios e interrompe com segurança
- PASS: batalha: recarga em reveal preserva bloqueios e interrompe com segurança
- PASS: batalha: abandono explícito requer confirmação e não libera perguntas
- PASS: batalha: cria homônimos, recusa mesmo UUID e respeita assuntos
- PASS: estatísticas: resposta individual abandonada aparece por UUID e por assunto
- PASS: batalha: expiração na troca protege a escolha pendente
- PASS: batalha: reinício explícito preserva estatísticas e bloqueios individuais
- PASS: batalha e estatísticas: layout e teclado em mobile
- PASS: batalha e estatísticas: layout e teclado em desktop
- PASS: nenhum erro de JavaScript ou recurso no console

## Defeitos e limitações

### H-01 — Alta para homologação física: acesso LAN indisponível

Reprodução: iniciar `node tools/serve.cjs`; o processo escuta apenas `127.0.0.1:4173`. Um celular não pode acessar esse endereço do computador. Mesmo uma prévia HTTP por IP depende de uma API restrita a contexto seguro.

Impacto: impede confirmar os fluxos em celular pela rede nesta sessão. Não é falha dos modos no computador. A ausência de Web Locks foi simulada removendo a API antes de carregar o aplicativo: início permaneceu desabilitado.

Correção proposta: prévia HTTPS local confiável, com escuta e acesso restritos adequados ao teste, mantendo Web Locks. Requer autorização e configuração; nenhuma alteração aplicada.

### H-02 — Baixa: orientação ambígua quando Web Locks não existe

Reprodução: carregar a aplicação com `navigator.locks` indisponível. A mensagem informa falta de bloqueio seguro e também “Aguardando acesso exclusivo: feche outras abas do Quiz Mania para jogar nesta aba.”

Impacto: fechar abas não resolve a incompatibilidade da API, podendo orientar o usuário incorretamente.

Correção proposta: separar a mensagem de navegador/contexto incompatível da mensagem de disputa de acesso entre abas. Não aplicada.

### Limitações já conhecidas

- Relógio e armazenamento são locais; limpeza dos dados e alteração do relógio afetam histórico e validade.
- Filtros restritos e desempates podem esgotar o banco; a mensagem foi testada, sem repetição automática nem vencedor inventado.
- Tabelas estatísticas podem ter rolagem horizontal interna acessível. Não houve rolagem horizontal do documento nos tamanhos testados. Se a exigência for eliminar também a rolagem interna, isso requer decisão de interface separada.
- Recarga abandona a batalha; a primeira escolha secreta não é restaurada. Resultados já confirmados permanecem, e respostas pendentes não recebem resultado fabricado.
- Android/iOS físicos, toque real, suspensão, bloqueio de tela e retorno pelo sistema continuam não homologados.

## Roteiro para celular físico — pendente de acesso compatível

Após disponibilizar uma prévia local compatível, conectar computador e celular ao mesmo Wi-Fi e manter o computador e servidor ativos. Executar em retrato e repetir em paisagem:

1. Criar dois jogadores chamados Alexis; alternar entre eles, renomear um, recarregar e verificar nomes, seleção e históricos independentes.
2. Jogar Individual em dificuldades e temas diferentes; responder, voltar ao menu e atualizar. Conferir estatísticas e perguntas já vistas na mesma configuração.
3. Selecionar um filtro restrito no Batalha e pedir mais perguntas do que existem. Conferir aviso; não deve reiniciar o histórico sozinho.
4. Iniciar batalha com dois perfis distintos. Após a primeira escolha, entregar o celular: não deve haver pista por cor, foco, texto ou opção marcada. Revelar somente depois da segunda resposta.
5. Fazer três acertos seguidos e conferir bônus de dez pontos; conferir alternância. Produzir empate, responder extras e tentar revanche, verificando configuração e histórico.
6. Tocar em todos os controles sem duplo acionamento. Girar o aparelho em menu, pergunta, entrega e revelação. Verificar texto cortado, botões inacessíveis e rolagem horizontal da página; distinguir a rolagem interna das tabelas.
7. Atualizar durante a entrega inicial, depois da primeira resposta e após revelação. Conferir abandono seguro e estatísticas confirmadas preservadas.
8. Testar o botão do aplicativo para voltar, o voltar do navegador e o gesto do sistema. Bloquear/desbloquear a tela antes e depois da primeira resposta; conferir que nenhuma escolha secreta é revelada e nenhum ponto é duplicado. Se o sistema descartar a página, esperar o comportamento de recarga/abandono.
9. Registrar modelo, sistema, navegador, orientação, passos, resultado esperado/observado e capturas de qualquer problema. Não limpar o armazenamento antes de exportar os dados de teste.

Para console e armazenamento do aparelho será necessária inspeção remota adequada ao sistema ou evidências coletadas no dispositivo. Essa observação não foi realizada nesta sessão.

## Evidências e estado completo do Git

Evidências locais: `test-results/browser-results.json`, `test-results/homologacao-extra.json`, capturas `homologacao-retrato.png` e `homologacao-paisagem.png`, além das capturas da bateria anterior. Os testes extras estão em `test-results/homologacao-extra.cjs`; não alteram recursos da aplicação.

```text
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md
	modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore
	CHANGELOG.md
	HOMOLOGACAO.md
	REPORT.md
	app.js
	battle.js
	core.js
	editorial/SOURCES.md
	editorial/additions.json
	editorial/batch-1.json
	editorial/batch-2.json
	editorial/batch-3.json
	editorial/batch-4.json
	editorial/review.json
	editorial/similarity-review.json
	editorial/sources.json
	editorial/stage5-sources.json
	editorial/stage5-summary.json
	editorial/stage5.tsv
	editorial/summary.json
	extras.js
	package.json
	questions.js
	statistics.js
	storage.js
	styles.css
	tests/baseline.test.js
	tests/battle-browser.cjs
	tests/browser.cjs
	tests/core.test.js
	tests/fixtures/legacy.html
	tests/fixtures/stage3-bank.cjs
	tests/fixtures/stage4-bank.cjs
	tests/stage4.test.js
	tests/stage5.test.js
	tools/build-bank.cjs
	tools/build-stage5-bank.cjs
	tools/report-stage4.cjs
	tools/serve.cjs

no changes added to commit (use "git add" and/or "git commit -a")

```

HEAD preservado: `7d3eb05be44dc44f78aecaa3fd127529c275ffd2`. Este relatório é o único novo documento fora das evidências ignoradas. Sem correção de defeitos, staging, commit, push, PR, deploy ou publicação. A homologação no computador terminou; a física permanece pendente. Correções, commit local, envio ao GitHub e atualização do site exigem autorizações independentes.


# Atualização — preparação móvel via Tailscale Serve

## Resultado atual

A limitação H-01 de acesso à prévia foi resolvida para preparação: HTTPS validado no computador, com Web Locks disponível. Homologação física permanece pendente. H-02 foi corrigido exclusivamente na mensagem: a orientação para fechar outras abas não aparece quando a API está indisponível. O bloqueio de segurança permanece.

**URL exata: https://quiz.example.invalid:8443/**

O Tailscale Serve encaminha HTTPS 8443 para `http://127.0.0.1:4173`. A configuração não contém `AllowFunnel`; o comando confirmou “Available within your tailnet”. O serviço existente em HTTPS 443, encaminhado para 8765, foi preservado. Acesso restrito a dispositivos autenticados/autorizados pela rede Tailscale e suas regras; não há acesso público por Funnel. Não foi feita auditoria das ACLs da conta nem teste externo de invasão. Referência: [documentação oficial do Serve](https://tailscale.com/docs/features/tailscale-serve).

O domínio HTTPS já estava habilitado. Nenhum programa ou certificado foi instalado no Windows ou celular. Nenhuma porta de roteador ou regra permanente de firewall foi alterada. O servidor da aplicação continua vinculado exclusivamente a `127.0.0.1`, confirmado na porta 4173. Apenas os arquivos públicos da aplicação permitidos por `tools/serve.cjs` são servidos; não foi exposta uma listagem do projeto.

## Arquivos modificados nesta autorização

- `app.js`: texto de incompatibilidade e condição que impede acrescentar a falsa espera por outra aba quando Web Locks não existe.
- `tests/browser.cjs`: regressão para ausência de Web Locks, orientação HTTPS, ausência de mensagem de espera e manutenção do bloqueio de Individual e Batalha.
- `HOMOLOGACAO.md`: este registro e instruções de homologação.
- Evidências ignoradas pelo Git em `test-results/`: configuração Serve anterior e atual, teste HTTPS, resultados e estado completo do Git.

Nenhuma outra correção ou melhoria foi implementada. A configuração temporária do Tailscale foi feita pelo CLI do programa já instalado, conforme autorização; nenhum outro projeto foi editado.

## Testes atuais

- `npm run test:browser`: **34 cenários aprovados, zero reprovados**, incluindo a nova regressão de mensagem e o teste existente de espera real entre abas.
- Chrome na URL HTTPS exata: **um teste aprovado**, certificado aceito sem ignorar erros TLS, `isSecureContext = true`, `navigator.locks` disponível e rodada individual iniciada.
- Total desta preparação: **35 cenários aprovados**, nenhum erro de console/JavaScript.
- Resposta HTTP 200 pela URL HTTPS e servidor escutando somente no loopback confirmados.
- `git diff --check`: aprovado, apenas avisos de normalização LF/CRLF.
- Teste físico ainda não executado. O celular de teste cadastrado estava offline na consulta.

## Como homologar no celular

1. Ativar o Tailscale no celular com a conta da mesma tailnet. Manter computador ligado, Tailscale conectado e servidor ativo. Abrir a URL HTTPS acima no Chrome. Não é necessário usar o IP Wi-Fi. Se o sistema exigir instalar aplicativo ou certificado, interromper e consultar; esta preparação não instalou nada.
2. Em retrato, criar dois perfis com o mesmo nome; selecionar, renomear um e recarregar. Conferir identidades e históricos independentes. Dados do endereço localhost não são automaticamente transferidos para a origem HTTPS, nem entre computador e celular.
3. Testar Individual com temas e dificuldades diferentes; responder, recarregar e conferir estatísticas. Repetir a mesma configuração e verificar bloqueio de perguntas vistas. Não confirmar reinício de histórico durante esse teste.
4. No Batalha, selecionar dois UUIDs distintos, temas, dificuldade e quantidade. Usar um filtro restrito para conferir mensagem de banco insuficiente.
5. Responder como primeiro jogador e entregar o aparelho. Antes da segunda resposta não pode haver pista da escolha anterior. Conferir revelação conjunta, alternância, pontos, bônus a cada três acertos, empate, perguntas extras e revanche.
6. Repetir em paisagem. Verificar toque, botões, texto e ausência de rolagem horizontal da página. As tabelas podem rolar internamente.
7. Atualizar, usar voltar do aplicativo/navegador e bloquear/desbloquear a tela nas fases de entrega, primeira resposta e revelação. Recarga deve abandonar a batalha sem revelar escolha pendente nem duplicar pontuação; estatísticas confirmadas devem persistir.
8. Registrar modelo, Android/iOS, versão do navegador, orientação e passos de qualquer defeito. Não considerar suspensão física homologada pelos testes automatizados do computador.

## Encerrar e remover somente esta prévia

Primeiro remover o encaminhamento temporário:

```powershell
tailscale serve --https=8443 off
tailscale serve status
```

Não usar `tailscale serve reset`: isso apagaria também a configuração preexistente na porta 443. O comando `off` acima remove apenas a prévia 8443.

Depois encerrar o servidor Node. Se iniciado em um terminal visível, usar Ctrl+C nesse terminal. Nesta sessão o processo verificado foi PID **12345**. Antes de encerrá-lo em PowerShell, conferir que continua sendo este servidor:

```powershell
Get-CimInstance Win32_Process -Filter "ProcessId = 12345" | Select-Object ProcessId,Name,CommandLine
Get-NetTCPConnection -State Listen -LocalPort 4173
```

Somente se o PID ainda corresponder a `node tools/serve.cjs` desta prévia e à porta 4173:

```powershell
Stop-Process -Id 12345
```

PIDs podem ser reutilizados: não executar o encerramento se a conferência não coincidir. Para iniciar novamente a prévia posteriormente, executar `node tools/serve.cjs` dentro da pasta do projeto e reativar Serve 8443 apenas quando desejado. O Serve foi iniciado com `--bg`, portanto precisa do comando `off` ao finalizar; fechar o navegador não o remove.

## Estado completo do Git após esta preparação

```text
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.md
	modified:   index.html

Untracked files:
  (use "git add <file>..." to include in what will be committed)
	.gitignore
	CHANGELOG.md
	HOMOLOGACAO.md
	REPORT.md
	app.js
	battle.js
	core.js
	editorial/SOURCES.md
	editorial/additions.json
	editorial/batch-1.json
	editorial/batch-2.json
	editorial/batch-3.json
	editorial/batch-4.json
	editorial/review.json
	editorial/similarity-review.json
	editorial/sources.json
	editorial/stage5-sources.json
	editorial/stage5-summary.json
	editorial/stage5.tsv
	editorial/summary.json
	extras.js
	package.json
	questions.js
	statistics.js
	storage.js
	styles.css
	tests/baseline.test.js
	tests/battle-browser.cjs
	tests/browser.cjs
	tests/core.test.js
	tests/fixtures/legacy.html
	tests/fixtures/stage3-bank.cjs
	tests/fixtures/stage4-bank.cjs
	tests/stage4.test.js
	tests/stage5.test.js
	tools/build-bank.cjs
	tools/build-stage5-bank.cjs
	tools/report-stage4.cjs
	tools/serve.cjs

no changes added to commit (use "git add" and/or "git commit -a")

```

Branch e HEAD preservados. Sem staging, commit, push, PR, deploy ou publicação pública. Preparação encerrada aguardando homologação física; demais ações continuam sujeitas a autorizações separadas.

