import React, { useState, useEffect, useRef } from 'react';

/**
 * Módulo de Simulação de Partida - Nostalgia FC (v12)
 * Gerencia o loop minuto a minuto com controle de velocidade, 
 * calibração de narrativas de eventos e regras de torneio.
 */
export default function MatchEngine({ 
  teamA, // Seu time montado no Draft
  teamB, // Adversário clássico sorteado
  currentPhase, // 'Grupos', 'Oitavas', 'Quartas', 'Semis', 'Grande Final'
  onMatchEnd // Callback disparado ao consolidar o resultado final
}) {
  // Estados do Placar e Tempo
  const [minute, setMinute] = useState(0);
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [matchFinished, setMatchFinished] = useState(false);
  
  // Estado de Velocidade da Simulação (1x = 1000ms, 2x = 500ms)
  const [speed, setSpeed] = useState(1); // 1 para 1x, 2 para 2x
  
  // Feed de eventos da transmissão retrô
  const [eventsFeed, setEventsFeed] = useState([]);
  const [momentum, setMomentum] = useState(50); // Balanceamento de pressão (0-100)

  // Referência para persistir o timer do setInterval
  const intervalRef = useRef(null);

  // Pool Calibrada de Eventos Narrativos (Substituídos os gols de trivela irreais)
  const goalTypesA = [
    `GOLAÇO! {player} acerta uma cabeçada fulminante no ângulo!`,
    `QUE JOGADA! {player} recebe em velocidade e bate cruzado, sem chances pro goleiro!`,
    `MÁGICA PURA! {player} vê o goleiro adiantado e faz um gol de cobertura antológico!`,
    `DE PRIMEIRA! {player} pega o cruzamento de sem-pulo e estufa as redes!`
  ];

  const goalTypesB = [
    `Gol do adversário. O atacante deles cabeceia firme após cobrança de escanteio.`,
    `Gol deles. Em contra-ataque rápido, finalização rasteira no canto esquerdo.`,
    `Gol do rival. Chute de fora da área que desvia na zaga e engana o goleiro.`
  ];

  const neutralEvents = [
    "Jogo truncado no meio de campo. Muita disposição física e camisas suadas.",
    "A torcida canta alto nas arquibancadas de cimento! Clima de decisão!",
    "Dividida ríspida! O árbitro conversa com os atletas, mantendo o critério da era pré-VAR.",
    "Cruzamento na área e a defesa afasta o perigo de soco.",
    "Pausa para atendimento médico rápido. O jogo segue pegando fogo."
  ];

  // Iniciar ou Pausar a Partida Minuto a Minuto
  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  // Efeito que controla o loop Minute-by-Minute baseado na velocidade selecionada
  useEffect(() => {
    if (isPlaying && minute < 90) {
      const intervalDuration = speed === 2 ? 400 : 800; // Milissegundos por minuto simulado
      
      intervalRef.current = setInterval(() => {
        setMinute((prevMinute) => {
          const nextMinute = prevMinute + 1;
          processMinuteEvent(nextMinute);
          
          if (nextMinute >= 90) {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            setMatchFinished(true);
          }
          return nextMinute;
        });
      }, intervalDuration);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPlaying, minute, speed]);

  // Processa a probabilidade de eventos a cada minuto simulado
  const processMinuteEvent = (currentMin) => {
    const chance = Math.random();
    
    // Atualização dinâmica de Momentum simulada
    const momentumShift = Math.floor(Math.random() * 21) - 10;
    setMomentum(prev => Math.max(10, Math.min(90, prev + momentumShift)));

    // 6% de chance de gol na partida (3% para cada lado, balanceado)
    if (chance < 0.03) {
      // Gol do Time A
      setScoreA(prev => prev + 1);
      const randomPlayer = teamA?.players ? teamA.players[Math.floor(Math.random() * teamA.players.length)].name : "O craque";
      const eventText = goalTypesA[Math.floor(Math.random() * goalTypesA.length)].replace("{player}", randomPlayer);
      addEventToFeed(currentMin, `⚽ ${eventText}`);
    } else if (chance >= 0.03 && chance < 0.06) {
      // Gol do Time B
      setScoreB(prev => prev + 1);
      const eventText = goalTypesB[Math.floor(Math.random() * goalTypesB.length)];
      addEventToFeed(currentMin, `⚠️ ${eventText}`);
    } else if (chance > 0.45 && chance < 0.50) {
      // Evento Neutro Narrativo
      const eventText = neutralEvents[Math.floor(Math.random() * neutralEvents.length)];
      addEventToFeed(currentMin, `💬 ${eventText}`);
    }
  };

  const addEventToFeed = (min, text) => {
    setEventsFeed(prev => [{ min, text }, ...prev]);
  };

  // FUNÇÃO: Simular Direto (Interrompe o loop visual instantaneamente e calcula o consolidado)
  const handleInstantSimulation = () => {
    clearInterval(intervalRef.current);
    setIsPlaying(false);

    // Calcula os minutos restantes de forma matemática direta
    let remainingMinutes = 90 - minute;
    let finalScoreA = scoreA;
    let finalScoreB = scoreB;

    for (let i = 0; i < remainingMinutes; i++) {
      const chance = Math.random();
      if (chance < 0.03) finalScoreA++;
      else if (chance >= 0.03 && chance < 0.06) finalScoreB++;
    }

    setScoreA(finalScoreA);
    setScoreB(finalScoreB);
    setMinute(90);
    setMatchFinished(true);
    addEventToFeed(90, "🏁 Apito final! Partida encerrada via Simulação Direta.");
  };

  // Dispara o callback de encerramento enviando os dados consolidados para o fluxo principal
  const handleAdvanceCampaign = () => {
    if (onMatchEnd) {
      onMatchEnd({
        scoreA,
        scoreB,
        phase: currentPhase,
        finished: true
      });
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#F4F1EA] border-4 border-[#1A1A1A] p-6 shadow-[8px_8px_0px_0px_#1A1A1A] text-[#1A1A1A]">
      
      {/* CABEÇALHO DO MÓDULO - ESTILO TRANSMISSÃO DE TV RETRÔ */}
      <div className="bg-[#1A1A1A] text-[#F4F1EA] p-4 flex justify-between items-center rounded mb-6">
        <div className="flex items-center gap-3">
          <span className="bg-red-600 px-2 py-0.5 text-xs font-bold uppercase animate-pulse">AO VIVO</span>
          <h2 className="font-sans font-black tracking-wider text-xl uppercase">TRANSMISSÃO DA COPA</h2>
        </div>
        <div className="font-mono text-sm uppercase bg-[#333] px-3 py-1 rounded">
          Fase: <span className="text-yellow-400 font-bold">{currentPhase}</span>
        </div>
      </div>

      {/* PLACAR ELETRÔNICO */}
      <div className="grid grid-cols-3 items-center border-b-4 border-[#1A1A1A] pb-6 mb-6">
        <div className="text-center">
          <h3 className="font-sans font-black text-2xl uppercase tracking-tight truncate">{teamA?.name || "SEU ELENCO"}</h3>
          <span className="text-xs font-mono uppercase text-gray-600">Mandante</span>
        </div>
        
        <div className="text-center bg-[#1A1A1A] text-[#F4F1EA] py-3 px-4 rounded shadow-inner">
          <div className="font-mono font-black text-4xl tracking-widest">
            {scoreA} <span className="text-gray-500 text-2xl">:</span> {scoreB}
          </div>
          <div className="text-emerald-400 font-mono text-lg font-bold mt-1">
            {minute === 90 ? "FIM" : `${minute}'`}
          </div>
        </div>

        <div className="text-center">
          <h3 className="font-sans font-black text-2xl uppercase tracking-tight truncate">{teamB?.name || "RIVAL CLÁSSICO"}</h3>
          <span className="text-xs font-mono uppercase text-gray-600">Visitante</span>
        </div>
      </div>

      {/* BARRA DE MOMENTUM DINÂMICA */}
      <div className="mb-6">
        <div className="flex justify-between text-xs font-mono uppercase mb-1">
          <span>Pressão {teamA?.name || "Equipe A"}</span>
          <span>Pressão {teamB?.name || "Equipe B"}</span>
        </div>
        <div className="w-full bg-gray-300 h-4 border-2 border-[#1A1A1A] overflow-hidden rounded-sm">
          <div 
            className="bg-[#1A1A1A] h-full transition-all duration-300"
            style={{ width: `${momentum}%` }}