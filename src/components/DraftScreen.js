import React, { useState, useMemo } from 'react';

export default function DraftScreen({ draftedTeam, onRecruit, formation, modoManager }) {
    const [selectedDraftPlayer, setSelectedDraftPlayer] = useState(null);

    const getCompatibleSlots = (player) => {
        if (!player) return [];
        return formation.slots
            .map((slot, idx) => ({ ...slot, originalIndex: idx }))
            .filter(slot => draftedTeam[slot.originalIndex] === null && slot.pos === player.pos);
    };

    const slotsCompativeis = useMemo(() => getCompatibleSlots(selectedDraftPlayer), [selectedDraftPlayer, draftedTeam, formation]);

    const handlePlayerClick = (player) => {
        const vagas = getCompatibleSlots(player);

        if (vagas.length === 0) return;

        // Injeção automática se apenas 1 vaga disponível
        if (vagas.length === 1) {
            onRecruit(player, vagas[0].originalIndex);
            setSelectedDraftPlayer(null);
        } else {
            // Habilita destaque manual
            setSelectedDraftPlayer(player);
        }
    };

    return (
        <div className="flex flex-col gap-4 p-4">
            {/* Renderização da Pool de Jogadores (exemplo simplificado) */}
            <div className="flex flex-wrap gap-2">
                {/* Aqui vai o mapeamento do seu time sorteado */}
            </div>

            {/* Campo Tático */}
            <div className="relative">
                {formation.slots.map((slot, idx) => {
                    const isCompativel = slotsCompativeis.find(s => s.originalIndex === idx);
                    const player = draftedTeam[idx];

                    return (
                        <div 
                            key={idx}
                            onClick={() => {
                                if (isCompativel && selectedDraftPlayer) {
                                    onRecruit(selectedDraftPlayer, idx);
                                    setSelectedDraftPlayer(null);
                                }
                            }}
                            className={`transition-all ${isCompativel ? 'bg-yellow-300 animate-pulse scale-105' : 'bg-stone-900'} ${player ? 'opacity-100' : 'opacity-80'}`}
                        >
                            {player ? player.name : slot.pos}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}