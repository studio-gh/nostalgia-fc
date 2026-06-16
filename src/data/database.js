// src/data/database.js

/**
 * BANCO DE DADOS OFICIAL - NOSTALGIA FC
 * Estrutura aprimorada com indicação de país para cada clube.
 */

export const CLUBES = [
  {
    id: "MILAN_94",
    nome: "Milan",
    pais: "Itália",
    ano: 1994,
    jogadores: [
      { id: 1, nome: "Franco Baresi", pos: "DEF", ovr: 96 },
      { id: 2, nome: "Paolo Maldini", pos: "DEF", ovr: 97 },
      { id: 3, nome: "Dejan Savićević", pos: "MID", ovr: 94 }
    ]
  },
  {
    id: "SAOPAULO_92",
    nome: "São Paulo",
    pais: "Brasil",
    ano: 1992,
    jogadores: [
      { id: 4, nome: "Raí", pos: "MID", ovr: 95 },
      { id: 5, nome: "Cafu", pos: "DEF", ovr: 93 },
      { id: 6, nome: "Zetti", pos: "GK", ovr: 92 }
    ]
  },
  {
    id: "REAL_02",
    nome: "Real Madrid",
    pais: "Espanha",
    ano: 2002,
    jogadores: [
      { id: 7, nome: "Ronaldo Fenômeno", pos: "ATK", ovr: 99 },
      { id: 8, nome: "Zidane", pos: "MID", ovr: 98 },
      { id: 9, nome: "Roberto Carlos", pos: "DEF", ovr: 95 }
    ]
  }
];

// Sinergias históricas (Bônus de entrosamento)
export const DYNAMIC_DUOS = [
  { players: ["Romário", "Bebeto"], description: "Dupla do Tetra 94" },
  { players: ["Ronaldo", "Ronaldinho Gaúcho"], description: "Dupla dos R's" }
];

// Lendas para o sistema de sorteio (com país de origem para busca)
export const LENDAS = [
  { id: "stk_maradona", name: "Maradona", pais: "Argentina", rarity: "GOAT" },
  { id: "stk_maldini", name: "Maldini", pais: "Itália", rarity: "Lendário" }
];