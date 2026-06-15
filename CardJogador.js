import React from 'react';

/**
 * Componente CardJogador - Nostalgia FC (v12)
 * Renderiza o card do craque histórico no estilo revista esportiva dos anos 90/2000.
 * Protegido contra quebras de layout em nomes longos.
 */
export default function CardJogador({ 
  player,       // Objeto do jogador { name: '...', position: '...', rating: 94, club: '...', trait: '...' }
  isMini = false, // Modo compacto para visualização dentro do grid tático do campo
  onClick = null  // Ação de clique para o Draft ou escalação
}) {
  if (!player) return null;

  // Função utilitária para calcular o tamanho responsivo da fonte do nome
  const getNameStyle = (name) => {
    if (isMini) {
      if (name.length > 15) return 'text-[9px] leading-tight';
      if (name.length > 10) return 'text-[10px] leading-tight';
      return 'text-xs font-bold';
    }
    // Card em tamanho normal (Draft / Detalhes)
    if (name.length > 20) return 'text-base md:text-lg leading-none';
    if (name.length > 14) return 'text-lg md:text-xl leading-none';
    return 'text-2xl leading-none';
  };

  // Determina a cor do selo de qualidade baseado no Rating (OVR)
  const getRatingBadgeColor = (rating) => {
    if (rating >= 95) return 'bg-amber-500 text-[#1A1A1A]'; // Modo Lendário
    if (rating >= 90) return 'bg-red-600 text-white';        // Craque Mundial
    return 'bg-[#1A1A1A] text-[#F4F1EA]';                  // Sólido Clássico
  };

  // RENDERIZAÇÃO: MODO MINI (Campo tático / Grade compactada)
  if (isMini) {
    return (
      <div 
        onClick={onClick}
        className={`w-20 h-28 md:w-24 md:h-32 bg-[#F4F1EA] border-2 border-[#1A1A1A] p-1 flex flex-col justify-between items-center text-center select-none shadow-[2px_2px_0px_0px_#1A1A1A] transition-all rounded-sm ${
          onClick ? 'cursor-pointer hover:bg-white hover:-translate-y-0.5' : ''
        }`}
      >
        {/* Topo do Mini Card: Posição e Rating */}
        <div className="w-full flex justify-between items-center border-b border-[#1A1A1A] pb-0.5">
          <span className="font-mono text-[9px] font-black uppercase tracking-tighter text-gray-600">
            {player.position}
          </span>
          <span className="font-mono text-[10px] font-black bg-[#1A1A1A] text-[#F4F1EA] px-0.5 rounded-sm">
            {player.rating}
          </span>
        </div>

        {/* Nome do Jogador protegido contra overflow */}
        <div className="w-full my-auto px-0.5 overflow-hidden">
          <p className={`font-sans font-black uppercase tracking-tight break-words line-clamp-2 ${getNameStyle(player.name)}`}>
            {player.name}
          </p>
        </div>

        {/* Rodapé: Abreviação do Clube */}
        <div className="w-full bg-[#1A1A1A] text-[#F4F1EA] text-[8px] font-mono uppercase truncate py-0.5 tracking-tighter rounded-xs">
          {player.club || "CRUZEIRO 97"}
        </div>
      </div>
    );
  }

  // RENDERIZAÇÃO: MODO COMPLETO / PREMIUM (Painel de Seleção do Draft)
  return (
    <div 
      onClick={onClick}
      className={`w-full max-w-[210px] h-[290px] bg-white border-4 border-[#1A1A1A] p-3 flex flex-col justify-between relative shadow-[4px_4px_0px_0px_#1A1A1A] transition-all rounded ${
        onClick ? 'cursor-pointer hover:bg-[#F4F1EA] hover:shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1' : ''
      }`}
    >
      {/* CABEÇALHO DO CARD: EMBLEMA DO TORNEIO & RATING */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="font-mono font-black text-xl leading-none text-[#1A1A1A]">
            {player.position}
          </span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tight mt-0.5 truncate max-w-[110px]">
            {player.club || "LENDAS"}
          </span>
        </div>

        {/* Badge de Rating com Design Pesado de Revista */}
        <div className={`font-mono font-black text-3xl px-2 py-0.5 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] rounded ${getRatingBadgeColor(player.rating)}`}>
          {player.rating}
        </div>
      </div>

      {/* ARTE CENTRAL