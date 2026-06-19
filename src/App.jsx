import React, { useState } from 'react';
import { gerarCopaAdversarios } from './motor'; 
import './App.css';

const FORMACOES = {
  '4-4-2': {
    ataque: ['ATA', 'ATA'],
    meio: ['MEI', 'MEI', 'MEI', 'MEI'],
    defesa: ['ZAG', 'ZAG', 'ZAG', 'ZAG'],
    goleiro: ['GOL']
  },
  '4-3-3': {
    ataque: ['ATA', 'ATA', 'ATA'],
    meio: ['MEI', 'MEI', 'MEI'],
    defesa: ['ZAG', 'ZAG', 'ZAG', 'ZAG'],
    goleiro: ['GOL']
  }
};

const ORCAMENTO_INICIAL = 100;

function App() {
  const [faseJogo, setFaseJogo] = useState('SELECAO_LIGA');
  const [ligaSelecionada, setLigaSelecionada] = useState(null);
  const [orcamento, setOrcamento] = useState(ORCAMENTO_INICIAL);
  const [formacao, setFormacao] = useState('4-4-2');
  const [titulares, setTitulares] = useState({});
  const [reservas, setReservas] = useState(Array(5).fill(null));
  const [modalAberto, setModalAberto] = useState(false);
  const [slotAlvo, setSlotAlvo] = useState(null); 
  const [opcoesSorteadas, setOpcoesSorteadas] = useState([]);

  const selecionarLiga = (liga) => {
    setLigaSelecionada(liga);
    setFaseJogo('DRAFT');
  };

  const abrirSorteioParaSlot = (tipo, id, posicao) => {
    setSlotAlvo({ tipo, id, posicao });
    const bancoMock = [
      { id: 1, name: 'Ronaldo', cost: 25, rating: 94, position: 'ATA' },
      { id: 2, name: 'Zidane', cost: 22, rating: 92, position: 'MEI' },
      { id: 3, name: 'Maldini', cost: 20, rating: 93, position: 'ZAG' },
      { id: 4, name: 'Buffon', cost: 18, rating: 90, position: 'GOL' }
    ].filter(j => j.position === posicao);

    const prontas = bancoMock.length > 0 ? bancoMock : [{ id: 99, name: `Craque ${posicao}`, cost: 12, rating: 85, position: posicao }];
    setOpcoesSorteadas(prontas);
    setModalAberto(true);
  };

  const escolherJogador = (jogador) => {
    if (jogador.cost > orcamento) {
      alert("Orçamento insuficiente!");
      return;
    }
    setOrcamento(prev => prev - jogador.cost);
    if (slotAlvo.tipo === 'titular') {
      setTitulares(prev => ({ ...prev, [slotAlvo.id]: jogador }));
    } else {
      const novosReservas = [...reservas];
      novosReservas[slotAlvo.id] = jogador;
      setReservas(novosReservas);
    }
    setModalAberto(false);
  };

  const verificarFimDoDraft = () => {
    if (Object.keys(titulares).length === 11 && reservas.filter(r => r !== null).length === 5) {
      gerarCopaAdversarios(ligaSelecionada === 'ITÁLIA' ? 'Série A' : 'La Liga');
      setFaseJogo('MENU_PRINCIPAL');
    } else {
      alert("Preencha todos os 11 titulares e os 5 reservas!");
    }
  };

  return (
    <div className="game-container">
      <header className="topbar">
        <div className="nfc-logo">
          <div className="crest">N</div>
          <div className="word">NOSTALGIA<span>FC</span></div>
        </div>
      </header>

      {faseJogo === 'SELECAO_LIGA' && (
        <div className="home-hero">
          <h1 className="home-title">Escolha sua Liga</h1>
          <button className="btn-primary" onClick={() => selecionarLiga('ITÁLIA')}>SÉRIE A (ITÁLIA)</button>
          <button className="btn-primary" onClick={() => selecionarLiga('ESPANHA')} style={{marginTop: '10px'}}>LA LIGA (ESPANHA)</button>
        </div>
      )}

      {faseJogo === 'DRAFT' && (
        <div>
          <div className="tactic-selector">
            <button className={`btn-tactic ${formacao === '4-4-2' ? 'active' : ''}`} onClick={() => setFormacao('4-4-2')}>4-4-2</button>
            <button className={`btn-tactic ${formacao === '4-3-3' ? 'active' : ''}`} onClick={() => setFormacao('4-3-3')}>4-3-3</button>
          </div>
          <div className="hud-info"><div>Liga: <span>{ligaSelecionada}</span></div><div>Orçamento: <span>{orcamento}M</span></div></div>
          
          <div className="soccer-field">
            {Object.keys(FORMACOES[formacao]).map(setor => (
              <div key={setor} className="field-row">
                {FORMACOES[formacao][setor].map((pos, i) => {
                  const key = `${setor}_${i}`;
                  const j = titulares[key];
                  return (
                    <div key={key} className={`player-slot ${j ? 'filled' : ''}`} onClick={() => abrirSorteioParaSlot('titular', key, pos)}>
                      <span className="pos-tag">{pos}</span>
                      {j ? <><span className="p-name">{j.name}</span><span className="p-cost">{j.cost}M</span></> : <span>+</span>}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          <div className="substitutes-container">
            <div className="substitutes-title">Banco de Reservas</div>
            <div className="substitutes-grid">
              {reservas.map((j, idx) => (
                <div key={idx} className={`player-slot ${j ? 'filled' : ''}`} onClick={() => abrirSorteioParaSlot('reserva', idx, 'MEI')}>
                  <span className="pos-tag">{j ? j.position : 'RES'}</span>
                  {j ? <><span className="p-name">{j.name}</span></> : <span>+</span>}
                </div>
              ))}
            </div>
          </div>
          <button className="btn-primary" style={{marginTop: '20px'}} onClick={verificarFimDoDraft}>FINALIZAR ELENCO</button>
        </div>
      )}

      {modalAberto && (
        <div className="draft-options-overlay">
          <div className="draft-modal">
            <button className="btn-close-modal" onClick={() => setModalAberto(false)}>X</button>
            <h3>Sorteio</h3>
            {opcoesSorteadas.map((j) => (
              <div key={j.id} className="option-card" onClick={() => escolherJogador(j)}>
                <strong>{j.name}</strong> <span>{j.cost}M</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;