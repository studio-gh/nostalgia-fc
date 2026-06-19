import React, { useState } from 'react';
import { executarSorteioDraft, gerarCopaAdversarios } from './motor';
import './App.css';

// Lista de posições que o usuário precisa preencher
const posicoesOrdem = ['GOL', 'ZAG', 'ZAG', 'MEI', 'MEI', 'ATA', 'ATA'];
const ORCAMENTO_INICIAL = 100;

function App() {
  // Estados do Jogo
  const [faseJogo, setFaseJogo] = useState('SELECAO_LIGA');
  const [ligaSelecionada, setLigaSelecionada] = useState(null);
  const [orcamento, setOrcamento] = useState(ORCAMENTO_INICIAL);
  const [timeUsuario, setTimeUsuario] = useState([]);
  const [posicaoAtualIndex, setPosicaoAtualIndex] = useState(0);
  const [listaJogadoresGlobal, setListaJogadoresGlobal] = useState([]); // Populado com seus dados de jogadores.js

  // 1. Iniciar o Draft após escolher a Liga
  const selecionarLiga = (liga) => {
    setLigaSelecionada(liga);
    setFaseJogo('DRAFT');
  };

  // 2. Lógica de Escolha (Chamada após o sorteio)
  const processarEscolhaJogador = (jogadorSorteado) => {
    // Verifica a trava de Salary Cap
    if (jogadorSorteado.cost > orcamento) {
      alert("Orçamento insuficiente para este jogador!");
      return;
    }

    // Adiciona ao time e desconta o orçamento
    const novoTime = [...timeUsuario, jogadorSorteado];
    setTimeUsuario(novoTime);
    setOrcamento(orcamento - jogadorSorteado.cost);

    // Avança no Loop de Posições
    if (posicaoAtualIndex + 1 < posicoesOrdem.length) {
      setPosicaoAtualIndex(posicaoAtualIndex + 1);
    } else {
      // Draft Finalizado com Sucesso
      finalizarDraft(novoTime);
    }
  };

  const finalizarDraft = (timeFinal) => {
    // Chama o motor para gerar a Copa filtrando pela liga correta
    const adversarios = gerarCopaAdversarios(ligaSelecionada);
    console.log("Adversários Gerados para a Copa:", adversarios);
    setFaseJogo('MENU_PRINCIPAL');
  };

  return (
    <div className="game-container">
      {/* Topbar Padrão Nostalgia FC */}
      <header className="topbar">
        <div className="nfc-logo">
          <div className="crest">N</div>
          <div className="word">NOSTALGIA<span>FC</span></div>
        </div>
      </header>

      {/* TELA 1: SELEÇÃO DE LIGA */}
      {faseJogo === 'SELECAO_LIGA' && (
        <div className="home-hero">
          <span className="home-tag">Temporada Ativa</span>
          <h1 className="home-title">Escolha a sua<br/>Liga Clássica</h1>
          <p className="home-sub">Monte seu esquadrão lendário dos anos 90 e 2000.</p>
          
          <button 
            className="btn-primary btn-liga-italia" 
            onClick={() => selecionarLiga('ITÁLIA')}
          >
            SÉRIE A (ITÁLIA)
          </button>

          <button 
            className="btn-primary btn-liga-espanha" 
            onClick={() => selecionarLiga('ESPANHA')}
          >
            LA LIGA (ESPANHA)
          </button>
        </div>
      )}

      {/* TELA 2: ENGINE DE DRAFT */}
      {faseJogo === 'DRAFT' && (
        <div className="home-hero">
          <span className="home-tag">Liga: {ligaSelecionada}</span>
          <h1 className="home-title">Draft de Elenco</h1>
          
          <div className="draft-stage">
            <div className="draft-info">
              Próxima Posição: <span>{posicoesOrdem[posicaoAtualIndex]}</span>
            </div>
            <div className="draft-info">
              Orçamento: <span>{orcamento}M</span>
            </div>
            
            <button 
              className="btn-primary"
              onClick={() => executarSorteioDraft(
                orcamento, 
                listaJogadoresGlobal, 
                (j) => console.log("Sorteando:", j.name), 
                () => processarEscolhaJogador({name: "Jogador X", cost: 10, posicao: posicoesOrdem[posicaoAtualIndex]}) // Exemplo de Mock do motor
              )}
            >
              Sortear Jogador
            </button>
          </div>
        </div>
      )}

      {/* TELA 3: MENU PRINCIPAL */}
      {faseJogo === 'MENU_PRINCIPAL' && (
        <div className="home-hero">
          <span className="home-tag">Draft Concluído</span>
          <h1 className="home-title">Time Montado!</h1>
          <p className="home-sub">Prepare-se para disputar a Copa Oficial.</p>
          
          <button className="btn-primary" onClick={() => setFaseJogo('SELECAO_LIGA')}>
            Jogar Novamente
          </button>
        </div>
      )}
    </div>
  );
}

export default App;