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
,
  {
    "c": "Tecnologia",
    "q": "Qual código de status HTTP indica que um recurso não foi encontrado?",
    "o": [
      "200",
      "301",
      "404",
      "500"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0389",
    "level": "facil",
    "factId": "qm-0389",
    "topic": "tecnologia",
    "explanation": "O código HTTP 404 significa que o servidor não encontrou o recurso solicitado.",
    "source": {
      "name": "MDN — 404 Not Found",
      "url": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual comando do Git cria uma cópia local de um repositório existente?",
    "o": [
      "git clone",
      "git commit",
      "git merge",
      "git status"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0390",
    "level": "facil",
    "factId": "qm-0390",
    "topic": "tecnologia",
    "explanation": "O comando git clone cria uma cópia de um repositório em um novo diretório.",
    "source": {
      "name": "Git — git-clone Documentation",
      "url": "https://git-scm.com/docs/git-clone"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual serviço da internet traduz nomes de domínio, como example.com, em endereços IP?",
    "o": [
      "DNS",
      "FTP",
      "SMTP",
      "SSH"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0391",
    "level": "facil",
    "factId": "qm-0391",
    "topic": "tecnologia",
    "explanation": "O DNS associa nomes de domínio a informações como endereços IP usados para localizar serviços na rede.",
    "source": {
      "name": "ICANN — Domain Name System",
      "url": "https://www.icann.org/resources/pages/dns-2012-02-25-en"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Em Python, qual par de símbolos é usado normalmente para escrever uma lista literal?",
    "o": [
      "( )",
      "[ ]",
      "{ }",
      "< >"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0392",
    "level": "facil",
    "factId": "qm-0392",
    "topic": "tecnologia",
    "explanation": "Em Python, listas literais são escritas entre colchetes, como [1, 2, 3].",
    "source": {
      "name": "Python Documentation — Lists",
      "url": "https://docs.python.org/3/tutorial/introduction.html#lists"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Na autenticação multifator, qual é a ideia principal?",
    "o": [
      "Usar dois ou mais fatores de categorias diferentes",
      "Trocar a senha a cada acesso",
      "Usar duas senhas iguais",
      "Entrar apenas por reconhecimento facial"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0393",
    "level": "facil",
    "factId": "qm-0393",
    "topic": "tecnologia",
    "explanation": "Autenticação multifator combina dois ou mais fatores de autenticação, como algo que você sabe, possui ou é.",
    "source": {
      "name": "NIST — Digital Identity Guidelines: Authentication",
      "url": "https://pages.nist.gov/800-63-4/sp800-63b.html"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual protocolo criptográfico é usado para proteger a comunicação do HTTPS?",
    "o": [
      "TLS",
      "FTP",
      "DHCP",
      "SNMP"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0394",
    "level": "facil",
    "factId": "qm-0394",
    "topic": "tecnologia",
    "explanation": "HTTPS é HTTP protegido por TLS, que fornece confidencialidade e integridade à comunicação.",
    "source": {
      "name": "MDN — HTTPS",
      "url": "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual protocolo é usado normalmente para fornecer automaticamente configuração de rede, como endereço IP, a um dispositivo?",
    "o": [
      "DHCP",
      "HTTP",
      "IMAP",
      "SFTP"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0395",
    "level": "facil",
    "factId": "qm-0395",
    "topic": "tecnologia",
    "explanation": "O DHCP foi projetado para fornecer parâmetros de configuração de rede automaticamente aos hosts.",
    "source": {
      "name": "IETF — RFC 2131: Dynamic Host Configuration Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc2131"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Quantos bits possui um endereço IPv4?",
    "o": [
      "16",
      "32",
      "64",
      "128"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0396",
    "level": "medio",
    "factId": "qm-0396",
    "topic": "tecnologia",
    "explanation": "O cabeçalho IPv4 define endereços de origem e destino com 32 bits.",
    "source": {
      "name": "IETF — RFC 791: Internet Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc791"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "No formato JSON, um objeto é formado principalmente por quê?",
    "o": [
      "Pares nome-valor",
      "Apenas números binários",
      "Linhas e colunas fixas",
      "Comandos SQL"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0397",
    "level": "medio",
    "factId": "qm-0397",
    "topic": "tecnologia",
    "explanation": "A especificação JSON define objeto como uma coleção não ordenada de pares nome-valor.",
    "source": {
      "name": "IETF — RFC 8259: JSON",
      "url": "https://www.rfc-editor.org/rfc/rfc8259"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Em um banco de dados relacional, qual restrição é usada para identificar unicamente cada linha de uma tabela?",
    "o": [
      "PRIMARY KEY",
      "ORDER BY",
      "GROUP BY",
      "VIEW"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0398",
    "level": "medio",
    "factId": "qm-0398",
    "topic": "tecnologia",
    "explanation": "Uma PRIMARY KEY identifica de forma única as linhas de uma tabela.",
    "source": {
      "name": "SQLite — CREATE TABLE: PRIMARY KEY",
      "url": "https://www.sqlite.org/lang_createtable.html#primkeyconst"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Quantos bits possui o valor de saída do algoritmo SHA-256?",
    "o": [
      "128",
      "160",
      "256",
      "512"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0399",
    "level": "medio",
    "factId": "qm-0399",
    "topic": "tecnologia",
    "explanation": "SHA-256 pertence à família SHA-2 e produz um resumo de mensagem de 256 bits.",
    "source": {
      "name": "NIST — FIPS 180-4 Secure Hash Standard",
      "url": "https://csrc.nist.gov/pubs/fips/180-4/upd1/final"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual prática é recomendada pela OWASP para reduzir o risco de SQL Injection ao enviar valores para consultas?",
    "o": [
      "Consultas parametrizadas",
      "Concatenar diretamente a entrada do usuário",
      "Desativar índices",
      "Usar apenas letras maiúsculas no SQL"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0400",
    "level": "medio",
    "factId": "qm-0400",
    "topic": "tecnologia",
    "explanation": "A OWASP recomenda consultas preparadas com parâmetros como defesa principal contra SQL Injection.",
    "source": {
      "name": "OWASP — SQL Injection Prevention Cheat Sheet",
      "url": "https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual método HTTP é definido principalmente para solicitar a transferência de uma representação atual de um recurso?",
    "o": [
      "GET",
      "DELETE",
      "PATCH",
      "CONNECT"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0401",
    "level": "medio",
    "factId": "qm-0401",
    "topic": "tecnologia",
    "explanation": "O método GET solicita a transferência de uma representação atual do recurso de destino.",
    "source": {
      "name": "IETF — RFC 9110: GET",
      "url": "https://www.rfc-editor.org/rfc/rfc9110.html#name-get"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "No Git, qual comando mostra o estado dos arquivos da árvore de trabalho e da área de staging?",
    "o": [
      "git status",
      "git tag",
      "git bisect",
      "git gc"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0402",
    "level": "medio",
    "factId": "qm-0402",
    "topic": "tecnologia",
    "explanation": "git status mostra o estado da árvore de trabalho e da área de staging.",
    "source": {
      "name": "Git — git-status Documentation",
      "url": "https://git-scm.com/docs/git-status"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual é a sequência clássica do three-way handshake usado para estabelecer uma conexão TCP?",
    "o": [
      "SYN, SYN-ACK, ACK",
      "ACK, SYN, FIN",
      "SYN, FIN, ACK",
      "FIN, FIN-ACK, ACK"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0403",
    "level": "dificil",
    "factId": "qm-0403",
    "topic": "tecnologia",
    "explanation": "O estabelecimento normal de uma conexão TCP usa a troca SYN, SYN-ACK e ACK.",
    "source": {
      "name": "IETF — RFC 9293: Transmission Control Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc9293.html"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "No HTTP/2, qual recurso permite intercalar múltiplos fluxos independentes dentro de uma única conexão?",
    "o": [
      "Multiplexação de streams",
      "NAT estático",
      "Fragmentação IPv4",
      "Polling obrigatório"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0404",
    "level": "dificil",
    "factId": "qm-0404",
    "topic": "tecnologia",
    "explanation": "HTTP/2 multiplexa vários streams independentes dentro de uma mesma conexão.",
    "source": {
      "name": "IETF — RFC 9113: HTTP/2",
      "url": "https://www.rfc-editor.org/rfc/rfc9113.html"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "No DNS, qual tipo de registro indica os servidores responsáveis por receber e-mail para um domínio?",
    "o": [
      "MX",
      "PTR",
      "TXT",
      "AAAA"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0405",
    "level": "dificil",
    "factId": "qm-0405",
    "topic": "tecnologia",
    "explanation": "Registros MX, de mail exchange, especificam os hosts que atuam como servidores de correio para um domínio.",
    "source": {
      "name": "IETF — RFC 1035: Domain Names",
      "url": "https://www.rfc-editor.org/rfc/rfc1035"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Na codificação Base64 padrão, quantos caracteres são usados para representar cada grupo completo de 3 bytes de entrada?",
    "o": [
      "2",
      "3",
      "4",
      "6"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0406",
    "level": "dificil",
    "factId": "qm-0406",
    "topic": "tecnologia",
    "explanation": "Base64 divide 24 bits, ou 3 bytes, em quatro grupos de 6 bits, produzindo 4 caracteres.",
    "source": {
      "name": "IETF — RFC 4648: Base-N Encodings",
      "url": "https://www.rfc-editor.org/rfc/rfc4648"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Em IPv4, quantos endereços existem ao todo em um bloco CIDR /24?",
    "o": [
      "64",
      "128",
      "256",
      "512"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0407",
    "level": "dificil",
    "factId": "qm-0407",
    "topic": "tecnologia",
    "explanation": "Um prefixo /24 deixa 8 bits para os endereços do bloco; 2⁸ = 256 endereços no total.",
    "source": {
      "name": "IETF — RFC 4632: Classless Inter-domain Routing",
      "url": "https://www.rfc-editor.org/rfc/rfc4632"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Tecnologia",
    "q": "Qual é o maior valor de ponto de código definido no espaço de códigos Unicode?",
    "o": [
      "U+FFFF",
      "U+10FFFF",
      "U+FFFFFF",
      "U+7FFFFFFF"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0408",
    "level": "dificil",
    "factId": "qm-0408",
    "topic": "tecnologia",
    "explanation": "O espaço de códigos Unicode vai de U+0000 até U+10FFFF.",
    "source": {
      "name": "Unicode Consortium — Glossary: Code Point",
      "url": "https://www.unicode.org/glossary/#code_point"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  }
,
  {
    "c": "Geral",
    "q": "Como se chama uma palavra ou frase que pode ser lida da mesma forma da esquerda para a direita e da direita para a esquerda?",
    "o": [
      "Anagrama",
      "Palíndromo",
      "Acróstico",
      "Homônimo"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0409",
    "level": "facil",
    "factId": "qm-0409",
    "topic": "geral",
    "explanation": "Palíndromo é uma palavra, frase ou sequência que mantém a mesma leitura em sentidos opostos, desconsiderando convenções como espaços e pontuação quando aplicável.",
    "source": {
      "name": "Merriam-Webster — Palindrome",
      "url": "https://www.merriam-webster.com/dictionary/palindrome"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Quantos pontos formam uma célula Braille tradicional?",
    "o": [
      "4",
      "5",
      "6",
      "8"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0410",
    "level": "facil",
    "factId": "qm-0410",
    "topic": "geral",
    "explanation": "A célula Braille tradicional é formada por seis posições de pontos organizadas em duas colunas de três.",
    "source": {
      "name": "American Foundation for the Blind — What Is Braille?",
      "url": "https://www.afb.org/blindness-and-low-vision/braille/what-braille"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "No sistema de algarismos romanos, qual valor representa a letra L?",
    "o": [
      "10",
      "50",
      "100",
      "500"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0411",
    "level": "facil",
    "factId": "qm-0411",
    "topic": "geral",
    "explanation": "No sistema de algarismos romanos, L representa o valor 50.",
    "source": {
      "name": "Encyclopaedia Britannica — Roman numeral",
      "url": "https://www.britannica.com/topic/Roman-numeral"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Quantas letras possui o alfabeto grego?",
    "o": [
      "22",
      "24",
      "26",
      "28"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0412",
    "level": "facil",
    "factId": "qm-0412",
    "topic": "geral",
    "explanation": "O alfabeto grego possui 24 letras, de alfa a ômega.",
    "source": {
      "name": "Encyclopaedia Britannica — Greek alphabet",
      "url": "https://www.britannica.com/topic/Greek-alphabet"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Quantos dígitos possui um ISBN-13?",
    "o": [
      "10",
      "11",
      "12",
      "13"
    ],
    "a": 3,
    "t": "geral",
    "id": "qm-0413",
    "level": "facil",
    "factId": "qm-0413",
    "topic": "geral",
    "explanation": "O ISBN moderno possui 13 dígitos e identifica de forma padronizada edições e formatos de publicações.",
    "source": {
      "name": "International ISBN Agency — What is an ISBN?",
      "url": "https://www.isbn-international.org/content/what-isbn"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Quem criou a língua planejada Esperanto?",
    "o": [
      "L. L. Zamenhof",
      "J. R. R. Tolkien",
      "Umberto Eco",
      "Noam Chomsky"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0414",
    "level": "facil",
    "factId": "qm-0414",
    "topic": "geral",
    "explanation": "O Esperanto foi criado por L. L. Zamenhof e apresentado publicamente no fim do século XIX.",
    "source": {
      "name": "Encyclopaedia Britannica — Esperanto",
      "url": "https://www.britannica.com/topic/Esperanto"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1887"
  },
  {
    "c": "Geral",
    "q": "Quantas casas possui um tabuleiro padrão de xadrez?",
    "o": [
      "56",
      "64",
      "72",
      "81"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0415",
    "level": "facil",
    "factId": "qm-0415",
    "topic": "geral",
    "explanation": "O tabuleiro de xadrez tem 8 linhas por 8 colunas, totalizando 64 casas.",
    "source": {
      "name": "FIDE — Laws of Chess",
      "url": "https://handbook.fide.com/chapter/E012023"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Quem criou o sistema de Classificação Decimal de Dewey?",
    "o": [
      "Melvil Dewey",
      "Johannes Gutenberg",
      "Samuel Morse",
      "Louis Braille"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0416",
    "level": "medio",
    "factId": "qm-0416",
    "topic": "geral",
    "explanation": "Melvil Dewey desenvolveu a Classificação Decimal de Dewey, sistema amplamente usado para organizar acervos de bibliotecas.",
    "source": {
      "name": "Encyclopaedia Britannica — Melvil Dewey",
      "url": "https://www.britannica.com/biography/Melvil-Dewey"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1876"
  },
  {
    "c": "Geral",
    "q": "No alfabeto radiotelefônico da ICAO, qual palavra representa a letra J?",
    "o": [
      "Juliett",
      "Joker",
      "Jupiter",
      "Justice"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0417",
    "level": "medio",
    "factId": "qm-0417",
    "topic": "geral",
    "explanation": "No alfabeto radiotelefônico internacional padronizado pela ICAO, a letra J é representada por Juliett.",
    "source": {
      "name": "ICAO — Radiotelephony Spelling Alphabet",
      "url": "https://www.icao.int/sites/default/files/postalhistory/annex_10_aeronautical_telecommunications.htm"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Qual sequência representa o sinal de socorro SOS em código Morse internacional?",
    "o": [
      "--- ... ---",
      "... --- ...",
      "... ... ---",
      "--- --- ..."
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0418",
    "level": "medio",
    "factId": "qm-0418",
    "topic": "geral",
    "explanation": "Em código Morse internacional, SOS é representado por três pontos, três traços e três pontos: ... --- ....",
    "source": {
      "name": "ITU — Recommendation M.1677: International Morse code",
      "url": "https://www.itu.int/rec/R-REC-M.1677"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "No calendário gregoriano, um ano terminado em 00 só é bissexto quando é divisível por qual número?",
    "o": [
      "100",
      "200",
      "400",
      "800"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0419",
    "level": "medio",
    "factId": "qm-0419",
    "topic": "geral",
    "explanation": "No calendário gregoriano, anos divisíveis por 100 não são bissextos, exceto quando também são divisíveis por 400.",
    "source": {
      "name": "Encyclopaedia Britannica — Gregorian calendar",
      "url": "https://www.britannica.com/topic/Gregorian-calendar"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "No Sistema Internacional, o prefixo micro representa qual fator?",
    "o": [
      "10⁻³",
      "10⁻⁶",
      "10⁻⁹",
      "10⁶"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0420",
    "level": "medio",
    "factId": "qm-0420",
    "topic": "geral",
    "explanation": "O prefixo micro, símbolo µ, representa o fator 10⁻⁶.",
    "source": {
      "name": "BIPM — SI Brochure",
      "url": "https://www.bipm.org/en/publications/si-brochure"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Como se chama uma frase que contém todas as letras de um alfabeto?",
    "o": [
      "Palíndromo",
      "Pangrama",
      "Anagrama",
      "Acrônimo"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0421",
    "level": "medio",
    "factId": "qm-0421",
    "topic": "geral",
    "explanation": "Pangrama é uma frase ou sentença que usa todas as letras de um alfabeto.",
    "source": {
      "name": "Merriam-Webster — Pangram",
      "url": "https://www.merriam-webster.com/dictionary/pangram"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Quantos versos possui tradicionalmente um soneto?",
    "o": [
      "10",
      "12",
      "14",
      "16"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0422",
    "level": "medio",
    "factId": "qm-0422",
    "topic": "geral",
    "explanation": "O soneto é uma forma poética tradicional composta por 14 versos.",
    "source": {
      "name": "Poetry Foundation — Sonnet",
      "url": "https://www.poetryfoundation.org/education/glossary/sonnet"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Quais são as dimensões do papel A4 segundo a série ISO A?",
    "o": [
      "200 × 280 mm",
      "210 × 297 mm",
      "216 × 279 mm",
      "220 × 310 mm"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0423",
    "level": "dificil",
    "factId": "qm-0423",
    "topic": "geral",
    "explanation": "O formato A4 da série ISO A mede 210 mm por 297 mm.",
    "source": {
      "name": "ISO — ISO 216 Writing paper and certain classes of printed matter",
      "url": "https://www.iso.org/standard/36631.html"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Na numeração padrão do Braille, qual número identifica o ponto superior da coluna direita?",
    "o": [
      "2",
      "3",
      "4",
      "6"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0424",
    "level": "dificil",
    "factId": "qm-0424",
    "topic": "geral",
    "explanation": "Na célula Braille, os pontos da coluna esquerda são 1, 2 e 3; os da direita são 4, 5 e 6. O ponto superior direito é o 4.",
    "source": {
      "name": "American Foundation for the Blind — What Is Braille?",
      "url": "https://www.afb.org/blindness-and-low-vision/braille/what-braille"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Segundo a ISO 8601, qual dia é considerado o primeiro da semana?",
    "o": [
      "Domingo",
      "Segunda-feira",
      "Sexta-feira",
      "Sábado"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0425",
    "level": "dificil",
    "factId": "qm-0425",
    "topic": "geral",
    "explanation": "Na representação de semanas da ISO 8601, a semana começa na segunda-feira.",
    "source": {
      "name": "ISO — ISO 8601 Date and time format",
      "url": "https://www.iso.org/iso-8601-date-and-time-format.html"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "No padrão de radiotelefonia da ICAO, como é pronunciado em inglês o algarismo 9?",
    "o": [
      "Nine",
      "Niner",
      "Ninety",
      "Nain"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0426",
    "level": "dificil",
    "factId": "qm-0426",
    "topic": "geral",
    "explanation": "Na radiotelefonia padronizada pela ICAO, o algarismo 9 é pronunciado 'niner' para aumentar a clareza da comunicação.",
    "source": {
      "name": "ICAO — Aeronautical Telecommunications",
      "url": "https://www.icao.int/sites/default/files/postalhistory/annex_10_aeronautical_telecommunications.htm"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Qual é o código Morse internacional da letra Q?",
    "o": [
      "--.-",
      "-.-.",
      "---.",
      "..-."
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0427",
    "level": "dificil",
    "factId": "qm-0427",
    "topic": "geral",
    "explanation": "No código Morse internacional, a letra Q é representada por dois traços, um ponto e um traço: --.-.",
    "source": {
      "name": "ITU — Recommendation M.1677: International Morse code",
      "url": "https://www.itu.int/rec/R-REC-M.1677"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Geral",
    "q": "Como se chama o símbolo tipográfico ¶?",
    "o": [
      "Cedilha",
      "Pilcrow",
      "Interrobang",
      "Dagger"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0428",
    "level": "dificil",
    "factId": "qm-0428",
    "topic": "geral",
    "explanation": "O símbolo ¶ é chamado de pilcrow e é tradicionalmente usado para marcar parágrafos.",
    "source": {
      "name": "Merriam-Webster — Pilcrow",
      "url": "https://www.merriam-webster.com/dictionary/pilcrow"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Em qual cidade ocorre a principal procissão do Círio de Nossa Senhora de Nazaré?",
    "o": [
      "Belém",
      "Manaus",
      "São Luís",
      "Recife"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0429",
    "level": "facil",
    "factId": "qm-0429",
    "topic": "cultura-brasileira",
    "explanation": "O Círio de Nossa Senhora de Nazaré tem sua principal celebração em Belém, no Pará.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial no Pará",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/para/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "O carimbó é uma forma de expressão musical especialmente associada a qual estado brasileiro?",
    "o": [
      "Pará",
      "Ceará",
      "Goiás",
      "Santa Catarina"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0430",
    "level": "facil",
    "factId": "qm-0430",
    "topic": "cultura-brasileira",
    "explanation": "O carimbó é uma das formas de expressão musical mais significativas do estado do Pará.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial no Pará",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/para/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "O Tambor de Crioula é uma manifestação tradicional de qual estado brasileiro?",
    "o": [
      "Maranhão",
      "Paraná",
      "Acre",
      "Espírito Santo"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0431",
    "level": "facil",
    "factId": "qm-0431",
    "topic": "cultura-brasileira",
    "explanation": "O Tambor de Crioula é uma forma de expressão de matriz afro-brasileira fortemente ligada ao Maranhão.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial no Maranhão",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/maranhao/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Em que estado se concentra a tradição do Maracatu Nação, também chamado de Maracatu de Baque Virado?",
    "o": [
      "Pernambuco",
      "Amazonas",
      "Rio Grande do Sul",
      "Mato Grosso"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0432",
    "level": "facil",
    "factId": "qm-0432",
    "topic": "cultura-brasileira",
    "explanation": "O Maracatu Nação é uma manifestação cultural ligada à Região Metropolitana do Recife, em Pernambuco.",
    "source": {
      "name": "Iphan — Plano de Salvaguarda do Maracatu Nação",
      "url": "https://www.gov.br/iphan/pt-br/assuntos/noticias/conheca-o-plano-de-salvaguarda-do-maracatu-nacao"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "O modo tradicional de fazer a viola de cocho é encontrado em quais dois estados brasileiros?",
    "o": [
      "Mato Grosso e Mato Grosso do Sul",
      "Bahia e Sergipe",
      "Pará e Amapá",
      "Paraná e Santa Catarina"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0433",
    "level": "facil",
    "factId": "qm-0433",
    "topic": "cultura-brasileira",
    "explanation": "O modo de fazer a viola de cocho é uma tradição encontrada tanto em Mato Grosso quanto em Mato Grosso do Sul.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial no Mato Grosso do Sul",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso-do-sul/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "O Fandango Caiçara ocorre tradicionalmente no litoral de quais dois estados?",
    "o": [
      "Paraná e São Paulo",
      "Bahia e Sergipe",
      "Ceará e Piauí",
      "Rio de Janeiro e Espírito Santo"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0434",
    "level": "facil",
    "factId": "qm-0434",
    "topic": "cultura-brasileira",
    "explanation": "O Fandango Caiçara ocorre no litoral norte do Paraná e no litoral sul de São Paulo.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial no Paraná",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/parana/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Em qual cidade fica o Teatro Amazonas?",
    "o": [
      "Manaus",
      "Belém",
      "Porto Velho",
      "Boa Vista"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0435",
    "level": "facil",
    "factId": "qm-0435",
    "topic": "cultura-brasileira",
    "explanation": "O Teatro Amazonas fica em Manaus e é um dos principais marcos culturais e arquitetônicos da cidade.",
    "source": {
      "name": "Iphan — Manaus (AM)",
      "url": "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/norte/manaus-am"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "O Jongo reconhecido pelo Iphan como patrimônio cultural brasileiro está associado a qual região do país?",
    "o": [
      "Sudeste",
      "Norte",
      "Centro-Oeste",
      "Sul"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0436",
    "level": "medio",
    "factId": "qm-0436",
    "topic": "cultura-brasileira",
    "explanation": "O bem registrado é denominado Jongo no Sudeste e está ligado a comunidades negras dessa região.",
    "source": {
      "name": "Iphan — Registro do Jongo no Sudeste",
      "url": "https://bcr.iphan.gov.br/acoes-de-salvaguarda/registro-do-jongo-no-sudeste-como-patrimonio-cultural-do-brasil/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Em qual capital brasileira o Ofício das Baianas de Acarajé é amplamente disseminado?",
    "o": [
      "Salvador",
      "Curitiba",
      "Goiânia",
      "Florianópolis"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0437",
    "level": "medio",
    "factId": "qm-0437",
    "topic": "cultura-brasileira",
    "explanation": "O Iphan destaca Salvador como um dos principais espaços de disseminação do Ofício das Baianas de Acarajé.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial na Bahia",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/bahia/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Quem esculpiu os Profetas do Santuário do Bom Jesus de Matosinhos, em Congonhas?",
    "o": [
      "Aleijadinho",
      "Mestre Ataíde",
      "Victor Meirelles",
      "Pedro Américo"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0438",
    "level": "medio",
    "factId": "qm-0438",
    "topic": "cultura-brasileira",
    "explanation": "As esculturas dos Profetas de Congonhas são obras de Antônio Francisco Lisboa, o Aleijadinho.",
    "source": {
      "name": "Iphan — Minas Gerais",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/minas-gerais"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Em que ano foi inaugurado o Teatro Amazonas?",
    "o": [
      "1878",
      "1889",
      "1896",
      "1905"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0439",
    "level": "medio",
    "factId": "qm-0439",
    "topic": "cultura-brasileira",
    "explanation": "O Teatro Amazonas foi inaugurado em 1896, durante o período de prosperidade ligado ao ciclo da borracha.",
    "source": {
      "name": "Iphan — Manaus (AM)",
      "url": "https://www.gov.br/iphan/pt-br/patrimonio-cultural/patrimonio-material/bens-tombados/conjuntos-urbanos-tombados-cidades-historicas/norte/manaus-am"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1896"
  },
  {
    "c": "Cultura Brasileira",
    "q": "O Tambor de Crioula do Maranhão é praticado especialmente em louvor a qual santo?",
    "o": [
      "São Benedito",
      "São Jorge",
      "São Pedro",
      "São Sebastião"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0440",
    "level": "medio",
    "factId": "qm-0440",
    "topic": "cultura-brasileira",
    "explanation": "Segundo o Iphan, o Tambor de Crioula é praticado especialmente em louvor a São Benedito.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial no Maranhão",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/maranhao/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Quais são as duas classificações principais do Fandango Caiçara mencionadas pelo Iphan?",
    "o": [
      "Batido e bailado ou valsado",
      "Solto e dobrado",
      "Lento e corrido",
      "Cantado e instrumental"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0441",
    "level": "medio",
    "factId": "qm-0441",
    "topic": "cultura-brasileira",
    "explanation": "O Iphan descreve o Fandango Caiçara como classificado em batido e bailado ou valsado.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial no Paraná",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/parana/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Por qual outro nome o Maracatu Nação também é conhecido?",
    "o": [
      "Maracatu de Baque Virado",
      "Maracatu de Roda",
      "Maracatu de Viola",
      "Maracatu Serrano"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0442",
    "level": "medio",
    "factId": "qm-0442",
    "topic": "cultura-brasileira",
    "explanation": "O Maracatu Nação também é conhecido como Maracatu de Baque Virado.",
    "source": {
      "name": "Iphan — Plano de Salvaguarda do Maracatu Nação",
      "url": "https://www.gov.br/iphan/pt-br/assuntos/noticias/conheca-o-plano-de-salvaguarda-do-maracatu-nacao"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Em qual momento de outubro ocorre tradicionalmente o ponto alto do Círio de Nazaré?",
    "o": [
      "No segundo domingo",
      "Na primeira segunda-feira",
      "No último sábado",
      "No dia 31"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0443",
    "level": "dificil",
    "factId": "qm-0443",
    "topic": "cultura-brasileira",
    "explanation": "O clímax do Círio de Nazaré ocorre tradicionalmente na procissão do segundo domingo de outubro.",
    "source": {
      "name": "Iphan — Patrimônio Mundial no Pará",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/para/patrimonio-mundial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "O Modo de Fazer a Viola de Cocho foi inscrito pelo Iphan em qual Livro de Registro?",
    "o": [
      "Livro dos Saberes",
      "Livro das Celebrações",
      "Livro dos Lugares",
      "Livro das Formas de Expressão"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0444",
    "level": "dificil",
    "factId": "qm-0444",
    "topic": "cultura-brasileira",
    "explanation": "O Modo de Fazer a Viola de Cocho foi registrado no Livro dos Saberes.",
    "source": {
      "name": "Iphan — Mato Grosso do Sul",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/mato-grosso-do-sul"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2005"
  },
  {
    "c": "Cultura Brasileira",
    "q": "Em quais quatro estados o Jongo no Sudeste está presente segundo o Iphan?",
    "o": [
      "Espírito Santo, Minas Gerais, Rio de Janeiro e São Paulo",
      "Bahia, Sergipe, Alagoas e Pernambuco",
      "Paraná, Santa Catarina, Rio Grande do Sul e São Paulo",
      "Goiás, Mato Grosso, Mato Grosso do Sul e Minas Gerais"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0445",
    "level": "dificil",
    "factId": "qm-0445",
    "topic": "cultura-brasileira",
    "explanation": "O Iphan registra a presença do Jongo no Sudeste em Espírito Santo, Minas Gerais, Rio de Janeiro e São Paulo.",
    "source": {
      "name": "Iphan — Registro do Jongo no Sudeste",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/rio-de-janeiro/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Segundo o Iphan, a origem do acarajé está ligada a qual região da África Ocidental?",
    "o": [
      "Golfo de Benim",
      "Vale do Nilo",
      "Magrebe",
      "Cabo da Boa Esperança"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0446",
    "level": "dificil",
    "factId": "qm-0446",
    "topic": "cultura-brasileira",
    "explanation": "O Iphan informa que o acarajé tem origem no Golfo de Benim, na África Ocidental.",
    "source": {
      "name": "Iphan — Patrimônio Imaterial na Bahia",
      "url": "https://www.gov.br/iphan/pt-br/superintendencias/bahia/patrimonio-imaterial"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Qual material tornou Mestre Vitalino conhecido por retratar a vida e a cultura do agreste?",
    "o": [
      "Barro",
      "Mármore",
      "Bronze",
      "Vidro"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0447",
    "level": "dificil",
    "factId": "qm-0447",
    "topic": "cultura-brasileira",
    "explanation": "Mestre Vitalino ficou conhecido por retratar em barro sua terra, sua gente e cenas do cotidiano do agreste.",
    "source": {
      "name": "Museus.gov.br — Casa-Museu Mestre Vitalino",
      "url": "https://visite.museus.gov.br/instituicoes/casa-museu-mestre-vitalino/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Cultura Brasileira",
    "q": "Segundo a bibliografia da Academia Brasileira de Letras, em que ano foi publicado Os Sertões, de Euclides da Cunha?",
    "o": [
      "1897",
      "1902",
      "1907",
      "1910"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0448",
    "level": "dificil",
    "factId": "qm-0448",
    "topic": "cultura-brasileira",
    "explanation": "A bibliografia de Euclides da Cunha na Academia Brasileira de Letras registra Os Sertões como publicado em 1902.",
    "source": {
      "name": "Academia Brasileira de Letras — Euclides da Cunha: bibliografia",
      "url": "https://www.academia.org.br/academicos/euclides-da-cunha/bibliografia"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1902"
  },
  {
    "c": "Português",
    "q": "Qual é o plural de papel?",
    "o": [
      "Papéis",
      "Papels",
      "Papéus",
      "Papeles"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0449",
    "level": "facil",
    "factId": "qm-0449",
    "topic": "portugues",
    "explanation": "O plural padrão de papel é papéis, com alteração gráfica e acento para conservar a pronúncia adequada.",
    "source": {
      "name": "Academia Brasileira de Letras — VOLP",
      "url": "https://www.academia.org.br/nossa-lingua/busca-no-vocabulario"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Qual é o feminino de ator?",
    "o": [
      "Atriz",
      "Atora",
      "Atoresa",
      "Atrora"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0450",
    "level": "facil",
    "factId": "qm-0450",
    "topic": "portugues",
    "explanation": "O feminino de ator é atriz.",
    "source": {
      "name": "Academia Brasileira de Letras — VOLP",
      "url": "https://www.academia.org.br/nossa-lingua/busca-no-vocabulario"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Qual destas formas está grafada corretamente no português brasileiro?",
    "o": [
      "Enxergar",
      "Enchergar",
      "Enxergarh",
      "Encherga"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0451",
    "level": "facil",
    "factId": "qm-0451",
    "topic": "portugues",
    "explanation": "A grafia correta do verbo é enxergar.",
    "source": {
      "name": "Academia Brasileira de Letras — VOLP",
      "url": "https://www.academia.org.br/nossa-lingua/busca-no-vocabulario"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Qual destas palavras é oxítona?",
    "o": [
      "Árvore",
      "Lápis",
      "Café",
      "Médico"
    ],
    "a": 2,
    "t": "geral",
    "id": "qm-0452",
    "level": "facil",
    "factId": "qm-0452",
    "topic": "portugues",
    "explanation": "Café é oxítona porque sua sílaba tônica é a última: fé.",
    "source": {
      "name": "Academia Brasileira de Letras — VOLP",
      "url": "https://www.academia.org.br/nossa-lingua/busca-no-vocabulario"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Quantas sílabas tem a palavra 'saudade'?",
    "o": [
      "2",
      "3",
      "4",
      "5"
    ],
    "a": 1,
    "t": "geral",
    "id": "qm-0453",
    "level": "facil",
    "factId": "qm-0453",
    "topic": "portugues",
    "explanation": "Saudade divide-se em sau-da-de, totalizando três sílabas.",
    "source": {
      "name": "Infopédia — Saudade",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/saudade"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Na palavra 'infeliz', qual elemento funciona como prefixo?",
    "o": [
      "in-",
      "-feliz",
      "-liz",
      "fe-"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0454",
    "level": "facil",
    "factId": "qm-0454",
    "topic": "portugues",
    "explanation": "Em infeliz, o prefixo in- acrescenta sentido de negação à base feliz.",
    "source": {
      "name": "Infopédia — Infeliz",
      "url": "https://www.infopedia.pt/dicionarios/lingua-portuguesa/infeliz"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Na frase 'O menino chegou', qual palavra funciona como artigo definido?",
    "o": [
      "O",
      "Menino",
      "Chegou",
      "Nenhuma"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0455",
    "level": "facil",
    "factId": "qm-0455",
    "topic": "portugues",
    "explanation": "Na frase, 'O' determina o substantivo 'menino' e funciona como artigo definido.",
    "source": {
      "name": "Câmara dos Deputados — Manual de Redação",
      "url": "https://seac.alesc.sc.gov.br/wp-content/uploads/2019/08/manual_redacao_dos_deputados.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Complete segundo a norma-padrão: 'Vou ___ escola todos os dias.'",
    "o": [
      "à",
      "ao",
      "da",
      "de"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0456",
    "level": "medio",
    "factId": "qm-0456",
    "topic": "portugues",
    "explanation": "Em 'vou à escola', ocorre a fusão da preposição a, exigida pelo verbo ir, com o artigo feminino a.",
    "source": {
      "name": "Capes — Redação Oficial: revisão gramatical",
      "url": "https://educapes.capes.gov.br/bitstream/capes/401192/1/RedacaoOficial-3ed-web-atualizado.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Em 'Entreguei-lhe o documento', a palavra 'lhe' é classificada como quê?",
    "o": [
      "Pronome pessoal oblíquo átono",
      "Pronome demonstrativo",
      "Artigo definido",
      "Advérbio"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0457",
    "level": "medio",
    "factId": "qm-0457",
    "topic": "portugues",
    "explanation": "'Lhe' é um pronome pessoal oblíquo átono empregado junto ao verbo.",
    "source": {
      "name": "Câmara dos Deputados — Manual de Redação",
      "url": "https://seac.alesc.sc.gov.br/wp-content/uploads/2019/08/manual_redacao_dos_deputados.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Na frase 'O livro que comprei é novo', a palavra 'que' é classificada como quê?",
    "o": [
      "Pronome relativo",
      "Pronome possessivo",
      "Conjunção adversativa",
      "Preposição"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0458",
    "level": "medio",
    "factId": "qm-0458",
    "topic": "portugues",
    "explanation": "Nesse contexto, 'que' retoma o antecedente 'livro' e introduz uma oração relativa, funcionando como pronome relativo.",
    "source": {
      "name": "Câmara dos Deputados — Manual de Redação",
      "url": "https://seac.alesc.sc.gov.br/wp-content/uploads/2019/08/manual_redacao_dos_deputados.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Em 'Meu livro está na mesa', a palavra 'meu' é classificada como quê?",
    "o": [
      "Pronome possessivo",
      "Pronome relativo",
      "Advérbio",
      "Conjunção"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0459",
    "level": "medio",
    "factId": "qm-0459",
    "topic": "portugues",
    "explanation": "'Meu' é pronome possessivo porque expressa relação de posse em relação ao substantivo 'livro'.",
    "source": {
      "name": "Câmara dos Deputados — Manual de Redação",
      "url": "https://seac.alesc.sc.gov.br/wp-content/uploads/2019/08/manual_redacao_dos_deputados.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Qual forma completa corretamente a pergunta segundo a norma-padrão: '___ você vai depois daqui?'",
    "o": [
      "Aonde",
      "Onde",
      "Donde",
      "Daonde"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0460",
    "level": "medio",
    "factId": "qm-0460",
    "topic": "portugues",
    "explanation": "Com o verbo ir, que indica movimento e rege a preposição a, emprega-se 'aonde'.",
    "source": {
      "name": "Câmara dos Deputados — Manual de Redação",
      "url": "https://seac.alesc.sc.gov.br/wp-content/uploads/2019/08/manual_redacao_dos_deputados.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Em 'Os alunos estudaram bastante', qual é o núcleo do sujeito?",
    "o": [
      "Alunos",
      "Os",
      "Estudaram",
      "Bastante"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0461",
    "level": "medio",
    "factId": "qm-0461",
    "topic": "portugues",
    "explanation": "O sujeito é 'Os alunos', e seu núcleo é o substantivo 'alunos'.",
    "source": {
      "name": "Câmara dos Deputados — Manual de Redação",
      "url": "https://seac.alesc.sc.gov.br/wp-content/uploads/2019/08/manual_redacao_dos_deputados.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Em 'Maria e João chegaram cedo', o sujeito é classificado como quê?",
    "o": [
      "Composto",
      "Simples",
      "Oculto",
      "Indeterminado"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0462",
    "level": "medio",
    "factId": "qm-0462",
    "topic": "portugues",
    "explanation": "O sujeito é composto porque possui dois núcleos: Maria e João.",
    "source": {
      "name": "Câmara dos Deputados — Manual de Redação",
      "url": "https://seac.alesc.sc.gov.br/wp-content/uploads/2019/08/manual_redacao_dos_deputados.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Segundo a norma-padrão, qual forma é adequada para indicar existência de vários problemas?",
    "o": [
      "Houve muitos problemas",
      "Houveram muitos problemas",
      "Haviam muitos problemas",
      "Houveram-se muitos problemas"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0463",
    "level": "dificil",
    "factId": "qm-0463",
    "topic": "portugues",
    "explanation": "No sentido de existir, o verbo haver é impessoal e permanece na terceira pessoa do singular: 'houve muitos problemas'.",
    "source": {
      "name": "FUNAG — Concordância verbal",
      "url": "https://funag.gov.br/manual/index.php?title=Concord%C3%A2ncia_verbal"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "No sentido de 'ver', qual construção com o verbo assistir segue a regência prescrita pela norma-padrão?",
    "o": [
      "Assistir ao filme",
      "Assistir o filme",
      "Assistir no filme",
      "Assistir pelo filme"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0464",
    "level": "dificil",
    "factId": "qm-0464",
    "topic": "portugues",
    "explanation": "No sentido de ver ou presenciar, a norma-padrão prescreve o verbo assistir com a preposição a: 'assistir ao filme'.",
    "source": {
      "name": "Câmara dos Deputados — Manual de Redação",
      "url": "https://seac.alesc.sc.gov.br/wp-content/uploads/2019/08/manual_redacao_dos_deputados.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Na expressão 'Ela ficou meio cansada', por que 'meio' permanece no masculino singular?",
    "o": [
      "Porque funciona como advérbio",
      "Porque concorda com 'ela'",
      "Porque é artigo",
      "Porque é pronome relativo"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0465",
    "level": "dificil",
    "factId": "qm-0465",
    "topic": "portugues",
    "explanation": "Em 'meio cansada', 'meio' equivale a 'um pouco' e funciona como advérbio, portanto é invariável.",
    "source": {
      "name": "Manual de Redação e Estilo — TCE-MG",
      "url": "https://escoladecontas.tce.mg.gov.br/arquivos_diversos/Manual%20de%20Reda%C3%A7%C3%A3o%20e%20Estilo%20-%20Revista%20do%20TCEMG.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Em 'o autor cuja obra venceu o prêmio', o pronome 'cuja' expressa principalmente qual relação?",
    "o": [
      "Posse",
      "Lugar",
      "Tempo",
      "Causa"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0466",
    "level": "dificil",
    "factId": "qm-0466",
    "topic": "portugues",
    "explanation": "'Cujo' e suas flexões são pronomes relativos possessivos e estabelecem relação de posse entre termos.",
    "source": {
      "name": "Manual de Redação e Estilo — TCE-MG",
      "url": "https://escoladecontas.tce.mg.gov.br/arquivos_diversos/Manual%20de%20Reda%C3%A7%C3%A3o%20e%20Estilo%20-%20Revista%20do%20TCEMG.pdf"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Na forma verbal 'dir-se-á', qual fenômeno de colocação pronominal ocorre?",
    "o": [
      "Mesóclise",
      "Próclise",
      "Ênclise",
      "Elipse"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0467",
    "level": "dificil",
    "factId": "qm-0467",
    "topic": "portugues",
    "explanation": "Em 'dir-se-á', o pronome átono aparece no interior da forma verbal do futuro, caracterizando mesóclise.",
    "source": {
      "name": "Ciberdúvidas — Próclise após o 'que'",
      "url": "https://ciberduvidas.iscte-iul.pt/consultorio/perguntas/proclise-apos-o-que/10071"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Português",
    "q": "Qual é a função do acento em 'pôde', em contraste com 'pode'?",
    "o": [
      "Distinguir o passado do presente",
      "Marcar plural",
      "Indicar crase",
      "Formar um advérbio"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0468",
    "level": "dificil",
    "factId": "qm-0468",
    "topic": "portugues",
    "explanation": "O acento diferencial distingue 'pôde', forma do pretérito perfeito, de 'pode', forma do presente do indicativo.",
    "source": {
      "name": "Senado Federal — Acordo Ortográfico da Língua Portuguesa",
      "url": "https://legis.senado.gov.br/norma/410669/publicacao/15745373"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Qual criatura hostil do Minecraft se aproxima silenciosamente e explode perto do jogador?",
    "o": [
      "Creeper",
      "Enderman",
      "Villager",
      "Snow Golem"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0469",
    "level": "facil",
    "factId": "qm-0469",
    "topic": "games",
    "explanation": "O Creeper é uma criatura hostil do Minecraft conhecida por se aproximar silenciosamente e explodir quando chega perto do jogador.",
    "source": {
      "name": "Minecraft — Tudo o que você precisa saber sobre criaturas",
      "url": "https://www.minecraft.net/pt-br/article/minecraft-mobs"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Em God of War (2018), qual é o nome do filho de Kratos?",
    "o": [
      "Atreus",
      "Baldur",
      "Týr",
      "Mimir"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0470",
    "level": "facil",
    "factId": "qm-0470",
    "topic": "games",
    "explanation": "Em God of War (2018), Kratos viaja ao lado de seu filho Atreus.",
    "source": {
      "name": "PlayStation — God of War",
      "url": "https://www.playstation.com/pt-br/games/god-of-war/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2018"
  },
  {
    "c": "Games",
    "q": "Na série Halo, como é conhecido o Spartan-117?",
    "o": [
      "Master Chief",
      "Arbiter",
      "Cortana",
      "Captain Keyes"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0471",
    "level": "facil",
    "factId": "qm-0471",
    "topic": "games",
    "explanation": "Spartan-117 é o soldado conhecido como Master Chief, figura central da série Halo.",
    "source": {
      "name": "Xbox — Halo: The Master Chief Collection",
      "url": "https://www.xbox.com/en-US/games/halo-the-master-chief-collection"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Quais são os dois personagens principais destacados em The Last of Us Part I?",
    "o": [
      "Joel e Ellie",
      "Abby e Lev",
      "Tommy e Maria",
      "Tess e Bill"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0472",
    "level": "facil",
    "factId": "qm-0472",
    "topic": "games",
    "explanation": "Joel e Ellie formam a dupla central de The Last of Us Part I.",
    "source": {
      "name": "PlayStation — The Last of Us",
      "url": "https://www.playstation.com/pt-br/the-last-of-us/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Qual é o nome da caçadora de recompensas protagonista da série Metroid?",
    "o": [
      "Samus Aran",
      "Zelda",
      "Bayonetta",
      "Rivet"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0473",
    "level": "facil",
    "factId": "qm-0473",
    "topic": "games",
    "explanation": "Samus Aran é a caçadora de recompensas protagonista da série Metroid.",
    "source": {
      "name": "Nintendo — Metroid Dread",
      "url": "https://www.nintendo.com/us/whatsnew/suit-up-as-samus-in-metroid-dread-available-now/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Em Splatoon 3, como se chama a espécie semelhante a lula controlada pelo jogador?",
    "o": [
      "Inkling",
      "Pikmin",
      "Lombax",
      "Koopa"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0474",
    "level": "facil",
    "factId": "qm-0474",
    "topic": "games",
    "explanation": "Splatoon 3 descreve o personagem controlado como um Inkling semelhante a uma lula.",
    "source": {
      "name": "Nintendo — Splatoon 3",
      "url": "https://www.nintendo.com/store/products/splatoon-3-switch/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Como se chamam as pequenas criaturas semelhantes a plantas que o jogador guia em Pikmin 4?",
    "o": [
      "Pikmin",
      "Chao",
      "Lumas",
      "Toads"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0475",
    "level": "facil",
    "factId": "qm-0475",
    "topic": "games",
    "explanation": "Pikmin 4 apresenta pequenas criaturas semelhantes a plantas chamadas Pikmin, que possuem habilidades distintas.",
    "source": {
      "name": "Nintendo — Pikmin 4",
      "url": "https://www.nintendo.com/us/store/products/pikmin-4-117531/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Em Splatoon 3, quantos jogadores há em cada equipe nas batalhas padrão 4-contra-4?",
    "o": [
      "4",
      "3",
      "5",
      "6"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0476",
    "level": "medio",
    "factId": "qm-0476",
    "topic": "games",
    "explanation": "As batalhas padrão destacadas na página oficial de Splatoon 3 são disputadas em equipes de quatro jogadores contra quatro.",
    "source": {
      "name": "Nintendo — Splatoon 3",
      "url": "https://www.nintendo.com/store/products/splatoon-3-switch/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "ASTRO BOT, lançado em 2024, é exclusivo de qual console?",
    "o": [
      "PlayStation 5",
      "PlayStation 4",
      "Xbox Series X|S",
      "Nintendo Switch"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0477",
    "level": "medio",
    "factId": "qm-0477",
    "topic": "games",
    "explanation": "ASTRO BOT é um jogo lançado para PlayStation 5.",
    "source": {
      "name": "PlayStation — ASTRO BOT",
      "url": "https://www.playstation.com/pt-br/games/astro-bot/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2024"
  },
  {
    "c": "Games",
    "q": "Em Ratchet & Clank: Em Uma Outra Dimensão, qual é o nome da Lombax de outra dimensão?",
    "o": [
      "Rivet",
      "Kit",
      "Angela",
      "Talwyn"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0478",
    "level": "medio",
    "factId": "qm-0478",
    "topic": "games",
    "explanation": "Rivet é apresentada como uma nova Lombax misteriosa vinda de outra dimensão.",
    "source": {
      "name": "PlayStation — Ratchet & Clank: Em Uma Outra Dimensão",
      "url": "https://www.playstation.com/pt-br/games/ratchet-and-clank-rift-apart/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Em Metroid Dread, em qual planeta Samus investiga uma transmissão misteriosa?",
    "o": [
      "ZDR",
      "SR388",
      "Tallon IV",
      "Zebes"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0479",
    "level": "medio",
    "factId": "qm-0479",
    "topic": "games",
    "explanation": "Em Metroid Dread, Samus é atraída ao planeta ZDR após uma transmissão misteriosa.",
    "source": {
      "name": "Nintendo — Metroid Dread",
      "url": "https://www.nintendo.com/us/whatsnew/suit-up-as-samus-in-metroid-dread-available-now/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "No Minecraft, qual modo permite construir sem as restrições típicas de sobrevivência?",
    "o": [
      "Criativo",
      "Sobrevivência",
      "Aventura",
      "Espectador"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0480",
    "level": "medio",
    "factId": "qm-0480",
    "topic": "games",
    "explanation": "O modo Criativo permite construir sem as restrições típicas encontradas no modo Sobrevivência.",
    "source": {
      "name": "Minecraft — O que é Minecraft?",
      "url": "https://www.minecraft.net/pt-br/about-minecraft"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Quantos jogos compõem Halo: The Master Chief Collection segundo a página oficial do Xbox?",
    "o": [
      "6",
      "4",
      "5",
      "7"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0481",
    "level": "medio",
    "factId": "qm-0481",
    "topic": "games",
    "explanation": "A página oficial do Xbox informa que The Master Chief Collection reúne seis jogos em uma única experiência.",
    "source": {
      "name": "Xbox — Halo: The Master Chief Collection",
      "url": "https://www.xbox.com/en-US/games/halo-the-master-chief-collection"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Em Cyberpunk 2077, qual é o nome da megalópole onde se passa a aventura?",
    "o": [
      "Night City",
      "Liberty City",
      "Vice City",
      "Rapture"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0482",
    "level": "medio",
    "factId": "qm-0482",
    "topic": "games",
    "explanation": "Cyberpunk 2077 se passa em Night City, descrita oficialmente como uma grande megalópole.",
    "source": {
      "name": "Cyberpunk 2077 — Site oficial",
      "url": "https://www.cyberpunk.net/us/en/cyberpunk-2077"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Em Metroid Dread, o que significa a sigla E.M.M.I.?",
    "o": [
      "Extraplanetary Multiform Mobile Identifiers",
      "Experimental Mechanical Mission Interfaces",
      "Extraterrestrial Mobile Mapping Instruments",
      "Enhanced Modular Machine Intelligence"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0483",
    "level": "dificil",
    "factId": "qm-0483",
    "topic": "games",
    "explanation": "E.M.M.I. significa Extraplanetary Multiform Mobile Identifiers, nome dos robôs de pesquisa presentes em Metroid Dread.",
    "source": {
      "name": "Nintendo — Metroid Dread",
      "url": "https://www.nintendo.com/us/whatsnew/suit-up-as-samus-in-metroid-dread-available-now/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Quantos bots podem ser resgatados em ASTRO BOT segundo a página oficial do PlayStation?",
    "o": [
      "300",
      "150",
      "200",
      "500"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0484",
    "level": "dificil",
    "factId": "qm-0484",
    "topic": "games",
    "explanation": "A página oficial informa que ASTRO BOT possui 300 bots para resgatar.",
    "source": {
      "name": "PlayStation — ASTRO BOT",
      "url": "https://www.playstation.com/pt-br/games/astro-bot/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2024"
  },
  {
    "c": "Games",
    "q": "Em Elden Ring, como são chamados os fragmentos do Elden Ring reivindicados pelos semideuses?",
    "o": [
      "Great Runes",
      "Elden Shards",
      "Grace Stones",
      "Golden Seals"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0485",
    "level": "dificil",
    "factId": "qm-0485",
    "topic": "games",
    "explanation": "Os semideuses reivindicaram fragmentos do Elden Ring conhecidos como Great Runes.",
    "source": {
      "name": "Bandai Namco — Elden Ring",
      "url": "https://www.bandainamcoent.com/games/elden-ring"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Em Elden Ring, como é chamada a guerra provocada pela disputa em torno das Great Runes?",
    "o": [
      "The Shattering",
      "The Sundering",
      "The Great Collapse",
      "The Golden War"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0486",
    "level": "dificil",
    "factId": "qm-0486",
    "topic": "games",
    "explanation": "A guerra desencadeada pela disputa e pelo poder das Great Runes é chamada de The Shattering.",
    "source": {
      "name": "Bandai Namco — Elden Ring",
      "url": "https://www.bandainamcoent.com/games/elden-ring"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Games",
    "q": "Em que data Portal foi lançado originalmente no Steam?",
    "o": [
      "10 de outubro de 2007",
      "18 de abril de 2011",
      "16 de novembro de 2004",
      "17 de novembro de 2009"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0487",
    "level": "dificil",
    "factId": "qm-0487",
    "topic": "games",
    "explanation": "A página oficial de Portal no Steam registra o lançamento em 10 de outubro de 2007.",
    "source": {
      "name": "Steam — Portal",
      "url": "https://store.steampowered.com/app/400/Portal/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2007"
  },
  {
    "c": "Games",
    "q": "Qual estúdio desenvolveu ASTRO BOT?",
    "o": [
      "Team ASOBI",
      "Insomniac Games",
      "Naughty Dog",
      "Guerrilla Games"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0488",
    "level": "dificil",
    "factId": "qm-0488",
    "topic": "games",
    "explanation": "ASTRO BOT foi desenvolvido pela Team ASOBI, integrante da PlayStation Studios.",
    "source": {
      "name": "PlayStation — ASTRO BOT",
      "url": "https://www.playstation.com/pt-br/games/astro-bot/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2024"
  },
  {
    "c": "Filmes",
    "q": "Quem dirigiu Titanic (1997)?",
    "o": [
      "James Cameron",
      "Steven Spielberg",
      "Ridley Scott",
      "Peter Jackson"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0489",
    "level": "facil",
    "factId": "qm-0489",
    "topic": "filmes",
    "explanation": "Titanic (1997) foi dirigido por James Cameron.",
    "source": {
      "name": "BFI — Titanic (1997)",
      "url": "https://www.bfi.org.uk/film/aa4a1930-21de-51ce-9700-6acaf2d59437/titanic"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1997"
  },
  {
    "c": "Filmes",
    "q": "Quem dirigiu Jurassic Park (1993)?",
    "o": [
      "Steven Spielberg",
      "James Cameron",
      "George Lucas",
      "Tim Burton"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0490",
    "level": "facil",
    "factId": "qm-0490",
    "topic": "filmes",
    "explanation": "Jurassic Park foi dirigido por Steven Spielberg.",
    "source": {
      "name": "Universal Pictures — About",
      "url": "https://www.universalpictures.com/about/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1993"
  },
  {
    "c": "Filmes",
    "q": "Em The Matrix (1999), qual é o apelido hacker de Thomas Anderson?",
    "o": [
      "Neo",
      "Morpheus",
      "Cypher",
      "Smith"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0491",
    "level": "facil",
    "factId": "qm-0491",
    "topic": "filmes",
    "explanation": "Thomas Anderson leva uma vida dupla e usa o apelido hacker Neo.",
    "source": {
      "name": "BFI — The Matrix (1999)",
      "url": "https://www.bfi.org.uk/film/cc7edbb1-17e5-509b-935b-725045d722aa/the-matrix"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1999"
  },
  {
    "c": "Filmes",
    "q": "Em O Senhor dos Anéis: A Sociedade do Anel (2001), em qual mundo de fantasia se passa a história?",
    "o": [
      "Terra-média",
      "Nárnia",
      "Westeros",
      "Krypton"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0492",
    "level": "facil",
    "factId": "qm-0492",
    "topic": "filmes",
    "explanation": "A Sociedade do Anel se passa no mundo de fantasia chamado Terra-média.",
    "source": {
      "name": "BFI — The Lord of the Rings: The Fellowship of the Ring",
      "url": "https://www.bfi.org.uk/film/52b45f51-7f3b-56e6-991d-eae1443c0e77/the-lord-of-the-rings-the-fellowship-of-the-ring"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2001"
  },
  {
    "c": "Filmes",
    "q": "Em De Volta para o Futuro, qual carro é transformado em máquina do tempo?",
    "o": [
      "DeLorean",
      "Mustang",
      "Camaro",
      "Corvette"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0493",
    "level": "facil",
    "factId": "qm-0493",
    "topic": "filmes",
    "explanation": "A máquina do tempo de De Volta para o Futuro é construída em um DeLorean.",
    "source": {
      "name": "Universal Pictures — About",
      "url": "https://www.universalpictures.com/about/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1985"
  },
  {
    "c": "Filmes",
    "q": "Em Star Wars: Episódio IV — Uma Nova Esperança, em qual planeta vive Luke Skywalker no início de sua jornada?",
    "o": [
      "Tatooine",
      "Alderaan",
      "Hoth",
      "Naboo"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0494",
    "level": "facil",
    "factId": "qm-0494",
    "topic": "filmes",
    "explanation": "Luke Skywalker começa sua jornada como um jovem fazendeiro de Tatooine.",
    "source": {
      "name": "StarWars.com — Luke Skywalker Databank",
      "url": "https://www.starwars.com/databank/Luke-Skywalker"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Filmes",
    "q": "Qual é o sobrenome da família mafiosa central de O Poderoso Chefão (1972)?",
    "o": [
      "Corleone",
      "Soprano",
      "Montana",
      "Barzini"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0495",
    "level": "facil",
    "factId": "qm-0495",
    "topic": "filmes",
    "explanation": "O Poderoso Chefão acompanha a família criminosa Corleone.",
    "source": {
      "name": "BFI — The Godfather (1972)",
      "url": "https://www.bfi.org.uk/film/ccc481e1-f1c2-5b60-bbe7-77ad5645fb1a/the-godfather"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1972"
  },
  {
    "c": "Filmes",
    "q": "Em Interestelar, qual fenômeno permite aos exploradores atravessar enormes distâncias no espaço?",
    "o": [
      "Buraco de minhoca",
      "Supernova",
      "Eclipse solar",
      "Chuva de meteoros"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0496",
    "level": "medio",
    "factId": "qm-0496",
    "topic": "filmes",
    "explanation": "A história de Interestelar envolve exploradores que usam um buraco de minhoca recém-descoberto para superar grandes distâncias espaciais.",
    "source": {
      "name": "Paramount — Interstellar: início das filmagens",
      "url": "https://ir.paramount.com/news-releases/news-release-details/paramount-pictures-and-warner-bros-pictures-announce-start"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Filmes",
    "q": "Quem dirigiu Gladiador (2000)?",
    "o": [
      "Ridley Scott",
      "Steven Soderbergh",
      "Ron Howard",
      "Sam Mendes"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0497",
    "level": "medio",
    "factId": "qm-0497",
    "topic": "filmes",
    "explanation": "Gladiador foi dirigido por Ridley Scott.",
    "source": {
      "name": "Universal Pictures — About",
      "url": "https://www.universalpictures.com/about/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2000"
  },
  {
    "c": "Filmes",
    "q": "Quantos Oscars A Lista de Schindler venceu?",
    "o": [
      "7",
      "5",
      "9",
      "11"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0498",
    "level": "medio",
    "factId": "qm-0498",
    "topic": "filmes",
    "explanation": "A Lista de Schindler venceu sete Oscars, incluindo Melhor Filme e Melhor Diretor.",
    "source": {
      "name": "Universal Pictures — About",
      "url": "https://www.universalpictures.com/about/"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1993"
  },
  {
    "c": "Filmes",
    "q": "Qual é o nome do hotel onde se passa grande parte de O Iluminado (1980)?",
    "o": [
      "Overlook Hotel",
      "Bates Motel",
      "Grand Budapest",
      "Hotel Cortez"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0499",
    "level": "medio",
    "factId": "qm-0499",
    "topic": "filmes",
    "explanation": "A maior parte de O Iluminado se passa no isolado Overlook Hotel.",
    "source": {
      "name": "BFI — The Shining (1980)",
      "url": "https://www.bfi.org.uk/film/4d39487e-a464-5771-a2f3-2533c7ba9c8c/the-shining"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1980"
  },
  {
    "c": "Filmes",
    "q": "Em 2001: Uma Odisseia no Espaço, como se chama o computador de inteligência artificial da nave?",
    "o": [
      "HAL 9000",
      "WOPR",
      "Skynet",
      "GERTY"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0500",
    "level": "medio",
    "factId": "qm-0500",
    "topic": "filmes",
    "explanation": "HAL 9000 é o computador de inteligência artificial que desempenha papel central no filme.",
    "source": {
      "name": "BFI — 2001: A Space Odyssey",
      "url": "https://www.bfi.org.uk/film/cefccdb2-b558-5623-9c17-72b4be7bd4c1/2001-a-space-odyssey"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1968"
  },
  {
    "c": "Filmes",
    "q": "Em Alien (1979), qual é o nome da nave comercial da tripulação?",
    "o": [
      "Nostromo",
      "Sulaco",
      "Discovery One",
      "Serenity"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0501",
    "level": "medio",
    "factId": "qm-0501",
    "topic": "filmes",
    "explanation": "A tripulação de Alien viaja a bordo da nave comercial Nostromo.",
    "source": {
      "name": "BFI — Remembering Ian Holm: 10 essential films",
      "url": "https://www.bfi.org.uk/lists/remembering-ian-holm-10-essential-films"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1979"
  },
  {
    "c": "Filmes",
    "q": "Quem dirigiu O Senhor dos Anéis: A Sociedade do Anel (2001)?",
    "o": [
      "Peter Jackson",
      "George Miller",
      "Sam Raimi",
      "Bryan Singer"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0502",
    "level": "medio",
    "factId": "qm-0502",
    "topic": "filmes",
    "explanation": "A Sociedade do Anel foi dirigida por Peter Jackson.",
    "source": {
      "name": "BFI — The Lord of the Rings: The Fellowship of the Ring",
      "url": "https://www.bfi.org.uk/film/52b45f51-7f3b-56e6-991d-eae1443c0e77/the-lord-of-the-rings-the-fellowship-of-the-ring"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2001"
  },
  {
    "c": "Filmes",
    "q": "Em que data Star Wars: Episódio IV — Uma Nova Esperança estreou nos Estados Unidos?",
    "o": [
      "25 de maio de 1977",
      "4 de julho de 1977",
      "16 de dezembro de 1977",
      "1 de janeiro de 1978"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0503",
    "level": "dificil",
    "factId": "qm-0503",
    "topic": "filmes",
    "explanation": "A página oficial de Star Wars registra 25 de maio de 1977 como data de lançamento de Uma Nova Esperança.",
    "source": {
      "name": "StarWars.com — A New Hope",
      "url": "https://www.starwars.com/films/star-wars-episode-iv-a-new-hope"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1977"
  },
  {
    "c": "Filmes",
    "q": "Em The Matrix, qual é o nome da nave usada por Morpheus e sua equipe?",
    "o": [
      "Nebuchadnezzar",
      "Nostromo",
      "Event Horizon",
      "Prometheus"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0504",
    "level": "dificil",
    "factId": "qm-0504",
    "topic": "filmes",
    "explanation": "Morpheus e sua equipe operam a bordo da nave Nebuchadnezzar.",
    "source": {
      "name": "BFI — The Matrix and rubber reality",
      "url": "https://www.bfi.org.uk/sight-and-sound/features/matrix-rubber-reality"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1999"
  },
  {
    "c": "Filmes",
    "q": "Em 2001: Uma Odisseia no Espaço, para qual planeta segue a missão da Discovery One?",
    "o": [
      "Júpiter",
      "Marte",
      "Saturno",
      "Vênus"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0505",
    "level": "dificil",
    "factId": "qm-0505",
    "topic": "filmes",
    "explanation": "No filme, a missão da Discovery One segue para Júpiter.",
    "source": {
      "name": "BFI — 2001: A Space Odyssey",
      "url": "https://www.bfi.org.uk/film/cefccdb2-b558-5623-9c17-72b4be7bd4c1/2001-a-space-odyssey"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1968"
  },
  {
    "c": "Filmes",
    "q": "Quem escreveu o roteiro de Interestelar ao lado de Christopher Nolan?",
    "o": [
      "Jonathan Nolan",
      "David Goyer",
      "Damon Lindelof",
      "Alex Garland"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0506",
    "level": "dificil",
    "factId": "qm-0506",
    "topic": "filmes",
    "explanation": "Interestelar foi escrito por Jonathan Nolan e Christopher Nolan.",
    "source": {
      "name": "Paramount — Interstellar ultrapassa marco em IMAX",
      "url": "https://ir.paramount.com/news-releases/news-release-details/paramount-pictures-and-warner-bros-pictures-interstellar-crosses"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Filmes",
    "q": "Segundo o BFI, qual é a duração de Titanic (1997)?",
    "o": [
      "195 minutos",
      "165 minutos",
      "180 minutos",
      "210 minutos"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0507",
    "level": "dificil",
    "factId": "qm-0507",
    "topic": "filmes",
    "explanation": "A ficha do BFI registra duração de 195 minutos para Titanic (1997).",
    "source": {
      "name": "BFI — Titanic (1997)",
      "url": "https://www.bfi.org.uk/film/aa4a1930-21de-51ce-9700-6acaf2d59437/titanic"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1997"
  },
  {
    "c": "Filmes",
    "q": "Segundo o BFI, qual é a duração de O Senhor dos Anéis: A Sociedade do Anel (2001)?",
    "o": [
      "178 minutos",
      "148 minutos",
      "188 minutos",
      "208 minutos"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0508",
    "level": "dificil",
    "factId": "qm-0508",
    "topic": "filmes",
    "explanation": "A ficha do BFI registra duração de 178 minutos para A Sociedade do Anel.",
    "source": {
      "name": "BFI — The Lord of the Rings: The Fellowship of the Ring",
      "url": "https://www.bfi.org.uk/film/52b45f51-7f3b-56e6-991d-eae1443c0e77/the-lord-of-the-rings-the-fellowship-of-the-ring"
    },
    "verifiedAt": "2026-09-30T00:00:00.000Z",
    "expiresAt": "2027-09-30T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2001"
  },
  {
    "c": "Séries",
    "q": "Em Squid Game, qual é o nome do jogador 456?",
    "o": [
      "Seong Gi-hun",
      "Cho Sang-woo",
      "Hwang Jun-ho",
      "Oh Il-nam"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0509",
    "level": "facil",
    "factId": "qm-0509",
    "topic": "series",
    "explanation": "Seong Gi-hun é o protagonista de Squid Game e participa da competição como o Jogador 456.",
    "source": {
      "name": "Netflix Tudum — Squid Game: guia do elenco",
      "url": "https://www.netflix.com/tudum/articles/squid-game-season-2-cast"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Em The Mandalorian, qual é o nome do enjeitado que acompanha o protagonista?",
    "o": [
      "Grogu",
      "Ezra",
      "Boba",
      "Thrawn"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0510",
    "level": "facil",
    "factId": "qm-0510",
    "topic": "series",
    "explanation": "Grogu acompanha Din Djarin ao longo de The Mandalorian e é descrito oficialmente como seu enjeitado.",
    "source": {
      "name": "Disney+ Press — The Mandalorian Media Kit",
      "url": "https://press.disneyplus.com/media-kits/the-mandalorian"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "A série The Crown dramatiza principalmente a vida de qual monarca britânica?",
    "o": [
      "Elizabeth II",
      "Victoria",
      "Elizabeth I",
      "Anne"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0511",
    "level": "facil",
    "factId": "qm-0511",
    "topic": "series",
    "explanation": "The Crown dramatiza a vida da rainha Elizabeth II e acontecimentos políticos e pessoais de seu reinado.",
    "source": {
      "name": "Netflix — The Crown",
      "url": "https://www.netflix.com/br/title/80025678"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Em The Witcher, qual é o nome do caçador de monstros protagonista?",
    "o": [
      "Geralt de Rívia",
      "Jaskier",
      "Vesemir",
      "Cahir"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0512",
    "level": "facil",
    "factId": "qm-0512",
    "topic": "series",
    "explanation": "Geralt de Rívia é apresentado pela Netflix como um caçador de monstros mutante e protagonista da série.",
    "source": {
      "name": "Netflix — The Witcher",
      "url": "https://www.netflix.com/br/title/80189685"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Em Severance, em qual empresa trabalha Mark Scout?",
    "o": [
      "Lumon Industries",
      "Vought International",
      "Waystar Royco",
      "Madrigal Electromotive"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0513",
    "level": "facil",
    "factId": "qm-0513",
    "topic": "series",
    "explanation": "Mark Scout lidera uma equipe na Lumon Industries, empresa central da trama de Severance.",
    "source": {
      "name": "Apple TV Press — Severance",
      "url": "https://www.apple.com/tv-pr/originals/severance/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Em The Boys, qual corporação apoia e administra Os Sete?",
    "o": [
      "Vought",
      "Lumon",
      "Umbrella",
      "Massive Dynamic"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0514",
    "level": "facil",
    "factId": "qm-0514",
    "topic": "series",
    "explanation": "The Boys apresenta a Vought como a corporação ligada ao grupo de super-heróis conhecido como Os Sete.",
    "source": {
      "name": "Prime Video — The Boys",
      "url": "https://www.primevideo.com/-/pt/detail/0S1FYJ3LY9KTL9C7WFFAGA9F6F"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Em Stranger Things, qual cidade de Indiana concentra os acontecimentos sobrenaturais da série?",
    "o": [
      "Hawkins",
      "Riverdale",
      "Sunnydale",
      "Twin Peaks"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0515",
    "level": "facil",
    "factId": "qm-0515",
    "topic": "series",
    "explanation": "Stranger Things se passa principalmente em Hawkins, uma cidade fictícia do estado de Indiana.",
    "source": {
      "name": "Netflix Tudum — Stranger Things 5: guia do elenco",
      "url": "https://www.netflix.com/tudum/articles/stranger-things-season-5-cast-character-guide"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Em Better Call Saul, Jimmy McGill acaba adotando qual identidade?",
    "o": [
      "Saul Goodman",
      "Gene Takavic",
      "Howard Hamlin",
      "Lalo Salamanca"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0516",
    "level": "medio",
    "factId": "qm-0516",
    "topic": "series",
    "explanation": "Better Call Saul acompanha a transformação de Jimmy McGill na persona de Saul Goodman.",
    "source": {
      "name": "AMC — Michael Mando / Better Call Saul",
      "url": "https://www.amc.com/shows/better-call-saul/cast/michael-mando--1032767"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Qual roteirista aparece no Disney+ como criador de Loki?",
    "o": [
      "Michael Waldron",
      "Jon Favreau",
      "Eric Kripke",
      "Peter Morgan"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0517",
    "level": "medio",
    "factId": "qm-0517",
    "topic": "series",
    "explanation": "A página oficial de Loki no Disney+ credita Michael Waldron como criador da série.",
    "source": {
      "name": "Disney+ — Loki",
      "url": "https://www.disneyplus.com/series/loki/6pARMvILBGzF"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "A página oficial do Disney+ credita qual cineasta como criador de The Mandalorian?",
    "o": [
      "Jon Favreau",
      "Dave Filoni",
      "J. J. Abrams",
      "Tony Gilroy"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0518",
    "level": "medio",
    "factId": "qm-0518",
    "topic": "series",
    "explanation": "O Disney+ credita Jon Favreau como criador de The Mandalorian.",
    "source": {
      "name": "Disney+ — The Mandalorian",
      "url": "https://www.disneyplus.com/pt-br/browse/entity-422f6dcc-226f-44e7-98d4-22de69b31cf3"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Qual roteirista criou o thriller corporativo Severance, segundo a Apple?",
    "o": [
      "Dan Erickson",
      "Sam Esmail",
      "Noah Hawley",
      "Vince Gilligan"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0519",
    "level": "medio",
    "factId": "qm-0519",
    "topic": "series",
    "explanation": "A Apple credita Dan Erickson como criador, roteirista e produtor executivo de Severance.",
    "source": {
      "name": "Apple TV Press — Severance",
      "url": "https://www.apple.com/tv-pr/originals/severance/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Qual dramaturgo e roteirista é creditado pela Netflix como criador de The Crown?",
    "o": [
      "Peter Morgan",
      "Julian Fellowes",
      "Steven Moffat",
      "David Simon"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0520",
    "level": "medio",
    "factId": "qm-0520",
    "topic": "series",
    "explanation": "A Netflix credita Peter Morgan como criador de The Crown.",
    "source": {
      "name": "Netflix — The Crown",
      "url": "https://www.netflix.com/br/title/80025678"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Quem é creditada pela Netflix pela criação televisiva de The Witcher?",
    "o": [
      "Lauren Schmidt Hissrich",
      "Phoebe Waller-Bridge",
      "Shonda Rhimes",
      "Sera Gamble"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0521",
    "level": "medio",
    "factId": "qm-0521",
    "topic": "series",
    "explanation": "A Netflix credita Lauren Schmidt Hissrich como criadora de The Witcher.",
    "source": {
      "name": "Netflix — The Witcher",
      "url": "https://www.netflix.com/br/title/80189685"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Qual ator vive Carmen 'Carmy' Berzatto na série The Bear?",
    "o": [
      "Jeremy Allen White",
      "Ebon Moss-Bachrach",
      "Lionel Boyce",
      "Jon Bernthal"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0522",
    "level": "medio",
    "factId": "qm-0522",
    "topic": "series",
    "explanation": "Jeremy Allen White interpreta Carmen 'Carmy' Berzatto em The Bear.",
    "source": {
      "name": "FX — Elenco de The Bear",
      "url": "https://www.fxnetworks.com/shows/the-bear/cast"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Christopher Storer criou qual série da FX centrada em uma equipe de restaurante em Chicago?",
    "o": [
      "The Bear",
      "Atlanta",
      "Fargo",
      "Reservation Dogs"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0523",
    "level": "dificil",
    "factId": "qm-0523",
    "topic": "series",
    "explanation": "Christopher Storer é o criador de The Bear, série da FX ligada ao universo de um restaurante em Chicago.",
    "source": {
      "name": "FX — The Bear",
      "url": "https://www.fxnetworks.com/shows/the-bear"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Em Severance, o procedimento de ruptura divide quais memórias dos funcionários?",
    "o": [
      "As do trabalho e da vida pessoal",
      "As da infância e da vida adulta",
      "As visuais e auditivas",
      "As recentes e antigas"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0524",
    "level": "dificil",
    "factId": "qm-0524",
    "topic": "series",
    "explanation": "O procedimento de Severance divide cirurgicamente as memórias dos funcionários entre a vida profissional e a vida pessoal.",
    "source": {
      "name": "Apple TV Press — Severance",
      "url": "https://www.apple.com/tv-pr/originals/severance/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Na segunda temporada de Squid Game, qual ator interpreta o Front Man, também apresentado como Player 001?",
    "o": [
      "Lee Byung-hun",
      "Lee Jung-jae",
      "Wi Ha-jun",
      "Gong Yoo"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0525",
    "level": "dificil",
    "factId": "qm-0525",
    "topic": "series",
    "explanation": "Na segunda temporada, Lee Byung-hun interpreta o Front Man, que também aparece como Player 001.",
    "source": {
      "name": "Netflix Tudum — Bastidores de Squid Game 2",
      "url": "https://www.netflix.com/tudum/videos/squid-game-2-behind-the-scenes-3-games"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2ª temporada"
  },
  {
    "c": "Séries",
    "q": "Como Stranger Things chama a dimensão sombria conectada a Hawkins?",
    "o": [
      "Mundo Invertido",
      "Zona Fantasma",
      "Vazio Negro",
      "Plano Astral"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0526",
    "level": "dificil",
    "factId": "qm-0526",
    "topic": "series",
    "explanation": "A dimensão alternativa ligada a Hawkins é chamada de Mundo Invertido, conhecida em inglês como Upside Down.",
    "source": {
      "name": "Netflix Tudum — Recap de Stranger Things",
      "url": "https://www.netflix.com/tudum/articles/stranger-things-a-z-recap-seasons-1-3"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Qual é o nome do Mandaloriano interpretado por Pedro Pascal?",
    "o": [
      "Din Djarin",
      "Paz Vizsla",
      "Bo-Katan Kryze",
      "Boba Fett"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0527",
    "level": "dificil",
    "factId": "qm-0527",
    "topic": "series",
    "explanation": "O protagonista conhecido como Mandaloriano se chama Din Djarin.",
    "source": {
      "name": "Disney+ Press — The Mandalorian Media Kit",
      "url": "https://press.disneyplus.com/media-kits/the-mandalorian"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Séries",
    "q": "Qual cineasta sul-coreano criou e dirigiu Squid Game?",
    "o": [
      "Hwang Dong-hyuk",
      "Bong Joon-ho",
      "Park Chan-wook",
      "Kim Jee-woon"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0528",
    "level": "dificil",
    "factId": "qm-0528",
    "topic": "series",
    "explanation": "Hwang Dong-hyuk é o criador e diretor de Squid Game.",
    "source": {
      "name": "Netflix Tudum — Hwang Dong-hyuk e Squid Game",
      "url": "https://www.netflix.com/tudum/articles/squid-game-photos-director-hwang-dong-hyuk"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Carros (2006), qual é o nome do carro de corrida protagonista?",
    "o": [
      "Relâmpago McQueen",
      "Mate",
      "Doc Hudson",
      "Chick Hicks"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0529",
    "level": "facil",
    "factId": "qm-0529",
    "topic": "animacoes",
    "explanation": "Relâmpago McQueen é o jovem carro de corrida protagonista de Carros.",
    "source": {
      "name": "Pixar — Cars",
      "url": "https://www.pixar.com/cars"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2006"
  },
  {
    "c": "Animações",
    "q": "Em Up (2009), qual é o nome do idoso que viaja com sua casa presa a balões?",
    "o": [
      "Carl Fredricksen",
      "Russell",
      "Charles Muntz",
      "Dug"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0530",
    "level": "facil",
    "factId": "qm-0530",
    "topic": "animacoes",
    "explanation": "Carl Fredricksen prende milhares de balões à casa e parte em uma aventura pela América do Sul.",
    "source": {
      "name": "Pixar — Up",
      "url": "https://www.pixar.com/upfilm"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2009"
  },
  {
    "c": "Animações",
    "q": "Em Monstros S.A., quem é o melhor amigo e assistente de Sulley?",
    "o": [
      "Mike Wazowski",
      "Randall Boggs",
      "Waternoose",
      "Roz"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0531",
    "level": "facil",
    "factId": "qm-0531",
    "topic": "animacoes",
    "explanation": "Mike Wazowski é o melhor amigo, colega de trabalho e companheiro de Sulley.",
    "source": {
      "name": "Pixar — Monsters, Inc.",
      "url": "https://www.pixar.com/monsters-inc"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Red: Crescer é uma Fera, em que animal Mei se transforma quando fica muito emocionada?",
    "o": [
      "Panda-vermelho gigante",
      "Raposa",
      "Tigre",
      "Urso-polar"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0532",
    "level": "facil",
    "factId": "qm-0532",
    "topic": "animacoes",
    "explanation": "Mei se transforma em um panda-vermelho gigante quando suas emoções ficam intensas.",
    "source": {
      "name": "Pixar — Turning Red",
      "url": "https://www.pixar.com/turning-red"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Luca (2021), qual é o nome do amigo de Luca que também é um monstro marinho?",
    "o": [
      "Alberto Scorfano",
      "Ercole Visconti",
      "Massimo Marcovaldo",
      "Lorenzo Paguro"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0533",
    "level": "facil",
    "factId": "qm-0533",
    "topic": "animacoes",
    "explanation": "Alberto Scorfano é o amigo aventureiro de Luca e, assim como ele, também é um monstro marinho.",
    "source": {
      "name": "Pixar — Luca",
      "url": "https://www.pixar.com/luca"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2021"
  },
  {
    "c": "Animações",
    "q": "Qual é o nome do panda protagonista de Kung Fu Panda?",
    "o": [
      "Po",
      "Shifu",
      "Tai Lung",
      "Oogway"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0534",
    "level": "facil",
    "factId": "qm-0534",
    "topic": "animacoes",
    "explanation": "Po é o protagonista de Kung Fu Panda e precisa abraçar quem realmente é para se tornar o verdadeiro Guerreiro Dragão.",
    "source": {
      "name": "DreamWorks — Kung Fu Panda",
      "url": "https://www.dreamworks.com/movies/kung-fu-panda"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Homem-Aranha no Aranhaverso, qual adolescente do Brooklyn assume o papel de Homem-Aranha?",
    "o": [
      "Miles Morales",
      "Peter Parker",
      "Gwen Stacy",
      "Miguel O'Hara"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0535",
    "level": "facil",
    "factId": "qm-0535",
    "topic": "animacoes",
    "explanation": "O filme apresenta Miles Morales, um adolescente do Brooklyn, como um dos heróis capazes de usar a máscara do Homem-Aranha.",
    "source": {
      "name": "Sony Pictures Animation — Spider-Man: Into the Spider-Verse",
      "url": "https://www.sonypicturesanimation.com/projects/films/spider-man-spider-verse"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Soul, qual é a profissão de Joe Gardner no início do filme?",
    "o": [
      "Professor de música",
      "Médico",
      "Jornalista",
      "Chef de cozinha"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0536",
    "level": "medio",
    "factId": "qm-0536",
    "topic": "animacoes",
    "explanation": "Joe Gardner trabalha como professor de banda em uma escola e sonha em viver profissionalmente do jazz.",
    "source": {
      "name": "Pixar — Soul",
      "url": "https://www.pixar.com/soul"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Os Incríveis, qual é o principal superpoder de Flecha?",
    "o": [
      "Supervelocidade",
      "Invisibilidade",
      "Elasticidade",
      "Superforça"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0537",
    "level": "medio",
    "factId": "qm-0537",
    "topic": "animacoes",
    "explanation": "Flecha, filho de Bob e Helen Parr, possui o poder de correr em supervelocidade.",
    "source": {
      "name": "Pixar — The Incredibles",
      "url": "https://www.pixar.com/the-incredibles"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Monstros S.A., como se chama a cidade onde vivem Sulley e Mike?",
    "o": [
      "Monstrópolis",
      "Radiator Springs",
      "Portorosso",
      "Metroville"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0538",
    "level": "medio",
    "factId": "qm-0538",
    "topic": "animacoes",
    "explanation": "Sulley e Mike vivem e trabalham em Monstrópolis, cidade do mundo dos monstros.",
    "source": {
      "name": "Pixar — Monsters, Inc.",
      "url": "https://www.pixar.com/monsters-inc"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Carros, em qual pequena cidade Relâmpago McQueen acaba se perdendo?",
    "o": [
      "Radiator Springs",
      "Motor City",
      "Hill Valley",
      "Monstrópolis"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0539",
    "level": "medio",
    "factId": "qm-0539",
    "topic": "animacoes",
    "explanation": "Relâmpago McQueen se perde em Radiator Springs, onde conhece personagens que mudam sua visão sobre a vida.",
    "source": {
      "name": "Pixar — Cars",
      "url": "https://www.pixar.com/cars"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Up, qual é o nome do escoteiro mirim que viaja acidentalmente com Carl?",
    "o": [
      "Russell",
      "Dug",
      "Kevin",
      "Muntz"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0540",
    "level": "medio",
    "factId": "qm-0540",
    "topic": "animacoes",
    "explanation": "Russell é o garoto de oito anos que acaba viajando com Carl Fredricksen.",
    "source": {
      "name": "Pixar — Up",
      "url": "https://www.pixar.com/upfilm"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Luca, qual é o nome da cidade fictícia da Riviera Italiana onde acontece boa parte da história?",
    "o": [
      "Portorosso",
      "Monterosso",
      "Bellagio",
      "Ravello"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0541",
    "level": "medio",
    "factId": "qm-0541",
    "topic": "animacoes",
    "explanation": "A história de Luca se passa em Portorosso, uma cidade fictícia inspirada na Riviera Italiana.",
    "source": {
      "name": "Pixar — Luca",
      "url": "https://www.pixar.com/luca"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Red: Crescer é uma Fera, qual é o nome da boy band favorita de Mei e suas amigas?",
    "o": [
      "4*Town",
      "5ive",
      "Boyz 4 Now",
      "The Hex Girls"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0542",
    "level": "medio",
    "factId": "qm-0542",
    "topic": "animacoes",
    "explanation": "Mei e suas amigas são fãs da boy band fictícia 4*Town.",
    "source": {
      "name": "Pixar — Turning Red",
      "url": "https://www.pixar.com/turning-red"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Carros, qual é o modelo e ano de Doc Hudson?",
    "o": [
      "Hudson Hornet 1951",
      "Ford Mustang 1967",
      "Chevrolet Bel Air 1957",
      "Plymouth Fury 1958"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0543",
    "level": "dificil",
    "factId": "qm-0543",
    "topic": "animacoes",
    "explanation": "A Pixar descreve Doc Hudson como um Hudson Hornet de 1951.",
    "source": {
      "name": "Pixar — Cars",
      "url": "https://www.pixar.com/cars"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1951"
  },
  {
    "c": "Animações",
    "q": "Em Monstros S.A., qual habilidade especial de Randall Boggs o ajuda a se esconder?",
    "o": [
      "Camuflagem semelhante à de um camaleão",
      "Teletransporte",
      "Invisibilidade permanente",
      "Mudança de tamanho"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0544",
    "level": "dificil",
    "factId": "qm-0544",
    "topic": "animacoes",
    "explanation": "Randall possui habilidades de camuflagem comparadas às de um camaleão.",
    "source": {
      "name": "Pixar — Monsters, Inc.",
      "url": "https://www.pixar.com/monsters-inc"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Em Soul, como se chama o lugar onde novas almas recebem personalidade antes de irem para a Terra?",
    "o": [
      "The Great Before",
      "The Great Beyond",
      "You Zone",
      "Soul Station"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0545",
    "level": "dificil",
    "factId": "qm-0545",
    "topic": "animacoes",
    "explanation": "The Great Before é o lugar fantástico onde novas almas desenvolvem personalidades, peculiaridades e interesses antes de ir para a Terra.",
    "source": {
      "name": "Pixar — Soul",
      "url": "https://www.pixar.com/soul"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Quais três diretores são creditados em Homem-Aranha no Aranhaverso?",
    "o": [
      "Bob Persichetti, Peter Ramsey e Rodney Rothman",
      "Phil Lord, Chris Miller e Peter Ramsey",
      "Brad Bird, Pete Docter e Lee Unkrich",
      "Dean DeBlois, Chris Sanders e Kirk DeMicco"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0546",
    "level": "dificil",
    "factId": "qm-0546",
    "topic": "animacoes",
    "explanation": "A Sony Pictures Animation credita Bob Persichetti, Peter Ramsey e Rodney Rothman como diretores do filme.",
    "source": {
      "name": "Sony Pictures Animation — Spider-Man: Into the Spider-Verse",
      "url": "https://www.sonypicturesanimation.com/projects/films/spider-man-spider-verse"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Animações",
    "q": "Quem dirigiu Luca (2021), da Pixar?",
    "o": [
      "Enrico Casarosa",
      "Domee Shi",
      "Dan Scanlon",
      "Peter Sohn"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0547",
    "level": "dificil",
    "factId": "qm-0547",
    "topic": "animacoes",
    "explanation": "Luca foi dirigido por Enrico Casarosa.",
    "source": {
      "name": "Pixar — Our Story",
      "url": "https://www.pixar.com/our-story"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2021"
  },
  {
    "c": "Animações",
    "q": "Quem dirigiu Red: Crescer é uma Fera (2022), da Pixar?",
    "o": [
      "Domee Shi",
      "Enrico Casarosa",
      "Kemp Powers",
      "Angus MacLane"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0548",
    "level": "dificil",
    "factId": "qm-0548",
    "topic": "animacoes",
    "explanation": "Red: Crescer é uma Fera foi dirigido por Domee Shi.",
    "source": {
      "name": "Pixar — Our Story",
      "url": "https://www.pixar.com/our-story"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "2022"
  },
  {
    "c": "Música",
    "q": "Qual banda lançou o álbum Abbey Road?",
    "o": [
      "The Beatles",
      "The Rolling Stones",
      "Pink Floyd",
      "The Who"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0549",
    "level": "facil",
    "factId": "qm-0549",
    "topic": "musica",
    "explanation": "Abbey Road é um álbum dos Beatles, lançado em 1969.",
    "source": {
      "name": "The Beatles — Abbey Road",
      "url": "https://www.thebeatles.com/abbey-road"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Qual cantora ficou mundialmente conhecida com Rolling in the Deep?",
    "o": [
      "Adele",
      "Beyoncé",
      "Rihanna",
      "Alicia Keys"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0550",
    "level": "facil",
    "factId": "qm-0550",
    "topic": "musica",
    "explanation": "Rolling in the Deep foi a faixa de abertura do álbum 21 e ajudou a transformar Adele em estrela internacional.",
    "source": {
      "name": "GRAMMY — Adele",
      "url": "https://www.grammy.com/artists/adele/528/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Qual banda gravou Smells Like Teen Spirit?",
    "o": [
      "Nirvana",
      "Pearl Jam",
      "Soundgarden",
      "Alice in Chains"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0551",
    "level": "facil",
    "factId": "qm-0551",
    "topic": "musica",
    "explanation": "Smells Like Teen Spirit é uma das faixas mais conhecidas do Nirvana e abre o álbum Nevermind.",
    "source": {
      "name": "Nirvana — Nevermind",
      "url": "https://www.nirvana.com/releases-archive/nevermind/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Qual cantora lançou Like a Prayer?",
    "o": [
      "Madonna",
      "Cyndi Lauper",
      "Cher",
      "Whitney Houston"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0552",
    "level": "facil",
    "factId": "qm-0552",
    "topic": "musica",
    "explanation": "Like a Prayer é faixa-título do quarto álbum de estúdio de Madonna.",
    "source": {
      "name": "Madonna — Like a Prayer",
      "url": "https://www.madonna.com/products/like-a-prayer"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Qual artista lançou o álbum Purple Rain?",
    "o": [
      "Prince",
      "David Bowie",
      "Stevie Wonder",
      "Lionel Richie"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0553",
    "level": "facil",
    "factId": "qm-0553",
    "topic": "musica",
    "explanation": "Purple Rain é um dos álbuns mais conhecidos de Prince.",
    "source": {
      "name": "GRAMMY — Prince",
      "url": "https://www.grammy.com/artists/prince/5675/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Qual cantora gravou a versão de Respect que chegou ao topo da Billboard Hot 100 em 1967?",
    "o": [
      "Aretha Franklin",
      "Diana Ross",
      "Tina Turner",
      "Etta James"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0554",
    "level": "facil",
    "factId": "qm-0554",
    "topic": "musica",
    "explanation": "A gravação de Respect por Aretha Franklin chegou ao primeiro lugar da Billboard Hot 100 em 1967.",
    "source": {
      "name": "GRAMMY — Aretha Franklin",
      "url": "https://www.grammy.com/artists/aretha-franklin/11503/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1967"
  },
  {
    "c": "Música",
    "q": "Qual banda lançou o álbum Rumours?",
    "o": [
      "Fleetwood Mac",
      "Eagles",
      "ABBA",
      "Bee Gees"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0555",
    "level": "facil",
    "factId": "qm-0555",
    "topic": "musica",
    "explanation": "Rumours é um álbum do Fleetwood Mac e venceu o GRAMMY de Álbum do Ano.",
    "source": {
      "name": "GRAMMY — Fleetwood Mac",
      "url": "https://www.grammy.com/artists/fleetwood-mac/7759/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Em que ano o álbum Nevermind, do Nirvana, foi lançado?",
    "o": [
      "1991",
      "1989",
      "1993",
      "1995"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0556",
    "level": "medio",
    "factId": "qm-0556",
    "topic": "musica",
    "explanation": "A página oficial do Nirvana registra Nevermind como lançado em 1991.",
    "source": {
      "name": "Nirvana — Nevermind",
      "url": "https://www.nirvana.com/releases-archive/nevermind/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1991"
  },
  {
    "c": "Música",
    "q": "Em que data Abbey Road foi lançado originalmente?",
    "o": [
      "26 de setembro de 1969",
      "8 de maio de 1970",
      "1 de junho de 1967",
      "22 de novembro de 1968"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0557",
    "level": "medio",
    "factId": "qm-0557",
    "topic": "musica",
    "explanation": "Abbey Road foi lançado originalmente em 26 de setembro de 1969.",
    "source": {
      "name": "The Beatles — Abbey Road",
      "url": "https://www.thebeatles.com/abbey-road"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1969"
  },
  {
    "c": "Música",
    "q": "Em que ano o álbum Like a Prayer, de Madonna, foi lançado?",
    "o": [
      "1989",
      "1984",
      "1992",
      "1998"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0558",
    "level": "medio",
    "factId": "qm-0558",
    "topic": "musica",
    "explanation": "Like a Prayer foi lançado em março de 1989.",
    "source": {
      "name": "Madonna — Like a Prayer",
      "url": "https://www.madonna.com/products/like-a-prayer"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1989"
  },
  {
    "c": "Música",
    "q": "Qual alter ego glam rock David Bowie apresentou em 1972?",
    "o": [
      "Ziggy Stardust",
      "Thin White Duke",
      "Major Tom",
      "Aladdin Sane"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0559",
    "level": "medio",
    "factId": "qm-0559",
    "topic": "musica",
    "explanation": "David Bowie apresentou o alter ego Ziggy Stardust em 1972.",
    "source": {
      "name": "GRAMMY — David Bowie",
      "url": "https://www.grammy.com/artists/david-bowie/4819/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1972"
  },
  {
    "c": "Música",
    "q": "Purple Rain foi qual álbum de estúdio de Prince?",
    "o": [
      "Sexto",
      "Quarto",
      "Quinto",
      "Oitavo"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0560",
    "level": "medio",
    "factId": "qm-0560",
    "topic": "musica",
    "explanation": "Purple Rain foi o sexto álbum de estúdio de Prince.",
    "source": {
      "name": "GRAMMY — Purple Rain",
      "url": "https://www.grammy.com/news/princes-masterpiece-purple-rain-record/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Qual prêmio principal Rumours, do Fleetwood Mac, venceu no 20º GRAMMY Awards?",
    "o": [
      "Álbum do Ano",
      "Gravação do Ano",
      "Canção do Ano",
      "Artista Revelação"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0561",
    "level": "medio",
    "factId": "qm-0561",
    "topic": "musica",
    "explanation": "Rumours venceu o GRAMMY de Álbum do Ano na 20ª edição da premiação.",
    "source": {
      "name": "GRAMMY — Fleetwood Mac",
      "url": "https://www.grammy.com/artists/fleetwood-mac/7759/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "20º GRAMMY Awards"
  },
  {
    "c": "Música",
    "q": "Qual álbum de Adele foi seu primeiro a chegar ao topo da parada de álbuns nos Estados Unidos?",
    "o": [
      "21",
      "19",
      "25",
      "30"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0562",
    "level": "medio",
    "factId": "qm-0562",
    "topic": "musica",
    "explanation": "O álbum 21 foi o primeiro disco de Adele a alcançar o topo da parada de álbuns dos Estados Unidos.",
    "source": {
      "name": "GRAMMY — Adele",
      "url": "https://www.grammy.com/artists/adele/528/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Segundo o GRAMMY, quantos instrumentos Prince tocou em seu álbum de estreia For You?",
    "o": [
      "27",
      "17",
      "21",
      "32"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0563",
    "level": "dificil",
    "factId": "qm-0563",
    "topic": "musica",
    "explanation": "No álbum de estreia For You, Prince tocou todos os 27 instrumentos utilizados, segundo a biografia do GRAMMY.",
    "source": {
      "name": "GRAMMY — Prince",
      "url": "https://www.grammy.com/artists/prince/5675/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Qual é o título completo do álbum de 1972 ligado ao alter ego Ziggy Stardust, de David Bowie?",
    "o": [
      "The Rise and Fall of Ziggy Stardust and the Spiders from Mars",
      "Station to Station",
      "Hunky Dory",
      "Diamond Dogs"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0564",
    "level": "dificil",
    "factId": "qm-0564",
    "topic": "musica",
    "explanation": "O álbum de 1972 é The Rise and Fall of Ziggy Stardust and the Spiders from Mars.",
    "source": {
      "name": "GRAMMY — David Bowie e Ziggy Stardust",
      "url": "https://www.grammy.com/news/david-bowies-ziggy-stardust-record/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1972"
  },
  {
    "c": "Música",
    "q": "Quais três músicos aparecem como assinaturas da placa de indução do Nirvana no Rock & Roll Hall of Fame?",
    "o": [
      "Kurt Cobain, Krist Novoselic e Dave Grohl",
      "Kurt Cobain, Dave Grohl e Pat Smear",
      "Krist Novoselic, Dave Grohl e Chad Channing",
      "Kurt Cobain, Krist Novoselic e Pat Smear"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0565",
    "level": "dificil",
    "factId": "qm-0565",
    "topic": "musica",
    "explanation": "A placa de indução do Nirvana exibe as assinaturas de Kurt Cobain, Krist Novoselic e Dave Grohl.",
    "source": {
      "name": "Rock & Roll Hall of Fame — Nirvana",
      "url": "https://rockhall.com/inductees/nirvana/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Quem escreveu originalmente Respect, canção que Aretha Franklin regravou em 1967?",
    "o": [
      "Otis Redding",
      "Sam Cooke",
      "Marvin Gaye",
      "Ray Charles"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0566",
    "level": "dificil",
    "factId": "qm-0566",
    "topic": "musica",
    "explanation": "Respect foi originalmente escrita e gravada por Otis Redding antes da famosa versão de Aretha Franklin.",
    "source": {
      "name": "GRAMMY — Aretha Franklin",
      "url": "https://www.grammy.com/artists/aretha-franklin/11503/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": "1967"
  },
  {
    "c": "Música",
    "q": "Qual álbum dos Beatles foi lançado depois de Abbey Road, embora tenha sido gravado em grande parte antes?",
    "o": [
      "Let It Be",
      "Revolver",
      "Help!",
      "Yellow Submarine"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0567",
    "level": "dificil",
    "factId": "qm-0567",
    "topic": "musica",
    "explanation": "Abbey Road foi o último álbum gravado pelos Beatles, mas Let It Be foi lançado depois, em 1970.",
    "source": {
      "name": "The Beatles — Abbey Road",
      "url": "https://www.thebeatles.com/abbey-road"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  },
  {
    "c": "Música",
    "q": "Purple Rain foi o primeiro álbum de Prince a destacar oficialmente qual banda?",
    "o": [
      "The Revolution",
      "New Power Generation",
      "The Time",
      "Madhouse"
    ],
    "a": 0,
    "t": "geral",
    "id": "qm-0568",
    "level": "dificil",
    "factId": "qm-0568",
    "topic": "musica",
    "explanation": "Purple Rain foi o primeiro álbum de Prince a trazer oficialmente sua banda The Revolution em destaque.",
    "source": {
      "name": "GRAMMY — Purple Rain",
      "url": "https://www.grammy.com/news/princes-masterpiece-purple-rain-record/"
    },
    "verifiedAt": "2026-10-01T00:00:00.000Z",
    "expiresAt": "2027-10-01T00:00:00.000Z",
    "status": "approved",
    "referencePeriod": null
  }
];if(typeof module==="object"&&module.exports)module.exports=questions;else root.QuizQuestions=questions;})(globalThis);
