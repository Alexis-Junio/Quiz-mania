// IDs are permanent literals, including legacy mappings. Never derive IDs from array order.
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
    "factId": "facil-g-0"
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
    "factId": "facil-g-1"
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
    "factId": "facil-g-2"
  },
  {
    "c": "Esportes",
    "q": "Quantos jogadores cada time tem em campo no futebol?",
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
    "factId": "facil-g-3"
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
    "factId": "facil-g-4"
  },
  {
    "c": "Tecnologia",
    "q": "Qual aparelho é usado para mover o ponteiro do computador?",
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
    "factId": "facil-g-5"
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
    "factId": "facil-g-6"
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
    "factId": "facil-g-7"
  },
  {
    "c": "Bíblia",
    "q": "Quem construiu uma arca antes do grande dilúvio?",
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
    "factId": "facil-g-8"
  },
  {
    "c": "Geografia",
    "q": "Em qual continente fica o Egito?",
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
    "factId": "facil-g-9"
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
    "factId": "facil-g-10"
  },
  {
    "c": "Brasil",
    "q": "Quais são as cores principais da bandeira brasileira?",
    "o": [
      "Azul e branco",
      "Verde e amarelo",
      "Vermelho e azul",
      "Verde e vermelho"
    ],
    "a": 1,
    "t": "geral",
    "id": "facil-g-11",
    "level": "facil",
    "factId": "facil-g-11"
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
    "factId": "facil-g-12"
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
    "factId": "facil-g-13"
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
    "factId": "facil-entretenimento-0"
  },
  {
    "t": "entretenimento",
    "c": "Séries",
    "q": "Em Stranger Things, qual é o nome da garota com poderes?",
    "o": [
      "Max",
      "Robin",
      "Nancy",
      "Eleven"
    ],
    "a": 3,
    "id": "facil-entretenimento-1",
    "level": "facil",
    "factId": "facil-entretenimento-1"
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
    "factId": "facil-entretenimento-2"
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
    "factId": "facil-entretenimento-3"
  },
  {
    "t": "entretenimento",
    "c": "Internet",
    "q": "Qual plataforma é conhecida por vídeos curtos em formato vertical?",
    "o": [
      "LinkedIn",
      "TikTok",
      "Wikipedia",
      "Dropbox"
    ],
    "a": 1,
    "id": "facil-entretenimento-4",
    "level": "facil",
    "factId": "facil-entretenimento-4"
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
    "factId": "facil-entretenimento-5"
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
    "factId": "facil-entretenimento-6"
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
    "factId": "facil-entretenimento-7"
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
    "factId": "facil-entretenimento-8"
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
    "factId": "facil-entretenimento-9"
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
    "factId": "facil-atualidades-10"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual animal consegue mudar de cor para se camuflar?",
    "o": [
      "Camaleão",
      "Pinguim",
      "Golfinho",
      "Avestruz"
    ],
    "a": 0,
    "id": "facil-atualidades-11",
    "level": "facil",
    "factId": "facil-atualidades-11"
  },
  {
    "t": "atualidades",
    "c": "Internet",
    "q": "Qual aplicativo da Meta é focado em conversas públicas por texto?",
    "o": [
      "Threads",
      "Pinterest",
      "Telegram",
      "Snapchat"
    ],
    "a": 0,
    "id": "facil-atualidades-12",
    "level": "facil",
    "factId": "facil-atualidades-12"
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
    "factId": "facil-atualidades-13"
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
    "factId": "facil-atualidades-14"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual metal é líquido em temperatura ambiente?",
    "o": [
      "Ferro",
      "Mercúrio",
      "Cobre",
      "Alumínio"
    ],
    "a": 1,
    "id": "facil-atualidades-15",
    "level": "facil",
    "factId": "facil-atualidades-15"
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
    "factId": "facil-atualidades-16"
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
    "factId": "facil-atualidades-17"
  },
  {
    "t": "atualidades",
    "c": "Internet",
    "q": "Qual empresa é dona do Instagram?",
    "o": [
      "Apple",
      "Meta",
      "Microsoft",
      "Netflix"
    ],
    "a": 1,
    "id": "facil-atualidades-18",
    "level": "facil",
    "factId": "facil-atualidades-18"
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
    "factId": "facil-atualidades-19"
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
    "factId": "medio-g-0"
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
    "factId": "medio-g-1"
  },
  {
    "c": "Geografia",
    "q": "Qual é o maior país do mundo em área territorial?",
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
    "factId": "medio-g-2"
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
    "factId": "medio-g-3"
  },
  {
    "c": "Esportes",
    "q": "Em qual país foram realizados os Jogos Olímpicos de 2016?",
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
    "factId": "medio-g-4"
  },
  {
    "c": "Bíblia",
    "q": "Qual apóstolo negou Jesus três vezes?",
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
    "factId": "medio-g-5"
  },
  {
    "c": "Matemática",
    "q": "Qual é a raiz quadrada de 144?",
    "o": [
      "10",
      "11",
      "12",
      "14"
    ],
    "a": 2,
    "t": "geral",
    "id": "medio-g-6",
    "level": "medio",
    "factId": "medio-g-6"
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
    "factId": "medio-g-7"
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
    "factId": "medio-g-8"
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
    "factId": "medio-g-9"
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
    "factId": "medio-g-10"
  },
  {
    "c": "Português",
    "q": "Qual destas palavras é um advérbio?",
    "o": [
      "Rapidamente",
      "Bonito",
      "Cadeira",
      "Cantar"
    ],
    "a": 0,
    "t": "geral",
    "id": "medio-g-11",
    "level": "medio",
    "factId": "medio-g-11"
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
    "level": "medio",
    "factId": "medio-g-12"
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
    "factId": "medio-g-13"
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
    "factId": "medio-entretenimento-0"
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
    "factId": "medio-entretenimento-1"
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
    "factId": "medio-entretenimento-2"
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
    "factId": "medio-entretenimento-3"
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
    "factId": "medio-entretenimento-4"
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
    "factId": "medio-entretenimento-5"
  },
  {
    "t": "entretenimento",
    "c": "Filmes",
    "q": "Qual atriz interpretou Barbie no filme de 2023?",
    "o": [
      "Emma Stone",
      "Margot Robbie",
      "Florence Pugh",
      "Saoirse Ronan"
    ],
    "a": 1,
    "id": "medio-entretenimento-6",
    "level": "medio",
    "factId": "medio-entretenimento-6"
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
    "factId": "medio-entretenimento-7"
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
    "factId": "medio-entretenimento-8"
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
    "factId": "medio-entretenimento-9"
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
    "factId": "medio-atualidades-10"
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
    "factId": "medio-atualidades-11"
  },
  {
    "t": "atualidades",
    "c": "Internet 2026",
    "q": "Como se chama o recurso do Threads que permite pedir temporariamente mais ou menos temas no feed?",
    "o": [
      "Feed Control",
      "Dear Algo",
      "Topic Tune",
      "My Trends"
    ],
    "a": 1,
    "id": "medio-atualidades-12",
    "level": "medio",
    "factId": "threads-dear-algo-platform"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual país tem mais fusos horários quando territórios ultramarinos são incluídos?",
    "o": [
      "Rússia",
      "Estados Unidos",
      "França",
      "China"
    ],
    "a": 2,
    "id": "medio-atualidades-13",
    "level": "medio",
    "factId": "medio-atualidades-13"
  },
  {
    "t": "atualidades",
    "c": "Ciência",
    "q": "Qual telescópio espacial começou a divulgar imagens científicas em 2022?",
    "o": [
      "Hubble",
      "James Webb",
      "Kepler",
      "Spitzer"
    ],
    "a": 1,
    "id": "medio-atualidades-14",
    "level": "medio",
    "factId": "medio-atualidades-14"
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
    "factId": "medio-atualidades-15"
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
    "factId": "medio-atualidades-16"
  },
  {
    "t": "atualidades",
    "c": "Curiosidades",
    "q": "Qual substância natural é conhecida por durar milhares de anos sem estragar quando bem armazenada?",
    "o": [
      "Leite",
      "Mel",
      "Pão",
      "Manteiga"
    ],
    "a": 1,
    "id": "medio-atualidades-17",
    "level": "medio",
    "factId": "medio-atualidades-17"
  },
  {
    "t": "atualidades",
    "c": "Internet",
    "q": "Qual protocolo seguro aparece no início da maioria dos endereços modernos da web?",
    "o": [
      "FTP",
      "HTTP",
      "HTTPS",
      "SMTP"
    ],
    "a": 2,
    "id": "medio-atualidades-18",
    "level": "medio",
    "factId": "medio-atualidades-18"
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
    "factId": "medio-atualidades-19"
  },
  {
    "c": "História",
    "q": "Qual tratado encerrou oficialmente a Primeira Guerra Mundial?",
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
    "factId": "dificil-g-0"
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
    "level": "dificil",
    "factId": "dificil-g-1"
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
    "factId": "dificil-g-2"
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
    "factId": "dificil-g-3"
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
    "factId": "dificil-g-4"
  },
  {
    "c": "Bíblia",
    "q": "Em qual cidade os seguidores de Jesus foram chamados cristãos pela primeira vez?",
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
    "factId": "dificil-g-5"
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
    "level": "dificil",
    "factId": "dificil-g-6"
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
    "level": "dificil",
    "factId": "dificil-g-7"
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
    "factId": "dificil-g-8"
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
    "factId": "dificil-g-9"
  },
  {
    "c": "Geografia",
    "q": "Qual é a capital do Cazaquistão?",
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
    "factId": "dificil-g-10"
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
    "factId": "dificil-g-11"
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
    "factId": "dificil-g-12"
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
    "factId": "dificil-g-13"
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
    "factId": "dificil-entretenimento-0"
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
    "factId": "dificil-entretenimento-1"
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
    "factId": "dificil-entretenimento-2"
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
    "factId": "dificil-entretenimento-3"
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
    "factId": "dificil-entretenimento-4"
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
    "factId": "dificil-entretenimento-5"
  },
  {
    "t": "entretenimento",
    "c": "Cinema",
    "q": "Qual filme de Akira Kurosawa inspirou diretamente Os Sete Magníficos?",
    "o": [
      "Rashomon",
      "Yojimbo",
      "Os Sete Samurais",
      "Trono Manchado de Sangue"
    ],
    "a": 2,
    "id": "dificil-entretenimento-6",
    "level": "dificil",
    "factId": "dificil-entretenimento-6"
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
    "factId": "dificil-entretenimento-7"
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
    "factId": "dificil-entretenimento-8"
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
    "factId": "dificil-entretenimento-9"
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
    "factId": "dificil-atualidades-10"
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
    "factId": "dificil-atualidades-11"
  },
  {
    "t": "atualidades",
    "c": "Oscar 2026",
    "q": "Quem venceu Melhor Atriz em 2026 por Hamnet?",
    "o": [
      "Emma Stone",
      "Jessie Buckley",
      "Rose Byrne",
      "Renate Reinsve"
    ],
    "a": 1,
    "id": "dificil-atualidades-12",
    "level": "dificil",
    "factId": "dificil-atualidades-12"
  },
  {
    "t": "atualidades",
    "c": "Internet 2026",
    "q": "O recurso Dear Algo foi lançado em qual plataforma?",
    "o": [
      "Bluesky",
      "Threads",
      "TikTok",
      "Reddit"
    ],
    "a": 1,
    "id": "dificil-atualidades-13",
    "level": "dificil",
    "factId": "threads-dear-algo-platform"
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
    "factId": "dificil-atualidades-14"
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
    "factId": "dificil-atualidades-15"
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
    "factId": "dificil-atualidades-16"
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
    "factId": "dificil-atualidades-17"
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
    "level": "dificil",
    "factId": "dificil-atualidades-18"
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
    "level": "dificil",
    "factId": "dificil-atualidades-19"
  }
];
  if(typeof module === "object" && module.exports) module.exports = questions;
  else root.QuizQuestions = questions;
})(globalThis);
