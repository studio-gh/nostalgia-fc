// src/components/DraftScreen.js
import React, { useState } from 'react';

export default function DraftScreen({ draftedTeam, currentDraftRound, currentRolledClub, rerollsRemaining, onReroll, onRecruit, formation, modoManager }) {
    const [selectedDraftPlayer, setSelectedDraftPlayer] = useState(null);
    
    const getCompatibleSlots = (player) => {
        if (!player) return [];
        return formation.slots
            .map((slot, idx) => ({ ...slot, originalIndex: idx }))
            .filter(slot => {
                const slotVazio = draftedTeam[slot.originalIndex] === null;
                const posCompativel = slot.pos === player.pos;
                return slotVazio && posCompativel;
            });
    };

    const slotsCompativeis = selectedDraftPlayer ? getCompatibleSlots(selectedDraftPlayer) : [];

    const handlePlayerCardClick = (player) => {
        const vagasDisponiveis = formation.slots
            .map((slot, idx) => ({ ...slot, originalIndex: idx }))
            .filter(slot => draftedTeam[slot.originalIndex] === null && slot.pos === player.pos);

        if (vagasDisponiveis.length === 0) {
            alert(`Não há vagas disponíveis no campo para a posição de ${player.pos}!`);
            return;
        }

        // REGRA REATIVA 1: Apenas 1 slot vazio -> Injeta automaticamente
        if (vagasDisponiveis.length === 1) {
            if (window.SonsFutebol) window.SonsFutebol.tocarBeep(880, 0.12);
            onRecruit(player, vagasDisponiveis[0].originalIndex);
            setSelectedDraftPlayer(null);
        } 
        // REGRA REATIVA 2: Múltiplos slots vazios -> Entra em modo de destaque amarelo
        else {
            if (window.SonsFutebol) window.SonsFutebol.tocarBeep(650, 0.08);
            setSelectedDraftPlayer(selectedDraftPlayer?.name === player.name ? null : player);
        }
    };

    return (
        <div className="flex flex-col gap-4">
            {/* Painel do Clube Sorteado */}
            <div className="border-4 border-obsidian p-4 bg-white shadow-[4px_4px_0px_#1A1A1A]">
                <div className="flex justify-between items-center border-b-2 border-obsidian pb-2 mb-4">
                    <div>
                        <span className="font-mono text-[9px] uppercase font-bold tracking-widest text-stone-500">🏆 Clube Sorteado da Rodada</span>
                        <h2 className="font-anton text-2xl uppercase text-retroRed leading-none">{currentRolledClub?.name}</h2>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="font-mono text-xs uppercase font-bold">Rerolls: {rerollsRemaining}</span>
                        <button 
                            onClick={onReroll}
                            disabled={rerollsRemaining <= 0}
                            className={`p-1.5 px-3 border-2 border-obsidian font-mono text-[10px] uppercase font-bold ${rerollsRemaining > 0 ? 'bg-retroGold text-black hover:bg-amber-400 active:translate-y-0.5 shadow-[1px_1px_0px_#000]' : 'opacity-40 cursor-not-allowed bg-stone-300'}`}
                        >
                            🔄 Girar Roleta
                        </button>
                    </div>
                </div>

                {/* GRADE DE JOGADORES DISPONÍVEIS */}
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2 mb-2 justify-center">
                    (currentRolledClub?.players || []).map((p, index) => {
                        const jaEscalado = draftedTeam.some(d => d && d.name === p.name);
                        const isSelected = selectedDraftPlayer?.name === p.name;
                        
                        return (
                            <div 
                                key={index}
                                onClick={() => !jaEscalado && handlePlayerCardClick(p)}
                                className={`border-2 border-obsidian p-2 cursor-pointer flex flex-col justify-between h-28 relative transition-all ${jaEscalado ? 'bg-stone-300 opacity-30 pointer-events-none' : isSelected ? 'bg-retroGold shadow-none scale-95 border-dashed border-red-600' : 'bg-creme hover:bg-stone-100 shadow-[2px_2px_0px_#000]'}`}
                            >
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-[9px] px-1 bg-obsidian text-white uppercase font-black">{p.pos}</span>
                                    {!modoManager && (
                                        <span className="font-anton text-sm leading-none bg-white p-0.5 border border-black shadow-[1px_1px_0px_#000]">{p.ovr}</span>
                                    )}
                                </div>
                                <div className="my-1">
                                    <p className="font-anton text-xs uppercase leading-tight tracking-tight line-clamp-2">{p.name}</p>
                                </div>
                                <div className="text-[8px] font-mono text-stone-500 uppercase font-bold text-right">
                                    {p.year}
                                </div>
                            </div>
                        );
                    })
                </div>
            </div>

            {/* Guia de Seleção Ativa */}
            {selectedDraftPlayer && (
                <div className="bg-stone-100 border-2 border-dashed border-yellow-500 p-2 text-center text-xs animate-pulse">
                    <span className="font-anton uppercase tracking-wide text-retroRed">Escolha de Vaga Manual:</span> Você selecionou o craque <strong className="font-anton text-obsidian">{selectedDraftPlayer.name} ({selectedDraftPlayer.pos})</strong>. Clique em uma das posições <span className="bg-yellow-300 px-1 font-bold text-black border border-obsidian">piscando em amarelo no campo</span> abaixo para confirmar a contratação!
                </div>
            )}

            {/* CAMPO TÁTICO CENTRADO */}
            <div className="w-full flex justify-center items-center">
                <div className="w-full max-w-xl bg-pitchGreen border-4 border-obsidian shadow-[4px_4px_0px_#1A1A1A] relative aspect-[4/5] md:aspect-[4/3] rounded-lg overflow-hidden flex flex-col justify-between">
                    <div className="absolute inset-0 border-2 border-white/20 pointer-events-none flex flex-col justify-between p-4">
                        <div className="w-full border-b border-white/20 h-1/2"></div>
                    </div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-white/20 rounded-full pointer-events-none"></div>

                    {formation.slots.map((slot) => {
                        const player = draftedTeam[slot.originalIndex];
                        const isSlotCompativel = selectedDraftPlayer && selectedDraftPlayer.pos === slot.pos && player === null;
                        
                        return (
                            <div 
                                key={slot.id}
                                style={{ 
                                    position: 'absolute',
                                    left: slot.coord.left,
                                    top: slot.coord.top,
                                    transform: 'translate(-50%, -50%)'
                                }}
                                onClick={() => {
                                    if (isSlotCompativel && selectedDraftPlayer) {
                                        onRecruit(selectedDraftPlayer, slot.originalIndex);
                                        setSelectedDraftPlayer(null);
                                    }
                                }}
                                className={`w-14 h-16 md:w-16 md:h-20 flex flex-col justify-between p-1 rounded-sm border transition-all text-center cursor-pointer select-none ${player ? 'bg-white border-obsidian shadow-[2px_2px_0px_rgba(0,0,0,0.5)]' : isSlotCompativel ? 'bg-yellow-300 border-dashed border-obsidian animate-pulse font-bold scale-105 shadow-[0_0_15px_rgba(234,179,8,0.8)]' : 'bg-stone-900/60 border-stone-200/50 text-white/70 hover:bg-stone-800/80'}`}
                            >
                                <div className