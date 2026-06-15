import React from 'react';

/**
 * Componente Poster (Pôster Colecionador de Fim de Campanha) - Nostalgia FC (v12)
 * Desenha a tela de consagração ou encerramento da campanha estilo encarte de revista.
 * Totalmente blindado com try/catch e fallbacks para evitar telas em branco.
 */
export default function Poster({ 
  campaignData, // { clubName: '...', totalGoals: 12, mvpPlayer: {...}, campaignResult: 'CHAMPION' | 'ELIMINATED', squad: [...] }
  onResetCampaign // Callback para reiniciar o loop do jogo
}) {
  
  // 1. SISTEMA DE BLINDAGEM E FALLBACKS ESTRUTURADOS
  let posterSpecs = {
    clubName: "ESQUADRÃO CLÁSSICO",
    totalGoals: 0,
    mvpName: "Lenda Indefinida",
    mvpRating: 90,
    mvpPosition: "ST",
    isChampion: false,
    titleManchete: "FIM DE JORNADA"
  };

  try {
    if (campaignData) {
      // Validação do nome do clube
      if (campaignData.clubName && typeof campaignData.clubName === 'string') {
        posterSpecs.clubName = campaignData.clubName.toUpperCase();
      }

      // Validação de Gols do Elenco
      if (campaignData.totalGoals !== undefined && campaignData.totalGoals !== null) {
        const goalsParsed = parseInt(campaignData.totalGoals, 10);
        posterSpecs.totalGoals = isNaN(goalsParsed) ? 0 : goalsParsed;
      } else if (campaignData.squad && Array.isArray(campaignData.squad)) {
        // Fallback dinâmico: tenta calcular somando gols dos jogadores se houver essa propriedade
        posterSpecs.totalGoals = campaignData.squad.reduce((acc, p) => acc + (p.goals || 0), 0);
      }

      // Validação e Extração Cirúrgica do MVP
      if (campaignData.mvpPlayer && typeof campaignData.mvpPlayer === 'object') {
        posterSpecs.mvpName = campaignData.mvpPlayer.name || "Craque do Time";
        posterSpecs.mvpRating = campaignData.mvpPlayer.rating || 90;
        posterSpecs.mvpPosition = campaignData.mvpPlayer.position || "CF";
      } else if (campaignData.squad && Array.isArray(campaignData.squad) && campaignData.squad.length > 0) {
        // Fallback dinâmico do MVP: Se não veio definido, assume o jogador de maior rating do elenco
        const topPlayer = [...campaignData.squad].sort((a, b) => (b.rating || 0) - (a.rating || 0))[0];
        if (topPlayer) {
          posterSpecs.mvpName = topPlayer.name;
          posterSpecs.mvpRating = topPlayer.rating;
          posterSpecs.mvpPosition = topPlayer.position;
        }
      }

      // Validação do Status de Resultado da Copa
      posterSpecs.isChampion = campaignData.campaignResult === "CHAMPION";
      posterSpecs.titleManchete = posterSpecs.isChampion ? "IMORTALIZADO!" : "HONRA AO MÉRITO";
    }
  } catch (error) {
    console.error("Erro crítico contido no gerador do Pôster V12:", error);
    // O fluxo continua sem travar a UI, utilizando as propriedades default seguras acima
  }

  return (
    <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-6 p-4">
      
      {/* CARD DO PÔSTER - FORMATO VERTICAL DE IMPRENSA */}
      <div className="w-full bg-[#F4F1EA] border-8 border-[#1A1A1A] p-6 shadow-[12px_12px_0px_0px_#1A1A1A] relative overflow-hidden flex flex-col justify-between aspect-[3/4] select-none rounded-sm">
        
        {/* TEXTURAS RETRÔ EM BACKGROUND (Linhas de corte de gráfica) */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5 border-2 border-dashed border-[#1A1A1A] m-1"></div>

        {/* TOP COMPONENT: MANCHETE DE BANCA */}
        <div className="w-full text-center border-b-4 border-[#1A1A1A] pb-4 z-10">
          <div className="text-[10px] font-mono font-black uppercase tracking-widest text-red-600 mb-1">
            EDIÇÃO HISTÓRICA DE COLECIONADOR
          </div>
          <h1 className="font-sans font-black text-5xl md:text-6xl text-[#1A1A1A] tracking-tighter uppercase leading-none">
            {posterSpecs.titleManchete}
          </h1>
          <p className="font-mono text-xs uppercase text-gray-600 mt-2 tracking-tight">
            Campanha oficial realizada na Era Pré-VAR • Nostalgia FC
          </p>
        </div>

        {/* CORPO CENTRAL: SELO E EMBLEMA DO CLUBE */}
        <div className="my-auto py-6 flex flex-col items-center text-center z-10">
          <span className="text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">DRAFT DE OURO MONSTADO:</span>
          <h2 className="font-sans font-black text-3xl md:text-4xl bg-[#1A1A1A] text-[#F4F1EA] px-4 py-2 uppercase tracking-tight rounded-sm max-w-full break-words">
            {posterSpecs.clubName}
          </h2>

          {/* DISTINTIVO DE SUCESSO */}
          <div className="mt-6 w-24 h-24 rounded-full border-4 border-dashed border-[#1A1A1A] flex flex-col items-center justify-center bg-white shadow-inner transform -rotate-6">
            <span className="text-2xl">🏆</span>
            <span className="font-mono text-[10px] font-black mt-1 text-[#1A1A1A]">
              {posterSpecs.isChampion ? "CAMPEÃO" : "FINALISTA"}
            </span>
          </div>
        </div>

        {/* BOTTOM COMPONENT: QUADRO DE MÉTRICAS E CRÍTICA RETRÔ */}
        <div className="w-full bg-white border-2 border-[#1A1A1A] p-4 grid grid-cols-2 gap-4 divide-x-2 divide-[#1A1A1A] shadow-[4px_4px_0px_0px_#1A1A1A] z-10">
          
          {/* Coluna A: Estatísticas de Ataque */}
          <div className="flex flex-col justify-center pr-2">
            <span className="text-[10px] font-mono text-gray-500 uppercase leading-none mb-1">Gols Totais</span>
            <div className="flex items-baseline gap-1">
              <span className="font-sans font-black text-4xl text-[#1A1A1A]">
                {posterSpecs.totalGoals}
              </span>
              <span className="font-mono text-xs text-gray-600 uppercase">tentativas</span>
            </div>
            <p className="text-[10px] font-mono text-gray-400 uppercase mt-1 leading-tight">
              Volume ofensivo da campanha.
            </p>
          </div>

          {/* Coluna B: Destaque Individual (MVP) */}
          <div className="flex flex-col justify-center pl-4">
            <span className="text-[10px] font-mono text-gray-500 uppercase leading-none mb-1">Destaque Técnico (MVP)</span>
            <div className="truncate">
              <span className="font-sans font-black text-base md:text-lg uppercase text-[#1A1A1A] block tracking-tight truncate">
                {posterSpecs.mvpName}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="bg-amber-400 text-[#1A1A1A] font-mono text-[9px] font-black px-1 rounded-xs uppercase">
                {posterSpecs.mvpPosition}
              </span>
              <span className="font-mono text-xs font-bold text-gray-600">
                OVR {posterSpecs.mvpRating}
              </span>
            </div>
          </div>

        </div>

        {/* RODAPÉ DO POSTER: CHAMADA DE AUTENTICIDADE */}
        <div className="w-full flex justify-between items-center border-t border-gray-300 pt-3 mt-4 text-[9px] font-mono text-gray-