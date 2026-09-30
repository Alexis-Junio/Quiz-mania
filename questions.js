// Permanent IDs; stage 4 preserved; stage 5 inputs: editorial/stage5.tsv
(function(root){const questions=[
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
  },
  {
    "id": "qm-0201",
    "factId": "qm-0201",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "facil",
    "q": "Nos jogos Super Mario, qual princesa governa o Reino dos Cogumelos?",
    "o": [
      "Zelda",
      "Peach",
      "Samus",
      "Daisy"
    ],
    "a": 1,
    "explanation": "Peach é a princesa do Reino dos Cogumelos.",
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
    "id": "qm-0202",
    "factId": "qm-0202",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "facil",
    "q": "Nos jogos Super Mario, quem é o rei dos Koopas?",
    "o": [
      "Toad",
      "Luigi",
      "Bowser",
      "Yoshi"
    ],
    "a": 2,
    "explanation": "Bowser lidera os Koopas e costuma enfrentar Mario.",
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
    "id": "qm-0203",
    "factId": "qm-0203",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "medio",
    "q": "Qual personagem de Super Mario cuida dos Lumas?",
    "o": [
      "Pauline",
      "Daisy",
      "Birdo",
      "Rosalina"
    ],
    "a": 3,
    "explanation": "Rosalina é a protetora dos Lumas.",
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
    "id": "qm-0204",
    "factId": "qm-0204",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "medio",
    "q": "Em The Legend of Zelda: Breath of the Wild (2017), qual é o nome do herói controlado pelo jogador?",
    "o": [
      "Link",
      "Zelda",
      "Ganondorf",
      "Impa"
    ],
    "a": 0,
    "explanation": "Link é o protagonista jogável dessa aventura.",
    "source": {
      "name": "Nintendo — Breath of the Wild Explorer's Guide",
      "url": "https://media.nintendo.com/zelda/breath-of-the-wild/assets/ExplorersGuide.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2017"
  },
  {
    "id": "qm-0205",
    "factId": "qm-0205",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "facil",
    "q": "Em Breath of the Wild (2017), qual reino deve ser salvo por Link?",
    "o": [
      "Mushroom Kingdom",
      "Hyrule",
      "Midgar",
      "Raccoon City"
    ],
    "a": 1,
    "explanation": "A aventura se passa no reino de Hyrule.",
    "source": {
      "name": "Nintendo — Breath of the Wild Explorer's Guide",
      "url": "https://media.nintendo.com/zelda/breath-of-the-wild/assets/ExplorersGuide.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2017"
  },
  {
    "id": "qm-0206",
    "factId": "qm-0206",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "dificil",
    "q": "Qual espada lendária é associada a Link no guia de Breath of the Wild (2017)?",
    "o": [
      "Buster Sword",
      "Gunblade",
      "Master Sword",
      "Keyblade"
    ],
    "a": 2,
    "explanation": "A Master Sword é a espada lendária de Link.",
    "source": {
      "name": "Nintendo — Breath of the Wild Explorer's Guide",
      "url": "https://media.nintendo.com/zelda/breath-of-the-wild/assets/ExplorersGuide.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2017"
  },
  {
    "id": "qm-0207",
    "factId": "qm-0207",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "medio",
    "q": "Em qual console portátil estreou Kirby's Dream Land em 1992?",
    "o": [
      "Game Gear",
      "Nintendo DS",
      "PSP",
      "Game Boy"
    ],
    "a": 3,
    "explanation": "Kirby's Dream Land foi lançado originalmente para Game Boy.",
    "source": {
      "name": "Nintendo — Kirby history",
      "url": "https://kirby.nintendo.com/about/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1992"
  },
  {
    "id": "qm-0208",
    "factId": "qm-0208",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "dificil",
    "q": "Qual jogo de 1993 introduziu a habilidade de Kirby de copiar poderes dos inimigos?",
    "o": [
      "Kirby's Adventure",
      "Kirby's Dream Land",
      "Kirby's Dream Course",
      "Kirby Air Ride"
    ],
    "a": 0,
    "explanation": "Kirby's Adventure introduziu a habilidade de cópia.",
    "source": {
      "name": "Nintendo — Kirby's Adventure",
      "url": "https://www.nintendo.com/en-gb/Games/NES/Kirby-s-Adventure-277754.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1993"
  },
  {
    "id": "qm-0209",
    "factId": "qm-0209",
    "topic": "games",
    "t": "entretenimento",
    "c": "games",
    "level": "dificil",
    "q": "Qual jogo de Kirby lançado originalmente para Super NES usa mecânicas semelhantes às do golfe?",
    "o": [
      "Kirby's Adventure",
      "Kirby's Dream Course",
      "Kirby Air Ride",
      "Kirby's Dream Land 2"
    ],
    "a": 1,
    "explanation": "Kirby's Dream Course combina Kirby e desafios inspirados no golfe.",
    "source": {
      "name": "Nintendo — Kirby's Dream Course",
      "url": "https://www.nintendo.com/en-gb/Games/Super-Nintendo/Kirby-s-Dream-Course-758013.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0210",
    "factId": "qm-0210",
    "topic": "futebol",
    "t": "geral",
    "c": "futebol",
    "level": "facil",
    "q": "Nas regras IFAB consultadas em setembro de 2026, qual cartão indica expulsão?",
    "o": [
      "Vermelho",
      "Amarelo",
      "Azul",
      "Verde"
    ],
    "a": 0,
    "explanation": "O cartão vermelho comunica a expulsão.",
    "source": {
      "name": "IFAB — Law 12",
      "url": "https://theifab.com/laws/latest/fouls-and-misconduct/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0211",
    "factId": "qm-0211",
    "topic": "futebol",
    "t": "geral",
    "c": "futebol",
    "level": "facil",
    "q": "Pela regra IFAB consultada em setembro de 2026, se a bola sair inteira pela linha de meta, tocada por último pelo ataque, sem gol, qual reinício é aplicado normalmente?",
    "o": [
      "Escanteio",
      "Tiro de meta",
      "Pênalti",
      "Bola ao chão"
    ],
    "a": 1,
    "explanation": "O último toque do ataque nessa saída determina tiro de meta.",
    "source": {
      "name": "IFAB — Law 16",
      "url": "https://www.theifab.com/laws/latest/the-goal-kick/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0212",
    "factId": "qm-0212",
    "topic": "futebol",
    "t": "geral",
    "c": "futebol",
    "level": "medio",
    "q": "Pela regra IFAB consultada em setembro de 2026, a marca do pênalti fica a quantos metros do ponto médio entre as traves?",
    "o": [
      "9",
      "12",
      "11",
      "16"
    ],
    "a": 2,
    "explanation": "A marca penal fica a 11 metros da meta.",
    "source": {
      "name": "IFAB — Law 1",
      "url": "https://www.theifab.com/laws/latest/the-field-of-play/?side-menu-category=laws-of-the-game"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0213",
    "factId": "qm-0213",
    "topic": "futebol",
    "t": "geral",
    "c": "futebol",
    "level": "dificil",
    "q": "Pela regra IFAB consultada em setembro de 2026, qual é a distância interna entre as traves de um gol de futebol de campo?",
    "o": [
      "6,32 m",
      "8,32 m",
      "5,32 m",
      "7,32 m"
    ],
    "a": 3,
    "explanation": "A largura interna regulamentar é de 7,32 metros.",
    "source": {
      "name": "IFAB — Law 1",
      "url": "https://www.theifab.com/laws/latest/the-field-of-play/?side-menu-category=laws-of-the-game"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0214",
    "factId": "qm-0214",
    "topic": "futebol",
    "t": "geral",
    "c": "futebol",
    "level": "dificil",
    "q": "Pela regra IFAB consultada em setembro de 2026, qual é a altura da borda inferior do travessão ao chão?",
    "o": [
      "2,44 m",
      "2,00 m",
      "2,74 m",
      "3,05 m"
    ],
    "a": 0,
    "explanation": "O travessão fica a 2,44 metros do chão.",
    "source": {
      "name": "IFAB — Law 1",
      "url": "https://www.theifab.com/laws/latest/the-field-of-play/?side-menu-category=laws-of-the-game"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0215",
    "factId": "qm-0215",
    "topic": "futebol",
    "t": "geral",
    "c": "futebol",
    "level": "medio",
    "q": "Pela regra IFAB consultada em setembro de 2026, receber a bola diretamente de qual reinício não gera infração de impedimento?",
    "o": [
      "Tiro livre direto",
      "Arremesso lateral",
      "Tiro livre indireto",
      "Passe com bola rolando"
    ],
    "a": 1,
    "explanation": "Não há impedimento ao receber diretamente de um arremesso lateral.",
    "source": {
      "name": "IFAB — Law 11",
      "url": "https://theifab.com/laws/latest/offside/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0216",
    "factId": "qm-0216",
    "topic": "futebol",
    "t": "geral",
    "c": "futebol",
    "level": "medio",
    "q": "Pela regra IFAB consultada em setembro de 2026, o que ocorre ao receber a segunda advertência amarela na mesma partida?",
    "o": [
      "Apenas advertência verbal",
      "Cinco minutos fora",
      "Expulsão",
      "Nenhuma sanção adicional"
    ],
    "a": 2,
    "explanation": "Duas advertências na mesma partida resultam em expulsão.",
    "source": {
      "name": "IFAB — Law 12",
      "url": "https://theifab.com/laws/latest/fouls-and-misconduct/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0217",
    "factId": "qm-0217",
    "topic": "futebol",
    "t": "geral",
    "c": "futebol",
    "level": "dificil",
    "q": "Pela regra IFAB consultada em setembro de 2026, quantos metros as linhas laterais da área penal avançam para dentro do campo?",
    "o": [
      "5,5",
      "11",
      "18,5",
      "16,5"
    ],
    "a": 3,
    "explanation": "A área penal se estende por 16,5 metros a partir da linha de meta.",
    "source": {
      "name": "IFAB — Law 1",
      "url": "https://www.theifab.com/laws/latest/the-field-of-play/?side-menu-category=laws-of-the-game"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0218",
    "factId": "qm-0218",
    "topic": "esportes",
    "t": "geral",
    "c": "esportes",
    "level": "facil",
    "q": "Pelas regras FIBA de 2024, quantos jogadores de cada equipe devem estar prontos em quadra para iniciar uma partida de basquete?",
    "o": [
      "5",
      "6",
      "7",
      "4"
    ],
    "a": 0,
    "explanation": "A partida começa com cinco jogadores prontos por equipe.",
    "source": {
      "name": "FIBA — Official Basketball Rules 2024",
      "url": "https://assets.fiba.basketball/image/upload/documents-corporate-fiba-official-rules-2024-v10a.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2024"
  },
  {
    "id": "qm-0219",
    "factId": "qm-0219",
    "topic": "esportes",
    "t": "geral",
    "c": "esportes",
    "level": "medio",
    "q": "Pelas regras FIBA de 2024, quanto dura cada quarto do tempo regulamentar?",
    "o": [
      "12 minutos",
      "10 minutos",
      "15 minutos",
      "8 minutos"
    ],
    "a": 1,
    "explanation": "São quatro quartos de dez minutos.",
    "source": {
      "name": "FIBA — Official Basketball Rules 2024",
      "url": "https://assets.fiba.basketball/image/upload/documents-corporate-fiba-official-rules-2024-v10a.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2024"
  },
  {
    "id": "qm-0220",
    "factId": "qm-0220",
    "topic": "esportes",
    "t": "geral",
    "c": "esportes",
    "level": "dificil",
    "q": "Pelas regras FIBA de 2024, qual é a duração de cada prorrogação?",
    "o": [
      "5 minutos",
      "3 minutos",
      "10 minutos",
      "12 minutos"
    ],
    "a": 0,
    "explanation": "Cada período extra dura cinco minutos.",
    "source": {
      "name": "FIBA — Official Basketball Rules 2024",
      "url": "https://assets.fiba.basketball/image/upload/documents-corporate-fiba-official-rules-2024-v10a.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2024"
  },
  {
    "id": "qm-0221",
    "factId": "qm-0221",
    "topic": "esportes",
    "t": "geral",
    "c": "esportes",
    "level": "medio",
    "q": "Pelas regras FIBA de 2024, qual é o limite inicial padrão para uma equipe tentar um arremesso após ganhar controle de bola viva?",
    "o": [
      "14 segundos",
      "24 segundos",
      "30 segundos",
      "8 segundos"
    ],
    "a": 1,
    "explanation": "O relógio de arremesso normalmente inicia com 24 segundos.",
    "source": {
      "name": "FIBA — Official Basketball Rules 2024",
      "url": "https://assets.fiba.basketball/image/upload/documents-corporate-fiba-official-rules-2024-v10a.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2024"
  },
  {
    "id": "qm-0222",
    "factId": "qm-0222",
    "topic": "esportes",
    "t": "geral",
    "c": "esportes",
    "level": "facil",
    "q": "No voleibol de quadra, segundo a FIVB consultada em setembro de 2026, quantos toques uma equipe pode usar para devolver a bola, além do bloqueio?",
    "o": [
      "2",
      "4",
      "3",
      "5"
    ],
    "a": 2,
    "explanation": "A equipe dispõe de três toques, sem contar o contato de bloqueio.",
    "source": {
      "name": "FIVB — Basic rules",
      "url": "https://www.fivb.com/volleyball/the-game/basic-rules/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0223",
    "factId": "qm-0223",
    "topic": "esportes",
    "t": "geral",
    "c": "esportes",
    "level": "dificil",
    "q": "Segundo a FIVB consultada em setembro de 2026, em qual sentido ocorre a rotação da equipe quando ela conquista o direito de sacar?",
    "o": [
      "Anti-horário",
      "Diagonal",
      "Livre escolha",
      "Horário"
    ],
    "a": 3,
    "explanation": "Os jogadores rodam uma posição no sentido horário.",
    "source": {
      "name": "FIVB — Basic rules",
      "url": "https://www.fivb.com/volleyball/the-game/basic-rules/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0224",
    "factId": "qm-0224",
    "topic": "esportes",
    "t": "geral",
    "c": "esportes",
    "level": "medio",
    "q": "No sistema tradicional de pontuação do tênis, segundo as regras ITF de 2026, como é chamada a igualdade após cada lado ganhar três pontos no game?",
    "o": [
      "Deuce",
      "Love",
      "Ace",
      "Let"
    ],
    "a": 0,
    "explanation": "A igualdade em 40 a 40 é chamada de deuce.",
    "source": {
      "name": "ITF — Rules of Tennis, apêndice do WTA 2026",
      "url": "https://www.itftennis.com/media/15607/wta-2026-rulebook.pdf"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0225",
    "factId": "qm-0225",
    "topic": "esportes",
    "t": "geral",
    "c": "esportes",
    "level": "dificil",
    "q": "Qual é a distância oficial de uma maratona de rua, também usada na Maratona de Sydney?",
    "o": [
      "40 km",
      "42,195 km",
      "21,0975 km",
      "50 km"
    ],
    "a": 1,
    "explanation": "Uma maratona mede 42 quilômetros e 195 metros.",
    "source": {
      "name": "Organização da Maratona de Sydney — distância oficial",
      "url": "https://www.tcssydneymarathon.com/marathon"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0226",
    "factId": "qm-0226",
    "topic": "artistas",
    "t": "entretenimento",
    "c": "artistas",
    "level": "medio",
    "q": "Quem pintou A Persistência da Memória (1931)?",
    "o": [
      "Pablo Picasso",
      "Joan Miró",
      "Salvador Dalí",
      "Claude Monet"
    ],
    "a": 2,
    "explanation": "A obra dos relógios derretidos é de Salvador Dalí.",
    "source": {
      "name": "MoMA — The Persistence of Memory",
      "url": "https://www.moma.org/collection/works/79018"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1931"
  },
  {
    "id": "qm-0227",
    "factId": "qm-0227",
    "topic": "artistas",
    "t": "entretenimento",
    "c": "artistas",
    "level": "dificil",
    "q": "Quem pintou Les Demoiselles d'Avignon (1907)?",
    "o": [
      "Henri Matisse",
      "Edvard Munch",
      "Paul Cézanne",
      "Pablo Picasso"
    ],
    "a": 3,
    "explanation": "Pablo Picasso pintou a obra em 1907.",
    "source": {
      "name": "MoMA — Les Demoiselles d'Avignon",
      "url": "https://www.moma.org/calendar/galleries/5696"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1907"
  },
  {
    "id": "qm-0228",
    "factId": "qm-0228",
    "topic": "artistas",
    "t": "entretenimento",
    "c": "artistas",
    "level": "medio",
    "q": "Qual artista criou Campbell's Soup Cans (1962)?",
    "o": [
      "Andy Warhol",
      "Jackson Pollock",
      "Roy Lichtenstein",
      "Mark Rothko"
    ],
    "a": 0,
    "explanation": "A série de latas de sopa é de Andy Warhol.",
    "source": {
      "name": "MoMA — Campbell's Soup Cans",
      "url": "https://www.moma.org/collection/works/79809?gclsrc=aw.ds"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1962"
  },
  {
    "id": "qm-0229",
    "factId": "qm-0229",
    "topic": "artistas",
    "t": "entretenimento",
    "c": "artistas",
    "level": "facil",
    "q": "Qual pintor é o autor dos Nenúfares (Water Lilies) da coleção do MoMA?",
    "o": [
      "Vincent van Gogh",
      "Claude Monet",
      "Salvador Dalí",
      "Diego Rivera"
    ],
    "a": 1,
    "explanation": "Monet pintou a série de nenúfares.",
    "source": {
      "name": "MoMA — Water Lilies",
      "url": "https://www.moma.org/collection/works/80220"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0230",
    "factId": "qm-0230",
    "topic": "artistas",
    "t": "entretenimento",
    "c": "artistas",
    "level": "facil",
    "q": "Quem pintou Abaporu (1928)?",
    "o": [
      "Tarsila do Amaral",
      "Anita Malfatti",
      "Lygia Clark",
      "Tomie Ohtake"
    ],
    "a": 0,
    "explanation": "Abaporu é uma obra de Tarsila do Amaral.",
    "source": {
      "name": "MALBA — Abaporu",
      "url": "https://tienda.malba.org.ar/products/verboamerica-tarsila-do-amaral-abaporu"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1928"
  },
  {
    "id": "qm-0231",
    "factId": "qm-0231",
    "topic": "artistas",
    "t": "entretenimento",
    "c": "artistas",
    "level": "medio",
    "q": "Quem criou os painéis Guerra e Paz oferecidos pelo Brasil à ONU?",
    "o": [
      "Di Cavalcanti",
      "Candido Portinari",
      "Alfredo Volpi",
      "Hélio Oiticica"
    ],
    "a": 1,
    "explanation": "Portinari criou os dois grandes painéis para a ONU.",
    "source": {
      "name": "Projeto Portinari — Guerra e Paz",
      "url": "https://www.portinari.org.br/projeto-portinari/realizacoes/103880/the-war-and-peace-project"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0232",
    "factId": "qm-0232",
    "topic": "artistas",
    "t": "entretenimento",
    "c": "artistas",
    "level": "dificil",
    "q": "Quem pintou Autorretrato com Cabelo Cortado (1940), da coleção do MoMA?",
    "o": [
      "Leonora Carrington",
      "Remedios Varo",
      "Frida Kahlo",
      "Georgia O'Keeffe"
    ],
    "a": 2,
    "explanation": "O autorretrato de 1940 é de Frida Kahlo.",
    "source": {
      "name": "MoMA — Constructing Gender",
      "url": "https://www.moma.org/collection/terms/investigating-identity/constructing-gender"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1940"
  },
  {
    "id": "qm-0233",
    "factId": "qm-0233",
    "topic": "artistas",
    "t": "entretenimento",
    "c": "artistas",
    "level": "dificil",
    "q": "Quem pintou Dance (I), em 1909, obra da coleção do MoMA?",
    "o": [
      "Piet Mondrian",
      "Wassily Kandinsky",
      "Paul Klee",
      "Henri Matisse"
    ],
    "a": 3,
    "explanation": "Dance (I) foi pintada por Henri Matisse.",
    "source": {
      "name": "MoMA — Collection",
      "url": "https://www.moma.org/collection/?with_images=true"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1909"
  },
  {
    "id": "qm-0234",
    "factId": "qm-0234",
    "topic": "portugues",
    "t": "geral",
    "c": "portugues",
    "level": "facil",
    "q": "Qual é o plural padrão de cidadão?",
    "o": [
      "Cidadãos",
      "Cidadões",
      "Cidadães",
      "Cidadãoses"
    ],
    "a": 0,
    "explanation": "O plural registrado é cidadãos.",
    "source": {
      "name": "Infopédia — Cidadãos",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/cidad%C3%A3os"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0235",
    "factId": "qm-0235",
    "topic": "portugues",
    "t": "geral",
    "c": "portugues",
    "level": "facil",
    "q": "Qual grafia está correta no português brasileiro?",
    "o": [
      "Excessão",
      "Exceção",
      "Esceção",
      "Exseção"
    ],
    "a": 1,
    "explanation": "Exceção é a grafia correta.",
    "source": {
      "name": "Infopédia — Exceção",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/exce%C3%A7%C3%A3o"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0236",
    "factId": "qm-0236",
    "topic": "portugues",
    "t": "geral",
    "c": "portugues",
    "level": "medio",
    "q": "Uma palavra com sílaba tônica na antepenúltima sílaba é classificada como quê?",
    "o": [
      "Oxítona",
      "Paroxítona",
      "Proparoxítona",
      "Monossílabo átono"
    ],
    "a": 2,
    "explanation": "Proparoxítonas têm a antepenúltima sílaba tônica.",
    "source": {
      "name": "Infopédia — Proparoxítono",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/Proparox%C3%ADtono"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0237",
    "factId": "qm-0237",
    "topic": "portugues",
    "t": "geral",
    "c": "portugues",
    "level": "medio",
    "q": "Como se chama o encontro de duas vogais que ficam em sílabas distintas, como em sa-í-da?",
    "o": [
      "Ditongo",
      "Tritongo",
      "Dígrafo",
      "Hiato"
    ],
    "a": 3,
    "explanation": "No hiato, as vogais pertencem a sílabas diferentes.",
    "source": {
      "name": "Infopédia — Hiato",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/HIATO"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0238",
    "factId": "qm-0238",
    "topic": "portugues",
    "t": "geral",
    "c": "portugues",
    "level": "dificil",
    "q": "Em 'Não entendi o porquê da mudança', qual é a classe de porquê?",
    "o": [
      "Substantivo",
      "Preposição",
      "Pronome pessoal",
      "Verbo"
    ],
    "a": 0,
    "explanation": "Com artigo e sentido de motivo, porquê é substantivo.",
    "source": {
      "name": "Infopédia — Porquê",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/porqu%C3%AA"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0239",
    "factId": "qm-0239",
    "topic": "portugues",
    "t": "geral",
    "c": "portugues",
    "level": "dificil",
    "q": "A forma verbal fizera pertence a qual tempo do indicativo?",
    "o": [
      "Pretérito imperfeito",
      "Pretérito mais-que-perfeito",
      "Futuro do presente",
      "Presente"
    ],
    "a": 1,
    "explanation": "Fizera indica uma ação anterior a outra passada.",
    "source": {
      "name": "Ciberdúvidas — Pretérito mais-que-perfeito",
      "url": "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/a-utilizacao-do-preterito-perfeito-e-do-preterito-mais-que-perfeito/29909"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0240",
    "factId": "qm-0240",
    "topic": "portugues",
    "t": "geral",
    "c": "portugues",
    "level": "facil",
    "q": "Qual palavra é antônimo de feliz, no sentido de contente?",
    "o": [
      "Infeliz",
      "Alegre",
      "Satisfeito",
      "Contente"
    ],
    "a": 0,
    "explanation": "Infeliz expressa a negação de felicidade nesse contexto.",
    "source": {
      "name": "Infopédia — Infeliz",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/infeliz"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0241",
    "factId": "qm-0241",
    "topic": "portugues",
    "t": "geral",
    "c": "portugues",
    "level": "medio",
    "q": "Complete segundo a concordância padrão: 'Nós ___ cedo ontem'.",
    "o": [
      "Chegou",
      "Chegamos",
      "Chegaram",
      "Cheguei"
    ],
    "a": 1,
    "explanation": "O pronome nós pede a primeira pessoa do plural.",
    "source": {
      "name": "Ciberdúvidas — Concordância sujeito-predicado",
      "url": "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/concordancia-sujeito-predicado/1679"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0242",
    "factId": "qm-0242",
    "topic": "cultura-brasileira",
    "t": "geral",
    "c": "cultura-brasileira",
    "level": "facil",
    "q": "O complexo cultural Bumba Meu Boi registrado pelo Iphan está ligado especialmente a qual estado?",
    "o": [
      "Paraná",
      "Acre",
      "Maranhão",
      "Santa Catarina"
    ],
    "a": 2,
    "explanation": "O registro destaca o Bumba Meu Boi do Maranhão.",
    "source": {
      "name": "Iphan — Pareceres de registro de bens culturais, vol. 1",
      "url": "https://bibliotecadigital.iphan.gov.br/items/0ef94d99-0d7f-49ec-b17f-296ca0aa932b"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0243",
    "factId": "qm-0243",
    "topic": "cultura-brasileira",
    "t": "geral",
    "c": "cultura-brasileira",
    "level": "medio",
    "q": "Em qual cidade fica o bairro de Goiabeiras associado ao ofício tradicional das paneleiras?",
    "o": [
      "Salvador",
      "Natal",
      "Belém",
      "Vitória"
    ],
    "a": 3,
    "explanation": "As paneleiras de Goiabeiras atuam em Vitória, Espírito Santo.",
    "source": {
      "name": "Iphan — Paneleiras de Goiabeiras",
      "url": "https://bcr.iphan.gov.br/bens-culturais/oficio-das-paneleiras-de-goiabeiras/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0244",
    "factId": "qm-0244",
    "topic": "cultura-brasileira",
    "t": "geral",
    "c": "cultura-brasileira",
    "level": "medio",
    "q": "Qual técnica de gravura é tradicionalmente usada em muitas capas de folhetos de cordel?",
    "o": [
      "Xilogravura",
      "Holografia",
      "Daguerreotipia",
      "Serigrafia digital"
    ],
    "a": 0,
    "explanation": "Muitas capas são feitas com impressão a partir de matriz de madeira.",
    "source": {
      "name": "Iphan — Literatura de cordel",
      "url": "https://bcr.iphan.gov.br/bens-culturais/literatura-de-cordel/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0245",
    "factId": "qm-0245",
    "topic": "cultura-brasileira",
    "t": "geral",
    "c": "cultura-brasileira",
    "level": "facil",
    "q": "A cajuína tradicional é produzida a partir do suco de qual fruto?",
    "o": [
      "Açaí",
      "Caju",
      "Maracujá",
      "Umbu"
    ],
    "a": 1,
    "explanation": "A cajuína é feita com suco clarificado de caju.",
    "source": {
      "name": "Iphan — Patrimônio imaterial do Piauí",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/piaui/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0246",
    "factId": "qm-0246",
    "topic": "cultura-brasileira",
    "t": "geral",
    "c": "cultura-brasileira",
    "level": "dificil",
    "q": "Qual município sergipano é referência do registro do modo de fazer renda irlandesa?",
    "o": [
      "Caicó",
      "Caruaru",
      "Divina Pastora",
      "Pirenópolis"
    ],
    "a": 2,
    "explanation": "O registro toma como referência o ofício em Divina Pastora.",
    "source": {
      "name": "Iphan — Renda irlandesa em Divina Pastora",
      "url": "https://sicg.iphan.gov.br/sicg/bemImaterial/rel/116/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0247",
    "factId": "qm-0247",
    "topic": "cultura-brasileira",
    "t": "geral",
    "c": "cultura-brasileira",
    "level": "dificil",
    "q": "A arte Kusiwa, registrada como patrimônio cultural brasileiro, pertence a qual povo indígena?",
    "o": [
      "Karajá",
      "Xavante",
      "Guarani Mbya",
      "Wajãpi"
    ],
    "a": 3,
    "explanation": "Kusiwa é a pintura corporal e arte gráfica dos Wajãpi.",
    "source": {
      "name": "Iphan — Pareceres de registro de bens culturais, vol. 1",
      "url": "https://bibliotecadigital.iphan.gov.br/items/0ef94d99-0d7f-49ec-b17f-296ca0aa932b"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0248",
    "factId": "qm-0248",
    "topic": "cultura-brasileira",
    "t": "geral",
    "c": "cultura-brasileira",
    "level": "medio",
    "q": "A região do Recôncavo, ligada ao samba de roda registrado em 2004, fica em qual estado?",
    "o": [
      "Bahia",
      "Alagoas",
      "Ceará",
      "Goiás"
    ],
    "a": 0,
    "explanation": "O Recôncavo Baiano está na Bahia; o registro foi ampliado para o estado em 2024.",
    "source": {
      "name": "Iphan — Samba de Roda do Estado da Bahia",
      "url": "https://bcr.iphan.gov.br/bens-culturais/samba-de-roda-do-reconcavo-baiano/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2004"
  },
  {
    "id": "qm-0249",
    "factId": "qm-0249",
    "topic": "cultura-brasileira",
    "t": "geral",
    "c": "cultura-brasileira",
    "level": "dificil",
    "q": "Qual bebida tradicional tem produção e práticas socioculturais registradas pelo Iphan no Piauí?",
    "o": [
      "Chimarrão",
      "Cajuína",
      "Aluá de arroz",
      "Caldo de cana"
    ],
    "a": 1,
    "explanation": "O registro piauiense trata da produção tradicional da cajuína.",
    "source": {
      "name": "Iphan — Pareceres de registro de bens culturais, vol. 1",
      "url": "https://bibliotecadigital.iphan.gov.br/items/0ef94d99-0d7f-49ec-b17f-296ca0aa932b"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0250",
    "factId": "qm-0250",
    "topic": "biblia",
    "t": "geral",
    "c": "biblia",
    "level": "facil",
    "q": "Segundo 1 Samuel 17, quem enfrentou Golias com uma funda?",
    "o": [
      "Davi",
      "Saul",
      "Salomão",
      "Sansão"
    ],
    "a": 0,
    "explanation": "Davi atingiu Golias com uma pedra lançada pela funda.",
    "source": {
      "name": "Bíblia — 1 Samuel 17",
      "url": "https://www.biblegateway.com/passage/?search=1Sam.17"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0251",
    "factId": "qm-0251",
    "topic": "biblia",
    "t": "geral",
    "c": "biblia",
    "level": "facil",
    "q": "Segundo Êxodo 3, quem viu a sarça que ardia sem se consumir?",
    "o": [
      "Abraão",
      "Moisés",
      "Jacó",
      "Elias"
    ],
    "a": 1,
    "explanation": "A narrativa da sarça ardente apresenta o chamado de Moisés.",
    "source": {
      "name": "Bíblia — Êxodo 3 e 19–20",
      "url": "https://www.biblegateway.com/passage/?search=Exodus+3%2CExodus+19-20&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0252",
    "factId": "qm-0252",
    "topic": "biblia",
    "t": "geral",
    "c": "biblia",
    "level": "medio",
    "q": "Segundo Êxodo 19, em qual monte Deus chamou Moisés durante a aliança com Israel?",
    "o": [
      "Carmelo",
      "Sião",
      "Sinai",
      "Tabor"
    ],
    "a": 2,
    "explanation": "Êxodo 19 situa o encontro no monte Sinai.",
    "source": {
      "name": "Bíblia — Êxodo 3 e 19–20",
      "url": "https://www.biblegateway.com/passage/?search=Exodus+3%2CExodus+19-20&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0253",
    "factId": "qm-0253",
    "topic": "biblia",
    "t": "geral",
    "c": "biblia",
    "level": "medio",
    "q": "Segundo Daniel 6, em qual lugar Daniel foi lançado como punição por continuar orando?",
    "o": [
      "Fornalha",
      "Cisterna",
      "Mar",
      "Cova dos leões"
    ],
    "a": 3,
    "explanation": "Daniel foi lançado na cova dos leões.",
    "source": {
      "name": "Bíblia — Daniel 6",
      "url": "https://search.biblegateway.com/passage/?search=Daniel+6&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0254",
    "factId": "qm-0254",
    "topic": "biblia",
    "t": "geral",
    "c": "biblia",
    "level": "dificil",
    "q": "Na parábola de Lucas 10, qual viajante socorreu o homem ferido depois que sacerdote e levita passaram?",
    "o": [
      "Samaritano",
      "Fariseu",
      "Saduceu",
      "Publicano"
    ],
    "a": 0,
    "explanation": "O samaritano cuidou do ferido e o levou a uma hospedaria.",
    "source": {
      "name": "Bíblia — Lucas 10",
      "url": "https://www.biblegateway.com/passage/?search=Luke+10&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0255",
    "factId": "qm-0255",
    "topic": "biblia",
    "t": "geral",
    "c": "biblia",
    "level": "dificil",
    "q": "Segundo Êxodo 3:1, qual sogro de Moisés era sacerdote de Midiã?",
    "o": [
      "Labão",
      "Jetro",
      "Melquisedeque",
      "Eli"
    ],
    "a": 1,
    "explanation": "Jetro é apresentado como sogro de Moisés e sacerdote de Midiã.",
    "source": {
      "name": "Bíblia — Êxodo 3 e 19–20",
      "url": "https://www.biblegateway.com/passage/?search=Exodus+3%2CExodus+19-20&version=NIV"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0256",
    "factId": "qm-0256",
    "topic": "tecnologia",
    "t": "geral",
    "c": "tecnologia",
    "level": "facil",
    "q": "O que acontece normalmente com os dados da RAM volátil quando falta energia?",
    "o": [
      "Viram arquivos PDF",
      "Passam automaticamente ao SSD",
      "São perdidos",
      "São impressos"
    ],
    "a": 2,
    "explanation": "A RAM volátil precisa de energia para manter os dados.",
    "source": {
      "name": "IBM — DIMM e memória RAM",
      "url": "https://www.ibm.com/think/topics/dimm"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0257",
    "factId": "qm-0257",
    "topic": "tecnologia",
    "t": "geral",
    "c": "tecnologia",
    "level": "medio",
    "q": "Qual tecnologia de memória é usada tipicamente nos SSDs modernos descritos pela IBM?",
    "o": [
      "Fita magnética",
      "Disco óptico",
      "Cartão perfurado",
      "NAND flash"
    ],
    "a": 3,
    "explanation": "SSDs modernos geralmente armazenam dados em memória NAND flash.",
    "source": {
      "name": "IBM — Flash versus SSD",
      "url": "https://www.ibm.com/think/topics/flash-vs-ssd-storage"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0258",
    "factId": "qm-0258",
    "topic": "tecnologia",
    "t": "geral",
    "c": "tecnologia",
    "level": "facil",
    "q": "Qual componente executa as instruções dos programas de uso geral em um computador?",
    "o": [
      "CPU",
      "Monitor",
      "Teclado",
      "Gabinete"
    ],
    "a": 0,
    "explanation": "A CPU é o processador responsável por executar instruções.",
    "source": {
      "name": "Intel — Execução de instruções",
      "url": "https://www.intel.com/content/www/us/en/developer/articles/technical/software-security-guidance/technical-documentation/hardware-behavior-related-to-speculative-execution.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0259",
    "factId": "qm-0259",
    "topic": "tecnologia",
    "t": "geral",
    "c": "tecnologia",
    "level": "dificil",
    "q": "Segundo a RFC 3629, quantos octetos podem codificar um valor escalar Unicode em UTF-8?",
    "o": [
      "Sempre 2",
      "De 1 a 4",
      "Sempre 8",
      "De 5 a 8"
    ],
    "a": 1,
    "explanation": "UTF-8 usa sequências de um a quatro octetos.",
    "source": {
      "name": "IETF — RFC 3629",
      "url": "https://www.rfc-editor.org/info/rfc3629/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0260",
    "factId": "qm-0260",
    "topic": "tecnologia",
    "t": "geral",
    "c": "tecnologia",
    "level": "medio",
    "q": "Qual comando SQL é usado para consultar linhas de uma tabela?",
    "o": [
      "SELECT",
      "DELETE",
      "DROP",
      "ALTER"
    ],
    "a": 0,
    "explanation": "SELECT consulta dados sem, por si só, alterar a tabela.",
    "source": {
      "name": "SQLite — SELECT",
      "url": "https://www.sqlite.org/lang_select.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0261",
    "factId": "qm-0261",
    "topic": "tecnologia",
    "t": "geral",
    "c": "tecnologia",
    "level": "dificil",
    "q": "Em uma consulta SELECT, qual cláusula filtra linhas antes do agrupamento?",
    "o": [
      "ORDER BY",
      "WHERE",
      "LIMIT",
      "DISTINCT"
    ],
    "a": 1,
    "explanation": "WHERE aplica a condição de seleção às linhas antes de GROUP BY.",
    "source": {
      "name": "SQLite — SELECT",
      "url": "https://www.sqlite.org/lang_select.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0262",
    "factId": "qm-0262",
    "topic": "geral",
    "t": "geral",
    "c": "geral",
    "level": "facil",
    "q": "Qual é a unidade de base de massa no Sistema Internacional?",
    "o": [
      "Litro",
      "Newton",
      "Quilograma",
      "Metro"
    ],
    "a": 2,
    "explanation": "O quilograma é a unidade de base de massa do SI.",
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
    "id": "qm-0263",
    "factId": "qm-0263",
    "topic": "geral",
    "t": "geral",
    "c": "geral",
    "level": "medio",
    "q": "Qual é a unidade de base de corrente elétrica no SI?",
    "o": [
      "Volt",
      "Ohm",
      "Watt",
      "Ampere"
    ],
    "a": 3,
    "explanation": "A corrente elétrica tem o ampere como unidade de base.",
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
    "id": "qm-0264",
    "factId": "qm-0264",
    "topic": "geral",
    "t": "geral",
    "c": "geral",
    "level": "dificil",
    "q": "Qual é a unidade de base de intensidade luminosa no SI?",
    "o": [
      "Candela",
      "Lúmen",
      "Lux",
      "Joule"
    ],
    "a": 0,
    "explanation": "A intensidade luminosa é medida em candelas no SI.",
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
    "id": "qm-0265",
    "factId": "qm-0265",
    "topic": "geral",
    "t": "geral",
    "c": "geral",
    "level": "dificil",
    "q": "Qual é a unidade de base de quantidade de substância no SI?",
    "o": [
      "Grama",
      "Mol",
      "Pascal",
      "Kelvin"
    ],
    "a": 1,
    "explanation": "O mol é a unidade de quantidade de substância.",
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
    "id": "qm-0266",
    "factId": "qm-0266",
    "topic": "historia",
    "t": "geral",
    "c": "historia",
    "level": "facil",
    "q": "Em que ano a Lei Áurea declarou extinta a escravidão no Brasil?",
    "o": [
      "1822",
      "1889",
      "1888",
      "1850"
    ],
    "a": 2,
    "explanation": "A Lei 3.353 foi sancionada em 13 de maio de 1888.",
    "source": {
      "name": "Presidência — Lei 3.353/1888",
      "url": "https://planalto.gov.br/ccivil_03/leis/lim/lim3353.htm"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0267",
    "factId": "qm-0267",
    "topic": "historia",
    "t": "geral",
    "c": "historia",
    "level": "medio",
    "q": "Em que data foi proclamada a República no Brasil?",
    "o": [
      "7 de setembro de 1822",
      "13 de maio de 1888",
      "21 de abril de 1792",
      "15 de novembro de 1889"
    ],
    "a": 3,
    "explanation": "A proclamação da República ocorreu em 15 de novembro de 1889.",
    "source": {
      "name": "Presidência — Decreto 58-A/1889",
      "url": "https://www.planalto.gov.br/ccivil_03/decreto/1851-1899/d0058a.htm"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0268",
    "factId": "qm-0268",
    "topic": "historia",
    "t": "geral",
    "c": "historia",
    "level": "medio",
    "q": "Em que ano ocorreu a tomada da Bastilha, em Paris?",
    "o": [
      "1789",
      "1776",
      "1815",
      "1848"
    ],
    "a": 0,
    "explanation": "A tomada da Bastilha ocorreu em 14 de julho de 1789.",
    "source": {
      "name": "Élysée — 14 juillet",
      "url": "https://www.elysee.fr/la-presidence/la-fete-nationale-du-14-juillet"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0269",
    "factId": "qm-0269",
    "topic": "historia",
    "t": "geral",
    "c": "historia",
    "level": "dificil",
    "q": "Em que ano foi firmado o Tratado de Tordesilhas entre as coroas portuguesa e castelhana?",
    "o": [
      "1500",
      "1494",
      "1580",
      "1640"
    ],
    "a": 1,
    "explanation": "O Tratado de Tordesilhas foi firmado em 1494.",
    "source": {
      "name": "Torre do Tombo — Ratificação de Tordesilhas",
      "url": "https://portal.arquivos.pt/record?id=oai%3APT%2FTT%3A4186002&s=%27xlgS7%27"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0270",
    "factId": "qm-0270",
    "topic": "geografia",
    "t": "geral",
    "c": "geografia",
    "level": "facil",
    "q": "Qual é o maior oceano da Terra em área?",
    "o": [
      "Pacífico",
      "Atlântico",
      "Índico",
      "Ártico"
    ],
    "a": 0,
    "explanation": "O Pacífico é a maior bacia oceânica do planeta.",
    "source": {
      "name": "NOAA — Pacific Ocean",
      "url": "https://oceanservice.noaa.gov/facts/pacific.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0271",
    "factId": "qm-0271",
    "topic": "geografia",
    "t": "geral",
    "c": "geografia",
    "level": "medio",
    "q": "Qual é a latitude da linha do Equador geográfico?",
    "o": [
      "23,5 graus norte",
      "0 grau",
      "66,5 graus sul",
      "90 graus norte"
    ],
    "a": 1,
    "explanation": "A linha do Equador corresponde à latitude zero.",
    "source": {
      "name": "NOAA — Latitude",
      "url": "https://oceanservice.noaa.gov/facts/latitude.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0272",
    "factId": "qm-0272",
    "topic": "geografia",
    "t": "geral",
    "c": "geografia",
    "level": "medio",
    "q": "Qual montanha tem o cume mais alto do mundo quando medido em relação ao nível do mar?",
    "o": [
      "K2",
      "Kilimanjaro",
      "Everest",
      "Aconcágua"
    ],
    "a": 2,
    "explanation": "O Everest tem a maior altitude de cume acima do nível do mar.",
    "source": {
      "name": "NASA — The Eight-Thousanders",
      "url": "https://science.nasa.gov/earth/earth-observatory/the-eight-thousanders/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0273",
    "factId": "qm-0273",
    "topic": "matematica",
    "t": "geral",
    "c": "matematica",
    "level": "facil",
    "q": "Quanto é 36 + 27?",
    "o": [
      "53",
      "73",
      "61",
      "63"
    ],
    "a": 3,
    "explanation": "36 + 20 = 56; somando 7, obtemos 63.",
    "source": {
      "name": "OpenStax — Prealgebra 2e",
      "url": "https://openstax.org/books/prealgebra-2e/pages/1-introduction"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0274",
    "factId": "qm-0274",
    "topic": "matematica",
    "t": "geral",
    "c": "matematica",
    "level": "facil",
    "q": "Qual é a representação decimal de 3/4?",
    "o": [
      "0,75",
      "0,34",
      "0,25",
      "1,33"
    ],
    "a": 0,
    "explanation": "Dividindo 3 por 4, obtemos 0,75.",
    "source": {
      "name": "OpenStax — Prealgebra 2e",
      "url": "https://openstax.org/books/prealgebra-2e/pages/1-introduction"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0275",
    "factId": "qm-0275",
    "topic": "matematica",
    "t": "geral",
    "c": "matematica",
    "level": "medio",
    "q": "Quanto é 15% de 200?",
    "o": [
      "15",
      "30",
      "20",
      "45"
    ],
    "a": 1,
    "explanation": "15/100 × 200 = 30.",
    "source": {
      "name": "OpenStax — Percentuais",
      "url": "https://openstax.org/books/prealgebra-2e/pages/6-1-understand-percent"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0276",
    "factId": "qm-0276",
    "topic": "matematica",
    "t": "geral",
    "c": "matematica",
    "level": "medio",
    "q": "Qual valor de x satisfaz 3x + 7 = 22?",
    "o": [
      "3",
      "7",
      "5",
      "9"
    ],
    "a": 2,
    "explanation": "Subtraindo 7, temos 3x = 15; dividindo por 3, x = 5.",
    "source": {
      "name": "OpenStax — Equações",
      "url": "https://openstax.org/books/prealgebra-2e/pages/5-4-solve-equations-with-decimals"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0277",
    "factId": "qm-0277",
    "topic": "matematica",
    "t": "geral",
    "c": "matematica",
    "level": "dificil",
    "q": "Um triângulo retângulo tem catetos de 5 cm e 12 cm. Quanto mede a hipotenusa?",
    "o": [
      "17 cm",
      "7 cm",
      "15 cm",
      "13 cm"
    ],
    "a": 3,
    "explanation": "Pelo teorema de Pitágoras, a hipotenusa é a raiz de 25 + 144, isto é, 13.",
    "source": {
      "name": "OpenStax — Teorema de Pitágoras",
      "url": "https://openstax.org/books/prealgebra-2e/pages/9-3-use-properties-of-angles-triangles-and-the-pythagorean-theorem"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0278",
    "factId": "qm-0278",
    "topic": "matematica",
    "t": "geral",
    "c": "matematica",
    "level": "dificil",
    "q": "Qual é o maior divisor comum de 48 e 18?",
    "o": [
      "6",
      "3",
      "9",
      "12"
    ],
    "a": 0,
    "explanation": "Os divisores comuns são 1, 2, 3 e 6; o maior é 6.",
    "source": {
      "name": "OpenStax — Prealgebra 2e",
      "url": "https://openstax.org/books/prealgebra-2e/pages/1-introduction"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "id": "qm-0279",
    "factId": "qm-0279",
    "topic": "filmes",
    "t": "entretenimento",
    "c": "filmes",
    "level": "medio",
    "q": "Quem dirigiu Barbie (2023)?",
    "o": [
      "Sofia Coppola",
      "Greta Gerwig",
      "Kathryn Bigelow",
      "Chloé Zhao"
    ],
    "a": 1,
    "explanation": "Greta Gerwig dirigiu o filme Barbie de 2023.",
    "source": {
      "name": "Warner Bros. Discovery — Barbie, direção e roteiro",
      "url": "https://press.wbd.com/us/media-release/barbie-skates-past-500-million-worldwide?language_content_entity=en"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2023"
  },
  {
    "id": "qm-0280",
    "factId": "qm-0280",
    "topic": "filmes",
    "t": "entretenimento",
    "c": "filmes",
    "level": "facil",
    "q": "O protagonista histórico de Oppenheimer (2023) era um cientista de qual área?",
    "o": [
      "Física",
      "Botânica",
      "Geologia",
      "Zoologia"
    ],
    "a": 0,
    "explanation": "J. Robert Oppenheimer era físico e dirigiu o laboratório de Los Alamos.",
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
    "id": "qm-0281",
    "factId": "qm-0281",
    "topic": "animacoes",
    "t": "entretenimento",
    "c": "animacoes",
    "level": "facil",
    "q": "Em Procurando Nemo (2003), qual é o nome do pai de Nemo?",
    "o": [
      "Bruce",
      "Marlin",
      "Gill",
      "Nigel"
    ],
    "a": 1,
    "explanation": "Marlin é o pai que atravessa o oceano em busca de Nemo.",
    "source": {
      "name": "Pixar — Finding Nemo",
      "url": "https://www.pixar.com/finding-nemo"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2003"
  },
  {
    "id": "qm-0282",
    "factId": "qm-0282",
    "topic": "animacoes",
    "t": "entretenimento",
    "c": "animacoes",
    "level": "facil",
    "q": "Em Ratatouille (2007), qual é o nome do rato que gosta de cozinhar?",
    "o": [
      "Linguini",
      "Gusteau",
      "Remy",
      "Skinner"
    ],
    "a": 2,
    "explanation": "Remy é o rato protagonista apaixonado por culinária.",
    "source": {
      "name": "Pixar — Ratatouille",
      "url": "https://www.pixar.com/ratatouille"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2007"
  },
  {
    "id": "qm-0283",
    "factId": "qm-0283",
    "topic": "animacoes",
    "t": "entretenimento",
    "c": "animacoes",
    "level": "medio",
    "q": "Em Viva — A Vida É uma Festa (Coco, 2017), qual é o nome do menino protagonista?",
    "o": [
      "Héctor",
      "Ernesto",
      "Dante",
      "Miguel"
    ],
    "a": 3,
    "explanation": "Miguel é o menino que sonha em ser músico.",
    "source": {
      "name": "Pixar — Coco",
      "url": "https://www.pixar.com/coco"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2017"
  },
  {
    "id": "qm-0284",
    "factId": "qm-0284",
    "topic": "animacoes",
    "t": "entretenimento",
    "c": "animacoes",
    "level": "medio",
    "q": "Em Divertida Mente (2015), para qual cidade Riley se muda com a família?",
    "o": [
      "São Francisco",
      "Seattle",
      "Chicago",
      "Boston"
    ],
    "a": 0,
    "explanation": "A mudança para São Francisco desencadeia a nova fase de Riley.",
    "source": {
      "name": "Pixar — Inside Out",
      "url": "https://www.pixar.com/inside-out"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2015"
  },
  {
    "id": "qm-0285",
    "factId": "qm-0285",
    "topic": "animacoes",
    "t": "entretenimento",
    "c": "animacoes",
    "level": "dificil",
    "q": "Em WALL-E (2008), qual é o nome da nave em que vivem os humanos?",
    "o": [
      "Discovery",
      "Axiom",
      "Nostromo",
      "Enterprise"
    ],
    "a": 1,
    "explanation": "A nave de passageiros do filme se chama Axiom.",
    "source": {
      "name": "Pixar — WALL-E",
      "url": "https://www.pixar.com/wall-e"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2008"
  },
  {
    "id": "qm-0286",
    "factId": "qm-0286",
    "topic": "animacoes",
    "t": "entretenimento",
    "c": "animacoes",
    "level": "dificil",
    "q": "Em Divertida Mente (2015), quem é o amigo imaginário de Riley?",
    "o": [
      "Anger",
      "Fear",
      "Bing Bong",
      "Jangles"
    ],
    "a": 2,
    "explanation": "Bing Bong é o amigo imaginário da infância de Riley.",
    "source": {
      "name": "Pixar — Inside Out",
      "url": "https://www.pixar.com/inside-out"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2015"
  },
  {
    "id": "qm-0287",
    "factId": "qm-0287",
    "topic": "musica",
    "t": "entretenimento",
    "c": "musica",
    "level": "facil",
    "q": "Quantas teclas possui o piano digital Yamaha P-225, conforme a ficha oficial consultada em setembro de 2026?",
    "o": [
      "61",
      "76",
      "49",
      "88"
    ],
    "a": 3,
    "explanation": "O P-225 possui teclado de 88 teclas.",
    "source": {
      "name": "Yamaha — P-225, 88 teclas",
      "url": "https://usa.yamaha.com/products/musical_instruments/pianos/p_series/p-225/index.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2026"
  },
  {
    "id": "qm-0288",
    "factId": "qm-0288",
    "topic": "musica",
    "t": "entretenimento",
    "c": "musica",
    "level": "medio",
    "q": "Na notação musical usual, qual clave fixa o Sol na segunda linha do pentagrama?",
    "o": [
      "Clave de Sol",
      "Clave de Fá",
      "Clave de Dó na terceira linha",
      "Clave de Dó na quarta linha"
    ],
    "a": 0,
    "explanation": "A clave de Sol usual indica o Sol na segunda linha.",
    "source": {
      "name": "UFMA — Notação musical",
      "url": "https://musica.ufma.br/bordini/ext/unidades/unidade_01a.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  }
,
  {
    "c": "Biologia",
    "q": "Qual organela é responsável pela síntese de proteínas nas células?",
    "o": [
      "Núcleo",
      "Ribossomo",
      "Mitocôndria",
      "Aparelho de Golgi"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0289",
    "level": "facil",
    "factId": "qm-0289",
    "topic": "ciencia",
    "explanation": "Os ribossomos são as organelas responsáveis pela síntese de proteínas nas células.",
    "source": {
      "name": "OpenStax — Protein Synthesis",
      "url": "https://openstax.org/books/biology-2e/pages/9-4-translation"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Química",
    "q": "Qual é a fórmula química da água?",
    "o": [
      "H2O",
      "CO2",
      "O2",
      "H2SO4"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0290",
    "level": "facil",
    "factId": "qm-0290",
    "topic": "ciencia",
    "explanation": "A fórmula química da água é H2O, dois átomos de hidrogênio e um de oxigênio.",
    "source": {
      "name": "IUPAC — Water",
      "url": "https://iupac.org/what-we-do/water/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Física",
    "q": "Qual é a velocidade da luz no vácuo, aproximadamente?",
    "o": [
      "300.000 km/s",
      "150.000 km/s",
      "500.000 km/s",
      "1.000.000 km/s"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0291",
    "level": "facil",
    "factId": "qm-0291",
    "topic": "ciencia",
    "explanation": "A velocidade da luz no vácuo é aproximadamente 300.000 km/s (299.792.458 m/s).",
    "source": {
      "name": "NIST — Speed of Light",
      "url": "https://physics.nist.gov/cgi-bin/cuu/Value?c"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Astronomia",
    "q": "Qual é o planeta mais próximo do Sol?",
    "o": [
      "Vênus",
      "Mercúrio",
      "Marte",
      "Terra"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0292",
    "level": "facil",
    "factId": "qm-0292",
    "topic": "ciencia",
    "explanation": "Mercúrio é o planeta mais próximo do Sol, orbitando a uma distância média de 58 milhões de km.",
    "source": {
      "name": "NASA — Mercury",
      "url": "https://science.nasa.gov/mercury/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geologia",
    "q": "Qual é a camada mais externa da Terra?",
    "o": [
      "Núcleo",
      "Manto",
      "Crosta",
      "Núcleo interno"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0293",
    "level": "facil",
    "factId": "qm-0293",
    "topic": "ciencia",
    "explanation": "A crosta terrestre é a camada mais externa e sólida da Terra.",
    "source": {
      "name": "USGS — Earth's Structure",
      "url": "https://www.usgs.gov/faqs/what-structure-earth"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Química",
    "q": "Qual gás é o mais abundante na atmosfera terrestre?",
    "o": [
      "Oxigênio",
      "Nitrogênio",
      "Argônio",
      "Dióxido de carbono"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0294",
    "level": "facil",
    "factId": "qm-0294",
    "topic": "ciencia",
    "explanation": "O nitrogênio compõe cerca de 78% da atmosfera terrestre.",
    "source": {
      "name": "NASA — Earth's Atmosphere",
      "url": "https://www.nasa.gov/earth-atmosphere"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Biologia",
    "q": "Qual molécula carrega a informação genética nas células?",
    "o": [
      "RNA",
      "DNA",
      "Proteína",
      "Lipídio"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0295",
    "level": "facil",
    "factId": "qm-0295",
    "topic": "ciencia",
    "explanation": "O DNA (ácido desoxirribonucleico) armazena a informação genética hereditária.",
    "source": {
      "name": "NHGRI — DNA",
      "url": "https://www.genome.gov/genetics-glossary/Deoxyribonucleic-Acid"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Física",
    "q": "Qual é a unidade SI de força?",
    "o": [
      "Joule",
      "Watt",
      "Newton",
      "Pascal"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0296",
    "level": "medio",
    "factId": "qm-0296",
    "topic": "ciencia",
    "explanation": "O newton (N) é a unidade SI de força, definida como kg·m/s².",
    "source": {
      "name": "BIPM — SI Units",
      "url": "https://www.bipm.org/en/measurement-units/si-force"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Química",
    "q": "Quantos prótons tem um átomo de carbono?",
    "o": [
      "4",
      "6",
      "8",
      "12"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0297",
    "level": "medio",
    "factId": "qm-0297",
    "topic": "ciencia",
    "explanation": "O número atômico do carbono é 6, correspondendo a 6 prótons.",
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
    "c": "Biologia",
    "q": "Qual é a unidade básica da vida?",
    "o": [
      "Tecido",
      "Órgão",
      "Célula",
      "Sistema"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0298",
    "level": "medio",
    "factId": "qm-0298",
    "topic": "ciencia",
    "explanation": "A célula é considerada a unidade estrutural e funcional básica dos seres vivos.",
    "source": {
      "name": "OpenStax — Cell Theory",
      "url": "https://openstax.org/books/biology-2e/pages/3-1-cell-theory"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Química",
    "q": "Qual é o pH de uma solução neutra a 25°C?",
    "o": [
      "0",
      "7",
      "14",
      "1"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0299",
    "level": "medio",
    "factId": "qm-0299",
    "topic": "ciencia",
    "explanation": "A escala de pH vai de 0 a 14; 7 é neutro a 25°C.",
    "source": {
      "name": "Khan Academy — pH Scale",
      "url": "https://www.khanacademy.org/science/chemistry/acids-and-bases-topic/ph-scale/v/ph-scale"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Astronomia",
    "q": "Qual é a maior lua do Sistema Solar?",
    "o": [
      "Ganimedes",
      "Titã",
      "Calisto",
      "Lua"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0300",
    "level": "medio",
    "factId": "qm-0300",
    "topic": "ciencia",
    "explanation": "Ganimedes, lua de Júpiter, é a maior lua do Sistema Solar, maior até que o planeta Mercúrio.",
    "source": {
      "name": "NASA — Ganymede",
      "url": "https://science.nasa.gov/jupiter/moons/ganymede/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Física",
    "q": "Qual lei descreve a relação entre pressão e volume de um gás a temperatura constante?",
    "o": [
      "Lei de Charles",
      "Lei de Boyle",
      "Lei de Gay-Lussac",
      "Lei dos Gases Ideais"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0301",
    "level": "medio",
    "factId": "qm-0301",
    "topic": "ciencia",
    "explanation": "A lei de Boyle estabelece que, a temperatura constante, a pressão de um gás é inversamente proporcional ao seu volume.",
    "source": {
      "name": "NASA — Boyle's Law",
      "url": "https://www.grc.nasa.gov/www/k-12/airplane/boyle.html"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Química",
    "q": "Qual elemento tem símbolo químico Fe?",
    "o": [
      "Ferro",
      "Fósforo",
      "Flúor",
      "Francio"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0302",
    "level": "medio",
    "factId": "qm-0302",
    "topic": "ciencia",
    "explanation": "Fe é o símbolo químico do ferro, derivado do latim ferrum.",
    "source": {
      "name": "Royal Society of Chemistry — Iron",
      "url": "https://periodic-table.rsc.org/element/26/iron"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Biologia",
    "q": "Qual é o nome do ciclo bioquímico que fixa carbono na fotossíntese?",
    "o": [
      "Ciclo de Krebs",
      "Ciclo de Calvin",
      "Ciclo da ureia",
      "Ciclo do ácido cítrico"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0303",
    "level": "dificil",
    "factId": "qm-0303",
    "topic": "ciencia",
    "explanation": "O ciclo de Calvin (ou ciclo de Calvin-Benson) é o conjunto de reações que fixa CO2 em compostos orgânicos durante a fotossíntese.",
    "source": {
      "name": "OpenStax — Calvin Cycle",
      "url": "https://openstax.org/books/biology-2e/pages/8-2-the-calvin-cycle"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Física",
    "q": "Qual partícula mediatória da força eletromagnética é seu próprio antipartícula?",
    "o": [
      "Elétron",
      "Fóton",
      "Próton",
      "Nêutron"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0304",
    "level": "dificil",
    "factId": "qm-0304",
    "topic": "ciencia",
    "explanation": "O fóton é seu próprio antipartícula e mediatório da força eletromagnética; possui carga zero e spin 1.",
    "source": {
      "name": "CERN — Standard Model",
      "url": "https://home.cern/science/physics/standard-model"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Química",
    "q": "Qual é o estado de oxidação do cromo no dicromato de potássio (K2Cr2O7)?",
    "o": [
      "+2",
      "+3",
      "+6",
      "+7"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0305",
    "level": "dificil",
    "factId": "qm-0305",
    "topic": "ciencia",
    "explanation": "No K2Cr2O7, cada Cr está no estado de oxidação +6. Cada O é -2 (total -14), cada K é +1 (total +2). Soma zero: 2x + 2 - 14 = 0 → x = +6.",
    "source": {
      "name": "IUPAC — Oxidation States",
      "url": "https://iupac.org/oxidation-state/"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Química",
    "q": "Qual é o nome do composto H2SO4?",
    "o": [
      "Ácido clorídrico",
      "Ácido sulfúrico",
      "Ácido nítrico",
      "Ácido acético"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0306",
    "level": "dificil",
    "factId": "qm-0306",
    "topic": "ciencia",
    "explanation": "H2SO4 é a fórmula do ácido sulfúrico, um ácido forte amplamente usado na indústria.",
    "source": {
      "name": "PubChem — Sulfuric Acid",
      "url": "https://pubchem.ncbi.nlm.nih.gov/compound/1118"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Física",
    "q": "Qual é a constante de Planck (aproximada)?",
    "o": [
      "6,63 × 10⁻³⁴ J·s",
      "6,02 × 10²³ mol⁻¹",
      "1,6 × 10⁻¹⁹ C",
      "3,00 × 10⁸ m/s"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0307",
    "level": "dificil",
    "factId": "qm-0307",
    "topic": "ciencia",
    "explanation": "A constante de Planck h ≈ 6,626 × 10⁻³⁴ J·s é fundamental na mecânica quântica.",
    "source": {
      "name": "NIST — Planck Constant",
      "url": "https://physics.nist.gov/cgi-bin/cuu/Value?h"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Biologia",
    "q": "Qual processo celular ocorre no citoplasma e não requer oxigênio?",
    "o": [
      "Fotossíntese",
      "Fermentação",
      "Respiração aeróbica",
      "Ciclo de Krebs"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0308",
    "level": "dificil",
    "factId": "qm-0308",
    "topic": "ciencia",
    "explanation": "A fermentação ocorre no citoplasma anaerobicamente, produzindo ATP sem oxigênio.",
    "source": {
      "name": "OpenStax — Fermentation",
      "url": "https://openstax.org/books/biology-2e/pages/7-5-fermentation"
    },
    "verifiedAt": "2026-09-14T00:00:00.000Z",
    "expiresAt": "2027-09-14T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  }
,
  {
    "c": "Geografia",
    "q": "Qual região do Brasil é formada por nove estados?",
    "o": [
      "Sudeste",
      "Norte",
      "Nordeste",
      "Sul"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0309",
    "level": "facil",
    "factId": "qm-0309",
    "topic": "geografia",
    "explanation": "Segundo o IBGE, a Região Nordeste é formada por nove estados.",
    "source": {
      "name": "IBGE Educa — Divisão Territorial",
      "url": "https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/19637-divisao-territorial.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual bioma brasileiro é típico do clima semiárido do sertão nordestino?",
    "o": [
      "Caatinga",
      "Pantanal",
      "Pampa",
      "Mata Atlântica"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0310",
    "level": "facil",
    "factId": "qm-0310",
    "topic": "geografia",
    "explanation": "O IBGE descreve a Caatinga como bioma típico do clima semiárido do sertão nordestino.",
    "source": {
      "name": "IBGE — Mapa de Biomas do Brasil",
      "url": "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/12789-asi-ibge-lanca-o-mapa-de-biomas-do-brasil-e-o-mapa-de-vegetacao-do-brasil-em-comemoracao-ao-dia-mundial-da-biodiversidade"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual bioma brasileiro é restrito ao estado do Rio Grande do Sul?",
    "o": [
      "Cerrado",
      "Pantanal",
      "Caatinga",
      "Pampa"
    ],
    "a": 3,
    "t": "geral",
    "id": "qm-0311",
    "level": "facil",
    "factId": "qm-0311",
    "topic": "geografia",
    "explanation": "Na classificação dos biomas brasileiros do IBGE, o Pampa é restrito ao Rio Grande do Sul.",
    "source": {
      "name": "IBGE — Mapa de Biomas do Brasil",
      "url": "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/12789-asi-ibge-lanca-o-mapa-de-biomas-do-brasil-e-o-mapa-de-vegetacao-do-brasil-em-comemoracao-ao-dia-mundial-da-biodiversidade"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual é a capital do estado de Minas Gerais?",
    "o": [
      "Vitória",
      "Belo Horizonte",
      "Goiânia",
      "Curitiba"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0312",
    "level": "facil",
    "factId": "qm-0312",
    "topic": "geografia",
    "explanation": "Belo Horizonte é a capital de Minas Gerais.",
    "source": {
      "name": "IBGE Educa — Divisão Territorial",
      "url": "https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/19637-divisao-territorial.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual é o maior país da América do Sul em extensão territorial?",
    "o": [
      "Brasil",
      "Argentina",
      "Peru",
      "Colômbia"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0313",
    "level": "facil",
    "factId": "qm-0313",
    "topic": "geografia",
    "explanation": "O Brasil é o maior país da América do Sul em extensão territorial.",
    "source": {
      "name": "IBGE Educa — O Brasil no Mundo",
      "url": "https://educa.ibge.gov.br/criancas/brasil/2850-nosso-territorio/19638-o-brasil-no-mundo.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual oceano se estende da costa leste da África em direção à Austrália?",
    "o": [
      "Atlântico",
      "Ártico",
      "Índico",
      "Pacífico"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0314",
    "level": "facil",
    "factId": "qm-0314",
    "topic": "geografia",
    "explanation": "O Oceano Índico se estende da costa leste da África em direção ao Sudeste Asiático e à Austrália.",
    "source": {
      "name": "NOAA — Climate of the Indian Ocean",
      "url": "https://www.cpc.ncep.noaa.gov/products/international/ocean_monitoring/indian/IO_monitoring_fcsts/description.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual é o ponto culminante do Brasil?",
    "o": [
      "Pico 31 de Março",
      "Pico da Neblina",
      "Pico da Bandeira",
      "Pico das Agulhas Negras"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0315",
    "level": "facil",
    "factId": "qm-0315",
    "topic": "geografia",
    "explanation": "O Pico da Neblina é o ponto mais alto do Brasil; o IBGE registra 2.995,30 metros na revisão divulgada em 2016.",
    "source": {
      "name": "IBGE — Pontos culminantes do Brasil",
      "url": "https://agenciadenoticias.ibge.gov.br/agencia-sala-de-imprensa/2013-agencia-de-noticias/releases/15275-geociencias-ibge-reve-as-altitudes-de-sete-pontos-culminantes"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2016"
  },
  {
    "c": "Geografia",
    "q": "Qual rio compõe grande parte da fronteira entre os Estados Unidos e o México?",
    "o": [
      "Colorado",
      "Mississippi",
      "Yukon",
      "Rio Grande"
    ],
    "a": 3,
    "t": "geral",
    "id": "qm-0316",
    "level": "medio",
    "factId": "qm-0316",
    "topic": "geografia",
    "explanation": "O Rio Grande, chamado Río Bravo no México, forma grande parte da fronteira internacional entre os dois países.",
    "source": {
      "name": "International Boundary and Water Commission — U.S.–Mexico Boundary",
      "url": "https://www.ibwc.gov/about-us/"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual meridiano corresponde à longitude de 0°?",
    "o": [
      "Meridiano de Greenwich",
      "Linha do Equador",
      "Trópico de Câncer",
      "Antimeridiano"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0317",
    "level": "medio",
    "factId": "qm-0317",
    "topic": "geografia",
    "explanation": "O meridiano principal, associado a Greenwich, corresponde à longitude de 0°.",
    "source": {
      "name": "NOAA — What is longitude?",
      "url": "https://oceanservice.noaa.gov/facts/longitude.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "A Linha Internacional de Data segue aproximadamente qual longitude?",
    "o": [
      "0°",
      "90° leste",
      "180°",
      "23,5° sul"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0318",
    "level": "medio",
    "factId": "qm-0318",
    "topic": "geografia",
    "explanation": "A Linha Internacional de Data segue aproximadamente o meridiano de 180°, com desvios para contornar fronteiras políticas.",
    "source": {
      "name": "NOAA — International Date Line",
      "url": "https://oceanservice.noaa.gov/facts/international-date-line.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual é o maior corpo de água interior do mundo por área superficial?",
    "o": [
      "Lago Baikal",
      "Mar Cáspio",
      "Lago Superior",
      "Mar de Aral"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0319",
    "level": "medio",
    "factId": "qm-0319",
    "topic": "geografia",
    "explanation": "Por área superficial, o Mar Cáspio é o maior corpo de água interior do planeta.",
    "source": {
      "name": "NASA Earth Observatory — Caspian Sea",
      "url": "https://science.nasa.gov/earth/earth-observatory/caspian-sea-44253/"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual local marca o ponto mais oriental do Brasil continental?",
    "o": [
      "Arroio Chuí",
      "Monte Caburaí",
      "Nascente do rio Moa",
      "Ponta do Seixas"
    ],
    "a": 3,
    "t": "geral",
    "id": "qm-0320",
    "level": "medio",
    "factId": "qm-0320",
    "topic": "geografia",
    "explanation": "A Ponta do Seixas, em João Pessoa, Paraíba, é o ponto mais oriental do território brasileiro.",
    "source": {
      "name": "IBGE Educa — Pontos extremos",
      "url": "https://educa.ibge.gov.br/criancas/voce-sabia/23101-pontos-extremos.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Como se chama a linha de relevo que separa duas bacias de drenagem?",
    "o": [
      "Divisor de águas",
      "Estuário",
      "Delta",
      "Meandro"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0321",
    "level": "medio",
    "factId": "qm-0321",
    "topic": "geografia",
    "explanation": "Cristas e áreas elevadas que separam a drenagem de bacias vizinhas formam um divisor de águas.",
    "source": {
      "name": "USGS — Watersheds and Drainage Basins",
      "url": "https://www.usgs.gov/water-science-school/science/watersheds-and-drainage-basins"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Em uma ilha montanhosa exposta a ventos úmidos predominantes, qual lado tende a receber mais chuva?",
    "o": [
      "Sotavento",
      "Fundo dos vales",
      "Barlavento",
      "Planície abrigada"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0322",
    "level": "medio",
    "factId": "qm-0322",
    "topic": "geografia",
    "explanation": "O lado de barlavento recebe o ar úmido que sobe o relevo, resfria e favorece condensação e precipitação.",
    "source": {
      "name": "NOAA — Windward and leeward",
      "url": "https://oceanservice.noaa.gov/facts/windward-leeward.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "No Hemisfério Sul, em que direção o efeito de Coriolis desvia o movimento do ar em larga escala?",
    "o": [
      "Para a direita",
      "Para a esquerda",
      "Sempre em direção ao Equador",
      "Sempre em direção aos polos"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0323",
    "level": "dificil",
    "factId": "qm-0323",
    "topic": "geografia",
    "explanation": "Devido à rotação da Terra, o movimento do ar é desviado para a esquerda no Hemisfério Sul.",
    "source": {
      "name": "NOAA — The Coriolis Effect",
      "url": "https://oceanservice.noaa.gov/education/tutorial_currents/04currents1.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual característica define uma bacia endorreica?",
    "o": [
      "Todo o escoamento alcança diretamente o oceano",
      "Ela existe apenas em regiões glaciais",
      "Sua drenagem principal precisa estar abaixo do nível do mar",
      "Ela não possui saída superficial para um sistema fluvial externo"
    ],
    "a": 3,
    "t": "geral",
    "id": "qm-0324",
    "level": "dificil",
    "factId": "qm-0324",
    "topic": "geografia",
    "explanation": "Uma bacia endorreica, ou fechada, não possui saída superficial que leve sua água para um sistema de drenagem externo.",
    "source": {
      "name": "USGS — Drainage Area",
      "url": "https://water.usgs.gov/themes/hydrofabric/drainage-area/"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual placa tectônica mergulha sob a Placa Sul-Americana ao longo de grande parte da margem oeste da América do Sul?",
    "o": [
      "Placa de Nazca",
      "Placa de Cocos",
      "Placa do Caribe",
      "Placa Scotia"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0325",
    "level": "dificil",
    "factId": "qm-0325",
    "topic": "geografia",
    "explanation": "A Placa de Nazca sofre subducção sob a Placa Sul-Americana; essa convergência está ligada à formação dos Andes e à atividade sísmica regional.",
    "source": {
      "name": "USGS — Seismotectonics of South America",
      "url": "https://www.usgs.gov/publications/seismicity-earth-1900-2013-seismotectonics-south-america-nazca-plate-region"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Qual corrente oceânica fria flui para o norte ao longo da costa oeste da África Austral?",
    "o": [
      "Corrente das Agulhas",
      "Corrente do Brasil",
      "Corrente de Benguela",
      "Corrente de Moçambique"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0326",
    "level": "dificil",
    "factId": "qm-0326",
    "topic": "geografia",
    "explanation": "A Corrente de Benguela é fria e flui para o norte ao longo da costa oeste da África Austral.",
    "source": {
      "name": "South African Government — Geography and climate",
      "url": "https://www.gov.za/geography-climate"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Em termos ideais de longitude, uma diferença de 30° corresponde a quantas horas de diferença no tempo solar?",
    "o": [
      "1 hora",
      "2 horas",
      "3 horas",
      "4 horas"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0327",
    "level": "dificil",
    "factId": "qm-0327",
    "topic": "geografia",
    "explanation": "A Terra gira 360° em 24 horas, equivalendo a 15° por hora; portanto, 30° correspondem a 2 horas.",
    "source": {
      "name": "NOAA — What is longitude?",
      "url": "https://oceanservice.noaa.gov/facts/longitude.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geografia",
    "q": "Quais são os dois países da América do Sul que não fazem fronteira terrestre com o Brasil?",
    "o": [
      "Peru e Bolívia",
      "Colômbia e Venezuela",
      "Uruguai e Paraguai",
      "Chile e Equador"
    ],
    "a": 3,
    "t": "geral",
    "id": "qm-0328",
    "level": "dificil",
    "factId": "qm-0328",
    "topic": "geografia",
    "explanation": "O Brasil faz fronteira com dez países e territórios sul-americanos; Chile e Equador são os dois países sul-americanos que não fazem fronteira terrestre com o Brasil.",
    "source": {
      "name": "IBGE Educa — Conheça o Brasil: Território",
      "url": "https://educa.ibge.gov.br/jovens/conheca-o-brasil/territorio/20591-introducao.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  }
,
  {
    "c": "História",
    "q": "Qual sistema de escrita do Egito Antigo teve sua decifração fortemente auxiliada pela Pedra de Roseta?",
    "o": [
      "Cuneiforme",
      "Hieróglifos egípcios",
      "Linear B",
      "Alfabeto fenício"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0329",
    "level": "facil",
    "factId": "qm-0329",
    "topic": "historia",
    "explanation": "A Pedra de Roseta foi uma pista decisiva para que estudiosos conseguissem decifrar os hieróglifos egípcios.",
    "source": {
      "name": "British Museum — The Rosetta Stone",
      "url": "https://www.britishmuseum.org/blog/everything-you-ever-wanted-know-about-rosetta-stone"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "História",
    "q": "Qual rei inglês colocou seu selo na Magna Carta em 1215?",
    "o": [
      "Henrique VIII",
      "João",
      "Ricardo III",
      "Eduardo III"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0330",
    "level": "facil",
    "factId": "qm-0330",
    "topic": "historia",
    "explanation": "O rei João da Inglaterra colocou seu selo na Magna Carta em Runnymede, em 1215.",
    "source": {
      "name": "U.S. National Archives — Magna Carta",
      "url": "https://www.archives.gov/exhibits/featured-documents/magna-carta"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1215"
  },
  {
    "c": "História",
    "q": "Antes de sua independência, qual era o nome da colônia francesa que se tornou o Haiti?",
    "o": [
      "Saint-Domingue",
      "Nova França",
      "Martinica",
      "Guadalupe"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0331",
    "level": "facil",
    "factId": "qm-0331",
    "topic": "historia",
    "explanation": "Antes da independência, o território do Haiti era a colônia francesa de Saint-Domingue.",
    "source": {
      "name": "U.S. Office of the Historian — Haitian Revolution",
      "url": "https://history.state.gov/milestones/1784-1800/haitian-rev"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1791-1804"
  },
  {
    "c": "História",
    "q": "As ruínas de Great Zimbabwe são associadas principalmente a qual povo?",
    "o": [
      "Zulu",
      "Shona",
      "Maasai",
      "Tuareg"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0332",
    "level": "facil",
    "factId": "qm-0332",
    "topic": "historia",
    "explanation": "A UNESCO identifica Great Zimbabwe como um testemunho da civilização Shona entre os séculos XI e XV.",
    "source": {
      "name": "UNESCO — Great Zimbabwe National Monument",
      "url": "https://whc.unesco.org/en/list/364/"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "séculos XI-XV"
  },
  {
    "c": "História",
    "q": "Timbuktu tornou-se historicamente um importante centro de difusão de qual tradição cultural e religiosa?",
    "o": [
      "Budista",
      "Hindu",
      "Islâmica",
      "Xintoísta"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0333",
    "level": "facil",
    "factId": "qm-0333",
    "topic": "historia",
    "explanation": "Nos séculos XV e XVI, Timbuktu foi um importante centro de difusão da cultura islâmica e de estudos corânicos.",
    "source": {
      "name": "UNESCO — Timbuktu",
      "url": "https://whc.unesco.org/en/list/119"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "séculos XV-XVI"
  },
  {
    "c": "História",
    "q": "Qual transformação política de 1868 marcou o início de uma ampla modernização do Japão?",
    "o": [
      "Restauração Meiji",
      "Revolta dos Boxers",
      "Revolução Xinhai",
      "Guerra Boshin de 1905"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0334",
    "level": "facil",
    "factId": "qm-0334",
    "topic": "historia",
    "explanation": "A Restauração Meiji, em 1868, encerrou o longo governo feudal do xogunato Tokugawa e iniciou profundas reformas no Japão.",
    "source": {
      "name": "Government of Japan — The Origin of Japan’s Modernization",
      "url": "https://www.japan.go.jp/tomodachi/2018/spring2018/the_origin_of_japans_modernization.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1868"
  },
  {
    "c": "História",
    "q": "Qual documento dos Estados Unidos foi adotado pelo Congresso Continental em 4 de julho de 1776?",
    "o": [
      "Constituição dos Estados Unidos",
      "Declaração de Independência",
      "Bill of Rights",
      "Artigos da Confederação"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0335",
    "level": "facil",
    "factId": "qm-0335",
    "topic": "historia",
    "explanation": "A Declaração de Independência dos Estados Unidos foi oficialmente adotada em 4 de julho de 1776.",
    "source": {
      "name": "U.S. National Archives — Declaration of Independence",
      "url": "https://www.archives.gov/milestone-documents/declaration-of-independence"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1776"
  },
  {
    "c": "História",
    "q": "Quais governantes chegaram ao acordo de tolerância religiosa conhecido como Édito de Milão, em 313?",
    "o": [
      "Constantino e Licínio",
      "Diocleciano e Galério",
      "Teodósio e Honório",
      "Augusto e Tibério"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0336",
    "level": "medio",
    "factId": "qm-0336",
    "topic": "historia",
    "explanation": "O acordo de 313 conhecido como Édito de Milão foi firmado por Constantino e Licínio e ampliou a liberdade de culto no Império Romano.",
    "source": {
      "name": "Fordham University — Medieval Sourcebook: The Edict of Milan",
      "url": "https://sourcebooks.web.fordham.edu/source/edict-milan.asp"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "313"
  },
  {
    "c": "História",
    "q": "Qual imperador ordenou a grande compilação jurídica que ficou conhecida como Corpus Juris Civilis?",
    "o": [
      "Heráclio",
      "Justiniano I",
      "Teodósio II",
      "Leão III"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0337",
    "level": "medio",
    "factId": "qm-0337",
    "topic": "historia",
    "explanation": "O Corpus Juris Civilis reúne grandes compilações do direito romano organizadas por ordem do imperador Justiniano I no século VI.",
    "source": {
      "name": "University of Chicago — Corpus Juris Civilis",
      "url": "https://penelope.uchicago.edu/Thayer/E/Roman/Texts/secondary/SMIGRA*/Corpus_Juris_Civilis.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "século VI"
  },
  {
    "c": "História",
    "q": "Qual lei brasileira de 1871 declarou livres os filhos de mulheres escravizadas nascidos a partir de sua vigência?",
    "o": [
      "Lei Eusébio de Queirós",
      "Lei do Ventre Livre",
      "Lei dos Sexagenários",
      "Lei Áurea"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0338",
    "level": "medio",
    "factId": "qm-0338",
    "topic": "historia",
    "explanation": "A Lei do Ventre Livre, de 28 de setembro de 1871, determinou a liberdade dos filhos de mulheres escravizadas nascidos a partir de sua vigência, sob as condições previstas pela própria lei.",
    "source": {
      "name": "Arquivo Nacional — Legislação abolicionista no Império",
      "url": "https://www.gov.br/arquivonacional/pt-br/sites_eventos/sites-tematicos-1/brasil-oitocentista/temas-oitocentistas/legislacao-abolicionista-no-imperio/"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1871"
  },
  {
    "c": "História",
    "q": "Quem redigiu o primeiro rascunho da Declaração de Independência dos Estados Unidos?",
    "o": [
      "George Washington",
      "Benjamin Franklin",
      "Thomas Jefferson",
      "James Madison"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0339",
    "level": "medio",
    "factId": "qm-0339",
    "topic": "historia",
    "explanation": "Thomas Jefferson redigiu o primeiro rascunho; John Adams e Benjamin Franklin fizeram alterações antes da apresentação ao Congresso.",
    "source": {
      "name": "U.S. National Archives — Creating the Declaration",
      "url": "https://www.archives.gov/founding-docs/timeline"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1776"
  },
  {
    "c": "História",
    "q": "Em que data Abraham Lincoln emitiu a Proclamação de Emancipação que entrou em vigor durante a Guerra Civil dos Estados Unidos?",
    "o": [
      "1º de janeiro de 1863",
      "4 de julho de 1863",
      "9 de abril de 1865",
      "6 de dezembro de 1865"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0340",
    "level": "medio",
    "factId": "qm-0340",
    "topic": "historia",
    "explanation": "Abraham Lincoln emitiu a Proclamação de Emancipação em 1º de janeiro de 1863.",
    "source": {
      "name": "U.S. National Archives — Emancipation Proclamation",
      "url": "https://www.archives.gov/milestone-documents/emancipation-proclamation"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1863"
  },
  {
    "c": "História",
    "q": "Em que ano ocorreu a Crise dos Mísseis de Cuba, uma das confrontações mais perigosas da Guerra Fria?",
    "o": [
      "1948",
      "1956",
      "1962",
      "1973"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0341",
    "level": "medio",
    "factId": "qm-0341",
    "topic": "historia",
    "explanation": "A Crise dos Mísseis de Cuba ocorreu em outubro de 1962, envolvendo diretamente Estados Unidos e União Soviética.",
    "source": {
      "name": "U.S. Office of the Historian — Cuban Missile Crisis",
      "url": "https://history.state.gov/milestones/1961-1968/cuban-missile-crisis"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1962"
  },
  {
    "c": "História",
    "q": "Qual personagem denunciou formalmente a conspiração conhecida como Inconfidência Mineira às autoridades coloniais?",
    "o": [
      "Cláudio Manuel da Costa",
      "Joaquim Silvério dos Reis",
      "Tomás Antônio Gonzaga",
      "José Álvares Maciel"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0342",
    "level": "medio",
    "factId": "qm-0342",
    "topic": "historia",
    "explanation": "Joaquim Silvério dos Reis formalizou a denúncia da conspiração ao governador Visconde de Barbacena em 1789.",
    "source": {
      "name": "Portal MG — História de Minas Gerais",
      "url": "https://www.mg.gov.br/pagina/historia"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1789"
  },
  {
    "c": "História",
    "q": "Na Conferência de Wannsee, em janeiro de 1942, qual era o principal objetivo da reunião de altos funcionários nazistas?",
    "o": [
      "Negociar um armistício com os Aliados",
      "Coordenar a implementação da chamada 'Solução Final'",
      "Planejar a invasão da União Soviética",
      "Organizar a rendição da França"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0343",
    "level": "dificil",
    "factId": "qm-0343",
    "topic": "historia",
    "explanation": "A Conferência de Wannsee reuniu altos funcionários para discutir e coordenar a implementação da chamada 'Solução Final', o plano nazista de assassinato sistemático dos judeus europeus.",
    "source": {
      "name": "United States Holocaust Memorial Museum — Wannsee Conference",
      "url": "https://encyclopedia.ushmm.org/content/en/article/wannsee-conference-and-the-final-solution"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1942"
  },
  {
    "c": "História",
    "q": "Qual padrão de assentamento dos tijolos foi usado por Brunelleschi na cúpula de Santa Maria del Fiore para ajudar na estabilidade da estrutura?",
    "o": [
      "Espinha de peixe",
      "Opus reticulatum",
      "Arcos concêntricos contínuos",
      "Fileiras verticais paralelas"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0344",
    "level": "dificil",
    "factId": "qm-0344",
    "topic": "historia",
    "explanation": "A cúpula de Brunelleschi utiliza tijolos dispostos em padrão de espinha de peixe, técnica visível na própria estrutura.",
    "source": {
      "name": "Opera di Santa Maria del Fiore — Brunelleschi's Dome",
      "url": "https://duomo.firenze.it/en/40/dome"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1420-1436"
  },
  {
    "c": "História",
    "q": "Segundo evidências arqueológicas de Great Zimbabwe, qual achado demonstra contatos comerciais de longa distância com a Ásia?",
    "o": [
      "Porcelana da China e da Pérsia",
      "Moedas astecas de prata",
      "Runas escandinavas em madeira",
      "Cerâmica inca dos Andes"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0345",
    "level": "dificil",
    "factId": "qm-0345",
    "topic": "historia",
    "explanation": "Escavações em Great Zimbabwe encontraram, entre outros objetos, contas de vidro e porcelanas da China e da Pérsia, evidenciando comércio de longa distância.",
    "source": {
      "name": "UNESCO — Great Zimbabwe National Monument",
      "url": "https://whc.unesco.org/en/list/364/"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "séculos XI-XV"
  },
  {
    "c": "História",
    "q": "Qual diplomata austríaco teve papel de liderança no Congresso de Viena de 1814-1815?",
    "o": [
      "Charles-Maurice de Talleyrand",
      "Klemens von Metternich",
      "Robert Stewart, visconde Castlereagh",
      "Karl August von Hardenberg"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0346",
    "level": "dificil",
    "factId": "qm-0346",
    "topic": "historia",
    "explanation": "O ministro das Relações Exteriores austríaco Klemens von Metternich teve papel central e de liderança no Congresso de Viena.",
    "source": {
      "name": "Federal Chancellery of Austria — The Congress of Vienna",
      "url": "https://www.bundeskanzleramt.gv.at/en/federal-chancellery/visit-us/history/the-congress-of-vienna.html"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1814-1815"
  },
  {
    "c": "História",
    "q": "Entre os condenados à morte na Inconfidência Mineira, quem foi o único que não teve a pena comutada para degredo?",
    "o": [
      "Tomás Antônio Gonzaga",
      "Cláudio Manuel da Costa",
      "Joaquim José da Silva Xavier, o Tiradentes",
      "Alvarenga Peixoto"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0347",
    "level": "dificil",
    "factId": "qm-0347",
    "topic": "historia",
    "explanation": "Tiradentes foi o único entre os condenados à morte que não recebeu indulto ou comutação da pena para degredo.",
    "source": {
      "name": "Arquivo Nacional — Joaquim José da Silva Xavier",
      "url": "https://historialuso.arquivonacional.gov.br/index.php/hlb/2055-gloss%C3%A1rio/2092-x/5550-xavier-joaquim-jose-da-silva-1746-1792"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1792"
  },
  {
    "c": "História",
    "q": "A Paz de Vestfália, concluída em 1648, encerrou principalmente qual grande conflito europeu?",
    "o": [
      "Guerra dos Cem Anos",
      "Guerra dos Sete Anos",
      "Guerra dos Trinta Anos",
      "Guerra da Sucessão Espanhola"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0348",
    "level": "dificil",
    "factId": "qm-0348",
    "topic": "historia",
    "explanation": "A Paz de Vestfália de 1648 encerrou a Guerra dos Trinta Anos, conflito que havia começado em 1618.",
    "source": {
      "name": "Oxford Academic — Peace of Westphalia (1648)",
      "url": "https://academic.oup.com/reference/62360/reference-article-abstract/554562314"
    },
    "verifiedAt": "2026-09-28T00:00:00.000Z",
    "expiresAt": "2027-09-28T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1648"
  }
,
  {
    "c": "Matemática",
    "q": "Quanto é 125 - 47?",
    "o": [
      "68",
      "78",
      "82",
      "88"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0349",
    "level": "facil",
    "factId": "qm-0349",
    "topic": "matematica",
    "explanation": "125 - 47 = 78.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Quanto é 3/5 de 40?",
    "o": [
      "18",
      "20",
      "24",
      "30"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0350",
    "level": "facil",
    "factId": "qm-0350",
    "topic": "matematica",
    "explanation": "3/5 de 40 é 40 ÷ 5 × 3 = 24.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Um quadrado tem lado de 7 cm. Qual é o seu perímetro?",
    "o": [
      "14 cm",
      "21 cm",
      "28 cm",
      "49 cm"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0351",
    "level": "facil",
    "factId": "qm-0351",
    "topic": "matematica",
    "explanation": "O perímetro de um quadrado é quatro vezes o lado: 4 × 7 = 28 cm.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual é a média aritmética de 6, 8 e 10?",
    "o": [
      "7",
      "8",
      "9",
      "10"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0352",
    "level": "facil",
    "factId": "qm-0352",
    "topic": "matematica",
    "explanation": "A soma é 24 e 24 ÷ 3 = 8.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual fração irredutível representa o número decimal 0,6?",
    "o": [
      "1/6",
      "3/5",
      "2/3",
      "6/5"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0353",
    "level": "facil",
    "factId": "qm-0353",
    "topic": "matematica",
    "explanation": "0,6 = 6/10, que simplifica para 3/5.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual é a área de um retângulo de 9 cm por 4 cm?",
    "o": [
      "13 cm²",
      "26 cm²",
      "32 cm²",
      "36 cm²"
    ],
    "a": 3,
    "t": "geral",
    "id": "qm-0354",
    "level": "facil",
    "factId": "qm-0354",
    "topic": "matematica",
    "explanation": "A área de um retângulo é base × altura: 9 × 4 = 36 cm².",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual é o próximo termo da sequência 2, 4, 8, 16, ...?",
    "o": [
      "20",
      "24",
      "30",
      "32"
    ],
    "a": 3,
    "t": "geral",
    "id": "qm-0355",
    "level": "facil",
    "factId": "qm-0355",
    "topic": "matematica",
    "explanation": "Cada termo é o dobro do anterior; depois de 16 vem 32.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual valor de x satisfaz 4(x - 2) = 20?",
    "o": [
      "5",
      "6",
      "7",
      "8"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0356",
    "level": "medio",
    "factId": "qm-0356",
    "topic": "matematica",
    "explanation": "Dividindo por 4: x - 2 = 5. Portanto, x = 7.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Em juros simples, quanto rendem R$ 1.000 a 2% ao mês durante 3 meses?",
    "o": [
      "R$ 20",
      "R$ 40",
      "R$ 60",
      "R$ 120"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0357",
    "level": "medio",
    "factId": "qm-0357",
    "topic": "matematica",
    "explanation": "Nos juros simples, J = C × i × t = 1000 × 0,02 × 3 = R$ 60.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Ao lançar um dado comum de seis faces, qual é a probabilidade de sair um número par?",
    "o": [
      "1/6",
      "1/3",
      "1/2",
      "2/3"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0358",
    "level": "medio",
    "factId": "qm-0358",
    "topic": "matematica",
    "explanation": "Os resultados pares são 2, 4 e 6: 3 resultados em 6, ou 1/2.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual é o coeficiente angular da reta que passa pelos pontos (2, 3) e (6, 11)?",
    "o": [
      "1",
      "2",
      "3",
      "4"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0359",
    "level": "medio",
    "factId": "qm-0359",
    "topic": "matematica",
    "explanation": "O coeficiente angular é (11 - 3) ÷ (6 - 2) = 8 ÷ 4 = 2.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Usando π ≈ 3,14, qual é a área de um círculo de raio 3 cm?",
    "o": [
      "18,84 cm²",
      "28,26 cm²",
      "37,68 cm²",
      "56,52 cm²"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0360",
    "level": "medio",
    "factId": "qm-0360",
    "topic": "matematica",
    "explanation": "A = πr² ≈ 3,14 × 3² = 3,14 × 9 = 28,26 cm².",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Qual é o mínimo múltiplo comum de 12 e 18?",
    "o": [
      "24",
      "30",
      "36",
      "72"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0361",
    "level": "medio",
    "factId": "qm-0361",
    "topic": "matematica",
    "explanation": "12 = 2²×3 e 18 = 2×3²; o MMC é 2²×3² = 36.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "No sistema x + y = 10 e x - y = 4, qual é o valor de x?",
    "o": [
      "3",
      "5",
      "7",
      "9"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0362",
    "level": "medio",
    "factId": "qm-0362",
    "topic": "matematica",
    "explanation": "Somando as equações, 2x = 14; portanto, x = 7.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Em uma progressão aritmética com primeiro termo 5 e razão 3, qual é o décimo termo?",
    "o": [
      "29",
      "30",
      "32",
      "35"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0363",
    "level": "dificil",
    "factId": "qm-0363",
    "topic": "matematica",
    "explanation": "a₁₀ = a₁ + 9r = 5 + 9×3 = 32.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Quais são as raízes da equação x² - 5x + 6 = 0?",
    "o": [
      "1 e 6",
      "2 e 3",
      "-2 e -3",
      "3 e 5"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0364",
    "level": "dificil",
    "factId": "qm-0364",
    "topic": "matematica",
    "explanation": "x² - 5x + 6 = (x - 2)(x - 3), então as raízes são 2 e 3.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Um polígono regular tem cada ângulo interno medindo 150°. Quantos lados ele possui?",
    "o": [
      "8",
      "10",
      "12",
      "15"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0365",
    "level": "dificil",
    "factId": "qm-0365",
    "topic": "matematica",
    "explanation": "Para um polígono regular, o ângulo externo é 180° - 150° = 30°. Como 360° ÷ 30° = 12, ele possui 12 lados.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Uma urna contém 3 bolas vermelhas e 2 azuis. Sem reposição, qual é a probabilidade de retirar duas bolas vermelhas em sequência?",
    "o": [
      "1/5",
      "3/10",
      "2/5",
      "3/5"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0366",
    "level": "dificil",
    "factId": "qm-0366",
    "topic": "matematica",
    "explanation": "A probabilidade é 3/5 × 2/4 = 6/20 = 3/10.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Se f(x) = 2x + 1 e g(x) = x², qual é o valor de g(f(2))?",
    "o": [
      "9",
      "16",
      "25",
      "36"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0367",
    "level": "dificil",
    "factId": "qm-0367",
    "topic": "matematica",
    "explanation": "f(2) = 2×2 + 1 = 5; então g(f(2)) = g(5) = 5² = 25.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Matemática",
    "q": "Usando π ≈ 3,14, qual é o volume de um cilindro de raio 2 cm e altura 5 cm?",
    "o": [
      "31,4 cm³",
      "40 cm³",
      "62,8 cm³",
      "125,6 cm³"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0368",
    "level": "dificil",
    "factId": "qm-0368",
    "topic": "matematica",
    "explanation": "V = πr²h ≈ 3,14 × 2² × 5 = 62,8 cm³.",
    "source": null,
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  }
,
  {
    "c": "Bíblia",
    "q": "Segundo Gênesis 37, qual filho de Jacó recebeu de seu pai uma túnica especial?",
    "o": [
      "José",
      "Benjamim",
      "Judá",
      "Rúben"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0369",
    "level": "facil",
    "factId": "qm-0369",
    "topic": "biblia",
    "explanation": "Gênesis 37 relata que Israel, também chamado Jacó, amava José de modo especial e lhe deu uma túnica especial.",
    "source": {
      "name": "Gênesis 37 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Genesis+37&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Josué 6, as muralhas de qual cidade caíram após o povo seguir as instruções dadas a Josué?",
    "o": [
      "Jerusalém",
      "Jericó",
      "Betel",
      "Hebrom"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0370",
    "level": "facil",
    "factId": "qm-0370",
    "topic": "biblia",
    "explanation": "Josué 6 narra a queda das muralhas de Jericó depois que Israel cumpriu as instruções dadas por Deus.",
    "source": {
      "name": "Josué 6 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Joshua+6&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Jonas 1, qual profeta foi engolido por um grande peixe depois de ser lançado ao mar?",
    "o": [
      "Amós",
      "Jonas",
      "Oséias",
      "Miquéias"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0371",
    "level": "facil",
    "factId": "qm-0371",
    "topic": "biblia",
    "explanation": "Jonas 1 relata que, depois de ser lançado ao mar, Jonas foi engolido por um grande peixe.",
    "source": {
      "name": "Jonas 1 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Jonah+1&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Rute 1, como se chamava a sogra que Rute decidiu acompanhar?",
    "o": [
      "Marta",
      "Noemi",
      "Sara",
      "Raquel"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0372",
    "level": "facil",
    "factId": "qm-0372",
    "topic": "biblia",
    "explanation": "Rute decidiu permanecer com sua sogra Noemi e acompanhá-la em seu retorno.",
    "source": {
      "name": "Rute 1 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Ruth+1&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Mateus 2, quais presentes são mencionados como oferecidos pelos magos a Jesus?",
    "o": [
      "Ouro, prata e bronze",
      "Ouro, incenso e mirra",
      "Pão, vinho e azeite",
      "Incenso, azeite e prata"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0373",
    "level": "facil",
    "factId": "qm-0373",
    "topic": "biblia",
    "explanation": "Mateus 2 menciona ouro, incenso e mirra entre os presentes oferecidos pelos magos.",
    "source": {
      "name": "Mateus 2 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Matthew+2&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Lucas 19, quem subiu em uma árvore para conseguir ver Jesus passar?",
    "o": [
      "Bartimeu",
      "Zaqueu",
      "Nicodemos",
      "Jairo"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0374",
    "level": "facil",
    "factId": "qm-0374",
    "topic": "biblia",
    "explanation": "Lucas 19 relata que Zaqueu subiu numa figueira-brava para conseguir ver Jesus.",
    "source": {
      "name": "Lucas 19 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Luke+19&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo João 11, quem Jesus chamou para fora do túmulo depois de estar morto havia quatro dias?",
    "o": [
      "Lázaro",
      "Estêvão",
      "Jairo",
      "Bartimeu"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0375",
    "level": "facil",
    "factId": "qm-0375",
    "topic": "biblia",
    "explanation": "João 11 relata que Lázaro estava morto havia quatro dias quando Jesus o chamou para fora do túmulo.",
    "source": {
      "name": "João 11 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=John+11&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Juízes 7, com quantos homens Gideão ficou para enfrentar o exército midianita?",
    "o": [
      "100",
      "300",
      "600",
      "1.000"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0376",
    "level": "medio",
    "factId": "qm-0376",
    "topic": "biblia",
    "explanation": "Juízes 7 relata que o grupo de Gideão foi reduzido a 300 homens.",
    "source": {
      "name": "Juízes 7 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Judges+7&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo 1 Reis 18, qual profeta confrontou os profetas de Baal no monte Carmelo?",
    "o": [
      "Eliseu",
      "Elias",
      "Isaías",
      "Jeremias"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0377",
    "level": "medio",
    "factId": "qm-0377",
    "topic": "biblia",
    "explanation": "1 Reis 18 relata o confronto de Elias com os profetas de Baal no monte Carmelo.",
    "source": {
      "name": "1 Reis 18 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=1+Kings+18&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo 2 Reis 5, quantas vezes Naamã mergulhou no rio Jordão antes de ser curado?",
    "o": [
      "3",
      "5",
      "7",
      "12"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0378",
    "level": "medio",
    "factId": "qm-0378",
    "topic": "biblia",
    "explanation": "Naamã mergulhou sete vezes no Jordão, conforme a orientação recebida por meio de Eliseu.",
    "source": {
      "name": "2 Reis 5 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=2+Kings+5&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Ester 2, qual era o nome hebraico de Ester?",
    "o": [
      "Hadassa",
      "Miriã",
      "Débora",
      "Abigail"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0379",
    "level": "medio",
    "factId": "qm-0379",
    "topic": "biblia",
    "explanation": "Ester 2 informa que Ester também era conhecida pelo nome hebraico Hadassa.",
    "source": {
      "name": "Ester 2 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Esther+2&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Neemias 2, as muralhas de qual cidade Neemias decidiu reconstruir?",
    "o": [
      "Samaria",
      "Belém",
      "Jerusalém",
      "Jericó"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0380",
    "level": "medio",
    "factId": "qm-0380",
    "topic": "biblia",
    "explanation": "Neemias 2 descreve o plano de Neemias para reconstruir as muralhas de Jerusalém.",
    "source": {
      "name": "Neemias 2 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Nehemiah+2&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Atos 9, para qual cidade Saulo viajava quando teve a visão de Jesus?",
    "o": [
      "Jerusalém",
      "Damasco",
      "Antioquia",
      "Tarso"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0381",
    "level": "medio",
    "factId": "qm-0381",
    "topic": "biblia",
    "explanation": "Atos 9 relata que Saulo seguia para Damasco quando uma luz do céu o cercou e ele ouviu a voz de Jesus.",
    "source": {
      "name": "Atos 9 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Acts+9&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Atos 16, em qual cidade Paulo e Silas foram presos depois da libertação de uma jovem escravizada?",
    "o": [
      "Éfeso",
      "Corinto",
      "Filipos",
      "Tessalônica"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0382",
    "level": "medio",
    "factId": "qm-0382",
    "topic": "biblia",
    "explanation": "Atos 16 situa a prisão de Paulo e Silas em Filipos.",
    "source": {
      "name": "Atos 16 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Acts+16&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Gênesis 14, Melquisedeque era rei de qual cidade?",
    "o": [
      "Salém",
      "Siquém",
      "Hebrom",
      "Gerar"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0383",
    "level": "dificil",
    "factId": "qm-0383",
    "topic": "biblia",
    "explanation": "Gênesis 14 identifica Melquisedeque como rei de Salém e sacerdote do Deus Altíssimo.",
    "source": {
      "name": "Gênesis 14 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Genesis+14&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Números 22, qual animal falou com Balaão durante sua viagem?",
    "o": [
      "Cavalo",
      "Camelo",
      "Jumenta",
      "Ovelha"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0384",
    "level": "dificil",
    "factId": "qm-0384",
    "topic": "biblia",
    "explanation": "Números 22 relata que Deus permitiu que a jumenta de Balaão falasse.",
    "source": {
      "name": "Números 22 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Numbers+22&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Juízes 4, qual mulher matou Sísera usando uma estaca de tenda?",
    "o": [
      "Débora",
      "Jael",
      "Rute",
      "Mical"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0385",
    "level": "dificil",
    "factId": "qm-0385",
    "topic": "biblia",
    "explanation": "Juízes 4 relata que Jael matou Sísera usando uma estaca de tenda.",
    "source": {
      "name": "Juízes 4 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Judges+4&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo 2 Samuel 6, quem morreu depois de tocar na arca de Deus quando os bois tropeçaram?",
    "o": [
      "Uzá",
      "Obede-Edom",
      "Abiatar",
      "Joabe"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0386",
    "level": "dificil",
    "factId": "qm-0386",
    "topic": "biblia",
    "explanation": "2 Samuel 6 relata que Uzá estendeu a mão para segurar a arca e morreu naquele momento.",
    "source": {
      "name": "2 Samuel 6 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=2+Samuel+6&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Atos 18, qual casal explicou a Apolo com maior precisão o caminho de Deus?",
    "o": [
      "Ananias e Safira",
      "Priscila e Áquila",
      "Félix e Drusila",
      "Herodes e Berenice"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0387",
    "level": "dificil",
    "factId": "qm-0387",
    "topic": "biblia",
    "explanation": "Atos 18 relata que Priscila e Áquila ouviram Apolo e lhe explicaram com maior precisão o caminho de Deus.",
    "source": {
      "name": "Atos 18 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Acts+18&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Bíblia",
    "q": "Segundo Atos 20, qual jovem caiu de uma janela do terceiro andar durante um longo discurso de Paulo?",
    "o": [
      "Tíquico",
      "Êutico",
      "Trófimo",
      "Aristarco"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0388",
    "level": "dificil",
    "factId": "qm-0388",
    "topic": "biblia",
    "explanation": "Atos 20 relata que Êutico, vencido pelo sono, caiu da janela do terceiro andar enquanto Paulo falava.",
    "source": {
      "name": "Atos 20 — Bible Gateway",
      "url": "https://www.biblegateway.com/passage/?search=Acts+20&version=NIV"
    },
    "verifiedAt": "2026-09-29T00:00:00.000Z",
    "expiresAt": "2027-09-29T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  }
];if(typeof module==="object"&&module.exports)module.exports=questions;else root.QuizQuestions=questions;})(globalThis);
