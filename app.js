/* UI adapter: domain rules live in core.js, persistence in storage.js. */
(() => {
  'use strict';
  const C = QuizCore, bank = QuizQuestions, $ = id => document.getElementById(id);
  const duplicatePairs = C.duplicates(bank);
  let browserStorage;
  try { browserStorage = window.localStorage; } catch { browserStorage = {getItem() {throw new Error('Unavailable');}}; }
  let store = QuizStorage.open(browserStorage);
  let ownsSession = false;
  let sessionId=null;
  let level, selectedThemes, playerName = '', round = [], idx = 0, score = 0, hits = 0, answered = false, activeConfig;
  const labels = {facil: 'Fácil', medio: 'Médio', dificil: 'Difícil'};
  const themeLabels = {geral: 'Conhecimentos gerais', entretenimento: 'Entretenimento', atualidades: 'Atualidades e curiosidades'};
  function restorePreferences() {
    const prefs = store.data.preferences;
    level = prefs.level; selectedThemes = new Set(prefs.themes);
    $('name').value = prefs.name; $('period').value = String(prefs.period);
  }
  const config = () => ({player: store.data.activeProfileId || '', mode: 'individual', level, themes: [...selectedThemes].sort()});
  function show(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.toggle('active', s.id === id));
    const target = id === 'game' ? $('question') : id === 'start' ? $('name') : $('resultTitle');
    target.setAttribute('tabindex', '-1'); target.focus();
    // Inputs must remain in the normal keyboard tab order.
    if (target === $('name')) target.removeAttribute('tabindex');
  }
  function notice() {
    $('storageNotice').hidden = store.messages.length === 0 && ownsSession;
    $('storageNotice').textContent = store.messages.join(' ') + (!ownsSession && navigator.locks ? ' Aguardando acesso exclusivo: feche outras abas do Quiz Mania para jogar nesta aba.' : '');
    $('recoverData').hidden = !store.blocked;
    $('startButton').disabled = store.blocked || !ownsSession;
    $('shortRound').disabled = store.blocked || !ownsSession;
    $('resetHistory').disabled = !ownsSession;
    $('recoverData').disabled = !ownsSession;
    $('battleMenu').disabled=store.blocked||!ownsSession;
    $('statsMenu').disabled=store.blocked||!ownsSession;
  }
  function persistPreferences() {
    if (!store.blocked && ownsSession) {
      const profile = store.data.profiles.find(p => p.id === store.data.activeProfileId);
      if (profile && $('name').value.trim()) profile.name = $('name').value.trim();
      store.data.preferences = {name: $('name').value.trim(), level, themes: [...selectedThemes], period: $('period').value === 'cycle' ? 'cycle' : Number($('period').value)};
      store.save();
    }
    updateMenu();
  }
  function updateMenu() {
    notice();
    $('profile').replaceChildren();
    const draft = document.createElement('option'); draft.value=''; draft.textContent='Novo jogador'; $('profile').append(draft);
    store.data.profiles.forEach((p,i)=>{const option=document.createElement('option');option.value=p.id;option.textContent=`${p.name} · Perfil ${i+1}`;$('profile').append(option);});
    $('profile').value=store.data.activeProfileId || '';
    $('profile').disabled=store.blocked || !ownsSession;
    $('newProfile').disabled=store.blocked || !ownsSession;
    document.querySelectorAll('.level').forEach(b => {
      b.classList.toggle('selected', b.dataset.level === level); b.setAttribute('aria-pressed', String(b.dataset.level === level));
    });
    document.querySelectorAll('.theme').forEach(b => {
      b.classList.toggle('selected', selectedThemes.has(b.dataset.theme)); b.setAttribute('aria-pressed', String(selectedThemes.has(b.dataset.theme)));
    });
    const d = C.diagnostics(bank, store.data, config(), Date.now(), duplicatePairs);
    $('cycleInfo').textContent = `${selectedThemes.size} temas selecionados · ${d.remaining} perguntas disponíveis · ${d.blocked} bloqueadas`;
    $('diagnostics').replaceChildren();
    const overview = document.createElement('p');
    const excluded=bank.filter(q=>!C.editorialEligible(q)).length;
    overview.textContent = `Configuração atual: ${d.total} aptas no banco, ${d.blocked} bloqueadas, ${d.remaining} restantes. Excluídas por validade ou verificação no banco completo: ${excluded}. Alertas de semelhança para revisão: ${d.duplicates.length}.`;
    $('diagnostics').append(overview);
    for (const pair of d.duplicates) {
      const line = document.createElement('p'); line.textContent = `${pair.ids.join(' / ')}: ${pair.reason}`; $('diagnostics').append(line);
    }
    const low = document.createElement('p'); low.textContent = d.lowThemes.length ? 'Temas com menos de 10 disponíveis neste nível: ' + d.lowThemes.map(t => `${themeLabels[t.theme]} (${t.count})`).join(', ') : 'Todos os temas possuem ao menos 10 perguntas disponíveis neste nível.';
    $('diagnostics').append(low);
    if (d.expiration) {
      const exp = document.createElement('p');
      exp.className = 'expiration-notice';
      exp.setAttribute('role', 'status');
      exp.setAttribute('aria-live', 'polite');
      const nearest = d.expiration.nearest;
      const topicInfo = d.expiration.topics.map(t => `${themeLabels[t.topic] || t.topic}: ${t.count} ${t.count===1?'pergunta':'perguntas'} (${t.days} dias)`).join('; ');
      exp.textContent = `Validade: ${topicInfo}. Próxima expiração em ${nearest.days} dias (${nearest.expiresAt.slice(0,10)}).`;
      $('diagnostics').append(exp);
    }
    const best = Object.hasOwn(store.data.best, C.playerId(config().player)) ? store.data.best[C.playerId(config().player)][level] || 0 : 0;
    const legacy = store.data.legacy.best[level];
    $('best').textContent = `Recorde pessoal neste nível: ${best} pontos.` + (legacy !== undefined ? ` Recorde legado compartilhado: ${legacy} pontos.` : '');
    $('shortage').hidden = d.remaining >= 10 && !store.blocked;
    $('shortageText').textContent = store.blocked ? 'Resolva o problema de armazenamento antes de iniciar.' : `${d.remaining} perguntas disponíveis para uma rodada de 10. Selecione mais temas, mude o nível ou confirme uma rodada reduzida. O histórico só pode ser reiniciado com confirmação nas configurações.`;
    $('shortRound').hidden = d.remaining === 0 || d.remaining >= 10 || store.blocked;
    $('shortRound').textContent = `Jogar somente ${d.remaining} perguntas nesta rodada`;
  }
  function startGame(count = 10) {
    if (store.blocked || !ownsSession) { show('start'); updateMenu(); return; }
    if (!$('name').reportValidity() || !$('name').value.trim()) { $('name').focus(); return; }
    if (!store.data.activeProfileId) {
      try {QuizStorage.createProfile(store.data,$('name').value.trim());} catch {store.messages.push('Não foi possível criar um identificador seguro para o jogador.');updateMenu();return;}
      if (!store.save()) {updateMenu();return;}
    }
    activeConfig = config(); playerName = $('name').value.trim();
    const selection = C.select(bank, store.data, activeConfig, count);
    if (!selection.ok) { show('start'); updateMenu(); return; }
    persistPreferences();
    if (store.blocked) return;
    round = selection.questions; idx = score = hits = 0;
    sessionId=QuizStatistics.start(store.data,activeConfig,[activeConfig.player],count).id;
    if(!store.save()){updateMenu();return;}
    $('player').textContent = playerName; $('levelLabel').textContent = labels[level];
    renderQuestion();
  }
  function renderQuestion() {
    const q = round[idx];
    // Recheck after elapsed time and before presentation; never use another tab's stale history.
    store = QuizStorage.open(browserStorage);
    if (store.blocked || !C.available(bank, store.data, activeConfig).remaining.some(item => item.id === q.id)) {
      show('start'); updateMenu(); return;
    }
    C.presented(store.data, activeConfig, q);
    if (!store.save()) { show('start'); updateMenu(); return; }
    answered = false;
    $('count').textContent = `Pergunta ${idx + 1} de ${round.length}`;
    $('bar').style.width = `${(idx + 1) / round.length * 100}%`;
    $('liveScore').textContent = `${score} pontos`; $('category').textContent = q.c; $('question').textContent = q.q;
    $('feedback').textContent = ''; $('feedback').className = 'feedback'; $('next').classList.remove('show'); $('options').replaceChildren();
    q.o.forEach((text, i) => {
      const b = document.createElement('button'); b.className = 'option';
      const letter = document.createElement('span'); letter.className = 'letter'; letter.textContent = String.fromCharCode(65 + i);
      const label = document.createElement('span'); label.textContent = text;
      b.append(letter, label); b.onclick = () => answer(i); $('options').append(b);
    });
    show('game'); notice();
  }
  function answer(choice) {
    if (answered || store.blocked) return;
    answered = true;
    const q = round[idx], buttons = [...$('options').children];
    QuizStatistics.answer(store.data,sessionId,activeConfig.player,q,choice===q.a,choice===q.a?C.points[level]:0,idx);
    if(!store.save()){show('start');updateMenu();return;}
    buttons.forEach((button, i) => {button.disabled = true; if (i === q.a) button.classList.add('correct');});
    if (choice === q.a) {
      score += C.points[level]; hits++;
      $('feedback').textContent = `Acertou! +${C.points[level]} pontos`; $('feedback').className = 'feedback good';
    } else {
      buttons[choice].classList.add('wrong'); $('feedback').textContent = 'A resposta correta é: ' + q.o[q.a]; $('feedback').className = 'feedback bad';
    }
    const explanation=document.createElement('p');explanation.textContent=q.explanation;$('feedback').append(explanation);
    if(q.source){const source=document.createElement('a');source.href=q.source.url;source.target='_blank';source.rel='noopener noreferrer';source.textContent=q.source.name;$('feedback').append(source);}
    const verification=document.createElement('p');verification.textContent=`Verificada em ${q.verifiedAt.slice(0,10)} · revisão até ${q.expiresAt.slice(0,10)}.`;$('feedback').append(verification);
    $('liveScore').textContent = `${score} pontos`;
    $('next').textContent = idx === round.length - 1 ? 'Ver resultado' : 'Próxima pergunta'; $('next').classList.add('show'); $('next').focus();
  }
  function finish() {
    store = QuizStorage.open(browserStorage);
    if (store.blocked) {show('start'); updateMenu(); return;}
    const best = C.recordGame(store.data, activeConfig, score, hits, round.length);
    store.data.games.at(-1).sessionId=sessionId;
    QuizStatistics.close(store.data,sessionId);
    if (!store.save()) {show('start'); updateMenu(); return;}
    const ratio = hits / round.length;
    $('finalScore').textContent = score; $('hits').textContent = `${hits}/${round.length}`; $('bestResult').textContent = best;
    $('ring').style.setProperty('--pct', `${ratio * 100}%`); $('trophy').textContent = ratio >= .8 ? '🏆' : ratio >= .5 ? '⭐' : '🧠';
    $('resultTitle').textContent = `${ratio >= .8 ? 'Excelente' : ratio >= .5 ? 'Mandou bem' : 'Continue tentando'}, ${playerName}!`;
    $('resultMsg').textContent = `Você acertou ${hits} de ${round.length} no nível ${labels[level]}.`;
    show('result');
  }
  document.querySelectorAll('.level').forEach(b => b.onclick = () => {level = b.dataset.level; persistPreferences();});
  document.querySelectorAll('.theme').forEach(b => b.onclick = () => {
    selectedThemes.has(b.dataset.theme) ? selectedThemes.delete(b.dataset.theme) : selectedThemes.add(b.dataset.theme); persistPreferences();
  });
  $('allThemes').onclick = () => {selectedThemes = new Set(QuizStorage.THEMES); persistPreferences();};
  $('clearThemes').onclick = () => {selectedThemes.clear(); persistPreferences();};
  $('name').oninput = persistPreferences; $('period').onchange = persistPreferences;
  $('newProfile').onclick=()=>{
    if(store.blocked||!ownsSession)return;
    store.data.activeProfileId=null;store.data.preferences.name='';$('name').value='';store.save();updateMenu();$('name').focus();
  };
  $('profile').onchange=()=>{
    if(store.blocked||!ownsSession)return;
    store.data.activeProfileId=$('profile').value||null;
    $('name').value=store.data.profiles.find(p=>p.id===store.data.activeProfileId)?.name||'';
    persistPreferences();
  };
  $('startForm').onsubmit = e => {e.preventDefault(); startGame();};
  $('shortRound').onclick = () => {
    const count = Math.min(9, C.select(bank, store.data, config(), 1).available);
    if (count > 0) startGame(count);
  };
  $('next').onclick = () => {if (!answered) return; answered = false; idx++; idx < round.length ? renderQuestion() : finish();};
  $('again').onclick = () => startGame();
  $('home').onclick = () => {show('start'); updateMenu();};
  $('quit').onclick = () => {
    if (confirm('Encerrar esta partida? Perguntas já exibidas continuarão bloqueadas.')) {QuizStatistics.close(store.data,sessionId,'abandoned');store.save();round = []; show('start'); updateMenu();}
  };
  $('resetHistory').onclick = () => {
    if (store.blocked || !ownsSession || !config().player) return;
    if (confirm('Reiniciar o histórico deste jogador, nível e conjunto de temas? As perguntas voltarão a ficar disponíveis. Registros legados desta configuração, compartilhados entre jogadores, também serão liberados. Recordes e partidas serão preservados.')) {
      C.resetHistory(store.data, config()); store.save(); updateMenu();
    }
  };
  $('exportData').onclick = () => {
    try {
      const url = URL.createObjectURL(new Blob([store.exportRaw()], {type: 'application/json'}));
      const link = document.createElement('a'); link.href = url; link.download = 'quiz-mania-dados.json'; link.click(); setTimeout(() => URL.revokeObjectURL(url), 1000);
    } catch {alert('Não foi possível acessar os dados para exportação.');}
  };
  $('recoverData').onclick = () => {
    if (!ownsSession) return;
    if (confirm('Arquivar os dados atuais e criar uma base vazia? Exporte os dados primeiro. Os dados antigos serão arquivados no navegador; recordes e histórico da base inválida deixarão de estar ativos.')) {
      if (store.recover()) restorePreferences(); updateMenu();
    }
  };
  window.addEventListener('storage', e => {
    if (e.key === QuizStorage.KEY || e.key === null) {
      round = []; answered = false; store = QuizStorage.open(browserStorage);
      restorePreferences(); show('start'); updateMenu();
      $('storageNotice').hidden = false; $('storageNotice').textContent += ' Dados alterados em outra aba. A partida foi interrompida para evitar sobrescrita; confira a configuração antes de continuar.';
    }
  });
  restorePreferences(); updateMenu();
  if (navigator.locks) {
    navigator.locks.request('quiz-mania-session', async () => {
      ownsSession = true; store = QuizStorage.open(browserStorage);
      if(!store.blocked){QuizStatistics.interrupt(store.data);store.save();}
      restorePreferences(); updateMenu();
      await new Promise(() => {}); // Released by the browser when this page closes/reloads.
    }).catch(() => {
      store.messages.push('Não foi possível obter acesso exclusivo. Recarregue a página.'); updateMenu();
    });
  } else {
    store.messages.push('Web Locks está indisponível neste navegador ou endereço. Abra o jogo por HTTPS em um navegador compatível (ou por localhost no computador). Fechar outras abas não resolve esta incompatibilidade.'); updateMenu();
  }
  QuizExtras.mount({getStore:()=>store,reopen:()=>store=QuizStorage.open(browserStorage),allowed:()=>ownsSession&&!store.blocked,home:()=>{store=QuizStorage.open(browserStorage);restorePreferences();show('start');updateMenu();},bank});
})();
