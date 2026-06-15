import React from 'react';

/**
 * Componente CardJogador - Nostalgia FC (v12 Oficial)
 * Fusão Editorial Premium: Proteção de nomes + Suporte a Moral ISS + Modo Manager + Energia.
 */
export default function CardJogador({ 
  jogador,             // Objeto unificado { nome, posicao, ovr, clube, moral, energia, ano }
  minificado = false,  // Equivalente ao antigo isMini para grid tático
  modoManager = false, // Se true, oculta notas numéricas na interface
  onClick = null       // Ação de clique para o Draft ou escalação
}) {
  if (!jogador) return null;

  // Extração segura das propriedades mapeadas do banco de dados local
  const {
    nome = 'Craque Histórico',
    posicao = 'CM',
    ovr = 80,
    clube = 'Lendas',
    moral = 'normal',   // 'alta' (⬆), 'normal' (➡️), 'baixa' (⬇)
    energia = 100,
    ano = ''
  } = jogador;

  // Mantido seu cálculo utilitário adaptado para segurança antiqueda de layout
  const getEstiloNome = (text) => {
    if (minificado) {
      if (text.length > 15) return 'text-[9px] leading-tight';
      if (text.length > 10) return 'text-[10px] leading-tight';
      return 'text-xs font-bold';
    }
    if (text.length > 20) return 'text-base md:text-lg leading-none';
    if (text.length > 14) return 'text-lg md:text-xl leading-none';
    return 'text-2xl leading-none';
  };

  // Pirâmide de Qualidade Baseada nos Ratings Desinflacionados
  const getCorBadgeRating = (nota) => {
    if (nota >= 95) return 'bg-amber-500 text-[#1A1A1A]'; // GOAT (Modo Lendário)
    if (nota >= 91) return 'bg-slate-300 text-[#1A1A1A]';  // Lendário
    if (nota >= 87) return 'bg-red-600 text-white';        // Elite (Craque Mundial)
    return 'bg-[#1A1A1A] text-[#F4F1EA]';                  // Muito Bom / Bom
  };

  // Renderizador das Setas Clássicas do ISS (Estilo Geométrico/Revista, sem emojis vulgares)
  const renderSetaMoral = () => {
    switch (moral) {
      case 'alta':
        return (
          <div className="flex items-center justify-center w-4 h-4 bg-red-600 border border-[#1A1A1A] text-white shadow-[1px_1px_0px_#000]" title="Forma: Em Alta (+3 OVR)">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M4 15h6v9h4v-9h6L12 2 4 15z" /></svg>
          </div>
        );
      case 'baixa':
        return (
          <div className="flex items-center justify-center w-4 h-4 bg-purple-800 border border-[#1A1A1A] text-white shadow-[1px_1px_0px_#000]" title="Forma: Em Baixa">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M20 9h-6V0h-4v9H4l8 13 8-13z" /></svg>
          </div>
        );
      case 'normal':
      default:
        return (
          <div className="flex items-center justify-center w-4 h-4 bg-green-600 border border-[#1A1A1A] text-white shadow-[1px_1px_0px_#000]" title="Forma: Estável">
            <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24"><path d="M15 4v6H0v4h15v6l13-8-13-8z" /></svg>
          </div>
        );
    }
  };

  // ==================== 1. RENDERIZAÇÃO: MODO COMPACTO (CAMPO TÁTICO) ====================
  if (minificado) {
    return (
      <div 
        onClick={onClick}
        className={`w-20 h-28 md:w-24 md:h-32 bg-[#F4F1EA] border-2 border-[#1A1A1A] p-1 flex flex-col justify-between items-center text-center select-none shadow-[2px_2px_0px_0px_#1A1A1A] transition-all rounded-sm relative ${
          onClick ? 'cursor-pointer hover:bg-white hover:-translate-y-0.5' : ''
        }`}
      >
        {/* Topo do Mini Card: Posição, Seta ISS e Nota */}
        <div className="w-full flex justify-between items-center border-b border-[#1A1A1A] pb-0.5">
          <span className="font-mono text-[9px] font-black uppercase tracking-tighter text-gray-600">
            {posicao}
          </span>
          <div className="flex items-center gap-0.5 scale-90">
            {renderSetaMoral()}
            {!modoManager ? (
              <span className="font-mono text-[10px] font-black bg-[#1A1A1A] text-[#F4F1EA] px-0.5 rounded-sm">
                {ovr}
              </span>
            ) : (
              <span className="font-mono text-[8px] font-bold text-zinc-400">MGR</span>
            )}
          </div>
        </div>

        {/* Nome do Jogador protegido contra overflow */}
        <div className="w-full my-auto px-0.5 overflow-hidden">
          <p className={`font-sans font-black uppercase tracking-tight break-words line-clamp-2 ${getEstiloNome(nome)}`}>
            {nome.split(' ').pop() /* Exibe o último nome no campinho tático para otimizar espaço */}
          </p>
        </div>

        {/* Rodapé: Stamina e Clube Corrigido */}
        <div className="w-full flex flex-col gap-0.5">
          <div className="w-full bg-zinc-300 h-[3px] rounded-full overflow-hidden" title={`Energia: ${energia}%`}>
            <div className={`h-full ${energia < 40 ? 'bg-red-600' : energia < 75 ? 'bg-amber-500' : 'bg-green-600'}`} style={{ width: `${energia}%` }} />
          </div>
          <div className="w-full bg-[#1A1A1A] text-[#F4F1EA] text-[8px] font-mono uppercase truncate py-0.5 tracking-tighter rounded-xs">
            {clube.replace(/\s\d{4}$/, '')}
          </div>
        </div>
      </div>
    );
  }

  // ==================== 2. RENDERIZAÇÃO: MODO PREMIUM (DRAFT / HUB) ====================
  return (
    <div 
      onClick={onClick}
      className={`w-full max-w-[210px] h-[290px] bg-white border-4 border-[#1A1A1A] p-3 flex flex-col justify-between relative shadow-[4px_4px_0px_0px_#1A1A1A] transition-all rounded ${
        onClick ? 'cursor-pointer hover:bg-[#F4F1EA] hover:shadow-[6px_6px_0px_0px_#1A1A1A] hover:-translate-y-1' : ''
      }`}
    >
      {/* CABEÇALHO DO CARD: POSIÇÃO, CLUBE E RATING */}
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <span className="font-mono font-black text-xl leading-none text-[#1A1A1A]">
            {posicao}
          </span>
          <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tight mt-0.5 truncate max-w-[110px]" title={clube}>
            {clube.replace(/\s\d{4}$/, '')}
          </span>
          {ano && <span className="text-[9px] font-mono font-bold text-zinc-400">{ano}</span>}
        </div>

        {/* Bloco de Controle: Seta de Moral + Overall Ocultável */}
        <div className="flex items-center gap-1.5">
          {renderSetaMoral()}
          {!modoManager ? (
            <div className={`font-mono font-black text-3xl px-2 py-0.5 border-2 border-[#1A1A1A] shadow-[2px_2px_0px_0px_#1A1A1A] rounded ${getCorBadgeRating(ovr)}`}>
              {ovr}
            </div>
          ) : (
            <div className="font-serif italic font-bold text-[10px] text-zinc-400 border-2 border-dashed border-zinc-300 p-1.5 text-center leading-none">
              MANAGER
            </div>
          )}
        </div>
      </div>

      {/* ÁREA CENTRAL DO CARD: ELEMENTO DE STAMINA INTEGRADO */}
      <div className="flex flex-col items-center justify-center flex-1 py-2">
        <div className="w-16 flex flex-col gap-1 items-center" title={`Stamina: ${energia}%`}>
          <span className="font-mono text-[8px] tracking-widest text-zinc-400 uppercase font-bold">Stamina</span>
          <div className="w-full h-2 bg-stone-200 border border-[#1A1A1A] p-[1px] shadow-[1px_1px_0px_#000]">
            <div 
              className={`h-full ${energia < 40 ? 'bg-red-600' : energia < 75 ? 'bg-amber-500' : 'bg-green-600'}`}
              style={{ width: `${energia}%` }}
            />
          </div>
        </div>
      </div>

      {/* RODAPÉ DO CARD: NOMES PROTEGIDOS CONTRA QUEBRAS */}
      <div className="w-full border-t border-[#1A1A1A] pt-2">
        <p className={`font-sans font-black uppercase tracking-tight break-words line-clamp-2 ${getEstiloNome(nome)}`}>
          {nome}
        </p>
      </div>
    </div>
  );
}