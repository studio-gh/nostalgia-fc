/**
 * NOSTALGIA FC - BANCO DE DADOS OFICIAL DE JOGADORES, TIMES E SINERGIAS (V12)
 * * Escala de Ratings Desinflacionada:
 * - Tier GOAT: 95 - 99 (Gênios absolutos e lendas intocáveis)
 * - Tier Lendário: 91 - 94 (Jogadores históricos de nível mundial)
 * - Tier Elite: 87 - 90 (Craques internacionais e protagonistas de ligas)
 * - Tier Muito Bom: 83 - 86 (Titulares indiscutíveis de esquadrões campeões)
 * - Tier Bom: 79 - 82 (Operários táticos e jogadores de elenco clássico)
 */

// Sinergias históricas (Duplas e Trios Dinâmicos que ativam bônus de +3 OVR)
export const DYNAMIC_DUOS = [
  // Duplas brasileiras clássicas
  { players: ["Romário", "Bebeto"], description: "Dupla do Tetra 94" },
  { players: ["Ronaldo", "Ronaldinho Gaúcho"], description: "Dupla dos R's Pentacampeões" },
  { players: ["Müller", "Palhinha"], description: "Dupla dinâmica do São Paulo 92/93" },
  { players: ["Edmundo", "Evair"], description: "Ataque demolidor do Palmeiras 93/94" },
  { players: ["Djalminha", "Luizão"], description: "Sintonia ofensiva do Palmeiras 1996" },
  { players: ["Alex", "Aristizábal"], description: "Criatividade e oportunismo na Tríplice Coroa 2003" },
  { players: ["Marcelinho Carioca", "Edílson"], description: "Ataque infernal do Corinthians 98/99" },
  { players: ["Carlos Germano", "Mauro Galvão"], description: "Muralha do Vasco 98" },
  
  // Duplas internacionais clássicas
  { players: ["Andy Cole", "Dwight Yorke"], description: "Ataque Sincronizado do Man United 99" },
  { players: ["Dennis Bergkamp", "Thierry Henry"], description: "Classe e velocidade nos Invencíveis do Arsenal" },
  { players: ["Paolo Maldini", "Alessandro Nesta"], description: "A maior muralha defensiva da Itália" },
  { players: ["Ruud Gullit", "Marco van Basten"], description: "Conexão Milanesa e Holandesa dos anos 90" },
  { players: ["Zinedine Zidane", "Ronaldo"], description: "Dupla de Galácticos do Real Madrid 2002" },
  { players: ["Steven Gerrard", "Fernando Torres"], description: "Sintonia letal em Anfield 2009" },
  { players: ["Andriy Shevchenko", "Filippo Inzaghi"], description: "Faro de gol implacável no Milan 2003" },
  { players: ["Hernán Crespo", "Juan Sebastián Verón"], description: "Aliança Argentina no Parma de 99 e Lazio 2000" },
  { players: ["Francesco Totti", "Gabriel Batistuta"], description: "Reis de Roma no Scudetto de 2001" },
  { players: ["Claudio López", "Gaizka Mendieta"], description: "Sinergia ofensiva do Valencia de 2000" },
  { players: ["Frank Lampard", "Didier Drogba"], description: "Espinha dorsal de ouro em Stamford Bridge" },
  { players: ["Xavi", "Andrés Iniesta"], description: "Os cérebros do Tiki-Taka do Barcelona" },
  { players: ["Diego Maradona", "Careca"], description: "A dupla mágica do Napoli campeão" },
  { players: ["Arjen Robben", "Franck Ribéry"], description: "Robbery - As asas voadoras do Bayern" }
];

// Base de esquadrões clássicos unificada (incluindo os 28 novos esquadrões e os clássicos anteriores)
export const HISTORIC_CLUBS = [
  // ==================== CAMPEONATO BRASILEIRO ====================
  {
    id: "vasco_1998",
    name: "Vasco",
    era: "1998",
    country: "Brasil",
    achievement: "Campeão da Libertadores no ano do Centenário",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Carlos Germano", displayName: "Carlos Germano", position: "GK", ovr: 85, nation: "Brasil", trait: "Paredão clássico" },
        { name: "Mauro Galvão", displayName: "Mauro Galvão", position: "DEF", ovr: 88, nation: "Brasil", trait: "Liderança de classe" },
        { name: "Odvan", displayName: "Odvan", position: "DEF", ovr: 81, nation: "Brasil", trait: "Zagueiro-zagueiro" },
        { name: "Felipe", displayName: "Felipe", position: "DEF", ovr: 85, nation: "Brasil", trait: "Drible refinado na lateral" },
        { name: "Luiz Carlos Winck", displayName: "L. C. Winck", position: "DEF", ovr: 81, nation: "Brasil", trait: "Cruzamento preciso" },
        { name: "Luisinho", displayName: "Luisinho", position: "MID", ovr: 82, nation: "Brasil", trait: "Operário tático" },
        { name: "Nasa", displayName: "Nasa", position: "MID", ovr: 80, nation: "Brasil", trait: "Marcador implacável" },
        { name: "Juninho Pernambucano", displayName: "J. Pernambucano", position: "MID", ovr: 89, nation: "Brasil", trait: "Especialista em faltas" },
        { name: "Ramon", displayName: "Ramon", position: "MID", ovr: 84, nation: "Brasil", trait: "Meia-atacante técnico" },
        { name: "Donizete", displayName: "Donizete Pantera", position: "ATK", ovr: 85, nation: "Brasil", trait: "Velocidade explosiva" },
        { name: "Luizão", displayName: "Luizão", position: "ATK", ovr: 86, nation: "Brasil", trait: "Faro de gol na área" }
      ],
      bench: [
        { name: "Márcio", displayName: "Márcio", position: "GK", ovr: 78, nation: "Brasil", trait: "Suplente confiável" },
        { name: "Alex Pinho", displayName: "Alex Pinho", position: "DEF", ovr: 78, nation: "Brasil", trait: "Reserva de força" },
        { name: "Válber", displayName: "Válber", position: "DEF", ovr: 81, nation: "Brasil", trait: "Polivalente defensivo" },
        { name: "Pedrinho", displayName: "Pedrinho", position: "MID", ovr: 84, nation: "Brasil", trait: "Meia canhoto habilidoso" },
        { name: "Nelson", displayName: "Nelson", position: "MID", ovr: 79, nation: "Brasil", trait: "Força no desarme" },
        { name: "Mauricinho", displayName: "Mauricinho", position: "ATK", ovr: 80, nation: "Brasil", trait: "Agilidade pelas pontas" }
      ]
    }
  },
  {
    id: "sao_paulo_1992",
    name: "São Paulo",
    era: "1992",
    country: "Brasil",
    achievement: "Bicampeão Mundial da Era Telê Santana",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Zetti", displayName: "Zetti", position: "GK", ovr: 89, nation: "Brasil", trait: "Elasticidade impressionante" },
        { name: "Adilson", displayName: "Adilson", position: "DEF", ovr: 82, nation: "Brasil", trait: "Segurança aérea" },
        { name: "Ronaldão", displayName: "Ronaldão", position: "DEF", ovr: 83, nation: "Brasil", trait: "Imponência física" },
        { name: "Cafu", displayName: "Cafu", position: "DEF", ovr: 92, nation: "Brasil", trait: "Fôlego interminável" },
        { name: "Ronaldo Luís", displayName: "Ronaldo Luís", position: "DEF", ovr: 81, nation: "Brasil", trait: "Salva-vidas tático" },
        { name: "Pintado", displayName: "Pintado", position: "MID", ovr: 82, nation: "Brasil", trait: "Carrapatos do meio-campo" },
        { name: "Dinho", displayName: "Dinho", position: "MID", ovr: 83, nation: "Brasil", trait: "Combate xerifão" },
        { name: "Raí", displayName: "Raí", position: "MID", ovr: 92, nation: "Brasil", trait: "Lenda majestosa do Morumbi" },
        { name: "Palhinha", displayName: "Palhinha", position: "MID", ovr: 86, nation: "Brasil", trait: "Infiltração genial" },
        { name: "Müller", displayName: "Müller", position: "ATK", ovr: 89, nation: "Brasil", trait: "Mestre dos espaços" },
        { name: "Elivélton", displayName: "Elivélton", position: "ATK", ovr: 83, nation: "Brasil", trait: "Velocidade na ala" }
      ],
      bench: [
        { name: "Marcos", displayName: "Marcos GK", position: "GK", ovr: 77, nation: "Brasil", trait: "Pronto para entrar" },
        { name: "Válber", displayName: "Válber", position: "DEF", ovr: 83, nation: "Brasil", trait: "Técnica apurada de saída" },
        { name: "Ivan", displayName: "Ivan", position: "DEF", ovr: 79, nation: "Brasil", trait: "Apoio sólido" },
        { name: "Toninho Cerezo", displayName: "Toninho Cerezo", position: "MID", ovr: 88, nation: "Brasil", trait: "Classe lendária veterana" },
        { name: "Catê", displayName: "Catê", position: "ATK", ovr: 80, nation: "Brasil", trait: "Velocidade pura" }
      ]
    }
  },

  // ==================== SEÇÃO ITALIANA (SÉRIE A RETRÔ) ====================
  {
    id: "napoli_1990",
    name: "Napoli",
    era: "1990",
    country: "Itália",
    achievement: "Vencedor do histórico Scudetto de 1990",
    lineup: {
      formation: "4-3-3",
      players: [
        { name: "Giuliano Giuliani", displayName: "G. Giuliani", position: "GK", ovr: 83, nation: "Itália", trait: "Frieza debaixo dos postes" },
        { name: "Ciro Ferrara", displayName: "Ciro Ferrara", position: "DEF", ovr: 88, nation: "Itália", trait: "Xerife napolitano" },
        { name: "Giancarlo Corradini", displayName: "G. Corradini", position: "DEF", ovr: 81, nation: "Itália", trait: "Tackle limpo" },
        { name: "Alessandro Renica", displayName: "A. Renica", position: "DEF", ovr: 82, nation: "Itália", trait: "Excelente posicionamento" },
        { name: "Giovanni Francini", displayName: "G. Francini", position: "DEF", ovr: 82, nation: "Itália", trait: "Lateral equilibrado" },
        { name: "Alemão", displayName: "Alemão", position: "MID", ovr: 87, nation: "Brasil", trait: "Combustão no meio" },
        { name: "Fernando De Napoli", displayName: "F. De Napoli", position: "MID", ovr: 84, nation: "Itália", trait: "Motorzinho incansável" },
        { name: "Massimo Crippa", displayName: "M. Crippa", position: "MID", ovr: 81, nation: "Itália", trait: "Pulmão do time" },
        { name: "Diego Maradona", displayName: "Diego Maradona", position: "MID", ovr: 98, nation: "Argentina", trait: "D10S - Genialidade incomparável" },
        { name: "Careca", displayName: "Careca", position: "ATK", ovr: 92, nation: "Brasil", trait: "Atacante de classe mundial" },
        { name: "Andrea Carnevale", displayName: "A. Carnevale", position: "ATK", ovr: 83, nation: "Itália", trait: "Finalizador oportunista" }
      ],
      bench: [
        { name: "Raffaele Di Fusco", displayName: "Di Fusco", position: "GK", ovr: 77, nation: "Itália", trait: "Segurança de banco" },
        { name: "Tebaldo Bigliardi", displayName: "T. Bigliardi", position: "DEF", ovr: 79, nation: "Itália", trait: "Zagueiro reserva" },
        { name: "Gianfranco Zola", displayName: "G. Zola", position: "MID", ovr: 86, nation: "Itália", trait: "Pupilo do Diego" },
        { name: "Luca Fusi", displayName: "Luca Fusi", position: "MID", ovr: 80, nation: "Itália", trait: "Apoio tático" },
        { name: "Maurizio Neri", displayName: "M. Neri", position: "ATK", ovr: 78, nation: "Itália", trait: "Opção para o ataque" }
      ]
    }
  },
  {
    id: "lazio_2000",
    name: "Lazio",
    era: "2000",
    country: "Itália",
    achievement: "Campeã Italiana e esquadrão milionário de Eriksson",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Luca Marchegiani", displayName: "L. Marchegiani", position: "GK", ovr: 84, nation: "Itália", trait: "Goleiro de alto nível" },
        { name: "Alessandro Nesta", displayName: "Alessandro Nesta", position: "DEF", ovr: 93, nation: "Itália", trait: "Elegância insuperável defensiva" },
        { name: "Siniša Mihajlović", displayName: "S. Mihajlović", position: "DEF", ovr: 88, nation: "Iugoslávia", trait: "Canhão nas cobranças de falta" },
        { name: "Giuseppe Pancaro", displayName: "G. Pancaro", position: "DEF", ovr: 81, nation: "Itália", trait: "Firmeza na marcação" },
        { name: "Paolo Negro", displayName: "P. Negro", position: "DEF", ovr: 81, nation: "Itália", trait: "Lateral focado" },
        { name: "Matías Almeyda", displayName: "M. Almeyda", position: "MID", ovr: 85, nation: "Argentina", trait: "Cão de guarda implacável" },
        { name: "Diego Simeone", displayName: "Diego Simeone", position: "MID", ovr: 87, nation: "Argentina", trait: "Garra e espírito guerreiro" },
        { name: "Juan Sebastián Verón", displayName: "J. S. Verón", position: "MID", ovr: 91, nation: "Argentina", trait: "Visão periférica perfeita" },
        { name: "Pavel Nedvěd", displayName: "Pavel Nedvěd", position: "MID", ovr: 93, nation: "Rep. Tcheca", trait: "Fúria tcheca com chute potente" },
        { name: "Marcelo Salas", displayName: "Marcelo Salas", position: "ATK", ovr: 88, nation: "Chile", trait: "Matador sul-americano" },
        { name: "Roberto Mancini", displayName: "R. Mancini", position: "ATK", ovr: 88, nation: "Itália", trait: "Cérebro e classe ofensiva" }
      ],
      bench: [
        { name: "Marco Ballotta", displayName: "M. Ballotta", position: "GK", ovr: 79, nation: "Itália", trait: "Experiência de banco" },
        { name: "Fernando Couto", displayName: "Fernando Couto", position: "DEF", ovr: 84, nation: "Portugal", trait: "Zagueiro implacável" },
        { name: "Dejan Stanković", displayName: "D. Stanković", position: "MID", ovr: 84, nation: "Sérvia", trait: "Chute de fora da área" },
        { name: "Sérgio Conceição", displayName: "S. Conceição", position: "MID", ovr: 83, nation: "Portugal", trait: "Velocidade na ala" },
        { name: "Simone Inzaghi", displayName: "S. Inzaghi", position: "ATK", ovr: 82, nation: "Itália", trait: "Oportunista do banco" },
        { name: "Alen Bokšić", displayName: "A. Bokšić", position: "ATK", ovr: 85, nation: "Croácia", trait: "Força física e drible" }
      ]
    }
  },
  {
    id: "roma_2001",
    name: "Roma",
    era: "2001",
    country: "Itália",
    achievement: "Vencedora do memorável Scudetto liderado por Batistuta e Totti",
    lineup: {
      formation: "3-5-2",
      players: [
        { name: "Francesco Antonioli", displayName: "F. Antonioli", position: "GK", ovr: 82, nation: "Itália", trait: "Segurança debaixo das traves" },
        { name: "Walter Samuel", displayName: "Walter Samuel", position: "DEF", ovr: 89, nation: "Argentina", trait: "O Muro Impenetrável" },
        { name: "Aldair", displayName: "Aldair", position: "DEF", ovr: 91, nation: "Brasil", trait: "Elegância e tempo de bola" },
        { name: "Jonathan Zebina", displayName: "J. Zebina", position: "DEF", ovr: 80, nation: "França", trait: "Força física" },
        { name: "Cafu", displayName: "Cafu", position: "MID", ovr: 93, nation: "Brasil", trait: "Fôlego insuperável na ala" },
        { name: "Vincent Candela", displayName: "V. Candela", position: "MID", ovr: 85, nation: "França", trait: "Classe refinada na ala esquerda" },
        { name: "Emerson", displayName: "Emerson", position: "MID", ovr: 88, nation: "Brasil", trait: "Puma no meio-campo" },
        { name: "Damiano Tommasi", displayName: "D. Tommasi", position: "MID", ovr: 84, nation: "Itália", trait: "Dedicado e tático" },
        { name: "Francesco Totti", displayName: "Francesco Totti", position: "MID", ovr: 94, nation: "Itália", trait: "Gladiador e gênio eterno" },
        { name: "Gabriel Batistuta", displayName: "G. Batistuta", position: "ATK", ovr: 93, nation: "Argentina", trait: "Batigol - Chute devastador" },
        { name: "Vincenzo Montella", displayName: "V. Montella", position: "ATK", ovr: 86, nation: "Itália", trait: "O Aeroplanino goleador" }
      ],
      bench: [
        { name: "Cristiano Lupatelli", displayName: "C. Lupatelli", position: "GK", ovr: 78, nation: "Itália", trait: "Pronto reserva" },
        { name: "Amedeo Mangone", displayName: "A. Mangone", position: "DEF", ovr: 79, nation: "Itália", trait: "Sólido marcador" },
        { name: "Marcos Assunção", displayName: "M. Assunção", position: "MID", ovr: 83, nation: "Brasil", trait: "Míssil em cobranças de falta" },
        { name: "Hidetoshi Nakata", displayName: "H. Nakata", position: "MID", ovr: 84, nation: "Japão", trait: "Visão técnica perfeita" },
        { name: "Marco Delvecchio", displayName: "M. Delvecchio", position: "ATK", ovr: 83, nation: "Itália", trait: "Trabalho tático ofensivo" }
      ]
    }
  },
  {
    id: "parma_1999",
    name: "Parma",
    era: "1999",
    country: "Itália",
    achievement: "Campeão da Copa da UEFA e timaço de copa",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Gianluigi Buffon", displayName: "G. Buffon", position: "GK", ovr: 93, nation: "Itália", trait: "Prodígio milagroso das traves" },
        { name: "Lilian Thuram", displayName: "L. Thuram", position: "DEF", ovr: 91, nation: "França", trait: "Velocidade e atleticismo total" },
        { name: "Roberto Sensini", displayName: "R. Sensini", position: "DEF", ovr: 86, nation: "Argentina", trait: "Inteligência tática defensiva" },
        { name: "Fabio Cannavaro", displayName: "F. Cannavaro", position: "DEF", ovr: 91, nation: "Itália", trait: "Zagueiro perfeito no desarme" },
        { name: "Paolo Vanoli", displayName: "P. Vanoli", position: "DEF", ovr: 80, nation: "Itália", trait: "Apoio pela esquerda" },
        { name: "Alain Boghossian", displayName: "A. Boghossian", position: "MID", ovr: 83, nation: "França", trait: "Meia dinâmico" },
        { name: "Dino Baggio", displayName: "Dino Baggio", position: "MID", ovr: 86, nation: "Itália", trait: "Liderança no meio" },
        { name: "Juan Sebastián Verón", displayName: "J. S. Verón", position: "MID", ovr: 90, nation: "Argentina", trait: "Maestro de passes longos" },
        { name: "Mario Stanić", displayName: "M. Stanić", position: "MID", ovr: 82, nation: "Croácia", trait: "Habilidade na meia-esquerda" },
        { name: "Enrico Chiesa", displayName: "E. Chiesa", position: "ATK", ovr: 86, nation: "Itália", trait: "Chute letal de primeira" },
        { name: "Hernán Crespo", displayName: "Hernán Crespo", position: "ATK", ovr: 89, nation: "Argentina", trait: "Goleador clássico de área" }
      ],
      bench: [
        { name: "Davide Micillo", displayName: "D. Micillo", position: "GK", ovr: 77, nation: "Itália", trait: "Goleiro reserva" },
        { name: "Luigi Sartor", displayName: "L. Sartor", position: "DEF", ovr: 79, nation: "Itália", trait: "Zagueiro reserva" },
        { name: "Diego Fuser", displayName: "Diego Fuser", position: "MID", ovr: 82, nation: "Itália", trait: "Especialista em cruzamento" },
        { name: "Stefano Fiore", displayName: "Stefano Fiore", position: "MID", ovr: 83, nation: "Itália", trait: "Criatividade técnica" },
        { name: "Faustino Asprilla", displayName: "F. Asprilla", position: "ATK", ovr: 85, nation: "Colômbia", trait: "Fintas e acrobacias" },
        { name: "Abel Balbo", displayName: "Abel Balbo", position: "ATK", ovr: 82, nation: "Argentina", trait: "Experiente oportunista" }
      ]
    }
  },
  {
    id: "inter_milao_2006",
    name: "Internazionale",
    era: "2006",
    country: "Itália",
    achievement: "Início do domínio italiano pós-Calciopoli",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Júlio César", displayName: "Júlio César", position: "GK", ovr: 88, nation: "Brasil", trait: "Reflexos felinos na linha" },
        { name: "Marco Materazzi", displayName: "M. Materazzi", position: "DEF", ovr: 86, nation: "Itália", trait: "Provocador e perigoso na bola aérea" },
        { name: "Iván Córdoba", displayName: "I. Córdoba", position: "DEF", ovr: 85, nation: "Colômbia", trait: "Velocidade impressionante para zagueiro" },
        { name: "Javier Zanetti", displayName: "Javier Zanetti", position: "DEF", ovr: 90, nation: "Argentina", trait: "Inquebrável e imortal lateral" },
        { name: "Fabio Grosso", displayName: "F. Grosso", position: "DEF", ovr: 84, nation: "Itália", trait: "Herói da Azzurra no apoio" },
        { name: "Esteban Cambiasso", displayName: "E. Cambiasso", position: "MID", ovr: 87, nation: "Argentina", trait: "Equilíbrio tático inteligente" },
        { name: "Patrick Vieira", displayName: "P. Vieira", position: "MID", ovr: 89, nation: "França", trait: "Gigante físico de passadas largas" },
        { name: "Dejan Stanković", displayName: "D. Stanković", position: "MID", ovr: 85, nation: "Sérvia", trait: "Míssil de média distância" },
        { name: "Luís Figo", displayName: "Luís Figo", position: "MID", ovr: 91, nation: "Portugal", trait: "Cruzamentos cirúrgicos com finta" },
        { name: "Adriano Imperador", displayName: "Adriano Imperador", position: "ATK", ovr: 92, nation: "Brasil", trait: "Força bruta com chute de 99 de potência" },
        { name: "Zlatan Ibrahimović", displayName: "Z. Ibrahimović", position: "ATK", ovr: 90, nation: "Suécia", trait: "Acrobacias geniais e poder físico" }
      ],
      bench: [
        { name: "Francesco Toldo", displayName: "F. Toldo", position: "GK", ovr: 85, nation: "Itália", trait: "Goleiro de alto nível no banco" },
        { name: "Nicolás Burdisso", displayName: "N. Burdisso", position: "DEF", ovr: 80, nation: "Argentina", trait: "Reserva combativo" },
        { name: "Maicon", displayName: "Maicon", position: "DEF", ovr: 86, nation: "Brasil", trait: "Locomotiva da lateral" },
        { name: "Santiago Solari", displayName: "S. Solari", position: "MID", ovr: 82, nation: "Argentina", trait: "Classe e inteligência" },
        { name: "Hernán Crespo", displayName: "Hernán Crespo", position: "ATK", ovr: 85, nation: "Argentina", trait: "Oportunista implacável de área" },
        { name: "Julio Cruz", displayName: "Julio Cruz", position: "ATK", ovr: 83, nation: "Argentina", trait: "O Jardineiro carrasco do banco" }
      ]
    }
  },
  {
    id: "inter_milao_2010",
    name: "Internazionale",
    era: "2010",
    country: "Itália",
    achievement: "Ganhadores da histórica Tríplice Coroa de Mourinho",
    lineup: {
      formation: "4-2-3-1",
      players: [
        { name: "Júlio César", displayName: "Júlio César", position: "GK", ovr: 90, nation: "Brasil", trait: "Muralha do Triplete" },
        { name: "Lúcio", displayName: "Lúcio", position: "DEF", ovr: 89, nation: "Brasil", trait: "Zagueiro arrancador com raça" },
        { name: "Walter Samuel", displayName: "Walter Samuel", position: "DEF", ovr: 88, nation: "Argentina", trait: "Duro como rocha" },
        { name: "Maicon", displayName: "Maicon", position: "DEF", ovr: 90, nation: "Brasil", trait: "O Colosso da lateral-direita" },
        { name: "Javier Zanetti", displayName: "Javier Zanetti", position: "DEF", ovr: 89, nation: "Argentina", trait: "Capitão e exemplo eterno" },
        { name: "Esteban Cambiasso", displayName: "E. Cambiasso", position: "MID", ovr: 88, nation: "Argentina", trait: "Tático perfeito em campo" },
        { name: "Thiago Motta", displayName: "Thiago Motta", position: "MID", ovr: 84, nation: "Itália", trait: "Organização e cadência" },
        { name: "Wesley Sneijder", displayName: "Wesley Sneijder", position: "MID", ovr: 92, nation: "Holanda", trait: "Visão mágica com chute teleguiado" },
        { name: "Samuel Eto'o", displayName: "Samuel Eto'o", position: "ATK", ovr: 91, nation: "Camarões", trait: "Velocidade absurda e entrega tática" },
        { name: "Goran Pandev", displayName: "Goran Pandev", position: "ATK", ovr: 83, nation: "Macedônia", trait: "Apoio ofensivo refinado" },
        { name: "Diego Milito", displayName: "Diego Milito", position: "ATK", ovr: 91, nation: "Argentina", trait: "Decisivo com drible curto e frieza" }
      ],
      bench: [
        { name: "Francesco Toldo", displayName: "F. Toldo", position: "GK", ovr: 82, nation: "Itália", trait: "Veterano seguro" },
        { name: "Ivan Córdoba", displayName: "I. Córdoba", position: "DEF", ovr: 82, nation: "Colômbia", trait: "Segurança de banco" },
        { name: "Marco Materazzi", displayName: "M. Materazzi", position: "DEF", ovr: 81, nation: "Itália", trait: "Raça extrema" },
        { name: "Dejan Stanković", displayName: "D. Stanković", position: "MID", ovr: 84, nation: "Sérvia", trait: "Apoio seguro no meio" },
        { name: "Sulley Muntari", displayName: "S. Muntari", position: "MID", ovr: 81, nation: "Gana", trait: "Força física defensiva" },
        { name: "Mario Balotelli", displayName: "M. Balotelli", position: "ATK", ovr: 84, nation: "Itália", trait: "Garoto-prodígio rebelde" }
      ]
    }
  },
  {
    id: "juventus_2015",
    name: "Juventus",
    era: "2015",
    country: "Itália",
    achievement: "Finalista da UCL e domínio absoluto na Itália com Allegri",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Gianluigi Buffon", displayName: "G. Buffon", position: "GK", ovr: 92, nation: "Itália", trait: "Lenda eterna das balizas" },
        { name: "Giorgio Chiellini", displayName: "G. Chiellini", position: "DEF", ovr: 89, nation: "Itália", trait: "Combate feroz e agressividade tática" },
        { name: "Leonardo Bonucci", displayName: "L. Bonucci", position: "DEF", ovr: 87, nation: "Itália", trait: "Visão de passe para saída de bola" },
        { name: "Stephan Lichtsteiner", displayName: "S. Lichtsteiner", position: "DEF", ovr: 83, nation: "Suíça", trait: "Motor suíço do flanco" },
        { name: "Patrice Evra", displayName: "Patrice Evra", position: "DEF", ovr: 84, nation: "França", trait: "Experiência de alto nível" },
        { name: "Andrea Pirlo", displayName: "Andrea Pirlo", position: "MID", ovr: 90, nation: "Itália", trait: "Maestro absoluto e gênio da precisão" },
        { name: "Claudio Marchisio", displayName: "C. Marchisio", position: "MID", ovr: 86, nation: "Itália", trait: "Elegância e polivalência" },
        { name: "Arturo Vidal", displayName: "Arturo Vidal", position: "MID", ovr: 88, nation: "Chile", trait: "Guerreiro box-to-box infatigável" },
        { name: "Paul Pogba", displayName: "Paul Pogba", position: "MID", ovr: 89, nation: "França", trait: "Poder físico com gestos de craque" },
        { name: "Carlos Tévez", displayName: "Carlos Tévez", position: "ATK", ovr: 89, nation: "Argentina", trait: "Garra selvagem de artilheiro" },
        { name: "Álvaro Morata", displayName: "Álvaro Morata", position: "ATK", ovr: 84, nation: "Espanha", trait: "Gols decisivos na UCL" }
      ],
      bench: [
        { name: "Marco Storari", displayName: "M. Storari", position: "GK", ovr: 79, nation: "Itália", trait: "Reserva qualificado" },
        { name: "Andrea Barzagli", displayName: "A. Barzagli", position: "DEF", ovr: 85, nation: "Itália", trait: "Zagueiro taticamente impecável" },
        { name: "Angelo Ogbonna", displayName: "A. Ogbonna", position: "DEF", ovr: 79, nation: "Itália", trait: "Força física reserva" },
        { name: "Roberto Pereyra", displayName: "R. Pereyra", position: "MID", ovr: 81, nation: "Argentina", trait: "Infiltração dinâmica" },
        { name: "Simone Padoin", displayName: "S. Padoin", position: "MID", ovr: 78, nation: "Itália", trait: "Operário polivalente" },
        { name: "Fernando Llorente", displayName: "F. Llorente", position: "ATK", ovr: 82, nation: "Espanha", trait: "Pivô de área temido" }
      ]
    }
  },

  // ==================== CAMPEONATO HOLANDÊS ====================
  {
    id: "ajax_1995",
    name: "Ajax",
    era: "1995",
    country: "Holanda",
    achievement: "Campeões invictos da Europa e da Holanda de Van Gaal",
    lineup: {
      formation: "4-3-3",
      players: [
        { name: "Edwin van der Sar", displayName: "E. van der Sar", position: "GK", ovr: 91, nation: "Holanda", trait: "Goleiro com jogo de pés perfeito" },
        { name: "Frank de Boer", displayName: "Frank de Boer", position: "DEF", ovr: 87, nation: "Holanda", trait: "Defensor técnico e lançador" },
        { name: "Danny Blind", displayName: "Danny Blind", position: "DEF", ovr: 85, nation: "Holanda", trait: "Líder e organizador defensivo" },
        { name: "Michael Reiziger", displayName: "M. Reiziger", position: "DEF", ovr: 84, nation: "Holanda", trait: "Lateral rápido na marcação" },
        { name: "Winston Bogarde", displayName: "W. Bogarde", position: "DEF", ovr: 82, nation: "Holanda", trait: "Força física na lateral" },
        { name: "Clarence Seedorf", displayName: "C. Seedorf", position: "MID", ovr: 89, nation: "Holanda", trait: "Prodígio de força e técnica completa" },
        { name: "Edgar Davids", displayName: "Edgar Davids", position: "MID", ovr: 90, nation: "Holanda", trait: "Pitbull de óculos do meio-campo" },
        { name: "Jari Litmanen", displayName: "Jari Litmanen", position: "MID", ovr: 91, nation: "Finlândia", trait: "Artilheiro oculto e gênio" },
        { name: "Finidi George", displayName: "Finidi George", position: "ATK", ovr: 85, nation: "Nigéria", trait: "Velocidade na ponta-direita" },
        { name: "Marc Overmars", displayName: "Marc Overmars", position: "ATK", ovr: 87, nation: "Holanda", trait: "Veloz ponta-esquerda vertical" },
        { name: "Ronald de Boer", displayName: "Ronald de Boer", position: "ATK", ovr: 85, nation: "Holanda", trait: "Inteligência tática de ataque" }
      ],
      bench: [
        { name: "Fred Grim", displayName: "Fred Grim", position: "GK", ovr: 78, nation: "Holanda", trait: "Reserva dedicado" },
        { name: "Sonny Silooy", displayName: "S. Silooy", position: "DEF", ovr: 79, nation: "Holanda", trait: "Veterano na retaguarda" },
        { name: "Tarík Oulida", displayName: "T. Oulida", position: "MID", ovr: 78, nation: "Marrocos", trait: "Opção de passe" },
        { name: "Kiki Musampa", displayName: "K. Musampa", position: "MID", ovr: 80, nation: "Holanda", trait: "Drible pelo flanco" },
        { name: "Nwankwo Kanu", displayName: "Nwankwo Kanu", position: "ATK", ovr: 85, nation: "Nigéria", trait: "Acrobacias e elegância de pivô" },
        { name: "Patrick Kluivert", displayName: "P. Kluivert", position: "ATK", ovr: 88, nation: "Holanda", trait: "Estrela precoce e decisivo na final" }
      ]
    }
  },

  // ==================== CAMPEONATO FRANCÊS ====================
  {
    id: "marseille_1993",
    name: "Marseille",
    era: "1993",
    country: "França",
    achievement: "Vencedor da primeira edição da moderna UCL",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Fabien Barthez", displayName: "F. Barthez", position: "GK", ovr: 86, nation: "França", trait: "Goleiro excêntrico com agilidade" },
        { name: "Basile Boli", displayName: "Basile Boli", position: "DEF", ovr: 87, nation: "França", trait: "Força aérea incontestável" },
        { name: "Marcel Desailly", displayName: "M. Desailly", position: "DEF", ovr: 91, nation: "França", trait: "A Rocha intransponível" },
        { name: "Jocelyn Angloma", displayName: "J. Angloma", position: "DEF", ovr: 85, nation: "França", trait: "Lateral rápido no flanco" },
        { name: "Éric Di Meco", displayName: "É. Di Meco", position: "DEF", ovr: 81, nation: "França", trait: "Firme no combate" },
        { name: "Didier Deschamps", displayName: "D. Deschamps", position: "MID", ovr: 88, nation: "França", trait: "Carregador de piano e líder nato" },
        { name: "Jean-Philippe Durand", displayName: "J. P. Durand", position: "MID", ovr: 81, nation: "França", trait: "Operário tático" },
        { name: "Franck Sauzée", displayName: "F. Sauzée", position: "MID", ovr: 85, nation: "França", trait: "Chute potente de fora" },
        { name: "Abedi Pelé", displayName: "Abedi Pelé", position: "MID", ovr: 90, nation: "Gana", trait: "Habilidade inacreditável de drible" },
        { name: "Alen Bokšić", displayName: "A. Bokšić", position: "ATK", ovr: 87, nation: "Croácia", trait: "Atacante forte e dinâmico" },
        { name: "Rudi Völler", displayName: "Rudi Völler", position: "ATK", ovr: 88, nation: "Alemanha", trait: "Faro implacável na grande área" }
      ],
      bench: [
        { name: "Pascal Olmeta", displayName: "P. Olmeta", position: "GK", ovr: 78, nation: "França", trait: "Veterano espetaculoso" },
        { name: "Jean-Christophe Thomas", displayName: "J. C. Thomas", position: "DEF", ovr: 79, nation: "França", trait: "Sólido marcador" },
        { name: "Bernard Casoni", displayName: "B. Casoni", position: "DEF", ovr: 80, nation: "França", trait: "Zagueiro marcador" },
        { name: "Pascal Fugier", displayName: "P. Fugier", position: "MID", ovr: 78, nation: "França", trait: "Marcador de banco" },
        { name: "François Omam-Biyik", displayName: "Omam-Biyik", position: "ATK", ovr: 82, nation: "Camarões", trait: "Poder de salto" }
      ]
    }
  },
  {
    id: "lyon_2005",
    name: "Lyon",
    era: "2005",
    country: "França",
    achievement: "Dínamo do Heptacampeonato Francês e pesadelo europeu",
    lineup: {
      formation: "4-3-3",
      players: [
        { name: "Grégory Coupet", displayName: "G. Coupet", position: "GK", ovr: 85, nation: "França", trait: "Segurança debaixo das traves" },
        { name: "Cris", displayName: "Cris", position: "DEF", ovr: 86, nation: "Brasil", trait: "O Policial do desarme" },
        { name: "Claudio Caçapa", displayName: "C. Caçapa", position: "DEF", ovr: 82, nation: "Brasil", trait: "Liderança na defesa" },
        { name: "Anthony Réveillère", displayName: "A. Réveillère", position: "DEF", ovr: 82, nation: "França", trait: "Equilibrado lateral" },
        { name: "Eric Abidal", displayName: "Eric Abidal", position: "DEF", ovr: 86, nation: "França", trait: "Poder defensivo no lado esquerdo" },
        { name: "Michael Essien", displayName: "Michael Essien", position: "MID", ovr: 89, nation: "Gana", trait: "O Búfalo com força de box-to-box" },
        { name: "Mahamadou Diarra", displayName: "M. Diarra", position: "MID", ovr: 85, nation: "Mali", trait: "Xerife do meio" },
        { name: "Juninho Pernambucano", displayName: "J. Pernambucano", position: "MID", ovr: 92, nation: "Brasil", trait: "Mestre Supremo das Faltas" },
        { name: "Sidney Govou", displayName: "S. Govou", position: "ATK", ovr: 84, nation: "França", trait: "Velocidade e entrega" },
        { name: "Florent Malouda", displayName: "F. Malouda", position: "ATK", ovr: 85, nation: "França", trait: "Força no flanco esquerdo" },
        { name: "Sylvain Wiltord", displayName: "S. Wiltord", position: "ATK", ovr: 84, nation: "França", trait: "Oportunismo dinâmico" }
      ],
      bench: [
        { name: "Nicolas Puydebois", displayName: "N. Puydebois", position: "GK", ovr: 77, nation: "França", trait: "Reserva" },
        { name: "Lamine Diatta", displayName: "L. Diatta", position: "DEF", ovr: 79, nation: "Senegal", trait: "Defensor tático" },
        { name: "Jérémy Toulalan", displayName: "J. Toulalan", position: "MID", ovr: 83, nation: "França", trait: "Segurança nos passes" },
        { name: "Hathem Ben Arfa", displayName: "H. Ben Arfa", position: "MID", ovr: 82, nation: "França", trait: "Habilidade de drible pura" },
        { name: "Nilmar", displayName: "Nilmar", position: "ATK", ovr: 82, nation: "Brasil", trait: "Arrancada rápida" },
        { name: "Giovane Élber", displayName: "G. Élber", position: "ATK", ovr: 84, nation: "Brasil", trait: "Veterano com faro" }
      ]
    }
  },
  {
    id: "psg_2002",
    name: "PSG",
    era: "2002",
    country: "França",
    achievement: "O charmoso Paris Saint-Germain do Ronaldinho Bruxo",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Lionel Letizi", displayName: "L. Letizi", position: "GK", ovr: 82, nation: "França", trait: "Goleiro regular" },
        { name: "Mauricio Pochettino", displayName: "M. Pochettino", position: "DEF", ovr: 84, nation: "Argentina", trait: "Xerife implacável" },
        { name: "Gabriel Heinze", displayName: "G. Heinze", position: "DEF", ovr: 85, nation: "Argentina", trait: "Defensor implacável com garra" },
        { name: "Cristóbal Parralo", displayName: "Cristóbal", position: "DEF", ovr: 80, nation: "Espanha", trait: "Segurança de flanco" },
        { name: "Bernard Mendy", displayName: "B. Mendy", position: "DEF", ovr: 80, nation: "França", trait: "Arrancadas atléticas" },
        { name: "Mikel Arteta", displayName: "M. Arteta", position: "MID", ovr: 84, nation: "Espanha", trait: "Distribuição tática inteligente" },
        { name: "Frédéric Déhu", displayName: "F. Déhu", position: "MID", ovr: 81, nation: "França", trait: "Equilíbrio defensivo" },
        { name: "Hugo Leal", displayName: "Hugo Leal", position: "MID", ovr: 81, nation: "Portugal", trait: "Passe técnico" },
        { name: "Ronaldinho Gaúcho", displayName: "R. Gaúcho", position: "MID", ovr: 95, nation: "Brasil", trait: "Bruxo - Malabarista imparável do drible" },
        { name: "Jay-Jay Okocha", displayName: "Jay-Jay Okocha", position: "MID", ovr: 89, nation: "Nigéria", trait: "Fintas mágicas e plástico" },
        { name: "Aloísio Chulapa", displayName: "Aloísio", position: "ATK", ovr: 83, nation: "Brasil", trait: "Pivô forte com casca" }
      ],
      bench: [
        { name: "Jérôme Alonzo", displayName: "J. Alonzo", position: "GK", ovr: 79, nation: "França", trait: "Reserva de Copas" },
        { name: "Talal El Karkouri", displayName: "T. El Karkouri", position: "DEF", ovr: 79, nation: "Marrocos", trait: "Zagueiro de combate" },
        { name: "Jerome Leroy", displayName: "J. Leroy", position: "MID", ovr: 81, nation: "França", trait: "Operário útil" },
        { name: "Edouard Cissé", displayName: "E. Cissé", position: "MID", ovr: 80, nation: "França", trait: "Combate tático" },
        { name: "Nicolas Anelka", displayName: "N. Anelka", position: "ATK", ovr: 84, nation: "França", trait: "Velocidade em contra-ataques" },
        { name: "José Aloísio", displayName: "Aloísio ATK", position: "ATK", ovr: 80, nation: "Brasil", trait: "Opção de área" }
      ]
    }
  },
  {
    id: "psg_2016",
    name: "PSG",
    era: "2016",
    country: "França",
    achievement: "Monopólio com Blanc e auge doméstico de Ibrahimovic",
    lineup: {
      formation: "4-3-3",
      players: [
        { name: "Kevin Trapp", displayName: "K. Trapp", position: "GK", ovr: 83, nation: "Alemanha", trait: "Boa recuperação" },
        { name: "Thiago Silva", displayName: "Thiago Silva", position: "DEF", ovr: 90, nation: "Brasil", trait: "O Monstro - Posicionamento impecável" },
        { name: "David Luiz", displayName: "David Luiz", position: "DEF", ovr: 84, nation: "Brasil", trait: "Combate físico agressivo" },
        { name: "Serge Aurier", displayName: "S. Aurier", position: "DEF", ovr: 83, nation: "Costa do Marfim", trait: "Força atlética" },
        { name: "Maxwell", displayName: "Maxwell", position: "DEF", ovr: 84, nation: "Brasil", trait: "Consistência e classe na lateral" },
        { name: "Thiago Motta", displayName: "Thiago Motta", position: "MID", ovr: 84, nation: "Itália", trait: "Cérebro posicional defensivo" },
        { name: "Marco Verratti", displayName: "M. Verratti", position: "MID", ovr: 88, nation: "Itália", trait: "Drible sob pressão e passe curto" },
        { name: "Blaise Matuidi", displayName: "B. Matuidi", position: "MID", ovr: 86, nation: "França", trait: "Três pulmões de combate" },
        { name: "Ángel Di María", displayName: "Á. Di María", position: "ATK", ovr: 88, nation: "Argentina", trait: "Passe milimétrico e finta ágil" },
        { name: "Lucas Moura", displayName: "Lucas Moura", position: "ATK", ovr: 84, nation: "Brasil", trait: "Velocidade explosiva e aceleração" },
        { name: "Zlatan Ibrahimović", displayName: "Z. Ibrahimović", position: "ATK", ovr: 92, nation: "Suécia", trait: "Lenda extravagante e goleadora" }
      ],
      bench: [
        { name: "Salvatore Sirigu", displayName: "S. Sirigu", position: "GK", ovr: 81, nation: "Itália", trait: "Bom reserva" },
        { name: "Marquinhos", displayName: "Marquinhos", position: "DEF", ovr: 85, nation: "Brasil", trait: "Zagueiro rápido e técnico" },
        { name: "Layvin Kurzawa", displayName: "L. Kurzawa", position: "DEF", ovr: 80, nation: "França", trait: "Lateral ofensivo" },
        { name: "Adrien Rabiot", displayName: "A. Rabiot", position: "MID", ovr: 83, nation: "França", trait: "Infiltração com porte físico" },
        { name: "Javier Pastore", displayName: "J. Pastore", position: "MID", ovr: 84, nation: "Argentina", trait: "Elegância e finta imprevisível" },
        { name: "Edinson Cavani", displayName: "E. Cavani", position: "ATK", ovr: 87, nation: "Uruguai", trait: "Garra infatigável com faro de gol" }
      ]
    }
  },
  {
    id: "monaco_2004",
    name: "Monaco",
    era: "2004",
    country: "França",
    achievement: "Surpreendente finalista da Liga dos Campeões",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Flavio Roma", displayName: "F. Roma", position: "GK", ovr: 83, nation: "Itália", trait: "Segurança debaixo do travessão" },
        { name: "Sébastien Squillaci", displayName: "S. Squillaci", position: "DEF", ovr: 84, nation: "França", trait: "Zagueiro firme na bola aérea" },
        { name: "Gaël Givet", displayName: "G. Givet", position: "DEF", ovr: 83, nation: "França", trait: "Sólida marcação" },
        { name: "Hugo Ibarra", displayName: "H. Ibarra", position: "DEF", ovr: 82, nation: "Argentina", trait: "Lateral forte" },
        { name: "Patrice Evra", displayName: "Patrice Evra", position: "DEF", ovr: 85, nation: "França", trait: "Velocidade na transição esquerda" },
        { name: "Andreas Zikos", displayName: "A. Zikos", position: "MID", ovr: 82, nation: "Grécia", trait: "Cão de guarda defensivo" },
        { name: "Lucas Bernardi", displayName: "L. Bernardi", position: "MID", ovr: 82, nation: "Argentina", trait: "Marcação e fôlego" },
        { name: "Ludovic Giuly", displayName: "Ludovic Giuly", position: "MID", ovr: 87, nation: "França", trait: "Veloz e dinâmico ponta" },
        { name: "Jérôme Rothen", displayName: "J. Rothen", position: "MID", ovr: 84, nation: "França", trait: "Cruzamentos espetaculares de canhota" },
        { name: "Fernando Morientes", displayName: "F. Morientes", position: "ATK", ovr: 88, nation: "Espanha", trait: "Cabeceador fulminante" },
        { name: "Dado Pršo", displayName: "Dado Pršo", position: "ATK", ovr: 85, nation: "Croácia", trait: "Goleador aguerrido com físico" }
      ],
      bench: [
        { name: "Tony Sylva", displayName: "T. Sylva", position: "GK", ovr: 79, nation: "Senegal", trait: "Agilidade de banco" },
        { name: "Julien Rodriguez", displayName: "J. Rodriguez", position: "DEF", ovr: 80, nation: "França", trait: "Defensor tático" },
        { name: "Jaroslav Plašil", displayName: "J. Plašil", position: "MID", ovr: 81, nation: "Rep. Tcheca", trait: "Técnica confiável" },
        { name: "Edouard Cissé", displayName: "E. Cissé", position: "MID", ovr: 80, nation: "França", trait: "Combate reserva" },
        { name: "Shabani Nonda", displayName: "S. Nonda", position: "ATK", ovr: 83, nation: "RDC", trait: "Atacante matador potente" },
        { name: "Emmanuel Adebayor", displayName: "E. Adebayor", position: "ATK", ovr: 82, nation: "Togo", trait: "Jovem ágil e físico" }
      ]
    }
  },

  // ==================== CAMPEONATO PORTUGUÊS ====================
  {
    id: "porto_1999",
    name: "Porto",
    era: "1999",
    country: "Portugal",
    achievement: "Ganhadores do histórico 'Penta' do futebol português",
    lineup: {
      formation: "4-3-3",
      players: [
        { name: "Vítor Baía", displayName: "Vítor Baía", position: "GK", ovr: 91, nation: "Portugal", trait: "Lenda das traves portuguesas" },
        { name: "Aloísio", displayName: "Aloísio", position: "DEF", ovr: 84, nation: "Brasil", trait: "Experiência de xerife" },
        { name: "Jorge Costa", displayName: "Jorge Costa", position: "DEF", ovr: 85, nation: "Portugal", trait: "Bicho-Morde na zaga" },
        { name: "Carlos Secretário", displayName: "Secretário", position: "DEF", ovr: 81, nation: "Portugal", trait: "Consistência no flanco" },
        { name: "Esquerdinha", displayName: "Esquerdinha", position: "DEF", ovr: 81, nation: "Brasil", trait: "Canhão da ala-esquerda" },
        { name: "Paulinho Santos", displayName: "P. Santos", position: "MID", ovr: 82, nation: "Portugal", trait: "Garra extrema de combate" },
        { name: "Chaínho", displayName: "Chaínho", position: "MID", ovr: 80, nation: "Portugal", trait: "Equilíbrio central" },
        { name: "Zlatko Zahovič", displayName: "Z. Zahovič", position: "MID", ovr: 87, nation: "Eslovênia", trait: "Gênio esloveno da armação" },
        { name: "Capucho", displayName: "Capucho", position: "ATK", ovr: 84, nation: "Portugal", trait: "Dribles rápidos no corredor" },
        { name: "Ljubinko Drulović", displayName: "L. Drulović", position: "ATK", ovr: 84, nation: "Sérvia", trait: "Fintas e passes cirúrgicos" },
        { name: "Mário Jardel", displayName: "Mário Jardel", position: "ATK", ovr: 91, nation: "Brasil", trait: "Super Jardel - Mestre da Cabeçada" }
      ],
      bench: [
        { name: "Rui Correia", displayName: "Rui Correia", position: "GK", ovr: 78, nation: "Portugal", trait: "Substituto seguro" },
        { name: "João Manuel Pinto", displayName: "J. M. Pinto", position: "DEF", ovr: 80, nation: "Portugal", trait: "Zagueiro reserva" },
        { name: "Doriva", displayName: "Doriva", position: "MID", ovr: 82, nation: "Brasil", trait: "Passe cadenciado clássico" },
        { name: "Carlos Manuel", displayName: "C. Manuel", position: "MID", ovr: 79, nation: "Portugal", trait: "Operário defensivo" },
        { name: "Quinzinho", displayName: "Quinzinho", position: "ATK", ovr: 79, nation: "Angola", trait: "Velocidade na resposta" },
        { name: "Fehér", displayName: "M. Fehér", position: "ATK", ovr: 80, nation: "Hungria", trait: "Opção ofensiva" }
      ]
    }
  },
  {
    id: "benfica_2014",
    name: "Benfica",
    era: "2014",
    country: "Portugal",
    achievement: "Dínamo do triplete português de Jorge Jesus",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Jan Oblak", displayName: "Jan Oblak", position: "GK", ovr: 88, nation: "Eslovênia", trait: "Jovem prodígio elástico" },
        { name: "Luisão", displayName: "Luisão", position: "DEF", ovr: 85, nation: "Brasil", trait: "Líder imponente de copas" },
        { name: "Ezequiel Garay", displayName: "E. Garay", position: "DEF", ovr: 85, nation: "Argentina", trait: "Segurança de posicionamento" },
        { name: "Maxi Pereira", displayName: "Maxi Pereira", position: "DEF", ovr: 83, nation: "Uruguai", trait: "Garra charrua na lateral" },
        { name: "Guilherme Siqueira", displayName: "G. Siqueira", position: "DEF", ovr: 81, nation: "Brasil", trait: "Bom apoio esquerdo" },
        { name: "Ljubomir Fejsa", displayName: "L. Fejsa", position: "MID", ovr: 81, nation: "Sérvia", trait: "Xerife silencioso de contenção" },
        { name: "Enzo Pérez", displayName: "Enzo Pérez", position: "MID", ovr: 85, nation: "Argentina", trait: "Motor tático e garra" },
        { name: "Nicolás Gaitán", displayName: "Nico Gaitán", position: "MID", ovr: 87, nation: "Argentina", trait: "Magia criativa de rabiscar defesas" },
        { name: "Lazar Marković", displayName: "L. Marković", position: "MID", ovr: 82, nation: "Sérvia", trait: "Aceleração meteórica" },
        { name: "Rodrigo Moreno", displayName: "Rodrigo", position: "ATK", ovr: 84, nation: "Espanha", trait: "Mobilidade e chute colocado" },
        { name: "Lima", displayName: "Lima", position: "ATK", ovr: 83, nation: "Brasil", trait: "Faro de gol refinado" }
      ],
      bench: [
        { name: "Artur Moraes", displayName: "Artur GK", position: "GK", ovr: 80, nation: "Brasil", trait: "Goleiro experiente" },
        { name: "Jardel Nivaldo", displayName: "Jardel DEF", position: "DEF", ovr: 81, nation: "Brasil", trait: "Zagueiro forte de banco" },
        { name: "André Almeida", displayName: "A. Almeida", position: "DEF", ovr: 79, nation: "Portugal", trait: "Curinga de banco" },
        { name: "Ruben Amorim", displayName: "R. Amorim", position: "MID", ovr: 81, nation: "Portugal", trait: "Inteligência coletiva" },
        { name: "Miralem Sulejmani", displayName: "M. Sulejmani", position: "MID", ovr: 82, nation: "Sérvia", trait: "Cortes para dentro" },
        { name: "Óscar Cardozo", displayName: "Ó. Cardozo", position: "ATK", ovr: 84, nation: "Paraguai", trait: "Tacuara - Canhão paraguaio" }
      ]
    }
  },

  // ==================== CAMPEONATO ALEMÃO ====================
  {
    id: "dortmund_1997",
    name: "Borussia Dortmund",
    era: "1997",
    country: "Alemanha",
    achievement: "Campeão da Liga dos Campeões no histórico triunfo de Munique",
    lineup: {
      formation: "3-5-2",
      players: [
        { name: "Stefan Klos", displayName: "Stefan Klos", position: "GK", ovr: 85, nation: "Alemanha", trait: "Sólido defensor sob traves" },
        { name: "Matthias Sammer", displayName: "M. Sammer", position: "DEF", ovr: 92, nation: "Alemanha", trait: "Último Líbero clássico e Bola de Ouro" },
        { name: "Jürgen Kohler", displayName: "J. Kohler", position: "DEF", ovr: 89, nation: "Alemanha", trait: "O maior marcador individual de sempre" },
        { name: "Martin Kree", displayName: "M. Kree", position: "DEF", ovr: 81, nation: "Alemanha", trait: "Zagueiro viril" },
        { name: "Stefan Reuter", displayName: "S. Reuter", position: "MID", ovr: 86, nation: "Alemanha", trait: "Turbina incansável do flanco direito" },
        { name: "Jörg Heinrich", displayName: "J. Heinrich", position: "MID", ovr: 84, nation: "Alemanha", trait: "Regularidade no flanco esquerdo" },
        { name: "Paulo Sousa", displayName: "Paulo Sousa", position: "MID", ovr: 88, nation: "Portugal", trait: "Gênio tático de classe pura" },
        { name: "Paul Lambert", displayName: "P. Lambert", position: "MID", ovr: 84, nation: "Escócia", trait: "Bloqueador cirúrgico de Zidane" },
        { name: "Andreas Möller", displayName: "A. Möller", position: "MID", ovr: 90, nation: "Alemanha", trait: "Cérebro ofensivo letal e dinâmico" },
        { name: "Karl-Heinz Riedle", displayName: "K. Riedle", position: "ATK", ovr: 86, nation: "Alemanha", trait: "Cavalheiro do jogo aéreo decisivo" },
        { name: "Stéphane Chapuisat", displayName: "S. Chapuisat", position: "ATK", ovr: 87, nation: "Suíça", trait: "Canhota suíça imprevisível" }
      ],
      bench: [
        { name: "Wolfgang de Beer", displayName: "Teddy de Beer", position: "GK", ovr: 78, nation: "Alemanha", trait: "Líder de vestiário" },
        { name: "René Tretschok", displayName: "R. Tretschok", position: "DEF", ovr: 80, nation: "Alemanha", trait: "Chute de longe reserva" },
        { name: "Michael Zorc", displayName: "M. Zorc", position: "MID", ovr: 83, nation: "Alemanha", trait: "Xerife histórico eterno e batedor" },
        { name: "Lars Ricken", displayName: "Lars Ricken", position: "MID", ovr: 84, nation: "Alemanha", trait: "Herói juvenil de gols antológicos" },
        { name: "Heiko Herrlich", displayName: "H. Herrlich", position: "ATK", ovr: 82, nation: "Alemanha", trait: "Atacante finalizador" }
      ]
    }
  },
  {
    id: "dortmund_2013",
    name: "Borussia Dortmund",
    era: "2013",
    country: "Alemanha",
    achievement: "Finalista europeu no famoso Heavy Metal Football de Klopp",
    lineup: {
      formation: "4-2-3-1",
      players: [
        { name: "Roman Weidenfeller", displayName: "R. Weidenfeller", position: "GK", ovr: 85, nation: "Alemanha", trait: "Feroz nos duelos frente-a-frente" },
        { name: "Mats Hummels", displayName: "Mats Hummels", position: "DEF", ovr: 89, nation: "Alemanha", trait: "Elegância na saída de bola aérea" },
        { name: "Neven Subotić", displayName: "N. Subotić", position: "DEF", ovr: 84, nation: "Sérvia", trait: "Muralha de carrinho heroico" },
        { name: "Łukasz Piszczek", displayName: "L. Piszczek", position: "DEF", ovr: 86, nation: "Polônia", trait: "Consistência total nos dois lados" },
        { name: "Marcel Schmelzer", displayName: "M. Schmelzer", position: "DEF", ovr: 83, nation: "Alemanha", trait: "Trabalho duro defensivo" },
        { name: "Sven Bender", displayName: "Sven Bender", position: "MID", ovr: 83, nation: "Alemanha", trait: "Destruição tática limpa" },
        { name: "İlkay Gündoğan", displayName: "İ. Gündoğan", position: "MID", ovr: 88, nation: "Alemanha", trait: "Passe refinado e inteligência" },
        { name: "Marco Reus", displayName: "Marco Reus", position: "MID", ovr: 90, nation: "Alemanha", trait: "Menino-prodígio de drible elétrico e chutes" },
        { name: "Mario Götze", displayName: "Mario Götze", position: "MID", ovr: 88, nation: "Alemanha", trait: "Cérebro móvel e ágil nos espaços" },
        { name: "Kevin Großkreutz", displayName: "K. Großkreutz", position: "MID", ovr: 81, nation: "Alemanha", trait: "Curinga de sacrifício coletivo" },
        { name: "Robert Lewandowski", displayName: "R. Lewandowski", position: "ATK", ovr: 91, nation: "Polônia", trait: "Pivô letal com controle espetacular" }
      ],
      bench: [
        { name: "Mitchell Langerak", displayName: "M. Langerak", position: "GK", ovr: 78, nation: "Austrália", trait: "Reserva ágil" },
        { name: "Felipe Santana", displayName: "F. Santana", position: "DEF", ovr: 81, nation: "Brasil", trait: "Herói das quartas de final" },
        { name: "Sebastian Kehl", displayName: "S. Kehl", position: "MID", ovr: 82, nation: "Alemanha", trait: "Líder veterano experiente" },
        { name: "Nuri Şahin", displayName: "Nuri Şahin", position: "MID", ovr: 83, nation: "Turquia", trait: "Opção de cadência" },
        { name: "Julian Schieber", displayName: "J. Schieber", position: "ATK", ovr: 79, nation: "Alemanha", trait: "Força no final" }
      ]
    }
  },
  {
    id: "bayern_2001",
    name: "Bayern",
    era: "2001",
    country: "Alemanha",
    achievement: "Vencedor da UCL espantando os fantasmas de 1999",
    lineup: {
      formation: "3-5-2",
      players: [
        { name: "Oliver Kahn", displayName: "Oliver Kahn", position: "GK", ovr: 93, nation: "Alemanha", trait: "O Titã - Presença intimidadora absoluta" },
        { name: "Patrik Andersson", displayName: "P. Andersson", position: "DEF", ovr: 85, nation: "Suécia", trait: "Lançamento forte" },
        { name: "Samuel Kuffour", displayName: "S. Kuffour", position: "DEF", ovr: 86, nation: "Gana", trait: "Marcação física implacável" },
        { name: "Thomas Linke", displayName: "T. Linke", position: "DEF", ovr: 83, nation: "Alemanha", trait: "Sólido de estilo clássico" },
        { name: "Willy Sagnol", displayName: "W. Sagnol", position: "MID", ovr: 86, nation: "França", trait: "Fino e preciso no flanco direito" },
        { name: "Bixente Lizarazu", displayName: "B. Lizarazu", position: "MID", ovr: 88, nation: "França", trait: "Velocidade e agressividade na esquerda" },
        { name: "Jens Jeremies", displayName: "J. Jeremies", position: "MID", ovr: 84, nation: "Alemanha", trait: "Gladiador destrutivo central" },
        { name: "Stefan Effenberg", displayName: "S. Effenberg", position: "MID", ovr: 91, nation: "Alemanha", trait: "O Tigre - General autoritário do meio" },
        { name: "Mehmet Scholl", displayName: "M. Scholl", position: "MID", ovr: 88, nation: "Alemanha", trait: "Magia de drible e cobrador de falta" },
        { name: "Hasan Salihamidžić", displayName: "Salihamidžić", position: "ATK", ovr: 84, nation: "Bósnia", trait: "Entrega física de raça pura" },
        { name: "Giovane Élber", displayName: "Giovane Élber", position: "ATK", ovr: 88, nation: "Brasil", trait: "Faro e elegância brasileira na Bundesliga" }
      ],
      bench: [
        { name: "Stefan Wessels", displayName: "S. Wessels", position: "GK", ovr: 77, nation: "Alemanha", trait: "Goleiro reserva" },
        { name: "Ciriaco Sforza", displayName: "C. Sforza", position: "DEF", ovr: 81, nation: "Suíça", trait: "Experiente líbero" },
        { name: "Michael Tarnat", displayName: "M. Tarnat", position: "MID", ovr: 81, nation: "Alemanha", trait: "Chute forte de longe esquerdo" },
        { name: "Thorsten Fink", displayName: "T. Fink", position: "MID", ovr: 80, nation: "Alemanha", trait: "Combate tático" },
        { name: "Paulo Sérgio", displayName: "Paulo Sérgio", position: "ATK", ovr: 84, nation: "Brasil", trait: "Habilidade de drible rápido" },
        { name: "Carsten Jancker", displayName: "C. Jancker", position: "ATK", ovr: 83, nation: "Alemanha", trait: "Poder de choque de área" }
      ]
    }
  },
  {
    id: "leverkusen_2002",
    name: "Bayer Leverkusen",
    era: "2002",
    country: "Alemanha",
    achievement: "O lendário e trágico 'Vice' da Europa",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Hans-Jörg Butt", displayName: "Butt GK", position: "GK", ovr: 84, nation: "Alemanha", trait: "Batedor de pênaltis icônico" },
        { name: "Lúcio", displayName: "Lúcio", position: "DEF", ovr: 89, nation: "Brasil", trait: "Arrancadas espetaculares ao ataque" },
        { name: "Jens Nowotny", displayName: "J. Nowotny", position: "DEF", ovr: 86, nation: "Alemanha", trait: "Líder e xerife do miolo" },
        { name: "Diego Placente", displayName: "D. Placente", position: "DEF", ovr: 82, nation: "Argentina", trait: "Lateral-esquerdo clássico" },
        { name: "Boris Živković", displayName: "B. Živković", position: "DEF", ovr: 80, nation: "Croácia", trait: "Defensor tático" },
        { name: "Carsten Ramelow", displayName: "C. Ramelow", position: "MID", ovr: 84, nation: "Alemanha", trait: "Contenção de ferro central" },
        { name: "Michael Ballack", displayName: "M. Ballack", position: "MID", ovr: 92, nation: "Alemanha", trait: "Infiltração agressiva e poder aéreo" },
        { name: "Bernd Schneider", displayName: "B. Schneider", position: "MID", ovr: 88, nation: "Alemanha", trait: "O Brasileiro Branco de técnica fina" },
        { name: "Zé Roberto", displayName: "Zé Roberto", position: "MID", ovr: 88, nation: "Brasil", trait: "Velocidade e consistência tática" },
        { name: "Oliver Neuville", displayName: "O. Neuville", position: "ATK", ovr: 85, nation: "Alemanha", trait: "Mobilidade inteligente e oportunismo" },
        { name: "Yıldıray Baştürk", displayName: "Y. Baştürk", position: "ATK", ovr: 86, nation: "Turquia", trait: "Drible dinâmico por dentro" }
      ],
      bench: [
        { name: "Frank Juric", displayName: "F. Juric", position: "GK", ovr: 77, nation: "Austrália", trait: "Opção de banco" },
        { name: "Thomas Kleine", displayName: "T. Kleine", position: "DEF", ovr: 78, nation: "Alemanha", trait: "Zagueiro reserva" },
        { name: "Zoltán Sebescen", displayName: "Z. Sebescen", position: "DEF", ovr: 80, nation: "Alemanha", trait: "Marcador pelo flanco" },
        { name: "Thomas Brdarić", displayName: "T. Brdarić", position: "ATK", ovr: 81, nation: "Alemanha", trait: "Finalizador" },
        { name: "Dimitar Berbatov", displayName: "D. Berbatov", position: "ATK", ovr: 84, nation: "Bulgária", trait: "Elegância e classe juvenil" }
      ]
    }
  },

  // ==================== CAMPEONATO ESPANHOL ====================
  {
    id: "depor_2000",
    name: "Deportivo La Coruña",
    era: "2000",
    country: "Espanha",
    achievement: "Sensacional Campeão Espanhol de 2000 (Super Depor)",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Jacques Songo'o", displayName: "J. Songo'o", position: "GK", ovr: 84, nation: "Camarões", trait: "Reflexos felinos de copa" },
        { name: "Noureddine Naybet", displayName: "N. Naybet", position: "DEF", ovr: 87, nation: "Marrocos", trait: "Elegância e segurança de xerife" },
        { name: "Donato", displayName: "Donato", position: "DEF", ovr: 85, nation: "Espanha", trait: "Força na marcação de ferro veterana" },
        { name: "Manuel Pablo", displayName: "Manuel Pablo", position: "DEF", ovr: 84, nation: "Espanha", trait: "Regularidade no flanco direito" },
        { name: "Enrique Romero", displayName: "E. Romero", position: "DEF", ovr: 82, nation: "Espanha", trait: "Sólido na defesa esquerda" },
        { name: "Mauro Silva", displayName: "Mauro Silva", position: "MID", ovr: 91, nation: "Brasil", trait: "O polvo do equilíbrio tático mundial" },
        { name: "Flávio Conceição", displayName: "F. Conceição", position: "MID", ovr: 86, nation: "Brasil", trait: "Força dinâmica box-to-box" },
        { name: "Fran", displayName: "Fran", position: "MID", ovr: 86, nation: "Espanha", trait: "Capitão com refinada canhota" },
        { name: "Djalminha", displayName: "Djalminha", position: "MID", ovr: 91, nation: "Brasil", trait: "Fintas mágicas e audácia pura de mestre" },
        { name: "Víctor Sánchez", displayName: "Víctor", position: "ATK", ovr: 83, nation: "Espanha", trait: "Cortes rápidos pelo flanco" },
        { name: "Roy Makaay", displayName: "Roy Makaay", position: "ATK", ovr: 88, nation: "Holanda", trait: "O Fantasma - Um toque, um gol" }
      ],
      bench: [
        { name: "Petr Kouba", displayName: "P. Kouba", position: "GK", ovr: 79, nation: "Rep. Tcheca", trait: "Goleiro de apoio" },
        { name: "César Martín", displayName: "César Martín", position: "DEF", ovr: 81, nation: "Espanha", trait: "Defesa física" },
        { name: "Slaviša Jokanović", displayName: "S. Jokanović", position: "MID", ovr: 82, nation: "Iugoslávia", trait: "Combate central" },
        { name: "Victor", displayName: "Victor Sánchez", position: "MID", ovr: 81, nation: "Espanha", trait: "Habilidade de flanco" },
        { name: "Turu Flores", displayName: "Turu Flores", position: "ATK", ovr: 82, nation: "Argentina", trait: "Poder de choque de área" }
      ]
    }
  },
  {
    id: "valencia_2004",
    name: "Valencia",
    era: "2004",
    country: "Espanha",
    achievement: "Dobradinha de La Liga e UEFA sob o comando de Rafa Benítez",
    lineup: {
      formation: "4-2-3-1",
      players: [
        { name: "Santiago Cañizares", displayName: "S. Cañizares", position: "GK", ovr: 89, nation: "Espanha", trait: "Elasticidade com cabelos platinados" },
        { name: "Roberto Ayala", displayName: "R. Ayala", position: "DEF", ovr: 90, nation: "Argentina", trait: "Impulsão absurda e desarme no tempo" },
        { name: "Carlos Marchena", displayName: "C. Marchena", position: "DEF", ovr: 86, nation: "Espanha", trait: "Zagueiro de combate severo" },
        { name: "Curro Torres", displayName: "Curro Torres", position: "DEF", ovr: 81, nation: "Espanha", trait: "Sólido na marcação" },
        { name: "Amedeo Carboni", displayName: "A. Carboni", position: "DEF", ovr: 84, nation: "Itália", trait: "Guerreiro experiente do flanco" },
        { name: "David Albelda", displayName: "David Albelda", position: "MID", ovr: 86, nation: "Espanha", trait: "Destruição tática e liderança" },
        { name: "Rubén Baraja", displayName: "Rubén Baraja", position: "MID", ovr: 88, nation: "Espanha", trait: "Infiltração letal de área em área" },
        { name: "Gaizka Mendieta", displayName: "G. Mendieta", position: "MID", ovr: 90, nation: "Espanha", trait: "Meia completo de passes fantásticos" },
        { name: "Vicente Rodríguez", displayName: "Vicente", position: "ATK", ovr: 87, nation: "Espanha", trait: "Veloz ponta-esquerda clássico" },
        { name: "Rufete", displayName: "Rufete", position: "ATK", ovr: 82, nation: "Espanha", trait: "Trabalho tático ofensivo" },
        { name: "Mista", displayName: "Mista", position: "ATK", ovr: 85, nation: "Espanha", trait: "Faro de gol no ano de ouro" }
      ],
      bench: [
        { name: "Andrés Palop", displayName: "A. Palop", position: "GK", ovr: 81, nation: "Espanha", trait: "Reserva de luxo" },
        { name: "Mauricio Pellegrino", displayName: "M. Pellegrino", position: "DEF", ovr: 82, nation: "Argentina", trait: "Zagueiro seguro de área" },
        { name: "Mohamed Sissoko", displayName: "M. Sissoko", position: "MID", ovr: 81, nation: "Mali", trait: "Força física defensiva" },
        { name: "Pablo Aimar", displayName: "Pablo Aimar", position: "MID", ovr: 89, nation: "Argentina", trait: "El Payaso - Drible elétrico em espaços" },
        { name: "John Carew", displayName: "John Carew", position: "ATK", ovr: 83, nation: "Noruega", trait: "Pivô de grande porte" },
        { name: "Bernardo Corradi", displayName: "B. Corradi", position: "ATK", ovr: 79, nation: "Itália", trait: "Força física" }
      ]
    }
  },
  {
    id: "atletico_madrid_2014",
    name: "Atlético de Madrid",
    era: "2014",
    country: "Espanha",
    achievement: "Sensacional Campeão Espanhol e quebra de duopólio com Simeone",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Thibaut Courtois", displayName: "T. Courtois", position: "GK", ovr: 90, nation: "Bélgica", trait: "Gigante com alcance absurdo" },
        { name: "Diego Godín", displayName: "Diego Godín", position: "DEF", ovr: 91, nation: "Uruguai", trait: "Guerreiro implacável e herói do gol do título" },
        { name: "Miranda", displayName: "Miranda", position: "DEF", ovr: 87, nation: "Brasil", trait: "Frieza absoluta e cobertura perfeita" },
        { name: "Juanfran", displayName: "Juanfran", position: "DEF", ovr: 84, nation: "Espanha", trait: "Operário defensivo no flanco" },
        { name: "Filipe Luís", displayName: "Filipe Luís", position: "DEF", ovr: 88, nation: "Brasil", trait: "Marcação tática perfeita e apoio limpo" },
        { name: "Gabi", displayName: "Gabi", position: "MID", ovr: 86, nation: "Espanha", trait: "O Capitão e cérebro tático de combate" },
        { name: "Tiago Mendes", displayName: "Tiago", position: "MID", ovr: 84, nation: "Portugal", trait: "Visão tática e posicionamento" },
        { name: "Koke", displayName: "Koke", position: "MID", ovr: 87, nation: "Espanha", trait: "Garçom mestre da bola parada" },
        { name: "Arda Turan", displayName: "Arda Turan", position: "MID", ovr: 86, nation: "Turquia", trait: "Guarda da bola e raça infinita" },
        { name: "David Villa", displayName: "David Villa", position: "ATK", ovr: 86, nation: "Espanha", trait: "Classe lendária de goleador" },
        { name: "Diego Costa", displayName: "Diego Costa", position: "ATK", ovr: 89, nation: "Espanha", trait: "Estilo brigador letal" }
      ],
      bench: [
        { name: "Daniel Aranzubia", displayName: "D. Aranzubia", position: "GK", ovr: 78, nation: "Espanha", trait: "Segurança de banco" },
        { name: "Toby Alderweireld", displayName: "Alderweireld", position: "DEF", ovr: 82, nation: "Bélgica", trait: "Zagueiro seguro de banco" },
        { name: "Emiliano Insúa", displayName: "E. Insúa", position: "DEF", ovr: 79, nation: "Argentina", trait: "Reserva de apoio" },
        { name: "Mario Suárez", displayName: "M. Suárez", position: "MID", ovr: 82, nation: "Espanha", trait: "Meia marcador" },
        { name: "José Sosa", displayName: "J. Sosa", position: "MID", ovr: 81, nation: "Argentina", trait: "Apoio tático" },
        { name: "Adrián López", displayName: "Adrián", position: "ATK", ovr: 81, nation: "Espanha", trait: "Velocidade ofensiva" },
        { name: "Raúl García", displayName: "Raúl García", position: "ATK", ovr: 84, nation: "Espanha", trait: "Força aérea letal" }
      ]
    }
  },

  // ==================== CAMPEONATO INGLÊS ====================
  {
    id: "liverpool_2009",
    name: "Liverpool",
    era: "2009",
    country: "Inglaterra",
    achievement: "Campanha fantástica de 86 pontos na Premier League com Rafa Benítez",
    lineup: {
      formation: "4-2-3-1",
      players: [
        { name: "Pepe Reina", displayName: "Pepe Reina", position: "GK", ovr: 86, nation: "Espanha", trait: "Excelente saída de bola rasteira" },
        { name: "Jamie Carragher", displayName: "J. Carragher", position: "DEF", ovr: 87, nation: "Inglaterra", trait: "Xerife de Anfield" },
        { name: "Martin Škrtel", displayName: "M. Škrtel", position: "DEF", ovr: 84, nation: "Eslováquia", trait: "Zagueiro implacável físico" },
        { name: "Álvaro Arbeloa", displayName: "Á. Arbeloa", position: "DEF", ovr: 82, nation: "Espanha", trait: "Sólido lateral-direito" },
        { name: "Fabio Aurelio", displayName: "Fábio Aurélio", position: "DEF", ovr: 83, nation: "Brasil", trait: "Canhota refinada de falta" },
        { name: "Xabi Alonso", displayName: "Xabi Alonso", position: "MID", ovr: 90, nation: "Espanha", trait: "Passes longos teleguiados de classe" },
        { name: "Javier Mascherano", displayName: "J. Mascherano", position: "MID", ovr: 89, nation: "Argentina", trait: "O Chefe - Desarme cirúrgico" },
        { name: "Steven Gerrard", displayName: "S. Gerrard", position: "MID", ovr: 94, nation: "Inglaterra", trait: "O Capitão - Líder absoluto e chutes destruidores" },
        { name: "Albert Riera", displayName: "A. Riera", position: "MID", ovr: 81, nation: "Espanha", trait: "Regularidade no flanco" },
        { name: "Dirk Kuyt", displayName: "Dirk Kuyt", position: "ATK", ovr: 85, nation: "Holanda", trait: "Fôlego interminável de operário" },
        { name: "Fernando Torres", displayName: "Fernando Torres", position: "ATK", ovr: 92, nation: "Espanha", trait: "El Niño - Arranque imparável" }
      ],
      bench: [
        { name: "Diego Cavalieri", displayName: "D. Cavalieri", position: "GK", ovr: 78, nation: "Brasil", trait: "Reserva" },
        { name: "Daniel Agger", displayName: "D. Agger", position: "DEF", ovr: 83, nation: "Dinamarca", trait: "Técnica e elegância na zaga" },
        { name: "Lucas Leiva", displayName: "Lucas Leiva", position: "MID", ovr: 82, nation: "Brasil", trait: "Combate e contenção" },
        { name: "Yossi Benayoun", displayName: "Y. Benayoun", position: "MID", ovr: 84, nation: "Israel", trait: "Dribles rápidos em espaços" },
        { name: "Ryan Babel", displayName: "R. Babel", position: "ATK", ovr: 81, nation: "Holanda", trait: "Velocidade explosiva" }
      ]
    }
  },
  {
    id: "liverpool_2014",
    name: "Liverpool",
    era: "2014",
    country: "Inglaterra",
    achievement: "A emocionante e ofensiva campanha de Rodgers comandada por Suárez",
    lineup: {
      formation: "4-3-3",
      players: [
        { name: "Simon Mignolet", displayName: "S. Mignolet", position: "GK", ovr: 82, nation: "Bélgica", trait: "Reflexos na linha" },
        { name: "Martin Škrtel", displayName: "M. Škrtel", position: "DEF", ovr: 83, nation: "Eslováquia", trait: "Combate físico" },
        { name: "Mamadou Sakho", displayName: "M. Sakho", position: "DEF", ovr: 81, nation: "França", trait: "Força de desarme" },
        { name: "Glen Johnson", displayName: "G. Johnson", position: "DEF", ovr: 82, nation: "Inglaterra", trait: "Apoio pela direita" },
        { name: "Jon Flanagan", displayName: "J. Flanagan", position: "DEF", ovr: 79, nation: "Inglaterra", trait: "Garra de garoto local" },
        { name: "Steven Gerrard", displayName: "S. Gerrard", position: "MID", ovr: 88, nation: "Inglaterra", trait: "Regulador recuado com visão de jogo" },
        { name: "Jordan Henderson", displayName: "J. Henderson", position: "MID", ovr: 84, nation: "Inglaterra", trait: "Pulmão tático do meio" },
        { name: "Raheem Sterling", displayName: "R. Sterling", position: "MID", ovr: 86, nation: "Inglaterra", trait: "Velocidade elétrica de drible" },
        { name: "Philippe Coutinho", displayName: "Ph. Coutinho", position: "MID", ovr: 87, nation: "Brasil", trait: "Pequeno Mágico - Chute colocado de fora" },
        { name: "Daniel Sturridge", displayName: "D. Sturridge", position: "ATK", ovr: 87, nation: "Inglaterra", trait: "Frieza cirúrgica em frente ao gol" },
        { name: "Luis Suárez", displayName: "Luis Suárez", position: "ATK", ovr: 94, nation: "Uruguai", trait: "Pistoleiro imparável - Gênio oportunista" }
      ],
      bench: [
        { name: "Brad Jones", displayName: "B. Jones", position: "GK", ovr: 76, nation: "Austrália", trait: "Goleiro de banco" },
        { name: "Kolo Touré", displayName: "Kolo Touré", position: "DEF", ovr: 81, nation: "Costa do Marfim", trait: "Experiente defensor" },
        { name: "Daniel Agger", displayName: "D. Agger", position: "DEF", ovr: 81, nation: "Dinamarca", trait: "Opção de passe defensiva" },
        { name: "Joe Allen", displayName: "Joe Allen", position: "MID", ovr: 80, nation: "País de Gales", trait: "Passe curto limpo" },
        { name: "Iago Aspas", displayName: "I. Aspas", position: "ATK", ovr: 80, nation: "Espanha", trait: "Opção ofensiva" },
        { name: "Victor Moses", displayName: "V. Moses", position: "ATK", ovr: 80, nation: "Nigéria", trait: "Força no flanco" }
      ]
    }
  },
  {
    id: "tottenham_2011",
    name: "Tottenham",
    era: "2011",
    country: "Inglaterra",
    achievement: "Estreia mágica na Champions de Harry Redknapp",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Heurelho Gomes", displayName: "Gomes GK", position: "GK", ovr: 83, nation: "Brasil", trait: "Milagres em saltos de elasticidade" },
        { name: "William Gallas", displayName: "W. Gallas", position: "DEF", ovr: 84, nation: "França", trait: "Sólida experiência" },
        { name: "Michael Dawson", displayName: "M. Dawson", position: "DEF", ovr: 82, nation: "Inglaterra", trait: "Líder e combate de cabeça" },
        { name: "Vedran Ćorluka", displayName: "V. Ćorluka", position: "DEF", ovr: 81, nation: "Croácia", trait: "Zagueiro/lateral focado" },
        { name: "Benoît Assou-Ekotto", displayName: "Assou-Ekotto", position: "DEF", ovr: 82, nation: "Camarões", trait: "Apoio e carisma na lateral" },
        { name: "Tom Huddlestone", displayName: "Huddlestone", position: "MID", ovr: 82, nation: "Inglaterra", trait: "Canhão nos passes e chutes longos" },
        { name: "Luka Modrić", displayName: "Luka Modrić", position: "MID", ovr: 89, nation: "Croácia", trait: "Gênio croata de condução clássica" },
        { name: "Aaron Lennon", displayName: "A. Lennon", position: "MID", ovr: 83, nation: "Inglaterra", trait: "Velocidade pura no corredor direito" },
        { name: "Gareth Bale", displayName: "Gareth Bale", position: "MID", ovr: 89, nation: "País de Gales", trait: "Express da ala-esquerda de drible veloz" },
        { name: "Rafael van der Vaart", displayName: "R. van der Vaart", position: "MID", ovr: 87, nation: "Holanda", trait: "Meia-atacante com grande chute e técnica" },
        { name: "Peter Crouch", displayName: "Peter Crouch", position: "ATK", ovr: 84, nation: "Inglaterra", trait: "Torre de área temida no jogo aéreo" }
      ],
      bench: [
        { name: "Carlo Cudicini", displayName: "C. Cudicini", position: "GK", ovr: 79, nation: "Itália", trait: "Veterano seguro" },
        { name: "Younès Kaboul", displayName: "Y. Kaboul", position: "DEF", ovr: 80, nation: "França", trait: "Força física defensiva" },
        { name: "Wilson Palacios", displayName: "W. Palacios", position: "MID", ovr: 81, nation: "Honduras", trait: "Combate de ferro" },
        { name: "Jermaine Jenas", displayName: "J. Jenas", position: "MID", ovr: 80, nation: "Inglaterra", trait: "Corrida dinâmica" },
        { name: "Jermain Defoe", displayName: "J. Defoe", position: "ATK", ovr: 84, nation: "Inglaterra", trait: "Chute seco e rápido de área" },
        { name: "Roman Pavlyuchenko", displayName: "Pavlyuchenko", position: "ATK", ovr: 81, nation: "Rússia", trait: "Faro russo" }
      ]
    }
  },
  {
    id: "man_city_2012",
    name: "Manchester City",
    era: "2012",
    country: "Inglaterra",
    achievement: "O dramático e histórico título da Premier League (AGUEROOOO!)",
    lineup: {
      formation: "4-4-2",
      players: [
        { name: "Joe Hart", displayName: "Joe Hart", position: "GK", ovr: 86, nation: "Inglaterra", trait: "Excelente liderança" },
        { name: "Vincent Kompany", displayName: "V. Kompany", position: "DEF", ovr: 90, nation: "Bélgica", trait: "Capitão, líder e força intransponível" },
        { name: "Joleon Lescott", displayName: "J. Lescott", position: "DEF", ovr: 84, nation: "Inglaterra", trait: "Sólido marcador central" },
        { name: "Micah Richards", displayName: "M. Richards", position: "DEF", ovr: 83, nation: "Inglaterra", trait: "Força física e atleticismo na direita" },
        { name: "Gaël Clichy", displayName: "G. Clichy", position: "DEF", ovr: 83, nation: "França", trait: "Veloz na ala esquerda" },
        { name: "Yaya Touré", displayName: "Yaya Touré", position: "MID", ovr: 91, nation: "Costa do Marfim", trait: "Locomotiva - Potência física absurda com técnica" },
        { name: "Gareth Barry", displayName: "G. Barry", position: "MID", ovr: 83, nation: "Inglaterra", trait: "Equilíbrio e inteligência tática" },
        { name: "David Silva", displayName: "David Silva", position: "MID", ovr: 90, nation: "Espanha", trait: "El Mago - Passes e fintas em pequenos espaços" },
        { name: "Samir Nasri", displayName: "S. Nasri", position: "MID", ovr: 86, nation: "França", trait: "Rápido de raciocínio e visão de jogo" },
        { name: "Carlos Tévez", displayName: "Carlos Tévez", position: "ATK", ovr: 88, nation: "Argentina", trait: "Pressão defensiva e oportunismo" },
        { name: "Sergio Agüero", displayName: "Kun Agüero", position: "ATK", ovr: 92, nation: "Argentina", trait: "Frieza lendária na hora decisiva" }
      ],
      bench: [
        { name: "Costel Pantilimon", displayName: "Pantilimon", position: "GK", ovr: 77, nation: "Romênia", trait: "Altura gigante" },
        { name: "Kolo Touré", displayName: "Kolo Touré", position: "DEF", ovr: 82, nation: "Costa do Marfim", trait: "Xerife de banco" },
        { name: "Pablo Zabaleta", displayName: "P. Zabaleta", position: "DEF", ovr: 84, nation: "Argentina", trait: "Raça argentina e raça na lateral" },
        { name: "James Milner", displayName: "J. Milner", position: "MID", ovr: 83, nation: "Inglaterra", trait: "Polivalente e tático" },
        { name: "Nigel de Jong", displayName: "N. de Jong", position: "MID", ovr: 84, nation: "Holanda", trait: "Destruidor central puro" },
        { name: "Edin Džeko", displayName: "Edin Džeko", position: "ATK", ovr: 86, nation: "Bósnia", trait: "Super-reserva de gols decisivos" },
        { name: "Mario Balotelli", displayName: "M. Balotelli", position: "ATK", ovr: 85, nation: "Itália", trait: "Assistência do título e imprevisível" }
      ]
    }
  },
  {
    id: "aston_villa_1996",
    name: "Aston Villa",
    era: "1996",
    country: "Inglaterra",
    achievement: "Campeão da Copa da Liga Inglesa e top de elite inglesa",
    lineup: {
      formation: "5-3-2",
      players: [
        { name: "Mark Bosnich", displayName: "M. Bosnich", position: "GK", ovr: 84, nation: "Austrália", trait: "Pegador de pênaltis fantástico" },
        { name: "Paul McGrath", displayName: "Paul McGrath", position: "DEF", ovr: 87, nation: "Irlanda", trait: "Elegância defensiva icônica e lenda" },
        { name: "Ugo Ehiogu", displayName: "U. Ehiogu", position: "DEF", ovr: 83, nation: "Inglaterra", trait: "Forte no jogo aéreo" },
        { name: "Gareth Southgate", displayName: "G. Southgate", position: "DEF", ovr: 83, nation: "Inglaterra", trait: "Organização central e liderança" },
        { name: "Gary Charles", displayName: "G. Charles", position: "DEF", ovr: 80, nation: "Inglaterra", trait: "Lateral regular" },
        { name: "Alan Wright", displayName: "Alan Wright", position: "DEF", ovr: 81, nation: "Inglaterra", trait: "Regularidade no flanco esquerdo" },
        { name: "Andy Townsend", displayName: "A. Townsend", position: "MID", ovr: 83, nation: "Irlanda", trait: "Líder e força de combate" },
        { name: "Ian Taylor", displayName: "Ian Taylor", position: "MID", ovr: 82, nation: "Inglaterra", trait: "Infiltração de meio-campo" },
        { name: "Mark Draper", displayName: "Mark Draper", position: "MID", ovr: 81, nation: "Inglaterra", trait: "Passe refinado" },
        { name: "Dwight Yorke", displayName: "Dwight Yorke", position: "ATK", ovr: 87, nation: "Trinidad e Tobago", trait: "Classe fantástica de drible curto" },
        { name: "Savo Milošević", displayName: "S. Milošević", position: "ATK", ovr: 84, nation: "Sérvia", trait: "Chute potente de canhota" }
      ],
      bench: [
        { name: "Michael Oakes", displayName: "M. Oakes", position: "GK", ovr: 77, nation: "Inglaterra", trait: "Reserva de apoio" },
        { name: "Steve Staunton", displayName: "S. Staunton", position: "DEF", ovr: 82, nation: "Irlanda", trait: "Polivalente com grande pé esquerdo" },
        { name: "Tommy Johnson", displayName: "T. Johnson", position: "MID", ovr: 79, nation: "Inglaterra", trait: "Dedicado operário" },
        { name: "Lee Hendrie", displayName: "L. Hendrie", position: "MID", ovr: 80, nation: "Inglaterra", trait: "Jovem ágil" },
        { name: "Julian Joachim", displayName: "J. Joachim", position: "ATK", ovr: 81, nation: "Inglaterra", trait: "Velocidade explosiva reserva" }
      ]
    }
  }
];

// Recompensas de Colecionismo: Figurinhas virtuais (Cromos Faceless)
export const RETRO_STICKERS = [
  { id: "stk_r9", name: "Ronaldo R9 (1998)", rarity: "GOAT", desc: "O Fenômeno em sua velocidade máxima na Copa da França." },
  { id: "stk_zidane", name: "Zidane (1998)", rarity: "GOAT", desc: "O Maestro francês no ano de sua consagração de ouro." },
  { id: "stk_maradona", name: "Maradona (1990)", rarity: "GOAT", desc: "O gênio argentino levando o Napoli ao Scudetto." },
  { id: "stk_maldini", name: "Maldini (1994)", rarity: "Lendário", desc: "A elegância personificada em San Siro." },
  { id: "stk_romario", name: "Romário (1994)", rarity: "GOAT", desc: "O gênio da pequena área e protagonista do Tetra." },
  { id: "stk_batigol", name: "Batistuta (2001)", rarity: "Lendário", desc: "Grito de gol inesquecível na conquista de Roma." },
  { id: "stk_henry", name: "Thierry Henry (2004)", rarity: "Lendário", desc: "O rei invencível do Arsenal clássico." },
  { id: "stk_adriano", name: "Adriano Imperador (2006)", rarity: "Elite", desc: "O auge da força física e chutes demolidores." },
  { id: "stk_gerrard", name: "Steven Gerrard (2005)", rarity: "Lendário", desc: "Milagre histórico de Istambul com o Liverpool." },
  { id: "stk_nedved", name: "Nedved (2003)", rarity: "Lendário", desc: "Fúria tcheca e motor dinâmico da Juventus." },
  { id: "stk_jardel", name: "Mário Jardel (1999)", rarity: "Lendário", desc: "Máquina implacável de cabecear do Porto." },
  { id: "stk_juninho", name: "Juninho Pernambucano (2005)", rarity: "Lendário", desc: "Trajetória perfeita na bola parada com o Lyon." }
];