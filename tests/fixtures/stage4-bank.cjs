// Permanent IDs: editorial review in editorial/. Never renumber.
(function(root){
 const questions = [
  {
    "c": "Geografia",
    "q": "Qual é a capital do Brasil?",
    "o": [
      "Rio de Janeiro",
      "Brasília",
      "São Paulo",
      "Salvador"
    ],
    "a": 1,
    "t": "geral",
    "id": "facil-g-0",
    "level": "facil",
    "factId": "facil-g-0",
    "topic": "geografia",
    "explanation": "Brasília é a capital federal desde 1960.",
    "source": {
      "name": "IBGE — Brasília",
      "url": "https://www.ibge.gov.br/cidades-e-estados/df.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Ciências",
    "q": "Qual planeta é conhecido como Planeta Vermelho?",
    "o": [
      "Vênus",
      "Júpiter",
      "Marte",
      "Mercúrio"
    ],
    "a": 2,
    "t": "geral",
    "id": "facil-g-1",
    "level": "facil",
    "factId": "facil-g-1",
    "topic": "ciencia",
    "explanation": "Marte recebe esse apelido pela aparência avermelhada.",
    "source": {
      "name": "NASA — Planet sizes",
      "url": "https://science.nasa.gov/solar-system/planet-sizes-and-locations-in-our-solar-system/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "História",
    "q": "Quem proclamou a Independência do Brasil?",
    "o": [
      "Dom Pedro I",
      "Tiradentes",
      "Dom Pedro II",
      "Deodoro da Fonseca"
    ],
    "a": 0,
    "t": "geral",
    "id": "facil-g-2",
    "level": "facil",
    "factId": "facil-g-2",
    "topic": "historia",
    "explanation": "Dom Pedro I proclamou a independência em 7 de setembro de 1822.",
    "source": {
      "name": "Biblioteca Nacional — Independência",
      "url": "https://bndigital.bn.gov.br/dossies/gramaticas-e-dicionarios-do-portugues/linha-do-tempo/sobre-as-efemerides/1822-independencia-do-brasil/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Esportes",
    "q": "No futebol de campo, qual é o número máximo de jogadores de cada equipe em campo, incluindo o goleiro, pela regra IFAB consultada em setembro de 2026?",
    "o": [
      "9",
      "10",
      "11",
      "12"
    ],
    "a": 2,
    "t": "geral",
    "id": "facil-g-3",
    "level": "facil",
    "factId": "facil-g-3",
    "topic": "futebol",
    "explanation": "O limite é de onze jogadores por equipe, incluindo o goleiro.",
    "source": {
      "name": "IFAB — Law 3",
      "url": "https://www.theifab.com/laws/latest/the-players/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "c": "Natureza",
    "q": "Qual é o maior animal do planeta?",
    "o": [
      "Elefante-africano",
      "Baleia-azul",
      "Tubarão-branco",
      "Girafa"
    ],
    "a": 1,
    "t": "geral",
    "id": "facil-g-4",
    "level": "facil",
    "factId": "facil-g-4",
    "topic": "ciencia",
    "explanation": "A baleia-azul é o maior animal conhecido.",
    "source": {
      "name": "NOAA — Blue whale",
      "url": "https://www.fisheries.noaa.gov/species/blue-whale"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual periférico move o ponteiro quando é deslizado sobre uma superfície?",
    "o": [
      "Roteador",
      "Teclado",
      "Mouse",
      "Monitor"
    ],
    "a": 2,
    "t": "geral",
    "id": "facil-g-5",
    "level": "facil",
    "factId": "facil-g-5",
    "topic": "tecnologia",
    "explanation": "O mouse controla o deslocamento do ponteiro.",
    "source": {
      "name": "Microsoft — Mouse settings",
      "url": "https://support.microsoft.com/en-US/Windows/Hardware/Input-Devices/change-mouse-settings"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura",
    "q": "Qual personagem tem o nariz que cresce quando mente?",
    "o": [
      "Peter Pan",
      "Pinóquio",
      "Aladdin",
      "Shrek"
    ],
    "a": 1,
    "t": "geral",
    "id": "facil-g-6",
    "level": "facil",
    "factId": "facil-g-6",
    "topic": "geral",
    "explanation": "Na narrativa de Collodi, as mentiras fazem crescer o nariz de Pinóquio.",
    "source": {
      "name": "Collodi — Pinocchio, texto original",
      "url": "https://www.gutenberg.org/cache/epub/16865/pg16865-images.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Quanto é 7 × 8?",
    "o": [
      "54",
      "56",
      "58",
      "64"
    ],
    "a": 1,
    "t": "geral",
    "id": "facil-g-7",
    "level": "facil",
    "factId": "facil-g-7",
    "topic": "matematica",
    "explanation": "7 × 8 = 56, pela multiplicação de sete grupos de oito.",
    "source": null,
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Gênesis 6, quem construiu a arca antes do dilúvio?",
    "o": [
      "Moisés",
      "Abraão",
      "Noé",
      "Davi"
    ],
    "a": 2,
    "t": "geral",
    "id": "facil-g-8",
    "level": "facil",
    "factId": "facil-g-8",
    "topic": "biblia",
    "explanation": "Gênesis 6 apresenta Noé como o construtor da arca.",
    "source": {
      "name": "Gênesis 6 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Genesis+6&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Em qual continente fica a maior parte do território do Egito?",
    "o": [
      "África",
      "Ásia",
      "Europa",
      "Oceania"
    ],
    "a": 0,
    "t": "geral",
    "id": "facil-g-9",
    "level": "facil",
    "factId": "facil-g-9",
    "topic": "geografia",
    "explanation": "A maior parte fica na África; a península do Sinai fica na Ásia.",
    "source": {
      "name": "Egypt State Information Service",
      "url": "https://africa.sis.gov.eg/english/egypt/basic-information/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Ciências",
    "q": "Qual gás é essencial para a respiração humana?",
    "o": [
      "Hidrogênio",
      "Oxigênio",
      "Hélio",
      "Nitrogênio"
    ],
    "a": 1,
    "t": "geral",
    "id": "facil-g-10",
    "level": "facil",
    "factId": "facil-g-10",
    "topic": "ciencia",
    "explanation": "O oxigênio participa da respiração celular aeróbica.",
    "source": {
      "name": "OpenStax — Oxidative phosphorylation",
      "url": "https://openstax.org/books/biology-2e/pages/7-4-oxidative-phosphorylation"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Brasil",
    "q": "Quais são, respectivamente, as cores do campo retangular e do losango da bandeira brasileira?",
    "o": [
      "Azul e branco",
      "Verde e amarelo",
      "Amarelo e azul",
      "Branco e verde"
    ],
    "a": 1,
    "t": "geral",
    "id": "facil-g-11",
    "level": "facil",
    "factId": "facil-g-11",
    "topic": "cultura-brasileira",
    "explanation": "O campo é verde e o losango é amarelo; há também azul e branco.",
    "source": {
      "name": "Presidência — Bandeira nacional",
      "url": "https://www.gov.br/planalto/pt-br/conheca-a-presidencia/biblioteca-da-pr/simbolos-nacionais/bandeira/bandeira-nacional"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animais",
    "q": "Qual destes animais é um mamífero?",
    "o": [
      "Sapo",
      "Tartaruga",
      "Golfinho",
      "Tubarão"
    ],
    "a": 2,
    "t": "geral",
    "id": "facil-g-12",
    "level": "facil",
    "factId": "facil-g-12",
    "topic": "curiosidades",
    "explanation": "Golfinhos são cetáceos e pertencem aos mamíferos.",
    "source": {
      "name": "NOAA — Cetaceans",
      "url": "https://www.fisheries.noaa.gov/whales"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Literatura",
    "q": "Quem escreveu O Pequeno Príncipe?",
    "o": [
      "Monteiro Lobato",
      "Antoine de Saint-Exupéry",
      "Machado de Assis",
      "Júlio Verne"
    ],
    "a": 1,
    "t": "geral",
    "id": "facil-g-13",
    "level": "facil",
    "factId": "facil-g-13",
    "topic": "geral",
    "explanation": "Antoine de Saint-Exupéry é o autor de O Pequeno Príncipe.",
    "source": {
      "name": "Site oficial O Pequeno Príncipe",
      "url": "https://www.lepetitprince.com/en/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Filmes",
    "q": "Qual herói usa um escudo com uma estrela?",
    "o": [
      "Batman",
      "Capitão América",
      "Homem-Aranha",
      "Thor"
    ],
    "a": 1,
    "id": "facil-entretenimento-0",
    "level": "facil",
    "factId": "facil-entretenimento-0",
    "topic": "filmes",
    "explanation": "O escudo é um símbolo do Capitão América.",
    "source": {
      "name": "Marvel — Adamantium",
      "url": "https://www.marvel.com/items/adamantium"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Na primeira temporada de Stranger Things (2016), qual personagem é identificada pelo número 011?",
    "o": [
      "Max",
      "Robin",
      "Nancy",
      "Eleven"
    ],
    "a": 3,
    "id": "facil-entretenimento-1",
    "level": "facil",
    "factId": "facil-entretenimento-1",
    "topic": "series",
    "explanation": "Eleven, também chamada Onze, é a personagem identificada pelo número 011.",
    "source": {
      "name": "Netflix — Stranger Things",
      "url": "https://about.netflix.com/en/news/stranger-things-5-prepare-for-one-last-adventure-with-our-final-season"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2016"
  },
  {
    "t": "entretenimento",
    "c": "Cinema",
    "q": "Qual estúdio criou Toy Story?",
    "o": [
      "Pixar",
      "DreamWorks",
      "Paramount",
      "Warner Bros."
    ],
    "a": 0,
    "id": "facil-entretenimento-2",
    "level": "facil",
    "factId": "facil-entretenimento-2",
    "topic": "animacoes",
    "explanation": "Toy Story foi produzido pela Pixar e lançado em 1995.",
    "source": {
      "name": "Pixar — Our story",
      "url": "https://www.pixar.com/our-story"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Música",
    "q": "Qual cantora é conhecida pela música Shake It Off?",
    "o": [
      "Adele",
      "Taylor Swift",
      "Beyoncé",
      "Lady Gaga"
    ],
    "a": 1,
    "id": "facil-entretenimento-3",
    "level": "facil",
    "factId": "facil-entretenimento-3",
    "topic": "musica",
    "explanation": "Shake It Off faz parte do repertório de Taylor Swift.",
    "source": {
      "name": "Taylor Swift — Shake It Off (Taylor's Version)",
      "url": "https://www.youtube.com/watch?v=mvVBuG4IOW4"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Internet",
    "q": "Qual destas plataformas foi unificada ao musical.ly em 2018 para compartilhar vídeos curtos?",
    "o": [
      "LinkedIn",
      "TikTok",
      "Wikipedia",
      "Dropbox"
    ],
    "a": 1,
    "id": "facil-entretenimento-4",
    "level": "facil",
    "factId": "facil-entretenimento-4",
    "topic": "internet",
    "explanation": "O anúncio de 2018 descreve o TikTok como plataforma de vídeos curtos.",
    "source": {
      "name": "TikTok — Lançamento de 2018",
      "url": "https://newsroom.tiktok.com/musical-ly-and?lang=en"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2018"
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Qual família amarela vive na cidade de Springfield?",
    "o": [
      "Os Flintstones",
      "Os Simpsons",
      "Os Jetsons",
      "Os Addams"
    ],
    "a": 1,
    "id": "facil-entretenimento-5",
    "level": "facil",
    "factId": "facil-entretenimento-5",
    "topic": "series",
    "explanation": "Springfield é a cidade da família Simpson.",
    "source": {
      "name": "FOX — The Simpsons",
      "url": "https://assets.fox.com/shows/upfronts/assets/Simpsons%2C%20The.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Filmes",
    "q": "Qual é o nome do ogro verde dos cinemas?",
    "o": [
      "Shrek",
      "Hulk",
      "Grinch",
      "Yoda"
    ],
    "a": 0,
    "id": "facil-entretenimento-6",
    "level": "facil",
    "factId": "facil-entretenimento-6",
    "topic": "animacoes",
    "explanation": "Shrek é o ogro verde da franquia da DreamWorks.",
    "source": {
      "name": "DreamWorks — About",
      "url": "https://www.dreamworks.com/about"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Música",
    "q": "Qual instrumento normalmente possui seis cordas?",
    "o": [
      "Flauta",
      "Bateria",
      "Violão",
      "Piano"
    ],
    "a": 2,
    "id": "facil-entretenimento-7",
    "level": "facil",
    "factId": "facil-entretenimento-7",
    "topic": "musica",
    "explanation": "O violão convencional tem seis cordas; existem variantes.",
    "source": {
      "name": "Yamaha — Six strings",
      "url": "https://www.yamaha.com/en/musical_instrument_guide/acoustic_guitar/mechanism/mechanism002.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Internet",
    "q": "Qual símbolo costuma iniciar uma hashtag?",
    "o": [
      "@",
      "#",
      "&",
      "%"
    ],
    "a": 1,
    "id": "facil-entretenimento-8",
    "level": "facil",
    "factId": "facil-entretenimento-8",
    "topic": "internet",
    "explanation": "Uma hashtag começa com o sinal #.",
    "source": {
      "name": "X — Hashtags",
      "url": "https://help.x.com/en/using-x/how-to-use-hashtags"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Cinema",
    "q": "Em Frozen, quem é a irmã de Elsa?",
    "o": [
      "Moana",
      "Anna",
      "Ariel",
      "Merida"
    ],
    "a": 1,
    "id": "facil-entretenimento-9",
    "level": "facil",
    "factId": "facil-entretenimento-9",
    "topic": "animacoes",
    "explanation": "Anna e Elsa são irmãs na história de Frozen.",
    "source": {
      "name": "Disney — Frozen",
      "url": "https://movies.disney.com/frozen"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Atualidades 2026",
    "q": "Qual filme venceu o Oscar de Melhor Filme em 2026?",
    "o": [
      "Sinners",
      "Hamnet",
      "One Battle after Another",
      "F1"
    ],
    "a": 2,
    "id": "facil-atualidades-10",
    "level": "facil",
    "factId": "facil-atualidades-10",
    "topic": "atualidades",
    "explanation": "One Battle after Another ganhou Melhor Filme.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual destes animais é conhecido por mudar de cor?",
    "o": [
      "Camaleão",
      "Pinguim",
      "Golfinho",
      "Avestruz"
    ],
    "a": 0,
    "id": "facil-atualidades-11",
    "level": "facil",
    "factId": "facil-atualidades-11",
    "topic": "curiosidades",
    "explanation": "Camaleões mudam de cor, inclusive na comunicação e na regulação térmica.",
    "source": {
      "name": "San Diego Zoo — Chameleon",
      "url": "https://animals.sandiegozoo.org/animals/chameleon"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Internet",
    "q": "Qual aplicativo a Meta apresentou em julho de 2023 para conversas públicas por texto?",
    "o": [
      "Threads",
      "Pinterest",
      "Telegram",
      "Snapchat"
    ],
    "a": 0,
    "id": "facil-atualidades-12",
    "level": "facil",
    "factId": "facil-atualidades-12",
    "topic": "internet",
    "explanation": "A Meta apresentou o Threads em julho de 2023 para conversas por texto.",
    "source": {
      "name": "Meta — Introducing Threads, 2023",
      "url": "https://about.fb.com/news/2023/07/introducing-threads-new-app-text-sharing/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2023"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual é o único mamífero capaz de voo verdadeiro?",
    "o": [
      "Esquilo",
      "Morcego",
      "Coala",
      "Pinguim"
    ],
    "a": 1,
    "id": "facil-atualidades-13",
    "level": "facil",
    "factId": "facil-atualidades-13",
    "topic": "curiosidades",
    "explanation": "Morcegos realizam voo ativo; outros mamíferos podem planar.",
    "source": {
      "name": "San Diego Zoo — Bat",
      "url": "https://animals.sandiegozoo.org/animals/bat"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Cinema 2026",
    "q": "Quem venceu o Oscar de Melhor Ator em 2026 por Sinners?",
    "o": [
      "Michael B. Jordan",
      "Timothée Chalamet",
      "Leonardo DiCaprio",
      "Wagner Moura"
    ],
    "a": 0,
    "id": "facil-atualidades-14",
    "level": "facil",
    "factId": "facil-atualidades-14",
    "topic": "atualidades",
    "explanation": "Michael B. Jordan venceu por Sinners.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual destes metais é líquido a 20 °C e pressão de uma atmosfera?",
    "o": [
      "Ferro",
      "Mercúrio",
      "Cobre",
      "Alumínio"
    ],
    "a": 1,
    "id": "facil-atualidades-15",
    "level": "facil",
    "factId": "facil-atualidades-15",
    "topic": "curiosidades",
    "explanation": "O mercúrio é líquido a 20 °C e pressão atmosférica normal.",
    "source": {
      "name": "Royal Society of Chemistry — Mercury",
      "url": "https://periodic-table.rsc.org/element/80/mercury"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Séries",
    "q": "Qual série da Netflix tem a personagem Wednesday Addams?",
    "o": [
      "Wandinha",
      "Bridgerton",
      "Dark",
      "Cobra Kai"
    ],
    "a": 0,
    "id": "facil-atualidades-16",
    "level": "facil",
    "factId": "facil-atualidades-16",
    "topic": "series",
    "explanation": "Wednesday é o título original da série chamada Wandinha no Brasil.",
    "source": {
      "name": "Netflix — Wednesday",
      "url": "https://www.netflix.com/tudum/articles/wednesday-season-3-release-date"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Quantos corações possui um polvo?",
    "o": [
      "Um",
      "Dois",
      "Três",
      "Quatro"
    ],
    "a": 2,
    "id": "facil-atualidades-17",
    "level": "facil",
    "factId": "facil-atualidades-17",
    "topic": "curiosidades",
    "explanation": "Dois corações bombeiam para as brânquias e um para o restante do corpo.",
    "source": {
      "name": "Natural History Museum — Octopuses",
      "url": "https://www.nhm.ac.uk/discover/octopuses-keep-surprising-us-here-are-eight-examples-how.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Internet",
    "q": "Na apresentação do Threads pela Meta em julho de 2023, o Instagram integra os produtos de qual empresa?",
    "o": [
      "Apple",
      "Meta",
      "Microsoft",
      "Netflix"
    ],
    "a": 1,
    "id": "facil-atualidades-18",
    "level": "facil",
    "factId": "facil-atualidades-18",
    "topic": "internet",
    "explanation": "O Instagram integra os produtos da Meta.",
    "source": {
      "name": "Meta — Introducing Threads, 2023",
      "url": "https://about.fb.com/news/2023/07/introducing-threads-new-app-text-sharing/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2023"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual planeta gira praticamente de lado?",
    "o": [
      "Marte",
      "Urano",
      "Vênus",
      "Saturno"
    ],
    "a": 1,
    "id": "facil-atualidades-19",
    "level": "facil",
    "factId": "facil-atualidades-19",
    "topic": "curiosidades",
    "explanation": "Urano tem o eixo inclinado em cerca de 98 graus.",
    "source": {
      "name": "NASA — Uranus facts",
      "url": "https://science.nasa.gov/uranus/facts/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "História",
    "q": "Em que ano o Brasil declarou sua independência?",
    "o": [
      "1789",
      "1808",
      "1822",
      "1889"
    ],
    "a": 2,
    "t": "geral",
    "id": "medio-g-0",
    "level": "medio",
    "factId": "medio-g-0",
    "topic": "historia",
    "explanation": "A proclamação da independência ocorreu em 1822.",
    "source": {
      "name": "Biblioteca Nacional — Independência",
      "url": "https://bndigital.bn.gov.br/dossies/gramaticas-e-dicionarios-do-portugues/linha-do-tempo/sobre-as-efemerides/1822-independencia-do-brasil/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Ciências",
    "q": "Qual organela é conhecida como a usina de energia da célula?",
    "o": [
      "Núcleo",
      "Mitocôndria",
      "Ribossomo",
      "Lisossomo"
    ],
    "a": 1,
    "t": "geral",
    "id": "medio-g-1",
    "level": "medio",
    "factId": "medio-g-1",
    "topic": "ciencia",
    "explanation": "Mitocôndrias produzem ATP pela fosforilação oxidativa em células eucarióticas.",
    "source": {
      "name": "OpenStax — Oxidative phosphorylation",
      "url": "https://openstax.org/books/biology-2e/pages/7-4-oxidative-phosphorylation"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Na classificação da ONU por área terrestre de 1999, qual país ocupa o primeiro lugar?",
    "o": [
      "Canadá",
      "China",
      "Estados Unidos",
      "Rússia"
    ],
    "a": 3,
    "t": "geral",
    "id": "medio-g-2",
    "level": "medio",
    "factId": "medio-g-2",
    "topic": "geografia",
    "explanation": "A Rússia lidera a classificação da ONU por área terrestre de 1999.",
    "source": {
      "name": "ONU — Países por área, 1999",
      "url": "https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/files/documents/2020/Jan/un_1999_6billion.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1999"
  },
  {
    "c": "Tecnologia",
    "q": "O que significa a sigla HTML?",
    "o": [
      "HyperText Markup Language",
      "High Transfer Machine Link",
      "Home Tool Markup Language",
      "Hyperlink Text Management Logic"
    ],
    "a": 0,
    "t": "geral",
    "id": "medio-g-3",
    "level": "medio",
    "factId": "medio-g-3",
    "topic": "tecnologia",
    "explanation": "HTML abrevia HyperText Markup Language.",
    "source": {
      "name": "MDN — HTML",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Esportes",
    "q": "Em qual país foram realizados os Jogos Olímpicos de verão de 2016?",
    "o": [
      "China",
      "Brasil",
      "Japão",
      "Reino Unido"
    ],
    "a": 1,
    "t": "geral",
    "id": "medio-g-4",
    "level": "medio",
    "factId": "medio-g-4",
    "topic": "esportes",
    "explanation": "Os Jogos Olímpicos de verão de 2016 foram sediados no Rio de Janeiro, Brasil.",
    "source": {
      "name": "Comitê Olímpico do Brasil — Rio 2016",
      "url": "https://www.cob.org.br/time-brasil/participacoes/2169-rio"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2016"
  },
  {
    "c": "Bíblia",
    "q": "Segundo Mateus 26, qual apóstolo negou Jesus três vezes?",
    "o": [
      "João",
      "Pedro",
      "Tiago",
      "André"
    ],
    "a": 1,
    "t": "geral",
    "id": "medio-g-5",
    "level": "medio",
    "factId": "medio-g-5",
    "topic": "biblia",
    "explanation": "Mateus 26 narra as três negações de Pedro.",
    "source": {
      "name": "Mateus 26 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Matthew+26&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual é a raiz quadrada principal de 144?",
    "o": [
      "10",
      "11",
      "12",
      "14"
    ],
    "a": 2,
    "t": "geral",
    "id": "medio-g-6",
    "level": "facil",
    "factId": "medio-g-6",
    "topic": "matematica",
    "explanation": "A raiz quadrada principal é 12, pois 12 × 12 = 144.",
    "source": null,
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura",
    "q": "Quem pintou a obra Mona Lisa?",
    "o": [
      "Michelangelo",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Leonardo da Vinci"
    ],
    "a": 3,
    "t": "geral",
    "id": "medio-g-7",
    "level": "medio",
    "factId": "medio-g-7",
    "topic": "geral",
    "explanation": "A Mona Lisa é uma pintura de Leonardo da Vinci.",
    "source": {
      "name": "Louvre — Mona Lisa",
      "url": "https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Ciências",
    "q": "Qual elemento químico tem o símbolo Au?",
    "o": [
      "Prata",
      "Ouro",
      "Alumínio",
      "Argônio"
    ],
    "a": 1,
    "t": "geral",
    "id": "medio-g-8",
    "level": "medio",
    "factId": "medio-g-8",
    "topic": "ciencia",
    "explanation": "Au é o símbolo químico do ouro.",
    "source": {
      "name": "Royal Society of Chemistry — Gold",
      "url": "https://periodic-table.rsc.org/element/79/gold"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual rio atravessa a cidade de Paris?",
    "o": [
      "Tâmisa",
      "Danúbio",
      "Sena",
      "Reno"
    ],
    "a": 2,
    "t": "geral",
    "id": "medio-g-9",
    "level": "medio",
    "factId": "medio-g-9",
    "topic": "geografia",
    "explanation": "O Sena atravessa Paris.",
    "source": {
      "name": "Ville de Paris — La Seine",
      "url": "https://www.paris.fr/pages/la-seine-aurait-plus-de-14-000-ans-et-autres-anecdotes-surprenantes-sur-le-fleuve-parisien-19981"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "História",
    "q": "Qual foi o primeiro presidente do Brasil?",
    "o": [
      "Getúlio Vargas",
      "Deodoro da Fonseca",
      "Floriano Peixoto",
      "Prudente de Morais"
    ],
    "a": 1,
    "t": "geral",
    "id": "medio-g-10",
    "level": "medio",
    "factId": "medio-g-10",
    "topic": "historia",
    "explanation": "Deodoro da Fonseca foi o primeiro presidente brasileiro.",
    "source": {
      "name": "Presidência — Deodoro da Fonseca",
      "url": "https://www.biblioteca.presidencia.gov.br/presidencia/ex-presidentes/deodoro-fonseca/biografia"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Na frase 'Ela respondeu rapidamente', qual é a classe gramatical de 'rapidamente'?",
    "o": [
      "Advérbio",
      "Substantivo",
      "Adjetivo",
      "Verbo"
    ],
    "a": 0,
    "t": "geral",
    "id": "medio-g-11",
    "level": "medio",
    "factId": "medio-g-11",
    "topic": "portugues",
    "explanation": "Rapidamente é um advérbio de modo.",
    "source": {
      "name": "Infopédia — Rapidamente",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/rapidamente"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Astronomia",
    "q": "Qual é o maior planeta do Sistema Solar?",
    "o": [
      "Saturno",
      "Netuno",
      "Júpiter",
      "Terra"
    ],
    "a": 2,
    "t": "geral",
    "id": "medio-g-12",
    "level": "facil",
    "factId": "medio-g-12",
    "topic": "ciencia",
    "explanation": "Júpiter é o maior planeta do Sistema Solar.",
    "source": {
      "name": "NASA — Planet sizes",
      "url": "https://science.nasa.gov/solar-system/planet-sizes-and-locations-in-our-solar-system/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Quantas linhas tem uma pauta musical tradicional?",
    "o": [
      "4",
      "5",
      "6",
      "7"
    ],
    "a": 1,
    "t": "geral",
    "id": "medio-g-13",
    "level": "medio",
    "factId": "medio-g-13",
    "topic": "musica",
    "explanation": "O pentagrama tem cinco linhas paralelas.",
    "source": {
      "name": "UFMA — Notação musical",
      "url": "https://musica.ufma.br/bordini/ext/unidades/unidade_01a.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Filmes",
    "q": "Quem dirigiu Oppenheimer?",
    "o": [
      "Denis Villeneuve",
      "Christopher Nolan",
      "James Cameron",
      "Martin Scorsese"
    ],
    "a": 1,
    "id": "medio-entretenimento-0",
    "level": "medio",
    "factId": "medio-entretenimento-0",
    "topic": "filmes",
    "explanation": "Christopher Nolan dirigiu Oppenheimer, lançado em 2023.",
    "source": {
      "name": "Universal — Oppenheimer, elenco e direção",
      "url": "https://www.universalstudios.com/videos/uYPbbksJxIg/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Em Breaking Bad, qual pseudônimo Walter White adota?",
    "o": [
      "Saul Goodman",
      "Heisenberg",
      "Gus Fring",
      "Tuco"
    ],
    "a": 1,
    "id": "medio-entretenimento-1",
    "level": "medio",
    "factId": "medio-entretenimento-1",
    "topic": "series",
    "explanation": "Walter White usa o pseudônimo Heisenberg.",
    "source": {
      "name": "AMC — Breaking Bad",
      "url": "https://www.amctv.la/blog/breaking-bad-vuelve-a-amc"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Cinema",
    "q": "Qual filme sul-coreano venceu o Oscar de Melhor Filme em 2020?",
    "o": [
      "Parasita",
      "Oldboy",
      "Minari",
      "Decisão de Partir"
    ],
    "a": 0,
    "id": "medio-entretenimento-2",
    "level": "medio",
    "factId": "medio-entretenimento-2",
    "topic": "filmes",
    "explanation": "Parasita venceu Melhor Filme na cerimônia de 2020.",
    "source": {
      "name": "Academia — Oscar 2020",
      "url": "https://www.oscars.org/oscars/ceremonies/2020"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2020"
  },
  {
    "t": "entretenimento",
    "c": "Música",
    "q": "Qual artista lançou o álbum Thriller?",
    "o": [
      "Prince",
      "Michael Jackson",
      "Stevie Wonder",
      "Lionel Richie"
    ],
    "a": 1,
    "id": "medio-entretenimento-3",
    "level": "medio",
    "factId": "medio-entretenimento-3",
    "topic": "musica",
    "explanation": "Michael Jackson lançou Thriller em 1982.",
    "source": {
      "name": "Michael Jackson — Thriller",
      "url": "https://www.michaeljackson.com/albums/thriller/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Internet",
    "q": "Qual empresa desenvolveu o navegador Chrome?",
    "o": [
      "Mozilla",
      "Apple",
      "Google",
      "Microsoft"
    ],
    "a": 2,
    "id": "medio-entretenimento-4",
    "level": "medio",
    "factId": "medio-entretenimento-4",
    "topic": "internet",
    "explanation": "O Google lançou o Chrome em 2008.",
    "source": {
      "name": "Google — Chrome 10 years",
      "url": "https://blog.google/products-and-platforms/products/chrome/happy-10th-birthday-chrome-best-yet-come/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Em Game of Thrones, qual é o lema da Casa Stark?",
    "o": [
      "Fogo e Sangue",
      "O Inverno Está Chegando",
      "Ouça-me Rugir",
      "Nossa é a Fúria"
    ],
    "a": 1,
    "id": "medio-entretenimento-5",
    "level": "medio",
    "factId": "medio-entretenimento-5",
    "topic": "series",
    "explanation": "O lema da Casa Stark é Winter Is Coming.",
    "source": {
      "name": "George R. R. Martin — A Game of Thrones",
      "url": "https://georgerrmartin.com/grrm_book/a-game-of-thrones-5-book-bundle/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Filmes",
    "q": "Qual atriz interpretou a Barbie estereotipada no filme Barbie (2023)?",
    "o": [
      "Emma Stone",
      "Margot Robbie",
      "Florence Pugh",
      "Saoirse Ronan"
    ],
    "a": 1,
    "id": "medio-entretenimento-6",
    "level": "medio",
    "factId": "medio-entretenimento-6",
    "topic": "filmes",
    "explanation": "Margot Robbie interpreta a Barbie estereotipada no filme de 2023.",
    "source": {
      "name": "Warner Bros. Discovery — Barbie",
      "url": "https://press.wbd.com/us/media-release/hbo-max/barbie-asl/barbie-available-stream-exclusively-max-today"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2023"
  },
  {
    "t": "entretenimento",
    "c": "Música",
    "q": "Qual banda gravou Bohemian Rhapsody?",
    "o": [
      "Queen",
      "The Beatles",
      "Pink Floyd",
      "Led Zeppelin"
    ],
    "a": 0,
    "id": "medio-entretenimento-7",
    "level": "medio",
    "factId": "medio-entretenimento-7",
    "topic": "musica",
    "explanation": "Bohemian Rhapsody foi gravada pelo Queen.",
    "source": {
      "name": "Queen — História oficial",
      "url": "https://www.queenonline.com/queen"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Internet",
    "q": "O que significa a sigla GIF?",
    "o": [
      "Graphic Internet File",
      "Graphics Interchange Format",
      "Global Image Frame",
      "Generated Interface Format"
    ],
    "a": 1,
    "id": "medio-entretenimento-8",
    "level": "medio",
    "factId": "medio-entretenimento-8",
    "topic": "internet",
    "explanation": "GIF significa Graphics Interchange Format.",
    "source": {
      "name": "W3C — GIF89a",
      "url": "https://www.w3.org/Graphics/GIF/spec-gif89a.txt"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Qual série acompanha a família Roy e o império Waystar Royco?",
    "o": [
      "Billions",
      "Succession",
      "The Crown",
      "Mad Men"
    ],
    "a": 1,
    "id": "medio-entretenimento-9",
    "level": "medio",
    "factId": "medio-entretenimento-9",
    "topic": "series",
    "explanation": "Succession acompanha a família Roy e a Waystar Royco.",
    "source": {
      "name": "HBO/WBD — Succession",
      "url": "https://press.wbd.com/ca/media-release/hbo-original-drama-series-succession-returns-its-fourth-season-march-26?language_content_entity=en"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Oscar 2026",
    "q": "Qual brasileiro foi indicado a Melhor Ator no Oscar de 2026?",
    "o": [
      "Selton Mello",
      "Rodrigo Santoro",
      "Wagner Moura",
      "Cauã Reymond"
    ],
    "a": 2,
    "id": "medio-atualidades-10",
    "level": "medio",
    "factId": "medio-atualidades-10",
    "topic": "atualidades",
    "explanation": "Wagner Moura foi indicado por The Secret Agent.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Oscar 2026",
    "q": "Qual filme representou o Brasil entre os indicados a Filme Internacional em 2026?",
    "o": [
      "Ainda Estou Aqui",
      "O Agente Secreto",
      "Bacurau",
      "Cidade de Deus"
    ],
    "a": 1,
    "id": "medio-atualidades-11",
    "level": "medio",
    "factId": "medio-atualidades-11",
    "topic": "atualidades",
    "explanation": "O Agente Secreto recebeu a indicação internacional pelo Brasil.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Internet 2026",
    "q": "Como se chama o recurso anunciado pela Meta em fevereiro de 2026 para pedir temporariamente mais ou menos temas no feed do Threads?",
    "o": [
      "Feed Control",
      "Dear Algo",
      "Topic Tune",
      "My Trends"
    ],
    "a": 1,
    "id": "medio-atualidades-12",
    "level": "medio",
    "factId": "threads-dear-algo-platform",
    "topic": "atualidades",
    "explanation": "Dear Algo foi anunciado pela Meta em fevereiro de 2026.",
    "source": {
      "name": "Meta — Dear Algo, fevereiro de 2026",
      "url": "https://about.fb.com/news/2026/02/threads-dear-algo/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Ciência",
    "q": "Qual telescópio espacial divulgou seu primeiro conjunto de imagens científicas coloridas em julho de 2022?",
    "o": [
      "Hubble",
      "James Webb",
      "Kepler",
      "Spitzer"
    ],
    "a": 1,
    "id": "medio-atualidades-14",
    "level": "medio",
    "factId": "medio-atualidades-14",
    "topic": "ciencia",
    "explanation": "O James Webb divulgou seu primeiro conjunto de imagens coloridas em julho de 2022.",
    "source": {
      "name": "NASA — Webb first images",
      "url": "https://science.nasa.gov/mission/webb/webbs-first-images/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2022"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual é o maior órgão do corpo humano?",
    "o": [
      "Fígado",
      "Pulmão",
      "Pele",
      "Intestino"
    ],
    "a": 2,
    "id": "medio-atualidades-15",
    "level": "medio",
    "factId": "medio-atualidades-15",
    "topic": "curiosidades",
    "explanation": "A pele é o maior órgão do corpo humano.",
    "source": {
      "name": "NCBI/InformedHealth — Skin",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK279255/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Cinema 2026",
    "q": "Qual filme venceu o Oscar de Melhor Canção Original em 2026 com Golden?",
    "o": [
      "Sinners",
      "KPop Demon Hunters",
      "Hamnet",
      "F1"
    ],
    "a": 1,
    "id": "medio-atualidades-16",
    "level": "medio",
    "factId": "medio-atualidades-16",
    "topic": "atualidades",
    "explanation": "Golden, de KPop Demon Hunters, venceu Canção Original.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Internet",
    "q": "Qual destas siglas representa HTTP com proteção TLS na comunicação web?",
    "o": [
      "FTP",
      "HTTP",
      "HTTPS",
      "SMTP"
    ],
    "a": 2,
    "id": "medio-atualidades-18",
    "level": "medio",
    "factId": "medio-atualidades-18",
    "topic": "internet",
    "explanation": "HTTPS usa TLS para proteger a comunicação HTTP em trânsito.",
    "source": {
      "name": "MDN — Transport Layer Security",
      "url": "https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual ave é capaz de voar para trás?",
    "o": [
      "Águia",
      "Beija-flor",
      "Albatroz",
      "Falcão"
    ],
    "a": 1,
    "id": "medio-atualidades-19",
    "level": "medio",
    "factId": "medio-atualidades-19",
    "topic": "curiosidades",
    "explanation": "Experimentos documentaram o voo para trás em beija-flores.",
    "source": {
      "name": "Sapir e Dudley — Experimento de voo, 2012",
      "url": "https://pubmed.ncbi.nlm.nih.gov/23014570/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "História",
    "q": "Qual tratado assinado em 1919 estabeleceu as condições de paz entre a Alemanha e as potências aliadas?",
    "o": [
      "Tratado de Paris",
      "Tratado de Versalhes",
      "Tratado de Tordesilhas",
      "Tratado de Utrecht"
    ],
    "a": 1,
    "t": "geral",
    "id": "dificil-g-0",
    "level": "dificil",
    "factId": "dificil-g-0",
    "topic": "historia",
    "explanation": "Versalhes estabeleceu as condições de paz com a Alemanha em 1919.",
    "source": {
      "name": "Château de Versailles — Treaty 1919",
      "url": "https://en.chateauversailles.fr/discover/history/key-dates/treaty-versailles-1919"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1919"
  },
  {
    "c": "Ciências",
    "q": "Qual partícula subatômica não possui carga elétrica?",
    "o": [
      "Próton",
      "Elétron",
      "Nêutron",
      "Pósitron"
    ],
    "a": 2,
    "t": "geral",
    "id": "dificil-g-1",
    "level": "medio",
    "factId": "dificil-g-1",
    "topic": "ciencia",
    "explanation": "O nêutron possui carga elétrica total nula.",
    "source": {
      "name": "OpenStax — Electric charge",
      "url": "https://openstax.org/books/university-physics-volume-2/pages/5-1-electric-charge"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual estreito separa a Ásia da América do Norte?",
    "o": [
      "Bósforo",
      "Gibraltar",
      "Bering",
      "Ormuz"
    ],
    "a": 2,
    "t": "geral",
    "id": "dificil-g-2",
    "level": "dificil",
    "factId": "dificil-g-2",
    "topic": "geografia",
    "explanation": "O estreito de Bering fica entre a Sibéria e o Alasca.",
    "source": {
      "name": "National Park Service — Bering",
      "url": "https://www.nps.gov/articles/bering.htm"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Quem é considerado o criador da World Wide Web?",
    "o": [
      "Alan Turing",
      "Tim Berners-Lee",
      "Linus Torvalds",
      "Vint Cerf"
    ],
    "a": 1,
    "t": "geral",
    "id": "dificil-g-3",
    "level": "dificil",
    "factId": "dificil-g-3",
    "topic": "tecnologia",
    "explanation": "Tim Berners-Lee propôs a Web no CERN em 1989.",
    "source": {
      "name": "CERN — Birth of the Web",
      "url": "https://home.cern/science/computing/the-birth-of-the-web/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Literatura",
    "q": "Quem escreveu o romance Crime e Castigo?",
    "o": [
      "Liev Tolstói",
      "Fiódor Dostoiévski",
      "Anton Tchekhov",
      "Nikolai Gógol"
    ],
    "a": 1,
    "t": "geral",
    "id": "dificil-g-4",
    "level": "dificil",
    "factId": "dificil-g-4",
    "topic": "geral",
    "explanation": "Crime e Castigo foi escrito por Fiódor Dostoiévski.",
    "source": {
      "name": "Hachette — Crime and Punishment",
      "url": "https://www.hachettebookgroup.com/titles/fyodor-dostoevsky/crime-and-punishment/9781454959663/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Atos 11:26, em qual cidade os discípulos foram chamados cristãos pela primeira vez?",
    "o": [
      "Jerusalém",
      "Roma",
      "Antioquia",
      "Éfeso"
    ],
    "a": 2,
    "t": "geral",
    "id": "dificil-g-5",
    "level": "dificil",
    "factId": "dificil-g-5",
    "topic": "biblia",
    "explanation": "Atos 11:26 situa em Antioquia o primeiro uso do nome cristãos para os discípulos.",
    "source": {
      "name": "Atos 11:26 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Acts+11%3A26&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual é o valor de 2⁵ + 3³?",
    "o": [
      "49",
      "55",
      "59",
      "61"
    ],
    "a": 2,
    "t": "geral",
    "id": "dificil-g-6",
    "level": "medio",
    "factId": "dificil-g-6",
    "topic": "matematica",
    "explanation": "2⁵ = 32 e 3³ = 27; a soma é 59.",
    "source": null,
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Química",
    "q": "Qual é o número atômico do carbono?",
    "o": [
      "4",
      "6",
      "8",
      "12"
    ],
    "a": 1,
    "t": "geral",
    "id": "dificil-g-7",
    "level": "medio",
    "factId": "dificil-g-7",
    "topic": "ciencia",
    "explanation": "O número atômico 6 corresponde aos seis prótons do carbono.",
    "source": {
      "name": "Royal Society of Chemistry — Carbon",
      "url": "https://periodic-table.rsc.org/element/6/carbon"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "História",
    "q": "A queda de Constantinopla ocorreu em qual ano?",
    "o": [
      "1415",
      "1453",
      "1492",
      "1517"
    ],
    "a": 1,
    "t": "geral",
    "id": "dificil-g-8",
    "level": "dificil",
    "factId": "dificil-g-8",
    "topic": "historia",
    "explanation": "Constantinopla foi tomada pelos otomanos em 1453.",
    "source": {
      "name": "Britannica 1911 — Constantinople (domínio público)",
      "url": "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Constantinople"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Filosofia",
    "q": "A frase 'Penso, logo existo' é atribuída a quem?",
    "o": [
      "Platão",
      "Aristóteles",
      "René Descartes",
      "Immanuel Kant"
    ],
    "a": 2,
    "t": "geral",
    "id": "dificil-g-9",
    "level": "dificil",
    "factId": "dificil-g-9",
    "topic": "geral",
    "explanation": "O cogito é associado ao filósofo René Descartes.",
    "source": {
      "name": "Stanford Encyclopedia — Descartes",
      "url": "https://plato.stanford.edu/entries/descartes-epistemology/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Em setembro de 2026, qual é a capital do Cazaquistão?",
    "o": [
      "Almaty",
      "Astana",
      "Tashkent",
      "Bishkek"
    ],
    "a": 1,
    "t": "geral",
    "id": "dificil-g-10",
    "level": "dificil",
    "factId": "dificil-g-10",
    "topic": "geografia",
    "explanation": "A capital se chama Astana na referência de setembro de 2026.",
    "source": {
      "name": "Governo do Cazaquistão — Astana",
      "url": "https://www.gov.kz/memleket/entities/astana?lang=en"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "c": "Biologia",
    "q": "Qual molécula transporta aminoácidos até o ribossomo?",
    "o": [
      "DNA",
      "RNA mensageiro",
      "RNA transportador",
      "RNA ribossômico"
    ],
    "a": 2,
    "t": "geral",
    "id": "dificil-g-11",
    "level": "dificil",
    "factId": "dificil-g-11",
    "topic": "ciencia",
    "explanation": "O RNA transportador leva aminoácidos ao ribossomo.",
    "source": {
      "name": "OpenStax — RNA",
      "url": "https://openstax.org/books/microbiology/pages/10-3-structure-and-function-of-rna"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Artes",
    "q": "A técnica de pintura sfumato é especialmente associada a qual artista?",
    "o": [
      "Caravaggio",
      "Leonardo da Vinci",
      "Claude Monet",
      "Sandro Botticelli"
    ],
    "a": 1,
    "t": "geral",
    "id": "dificil-g-12",
    "level": "dificil",
    "factId": "dificil-g-12",
    "topic": "artistas",
    "explanation": "Leonardo empregou o sfumato para suavizar contornos e transições.",
    "source": {
      "name": "Louvre — Mona Lisa",
      "url": "https://www.louvre.fr/en/explore/the-palace/from-the-mona-lisa-to-the-wedding-feast-at-cana"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Astronomia",
    "q": "Qual estrela é a mais próxima do Sol?",
    "o": [
      "Sirius",
      "Betelgeuse",
      "Proxima Centauri",
      "Vega"
    ],
    "a": 2,
    "t": "geral",
    "id": "dificil-g-13",
    "level": "dificil",
    "factId": "dificil-g-13",
    "topic": "ciencia",
    "explanation": "Proxima Centauri é a estrela mais próxima do Sol.",
    "source": {
      "name": "NASA — Proxima Centauri",
      "url": "https://science.nasa.gov/asset/hubble/proxima-centauri/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Cinema",
    "q": "Qual cineasta dirigiu Parasita e Memórias de um Assassino?",
    "o": [
      "Park Chan-wook",
      "Bong Joon-ho",
      "Lee Chang-dong",
      "Kim Jee-woon"
    ],
    "a": 1,
    "id": "dificil-entretenimento-0",
    "level": "dificil",
    "factId": "dificil-entretenimento-0",
    "topic": "filmes",
    "explanation": "Bong Joon-ho dirigiu os dois filmes.",
    "source": {
      "name": "Criterion — Memories of Murder",
      "url": "https://www.criterion.com/current/posts/7361-memories-of-murder-in-the-killing-jar"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Em The Sopranos, quem interpreta Tony Soprano?",
    "o": [
      "James Gandolfini",
      "Edie Falco",
      "Steve Buscemi",
      "Michael Imperioli"
    ],
    "a": 0,
    "id": "dificil-entretenimento-1",
    "level": "dificil",
    "factId": "dificil-entretenimento-1",
    "topic": "series",
    "explanation": "James Gandolfini interpretou Tony Soprano.",
    "source": {
      "name": "HBO — Tony Soprano",
      "url": "https://shop.hbo.com/collections/tony-soprano-merchandise"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Cinema",
    "q": "Qual movimento cinematográfico francês revelou Godard e Truffaut?",
    "o": [
      "Realismo poético",
      "Nouvelle Vague",
      "Dogma 95",
      "Neorrealismo"
    ],
    "a": 1,
    "id": "dificil-entretenimento-2",
    "level": "dificil",
    "factId": "dificil-entretenimento-2",
    "topic": "filmes",
    "explanation": "Godard e Truffaut são nomes centrais da Nouvelle Vague.",
    "source": {
      "name": "BFI — Godard and Truffaut",
      "url": "https://www.bfi.org.uk/sight-and-sound/interviews/how-they-did-love-emmanuel-laurent-godard-truffaut"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Música",
    "q": "Qual álbum de Miles Davis é marco do jazz modal?",
    "o": [
      "Blue Train",
      "Kind of Blue",
      "A Love Supreme",
      "Time Out"
    ],
    "a": 1,
    "id": "dificil-entretenimento-3",
    "level": "dificil",
    "factId": "dificil-entretenimento-3",
    "topic": "musica",
    "explanation": "Kind of Blue, de 1959, é uma referência do jazz modal.",
    "source": {
      "name": "Miles Davis — Kind of Blue",
      "url": "https://www.milesdavis.com/albums/kind-of-blue/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Internet",
    "q": "Qual protocolo distribui rotas entre sistemas autônomos na internet?",
    "o": [
      "BGP",
      "DHCP",
      "IMAP",
      "SSH"
    ],
    "a": 0,
    "id": "dificil-entretenimento-4",
    "level": "dificil",
    "factId": "dificil-entretenimento-4",
    "topic": "internet",
    "explanation": "BGP é o protocolo de roteamento entre sistemas autônomos descrito na RFC 4271.",
    "source": {
      "name": "IETF — RFC 4271",
      "url": "https://www.rfc-editor.org/rfc/rfc4271"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Qual criador está por trás de Twin Peaks ao lado de Mark Frost?",
    "o": [
      "David Lynch",
      "David Fincher",
      "Noah Hawley",
      "Vince Gilligan"
    ],
    "a": 0,
    "id": "dificil-entretenimento-5",
    "level": "dificil",
    "factId": "dificil-entretenimento-5",
    "topic": "series",
    "explanation": "David Lynch criou Twin Peaks com Mark Frost.",
    "source": {
      "name": "Showtime — Twin Peaks",
      "url": "https://www.paramountpressexpress.com/showtime/releases/?view=47219"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Cinema",
    "q": "Qual filme de Akira Kurosawa foi adaptado no faroeste Os Sete Magníficos (1960)?",
    "o": [
      "Rashomon",
      "Yojimbo",
      "Os Sete Samurais",
      "Trono Manchado de Sangue"
    ],
    "a": 2,
    "id": "dificil-entretenimento-6",
    "level": "dificil",
    "factId": "dificil-entretenimento-6",
    "topic": "filmes",
    "explanation": "Os Sete Samurais foi adaptado como Os Sete Magníficos em 1960.",
    "source": {
      "name": "BFI — Kurosawa",
      "url": "https://www.bfi.org.uk/features/star-wars-conquered-cinema-hidden-fortress"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1960"
  },
  {
    "t": "entretenimento",
    "c": "Música",
    "q": "Qual compositor escreveu A Sagração da Primavera?",
    "o": [
      "Claude Debussy",
      "Igor Stravinsky",
      "Maurice Ravel",
      "Sergei Prokofiev"
    ],
    "a": 1,
    "id": "dificil-entretenimento-7",
    "level": "dificil",
    "factId": "dificil-entretenimento-7",
    "topic": "musica",
    "explanation": "Igor Stravinsky compôs A Sagração da Primavera.",
    "source": {
      "name": "Boosey & Hawkes — The Rite of Spring",
      "url": "https://www.boosey.com/pages/Opera/catalogue/cat_detail?musicid=5253"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "entretenimento",
    "c": "Internet",
    "q": "Qual linguagem foi criada por Brendan Eich em 1995?",
    "o": [
      "Java",
      "JavaScript",
      "Python",
      "Ruby"
    ],
    "a": 1,
    "id": "dificil-entretenimento-8",
    "level": "dificil",
    "factId": "dificil-entretenimento-8",
    "topic": "internet",
    "explanation": "Brendan Eich criou JavaScript em 1995.",
    "source": {
      "name": "Brendan Eich — ModernWeb 2015",
      "url": "https://brendaneich.github.io/ModernWeb.tw-2015/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1995"
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Qual cidade fictícia serve de cenário principal para Dark?",
    "o": [
      "Hawkins",
      "Winden",
      "Twin Peaks",
      "Riverdale"
    ],
    "a": 1,
    "id": "dificil-entretenimento-9",
    "level": "dificil",
    "factId": "dificil-entretenimento-9",
    "topic": "series",
    "explanation": "Winden é a cidade fictícia de Dark.",
    "source": {
      "name": "Netflix — Dark",
      "url": "https://media.netflix.com/en/only-on-netflix/80100172"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Oscar 2026",
    "q": "Quem venceu o Oscar de Melhor Direção em 2026?",
    "o": [
      "Ryan Coogler",
      "Paul Thomas Anderson",
      "Joachim Trier",
      "Josh Safdie"
    ],
    "a": 1,
    "id": "dificil-atualidades-10",
    "level": "dificil",
    "factId": "dificil-atualidades-10",
    "topic": "atualidades",
    "explanation": "Paul Thomas Anderson ganhou Direção.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Oscar 2026",
    "q": "Qual filme venceu o Oscar de Fotografia em 2026?",
    "o": [
      "Sinners",
      "Frankenstein",
      "Marty Supreme",
      "Train Dreams"
    ],
    "a": 0,
    "id": "dificil-atualidades-11",
    "level": "dificil",
    "factId": "dificil-atualidades-11",
    "topic": "atualidades",
    "explanation": "Sinners ganhou Fotografia.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Oscar 2026",
    "q": "Quem venceu o Oscar de Melhor Atriz na cerimônia de 2026 por Hamnet?",
    "o": [
      "Emma Stone",
      "Jessie Buckley",
      "Rose Byrne",
      "Renate Reinsve"
    ],
    "a": 1,
    "id": "dificil-atualidades-12",
    "level": "dificil",
    "factId": "dificil-atualidades-12",
    "topic": "atualidades",
    "explanation": "Jessie Buckley venceu por Hamnet.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual elemento é o mais abundante no universo observável?",
    "o": [
      "Hélio",
      "Oxigênio",
      "Carbono",
      "Hidrogênio"
    ],
    "a": 3,
    "id": "dificil-atualidades-14",
    "level": "dificil",
    "factId": "dificil-atualidades-14",
    "topic": "curiosidades",
    "explanation": "Hidrogênio é o elemento químico mais abundante no universo.",
    "source": {
      "name": "NASA — Universe glossary",
      "url": "https://science.nasa.gov/universe/glossary/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Ciência",
    "q": "Qual unidade equivale a 10⁻¹⁵ metro?",
    "o": [
      "Nanômetro",
      "Picômetro",
      "Femtômetro",
      "Attômetro"
    ],
    "a": 2,
    "id": "dificil-atualidades-15",
    "level": "dificil",
    "factId": "dificil-atualidades-15",
    "topic": "ciencia",
    "explanation": "O prefixo femto representa 10⁻¹⁵.",
    "source": {
      "name": "BIPM — SI prefixes",
      "url": "https://www.bipm.org/en/measurement-units/si-prefixes"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Cinema 2026",
    "q": "Qual filme venceu o Oscar de Efeitos Visuais em 2026?",
    "o": [
      "F1",
      "Sinners",
      "Avatar: Fire and Ash",
      "Jurassic World Rebirth"
    ],
    "a": 2,
    "id": "dificil-atualidades-16",
    "level": "dificil",
    "factId": "dificil-atualidades-16",
    "topic": "atualidades",
    "explanation": "Avatar: Fire and Ash ganhou Efeitos Visuais.",
    "source": {
      "name": "Academia — Oscar 2026",
      "url": "https://www.oscars.org/oscars/ceremonies/2026"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual é o único osso humano que não se articula diretamente com outro osso?",
    "o": [
      "Hioide",
      "Estribo",
      "Cóccix",
      "Patela"
    ],
    "a": 0,
    "id": "dificil-atualidades-17",
    "level": "dificil",
    "factId": "dificil-atualidades-17",
    "topic": "curiosidades",
    "explanation": "O hioide é suspenso por músculos e ligamentos, sem articulação óssea direta.",
    "source": {
      "name": "NCBI — Hyoid bone",
      "url": "https://www.ncbi.nlm.nih.gov/books/NBK539726/?report=printable"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Internet",
    "q": "Qual sistema converte nomes de domínio em endereços IP?",
    "o": [
      "DNS",
      "NTP",
      "SSH",
      "TLS"
    ],
    "a": 0,
    "id": "dificil-atualidades-18",
    "level": "medio",
    "factId": "dificil-atualidades-18",
    "topic": "internet",
    "explanation": "DNS permite consultar registros que associam nomes a endereços IP.",
    "source": {
      "name": "IETF — RFC 1034",
      "url": "https://www.rfc-editor.org/rfc/rfc1034"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Em qual camada da atmosfera ocorre a maior parte dos fenômenos meteorológicos?",
    "o": [
      "Estratosfera",
      "Mesosfera",
      "Troposfera",
      "Termosfera"
    ],
    "a": 2,
    "id": "dificil-atualidades-19",
    "level": "medio",
    "factId": "dificil-atualidades-19",
    "topic": "curiosidades",
    "explanation": "A troposfera é a camada mais baixa e concentra a maior parte do tempo meteorológico.",
    "source": {
      "name": "NOAA — Atmosphere terminology",
      "url": "https://gml.noaa.gov/infodata/terms.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0103",
    "topic": "geral",
    "t": "geral",
    "level": "medio",
    "q": "Qual é a unidade de base do SI para temperatura termodinâmica?",
    "o": [
      "Joule",
      "Kelvin",
      "Watt",
      "Pascal"
    ],
    "a": 1,
    "explanation": "A unidade de temperatura termodinâmica do SI é o kelvin, símbolo K.",
    "factId": "qm-0103",
    "c": "geral",
    "source": {
      "name": "BIPM — SI base units",
      "url": "https://www.bipm.org/en/measurement-units/si-base-units"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0104",
    "topic": "historia",
    "t": "geral",
    "level": "medio",
    "q": "Qual império tomou Constantinopla em 1453?",
    "o": [
      "Império Otomano",
      "Império Inca",
      "Império Asteca",
      "Império Carolíngio"
    ],
    "a": 0,
    "explanation": "A conquista de 1453 incorporou Constantinopla ao domínio otomano.",
    "factId": "qm-0104",
    "c": "historia",
    "source": {
      "name": "Britannica 1911 — Constantinople (domínio público)",
      "url": "https://en.wikisource.org/wiki/1911_Encyclop%C3%A6dia_Britannica/Constantinople"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0105",
    "topic": "geografia",
    "t": "geral",
    "level": "dificil",
    "q": "Às margens de qual rio fica Astana, capital do Cazaquistão em setembro de 2026?",
    "o": [
      "Sena",
      "Nilo",
      "Ishim",
      "Tâmisa"
    ],
    "a": 2,
    "explanation": "Astana fica às margens do rio Ishim, também chamado Esil.",
    "factId": "qm-0105",
    "c": "geografia",
    "source": {
      "name": "Governo do Cazaquistão — Astana",
      "url": "https://www.gov.kz/memleket/entities/astana?lang=en"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0106",
    "topic": "ciencia",
    "t": "geral",
    "level": "medio",
    "q": "Qual base nitrogenada ocorre no RNA no lugar da timina do DNA?",
    "o": [
      "Guanina",
      "Citosina",
      "Adenina",
      "Uracila"
    ],
    "a": 3,
    "explanation": "O RNA utiliza uracila, que pode se parear com adenina.",
    "factId": "qm-0106",
    "c": "ciencia",
    "source": {
      "name": "OpenStax — RNA",
      "url": "https://openstax.org/books/microbiology/pages/10-3-structure-and-function-of-rna"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0107",
    "topic": "tecnologia",
    "t": "geral",
    "level": "facil",
    "q": "Qual linguagem de folhas de estilo define a apresentação visual de páginas HTML?",
    "o": [
      "SQL",
      "CSS",
      "Bash",
      "C"
    ],
    "a": 1,
    "explanation": "CSS controla estilos e apresentação de documentos HTML.",
    "factId": "qm-0107",
    "c": "tecnologia",
    "source": {
      "name": "MDN — HTML",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTML"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0108",
    "topic": "internet",
    "t": "entretenimento",
    "level": "dificil",
    "q": "Qual método de compressão é usado para os dados de imagem na especificação GIF89a?",
    "o": [
      "LZW",
      "JPEG",
      "DEFLATE",
      "Brotli"
    ],
    "a": 0,
    "explanation": "GIF89a emprega compressão LZW, baseada em um dicionário de sequências.",
    "factId": "qm-0108",
    "c": "internet",
    "source": {
      "name": "W3C — GIF89a",
      "url": "https://www.w3.org/Graphics/GIF/spec-gif89a.txt"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0109",
    "topic": "futebol",
    "t": "geral",
    "level": "facil",
    "q": "Pela regra IFAB consultada em setembro de 2026, quanto dura cada tempo padrão do futebol de campo, sem acréscimos?",
    "o": [
      "30 minutos",
      "40 minutos",
      "45 minutos",
      "60 minutos"
    ],
    "a": 2,
    "explanation": "A duração padrão é de dois tempos iguais de 45 minutos.",
    "factId": "qm-0109",
    "c": "futebol",
    "source": {
      "name": "IFAB — Law 7",
      "url": "https://www.theifab.com/laws/latest/the-duration-of-the-match/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0110",
    "topic": "esportes",
    "t": "geral",
    "level": "facil",
    "q": "No basquete, quantos pontos vale um lance livre convertido, segundo o manual de iniciação da FIBA?",
    "o": [
      "Três",
      "Dois",
      "Quatro",
      "Um"
    ],
    "a": 3,
    "explanation": "Cada lance livre convertido vale um ponto.",
    "factId": "qm-0110",
    "c": "esportes",
    "source": {
      "name": "FIBA — Facilitator handbook",
      "url": "https://assets.fiba.basketball/image/upload/documents-corporate-wabc-start-coaching-eng-facilitator-handbook.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0111",
    "topic": "biblia",
    "t": "geral",
    "level": "medio",
    "q": "Segundo João 2, em qual local Jesus transformou água em vinho durante um casamento?",
    "o": [
      "Belém",
      "Caná da Galileia",
      "Jericó",
      "Betânia"
    ],
    "a": 1,
    "explanation": "João 2 situa o casamento e o sinal em Caná da Galileia.",
    "factId": "qm-0111",
    "c": "biblia",
    "source": {
      "name": "João 2 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=John2&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0112",
    "topic": "filmes",
    "t": "entretenimento",
    "level": "medio",
    "q": "Quem interpreta J. Robert Oppenheimer no filme Oppenheimer (2023)?",
    "o": [
      "Cillian Murphy",
      "Matt Damon",
      "Robert Downey Jr.",
      "Tom Hardy"
    ],
    "a": 0,
    "explanation": "Cillian Murphy interpreta o protagonista; Damon e Downey Jr. têm outros papéis.",
    "factId": "qm-0112",
    "c": "filmes",
    "source": {
      "name": "Universal — Oppenheimer, elenco e direção",
      "url": "https://www.universalstudios.com/videos/uYPbbksJxIg/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2023"
  },
  {
    "id": "qm-0113",
    "topic": "series",
    "t": "entretenimento",
    "level": "dificil",
    "q": "Quem criou a série Succession, lançada pela HBO em 2018?",
    "o": [
      "Vince Gilligan",
      "David Chase",
      "Jesse Armstrong",
      "Shonda Rhimes"
    ],
    "a": 2,
    "explanation": "Jesse Armstrong é o criador de Succession.",
    "factId": "qm-0113",
    "c": "series",
    "source": {
      "name": "HBO/WBD — Succession",
      "url": "https://press.wbd.com/ca/media-release/hbo-original-drama-series-succession-returns-its-fourth-season-march-26?language_content_entity=en"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2018"
  },
  {
    "id": "qm-0114",
    "topic": "animacoes",
    "t": "entretenimento",
    "level": "facil",
    "q": "Em Toy Story (1995), qual brinquedo é um cowboy?",
    "o": [
      "Buzz Lightyear",
      "Rex",
      "Slinky",
      "Woody"
    ],
    "a": 3,
    "explanation": "Woody é o brinquedo cowboy; Buzz é o patrulheiro espacial.",
    "factId": "qm-0114",
    "c": "animacoes",
    "source": {
      "name": "Pixar — Toy Story",
      "url": "https://www.pixar.com/toy-story"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1995"
  },
  {
    "id": "qm-0115",
    "topic": "games",
    "t": "entretenimento",
    "level": "facil",
    "q": "Na série de jogos Super Mario, quem é o irmão de Mario?",
    "o": [
      "Bowser",
      "Luigi",
      "Toad",
      "Yoshi"
    ],
    "a": 1,
    "explanation": "Luigi é o irmão de Mario e também atua como herói.",
    "factId": "qm-0115",
    "c": "games",
    "source": {
      "name": "Nintendo — Mario characters",
      "url": "https://mario.nintendo.com/characters/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0116",
    "topic": "musica",
    "t": "entretenimento",
    "level": "medio",
    "q": "Na afinação temperada usual do violão, avançar uma casa na mesma corda eleva a nota em quanto?",
    "o": [
      "Um semitom",
      "Uma oitava",
      "Dois tons",
      "Uma quinta justa"
    ],
    "a": 0,
    "explanation": "Cada casa sucessiva aumenta a altura em um semitom.",
    "factId": "qm-0116",
    "c": "musica",
    "source": {
      "name": "Yamaha — Six strings",
      "url": "https://www.yamaha.com/en/musical_instrument_guide/acoustic_guitar/mechanism/mechanism002.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0117",
    "topic": "artistas",
    "t": "entretenimento",
    "level": "medio",
    "q": "Quem pintou A Noite Estrelada em 1889, obra da coleção do MoMA?",
    "o": [
      "Claude Monet",
      "Pablo Picasso",
      "Vincent van Gogh",
      "Salvador Dalí"
    ],
    "a": 2,
    "explanation": "Van Gogh pintou A Noite Estrelada em Saint-Rémy, em 1889.",
    "factId": "qm-0117",
    "c": "artistas",
    "source": {
      "name": "MoMA — Vincent van Gogh",
      "url": "https://www.moma.org/collection/artists/2206"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0118",
    "topic": "cultura-brasileira",
    "t": "geral",
    "level": "facil",
    "q": "O frevo inscrito pela UNESCO em 2012 está ligado principalmente ao carnaval de qual cidade?",
    "o": [
      "Manaus",
      "Curitiba",
      "Goiânia",
      "Recife"
    ],
    "a": 3,
    "explanation": "O registro da UNESCO destaca a música e a dança do carnaval de Recife.",
    "factId": "qm-0118",
    "c": "cultura-brasileira",
    "source": {
      "name": "UNESCO — Frevo",
      "url": "https://ich.unesco.org/en/RL/frevo-performing-arts-of-the-carnival-of-recife-00603?lang=en"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2012"
  },
  {
    "id": "qm-0119",
    "topic": "atualidades",
    "t": "atualidades",
    "level": "facil",
    "q": "Qual cidade brasileira sediou a COP30 em novembro de 2025?",
    "o": [
      "Brasília",
      "Belém",
      "Fortaleza",
      "Porto Alegre"
    ],
    "a": 1,
    "explanation": "A conferência climática COP30 aconteceu em Belém, no Pará.",
    "factId": "qm-0119",
    "c": "atualidades",
    "source": {
      "name": "UNFCCC — COP30",
      "url": "https://unfccc.int/cop30"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2026-12-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2025"
  },
  {
    "id": "qm-0120",
    "topic": "curiosidades",
    "t": "atualidades",
    "level": "dificil",
    "q": "Qual metal está presente na hemocianina, proteína que transporta oxigênio no sangue dos polvos?",
    "o": [
      "Cobre",
      "Ferro",
      "Ouro",
      "Prata"
    ],
    "a": 0,
    "explanation": "A hemocianina contém cobre, ao contrário da hemoglobina humana, que contém ferro.",
    "factId": "qm-0120",
    "c": "curiosidades",
    "source": {
      "name": "Natural History Museum — Octopuses",
      "url": "https://www.nhm.ac.uk/discover/octopuses-keep-surprising-us-here-are-eight-examples-how.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0121",
    "topic": "matematica",
    "t": "geral",
    "level": "dificil",
    "q": "De um grupo de cinco pessoas distintas, quantas duplas diferentes podem ser escolhidas, sem considerar a ordem?",
    "o": [
      "5",
      "20",
      "10",
      "25"
    ],
    "a": 2,
    "explanation": "Há 5 × 4 escolhas ordenadas; dividindo por 2, obtemos 10 duplas.",
    "factId": "qm-0121",
    "c": "matematica",
    "source": null,
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0122",
    "topic": "portugues",
    "t": "geral",
    "level": "dificil",
    "q": "Em 'Embora chovesse, saímos', a oração iniciada por 'embora' expressa qual relação?",
    "o": [
      "Causa",
      "Finalidade",
      "Condição",
      "Concessão"
    ],
    "a": 3,
    "explanation": "A oração apresenta uma circunstância que não impede o fato principal: uma concessão.",
    "factId": "qm-0122",
    "c": "portugues",
    "source": {
      "name": "Ciberdúvidas — Concessiva",
      "url": "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/pese-embora-o-mau-tempo/21242"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  }
];
 if(typeof module === "object" && module.exports) module.exports=questions; else root.QuizQuestions=questions;
})(globalThis);
