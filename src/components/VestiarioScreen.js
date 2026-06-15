// src/components/VestiarioScreen.js
import React, { useState } from 'react';

/**
 * TELA 4: VESTIÁRIO (GRADE DE RESERVAS, ENERGIA E INFRAESTRUTURA DO PRÓXIMO CONFRONTO)
 * Estilo Editorial Clássico de Revista de Desporto dos Anos 90/2000
 */
export default function VestiarioScreen({ 
    draftedTeam, 
    setDraftedTeam, 
    reserves, 
    setReserves, 
    teamOVR, 
    userTeamName, 
    onStartSim, 
    isKnockout, 
    knockoutStage, 
    currentMatchIndex, 
    campaignMatches 
}) {
    const [activeSubTab, setActiveSubTab] = useState(false); // Alterna visualização de tática / estatísticas

    // Define dinamicamente o nome do adversário com base no tipo de fase
    const getOpponentName = () => {
        if (isKnockout) {
            switch (knockoutStage) {
                case 'Quartas de Final': return 'Boca Juniors (2000)';
                case 'Semifinal': return 'Milan (2005)';
                default: return 'Real Madrid (2002)'; // Final
            }
        }
        return campaignMatches[currentMatchIndex]?.name || 'Esquadrão Clássico';
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            
            {/* BLOCO DE INFORMAÇÕES DA COPA / CAMPANHA */}
            <div className="md:col-span-12 border-4 border-obsidian p-4 bg-stone-900 text-white shadow-[4px_4px_0px_#1A1A1A] flex flex-col md:flex-row justify-between items-center gap-2">
                <div>
                    <span className="text-retroGold font-mono text-xs uppercase tracking-wider font-bold">📋 PRÓXIMO COMPROMISSO</span>
                    <h3 className="font-anton text-xl uppercase tracking-wider text-white">
                        {isKnockout 
                            ? `MATA-MATA: ${knockoutStage}` 
                            : `FASE DE GRUPOS — RODADA ${currentMatchIndex + 1} de 3`
                        }
                    </h3>
                    <p className="font-serif italic text-xs text-stone-300">
                        Seu Time: <strong className="text-white">{userTeamName}</strong> vs <strong className="text-retroGold">{getOpponentName()}</strong>
                    </p>
                </div>
                
                <div className="flex items-center gap-3">
                    <div className="text-center bg-obsidian border border-retroGold p-2">
                        <span className="block font-mono text-[8px] uppercase tracking-widest text-stone-400">OVR GLOBAL</span>
                        <span className="font-anton text-2xl text-retroGold leading-none">{teamOVR}</span>
                    </div>
                    <button 
                        onClick={onStartSim}
                        className="bg-retroGold text-black font-anton text-lg uppercase tracking-wide px-6 py-2.5 border-2 border-black shadow-[2px_2px_0px_#fff] hover:bg-amber-400 active:translate-y-0.5 transition-all"
                    >
                        🏟️ INICIAR PARTIDA
                    </button>
                </div>
            </div>

            {/* ESCALAÇÃO TITULAR (GRADE EDITORIAL COMPACTA) */}
            <div className="md:col-span-8 border-4 border-obsidian p-4 bg-white shadow-[4px_4px_0px_#1A1A1A]">
                <div className="flex justify-between items-center border-b-2 border-obsidian pb-1 mb-4">
                    <h3 className="font-anton text-xl uppercase">🛡️ TITULARES ESCOLHIDOS</h3>
                    <span className="font-mono text-[10px] text-stone-500 uppercase font-bold">XI Inicial Retrô</span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    {draftedTeam.map((p, index) => {
                        if (!p) return null;
                        return (
                            <div key={index} className="border-2 border-obsidian p-2 bg-creme flex flex-col justify-between h-24 shadow-[2px_2px_0px_rgba(0,0,0,0.15)] rounded-xs">
                                <div className="flex justify-between items-start">
                                    <span className="font-mono text-[8px] px-1 bg-obsidian text-white uppercase font-black">{p.pos}</span>
                                    <span className="font-anton text-xs leading-none bg-white p-0.5 border border-black">{p.ovr}</span>
                                </div>
                                <p className="font-anton text-xs uppercase leading-tight line-clamp-1 tracking-tight text-obsidian">{p.name}</p>
                                <div className="flex justify-between items-center text-[8px] font-mono border-t border-stone-300 pt-1 mt-1">
                                    <span className="text-stone-500 uppercase font-bold line-clamp-1 max-w-[65px]">{p.club.substring(0, 8)}</span>
                                    <span className={`font-bold ${p.energy < 50 ? 'text-red-600' : p.energy < 75 ? 'text-amber-600' : 'text-green-700'}`}>⚡ {p.energy}%</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            {/* BANCO DE RESERVAS DISPONÍVEIS */}
            <div className="md:col-span-4 border-4 border-obsidian p-4 bg-[#FEFBF4] shadow-[4px_4px_0px_#1A1A1A]">
                <div className="flex justify-between items-center border-b-2 border-obsidian pb-1 mb-4">
                    <h3 className="font-anton text-xl uppercase">💼 BANCO DE SUPLENTES</h3>
                    <span className="font-mono text-[10px] px-1.5 bg-stone-200 text-stone-700 font-bold uppercase rounded-sm">{reserves.length}</span>
                </div>

                <div className="flex flex-col gap-2 max-h-[350px] overflow-y-auto pr-1">
                    {reserves.length === 0 ? (
                        <div className="text-center py-8 border-2 border-dashed border-stone-300">
                            <p className="font-serif italic text-xs text-stone-500">Nenhum reserva de luxo disponível no elenco.</p>
                        </div>
                    ) : (
                        reserves.map((p, index) => (
                            <div key={index} className="border border-obsidian p-2 bg-white flex justify-between items-center text-xs hover:bg-stone-50 transition-colors shadow-[1px_1px_0px_#000]">
                                <div className="flex items-center gap-1.5">
                                    <span className="font-mono text-[8px] px-1 bg-stone-700 text-white uppercase font-bold">{p.pos}</span>
                                    <span className="font-anton uppercase text-stone-800 tracking-tight line-clamp-1">{p.name}</span>
                                </div>
                                <div className="flex items-center gap-2 font-mono text-[10px]">
                                    <span className="bg-stone-100 px-1 border border-stone-300 font-anton text-xs font-bold">{p.ovr}</span>
                                    <span className={`font-bold ${p.energy < 70 ? 'text-amber-600' : 'text-stone-500'}`}>⚡ {p.energy}%</span>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

        </div>
    );
}