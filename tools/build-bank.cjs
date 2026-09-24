// Editorial inputs use literal IDs. Rebuilding never allocates or renumbers IDs.
const fs = require('node:fs');
const assert = require('node:assert/strict');
const original = require('../tests/fixtures/stage3-bank.cjs');
const sources = require('../editorial/sources.json');
sources.pinocchio=['Collodi — Pinocchio, texto original','https://www.gutenberg.org/cache/epub/16865/pg16865-images.html'];
sources.russia=['ONU — Países por área, 1999','https://www.un.org/development/desa/pd/sites/www.un.org.development.desa.pd/files/files/documents/2020/Jan/un_1999_6billion.pdf'];
sources.oppenheimer=['Universal — Oppenheimer, elenco e direção','https://www.universalstudios.com/videos/uYPbbksJxIg/'];
const verifiedAt='2026-09-14T00:00:00.000Z';
const rejected = {'medio-atualidades-13':'Critério de fusos e territórios não definido; comparação ambígua.', 'medio-atualidades-17':'Generalização sobre milênios de conservação sem evidência suficiente.', 'dificil-atualidades-13':'Repete o mesmo fato de medio-atualidades-12.'};
// source | short explanation, in original order (including the three rejected entries).
const rows = [
['brasilia','Brasília é a capital federal desde 1960.'],['planets','Marte recebe esse apelido pela aparência avermelhada.'],['independencia','Dom Pedro I proclamou a independência em 7 de setembro de 1822.'],['football','O limite é de onze jogadores por equipe, incluindo o goleiro.'],['whale','A baleia-azul é o maior animal conhecido.'],['mouse','O mouse controla o deslocamento do ponteiro.'],['pinocchio','Na narrativa de Collodi, as mentiras fazem crescer o nariz de Pinóquio.'],[null,'7 × 8 = 56, pela multiplicação de sete grupos de oito.'],['genesis','Gênesis 6 apresenta Noé como o construtor da arca.'],['egypt','A maior parte fica na África; a península do Sinai fica na Ásia.'],['respiration','O oxigênio participa da respiração celular aeróbica.'],['flag','O campo é verde e o losango é amarelo; há também azul e branco.'],['dolphin','Golfinhos são cetáceos e pertencem aos mamíferos.'],['prince','Antoine de Saint-Exupéry é o autor de O Pequeno Príncipe.'],
['marvel','O escudo é um símbolo do Capitão América.'],['eleven','Eleven, também chamada Onze, é a personagem identificada pelo número 011.'],['pixar','Toy Story foi produzido pela Pixar e lançado em 1995.'],['taylor','Shake It Off faz parte do repertório de Taylor Swift.'],['tiktok','O anúncio de 2018 descreve o TikTok como plataforma de vídeos curtos.'],['simpsons','Springfield é a cidade da família Simpson.'],['shrek','Shrek é o ogro verde da franquia da DreamWorks.'],['guitar','O violão convencional tem seis cordas; existem variantes.'],['hashtag','Uma hashtag começa com o sinal #.'],['frozen','Anna e Elsa são irmãs na história de Frozen.'],
['oscars26','One Battle after Another ganhou Melhor Filme.'],['chameleon','Camaleões mudam de cor, inclusive na comunicação e na regulação térmica.'],['threads','A Meta apresentou o Threads em julho de 2023 para conversas por texto.'],['bat','Morcegos realizam voo ativo; outros mamíferos podem planar.'],['oscars26','Michael B. Jordan venceu por Sinners.'],['mercury','O mercúrio é líquido a 20 °C e pressão atmosférica normal.'],['wednesday','Wednesday é o título original da série chamada Wandinha no Brasil.'],['octopus','Dois corações bombeiam para as brânquias e um para o restante do corpo.'],['threads','O Instagram integra os produtos da Meta.'],['uranus','Urano tem o eixo inclinado em cerca de 98 graus.'],
['independencia','A proclamação da independência ocorreu em 1822.'],['respiration','Mitocôndrias produzem ATP pela fosforilação oxidativa em células eucarióticas.'],['russia','A Rússia lidera a classificação da ONU por área terrestre de 1999.'],['html','HTML abrevia HyperText Markup Language.'],['rio','Os Jogos Olímpicos de verão de 2016 foram sediados no Rio de Janeiro, Brasil.'],['peter','Mateus 26 narra as três negações de Pedro.'],[null,'A raiz quadrada principal é 12, pois 12 × 12 = 144.'],['louvre','A Mona Lisa é uma pintura de Leonardo da Vinci.'],['gold','Au é o símbolo químico do ouro.'],['seine','O Sena atravessa Paris.'],['deodoro','Deodoro da Fonseca foi o primeiro presidente brasileiro.'],['adverb','Rapidamente é um advérbio de modo.'],['planets','Júpiter é o maior planeta do Sistema Solar.'],['staff','O pentagrama tem cinco linhas paralelas.'],
['oppenheimer','Christopher Nolan dirigiu Oppenheimer, lançado em 2023.'],['breaking','Walter White usa o pseudônimo Heisenberg.'],['oscars20','Parasita venceu Melhor Filme na cerimônia de 2020.'],['thriller','Michael Jackson lançou Thriller em 1982.'],['chrome','O Google lançou o Chrome em 2008.'],['stark','O lema da Casa Stark é Winter Is Coming.'],['barbie','Margot Robbie interpreta a Barbie estereotipada no filme de 2023.'],['queen','Bohemian Rhapsody foi gravada pelo Queen.'],['gif','GIF significa Graphics Interchange Format.'],['succession','Succession acompanha a família Roy e a Waystar Royco.'],
['oscars26','Wagner Moura foi indicado por The Secret Agent.'],['oscars26','O Agente Secreto recebeu a indicação internacional pelo Brasil.'],['dear','Dear Algo foi anunciado pela Meta em fevereiro de 2026.'],[null,'Rejeitada.'],['webb','O James Webb divulgou seu primeiro conjunto de imagens coloridas em julho de 2022.'],['skin','A pele é o maior órgão do corpo humano.'],['oscars26','Golden, de KPop Demon Hunters, venceu Canção Original.'],[null,'Rejeitada.'],['https','HTTPS usa TLS para proteger a comunicação HTTP em trânsito.'],['hummingbird','Experimentos documentaram o voo para trás em beija-flores.'],
['versailles','Versalhes estabeleceu as condições de paz com a Alemanha em 1919.'],['neutron','O nêutron possui carga elétrica total nula.'],['bering','O estreito de Bering fica entre a Sibéria e o Alasca.'],['web','Tim Berners-Lee propôs a Web no CERN em 1989.'],['crime','Crime e Castigo foi escrito por Fiódor Dostoiévski.'],['acts','Atos 11:26 situa em Antioquia o primeiro uso do nome cristãos para os discípulos.'],[null,'2⁵ = 32 e 3³ = 27; a soma é 59.'],['carbon','O número atômico 6 corresponde aos seis prótons do carbono.'],['constantinople','Constantinopla foi tomada pelos otomanos em 1453.'],['descartes','O cogito é associado ao filósofo René Descartes.'],['astana','A capital se chama Astana na referência de setembro de 2026.'],['rna','O RNA transportador leva aminoácidos ao ribossomo.'],['louvre','Leonardo empregou o sfumato para suavizar contornos e transições.'],['proxima','Proxima Centauri é a estrela mais próxima do Sol.'],
['bong','Bong Joon-ho dirigiu os dois filmes.'],['sopranos','James Gandolfini interpretou Tony Soprano.'],['vague','Godard e Truffaut são nomes centrais da Nouvelle Vague.'],['miles','Kind of Blue, de 1959, é uma referência do jazz modal.'],['bgp','BGP é o protocolo de roteamento entre sistemas autônomos descrito na RFC 4271.'],['twin','David Lynch criou Twin Peaks com Mark Frost.'],['samurai','Os Sete Samurais foi adaptado como Os Sete Magníficos em 1960.'],['rite','Igor Stravinsky compôs A Sagração da Primavera.'],['javascript','Brendan Eich criou JavaScript em 1995.'],['dark','Winden é a cidade fictícia de Dark.'],
['oscars26','Paul Thomas Anderson ganhou Direção.'],['oscars26','Sinners ganhou Fotografia.'],['oscars26','Jessie Buckley venceu por Hamnet.'],[null,'Rejeitada.'],['hydrogen','Hidrogênio é o elemento químico mais abundante no universo.'],['prefixes','O prefixo femto representa 10⁻¹⁵.'],['oscars26','Avatar: Fire and Ash ganhou Efeitos Visuais.'],['hyoid','O hioide é suspenso por músculos e ligamentos, sem articulação óssea direta.'],['dns','DNS permite consultar registros que associam nomes a endereços IP.'],['troposphere','A troposfera é a camada mais baixa e concentra a maior parte do tempo meteorológico.']
];
assert.equal(rows.length,102);
const corrections={
 'facil-g-3':'No futebol de campo, qual é o número máximo de jogadores de cada equipe em campo, incluindo o goleiro, pela regra IFAB consultada em setembro de 2026?',
 'facil-g-5':'Qual periférico move o ponteiro quando é deslizado sobre uma superfície?',
 'facil-g-8':'Segundo Gênesis 6, quem construiu a arca antes do dilúvio?',
 'facil-g-9':'Em qual continente fica a maior parte do território do Egito?',
 'facil-g-11':'Quais são, respectivamente, as cores do campo retangular e do losango da bandeira brasileira?',
 'facil-entretenimento-1':'Na primeira temporada de Stranger Things (2016), qual personagem é identificada pelo número 011?',
 'facil-entretenimento-4':'Qual destas plataformas foi unificada ao musical.ly em 2018 para compartilhar vídeos curtos?',
 'facil-atualidades-11':'Qual destes animais é conhecido por mudar de cor?',
 'facil-atualidades-12':'Qual aplicativo a Meta apresentou em julho de 2023 para conversas públicas por texto?',
 'facil-atualidades-15':'Qual destes metais é líquido a 20 °C e pressão de uma atmosfera?',
 'facil-atualidades-18':'Na apresentação do Threads pela Meta em julho de 2023, o Instagram integra os produtos de qual empresa?',
 'medio-g-2':'Na classificação da ONU por área terrestre de 1999, qual país ocupa o primeiro lugar?',
 'medio-g-4':'Em qual país foram realizados os Jogos Olímpicos de verão de 2016?',
 'medio-g-5':'Segundo Mateus 26, qual apóstolo negou Jesus três vezes?',
 'medio-g-6':'Qual é a raiz quadrada principal de 144?',
 'medio-g-11':"Na frase 'Ela respondeu rapidamente', qual é a classe gramatical de 'rapidamente'?",
 'medio-entretenimento-6':'Qual atriz interpretou a Barbie estereotipada no filme Barbie (2023)?',
 'medio-atualidades-12':'Como se chama o recurso anunciado pela Meta em fevereiro de 2026 para pedir temporariamente mais ou menos temas no feed do Threads?',
 'medio-atualidades-14':'Qual telescópio espacial divulgou seu primeiro conjunto de imagens científicas coloridas em julho de 2022?',
 'medio-atualidades-18':'Qual destas siglas representa HTTP com proteção TLS na comunicação web?',
 'dificil-g-0':'Qual tratado assinado em 1919 estabeleceu as condições de paz entre a Alemanha e as potências aliadas?',
 'dificil-g-5':'Segundo Atos 11:26, em qual cidade os discípulos foram chamados cristãos pela primeira vez?',
 'dificil-g-10':'Em setembro de 2026, qual é a capital do Cazaquistão?',
 'dificil-entretenimento-6':'Qual filme de Akira Kurosawa foi adaptado no faroeste Os Sete Magníficos (1960)?',
 'dificil-atualidades-12':'Quem venceu o Oscar de Melhor Atriz na cerimônia de 2026 por Hamnet?'
};
const topicByCategory={'Geografia':'geografia','Ciências':'ciencia','Ciência':'ciencia','História':'historia','Futebol':'futebol','Tecnologia':'tecnologia','Matemática':'matematica','Bíblia':'biblia','Português':'portugues','Música':'musica','Cinema':'filmes','Filmes':'filmes','Séries':'series','Internet':'internet','Curiosidades':'curiosidades','Atualidades':'atualidades','Esportes':'esportes','Literatura':'geral','Arte':'artistas','Artes':'artistas'};
const topicOverrides={'facil-g-6':'geral','facil-g-11':'cultura-brasileira','facil-entretenimento-2':'animacoes','facil-entretenimento-6':'animacoes','facil-entretenimento-9':'animacoes','facil-entretenimento-3':'musica','medio-entretenimento-3':'musica','medio-entretenimento-6':'filmes','dificil-g-12':'artistas'};
Object.assign(topicByCategory,{'Animais':'curiosidades','Brasil':'cultura-brasileira','Cultura':'geral','Atualidades 2026':'atualidades','Cinema 2026':'atualidades','Internet 2026':'atualidades','Oscar 2026':'atualidades'});
topicOverrides['facil-g-3']='futebol';
const relevel={'dificil-g-1':'medio','dificil-g-6':'medio','dificil-g-7':'medio','dificil-atualidades-18':'medio','dificil-atualidades-19':'medio','medio-g-6':'facil','medio-g-12':'facil'};
function enrich(q,key,explanation){
 const source=key?{name:sources[key][0],url:sources[key][1]}:null;
 return {...q,explanation,source,verifiedAt,expiresAt:q.topic==='atualidades'?'2026-12-14T00:00:00.000Z':'2027-09-14T00:00:00.000Z',status:'approved',referencePeriod:q.q.match(/(?:19|20)\d{2}/)?.[0]||null};
}
const audit=[], bank=[];
original.forEach((q,i)=>{
 if(rejected[q.id]){audit.push({id:q.id,decision:'rejected',reason:rejected[q.id],original:q});return;}
 const changed=!!corrections[q.id]||!!relevel[q.id];
 const next={...q,q:corrections[q.id]||q.q,level:relevel[q.id]||q.level,topic:topicOverrides[q.id]||topicByCategory[q.c]||({'Natureza':'ciencia','Conhecimentos gerais':'geral','Cultura brasileira':'cultura-brasileira','Filosofia':'geral','Redes sociais':'internet','Animações':'animacoes','Biologia':'ciencia','Química':'ciencia','Astronomia':'ciencia','Física':'ciencia'})[q.c]};
 assert.ok(next.topic,`${q.id}: unmapped ${q.c}`);
 if(q.id==='facil-g-11'){next.o=['Azul e branco','Verde e amarelo','Amarelo e azul','Branco e verde'];}
 if(q.id==='medio-g-11'){next.o=['Advérbio','Substantivo','Adjetivo','Verbo'];}
 bank.push(enrich(next,...rows[i]));
 audit.push({id:q.id,decision:changed?'corrected':'approved',reason:changed?'Enunciado delimitado e/ou dificuldade revista; resposta e três distratores conferidos.':'Resposta e três distratores conferidos; explicação e verificação acrescentadas.',previousLevel:q.level,level:next.level,previousQuestion:q.q,question:next.q,correctAnswer:next.o[next.a],sourceKey:rows[i][0],verifiedAt});
});
const additions=require('../editorial/additions.json');
for(let start=0;start<additions.length;start+=5){
 const batch=additions.slice(start,start+5).map(q=>enrich({...q,factId:q.id,c:q.topic},q.sourceKey,q.explanation));
 for(const q of batch){delete q.sourceKey;assert.ok(!bank.some(x=>x.id===q.id));assert.equal(q.o.length,4);assert.equal(new Set(q.o).size,4);assert.ok(q.explanation);assert.ok(q.a>=0&&q.a<4);}
 bank.push(...batch);
 fs.writeFileSync(`editorial/batch-${1+start/5}.json`,JSON.stringify({verifiedAt,status:'approved',ids:batch.map(q=>q.id),levels:batch.map(q=>q.level),checks:['quatro alternativas distintas','uma resposta correta revisada','explicação','fonte quando aplicável','ID literal novo']},null,2)+'\n');
}
fs.writeFileSync('questions.js','// Permanent IDs: editorial review in editorial/. Never renumber.\n(function(root){\n const questions = '+JSON.stringify(bank,null,2)+';\n if(typeof module === "object" && module.exports) module.exports=questions; else root.QuizQuestions=questions;\n})(globalThis);\n');
fs.writeFileSync('editorial/review.json',JSON.stringify(audit,null,2)+'\n');
fs.writeFileSync('editorial/sources.json',JSON.stringify(sources,null,2)+'\n');
const counts={reviewed:original.length,approvedUnchanged:audit.filter(x=>x.decision==='approved').length,corrected:audit.filter(x=>x.decision==='corrected').length,rejected:Object.keys(rejected).length,added:additions.length,approvedTotal:bank.length,expired:bank.filter(q=>Date.parse(q.expiresAt)<=Date.parse(verifiedAt)).length,levels:{},topics:{}};
for(const q of bank){counts.levels[q.level]=(counts.levels[q.level]||0)+1;counts.topics[q.topic]=(counts.topics[q.topic]||0)+1;}
fs.writeFileSync('editorial/summary.json',JSON.stringify(counts,null,2)+'\n');
console.log(counts);
