// Retorna a setinha visual e o modificador de rating estilo ISS/PES
function obterModificadorSetinha(moral) {
    if (moral >= 85) return { icone: "🡡", cor: "text-red-500", mod: 4 };       // Vermelha para cima
    if (moral >= 65) return { icone: "🡮", cor: "text-orange-400", mod: 2 };   // Amarela diagonal para cima
    if (moral >= 45) return { icone: "🡢", cor: "text-green-400", mod: 0 };    // Verde de lado
    if (moral >= 25) return { icone: "🡯", cor: "text-blue-400", mod: -2 };    // Azul diagonal para baixo
    return { icone: "🡫", cor: "text-purple-500", mod: -5 };                   // Roxa para baixo
}

// Executa o sistema de roleta mobile-first para o Draft
function executarSorteioDraft(orcamentoAtual, todosOsJogadores, atualizarTela, finalizarSorteio) {
    let contador = 0;
    const intervalo = setInterval(() => {
        const jAleatorio = todosOsJogadores[Math.floor(Math.random() * todosOsJogadores.length)];
        atualizarTela({ 
            name: jAleatorio.name, time: jAleatorio.time, temporada: jAleatorio.temporada,
            rating: jAleatorio.rating, cost: jAleatorio.cost, posicao: jAleatorio.posicao
        });
        contador++;
        
        if (contador > 10) {
            clearInterval(interval);
            const selecionado = { ...todosOsJogadores[Math.floor(Math.random() * todosOsJogadores.length)] };
            
            if (orcamentoAtual >= selecionado.cost) {
                // Atributos de Manager iniciais na contratação
                selecionado.estamina = 100;
                selecionado.moral = 50 + Math.floor(Math.random() * 20); // Inicial entre 50 e 70
                selecionado.idUnico = Math.random().toString(36).substr(2, 9);
                finalizarSorteio(selecionado, orcamentoAtual - selecionado.cost);
            } else {
                finalizarSorteio(null, orcamentoAtual);
            }
        }
    }, 80);
}

// Simulador Dinâmico de Partida (Engine de 90 minutos de Elifoot)
function simularMinutoPartida(dadosJogo, setDadosJogo, acaoNarracao, pausarJogoParaMudar) {
    let meuPlacar = dadosJogo.meuPlacar;
    let placarRival = dadosJogo.placarRival;
    let minuto = dadosJogo.minuto + 5; // Avança de 5 em 5 minutos para dinâmica rápida

    if (minuto > 90) {
        finalizarCampeonato(dadosJogo, setDadosJogo, acaoNarracao);
        return;
    }

    // Calcula força do time baseada no rating dos titulares + modificador da setinha + estamina
    let forcaMeuTime = dadosJogo.titulares.reduce((soma, j) => {
        let setinha = obterModificadorSetinha(j.moral);
        let fatorEstamina = j.estamina / 100;
        return soma + ((j.rating + setinha.mod) * fatorEstamina);
    }, 0) / 11;

    // Aplica bônus ou penalidades da postura tática do técnico
    if (dadosJogo.postura === "PRESSAO") forcaMeuTime *= 1.15;
    if (dadosJogo.postura === "RETRANCA") forcaMeuTime *= 0.85;

    let forcaRival = dadosJogo.rival.forca;

    let chanceGolMeu = Math.random() * forcaMeuTime;
    let chanceGolRival = Math.random() * forcaRival;
    let eventoAleatorio = Math.random();

    let textoNarracao = `${minuto}' - Jogo equilibrado no meio campo...`;

    // Lógica de Gols
    if (chanceGolMeu > chanceGolRival + 25) {
        meuPlacar++;
        let autor = dadosJogo.titulares[Math.floor(Math.random() * dadosJogo.titulares.length)];
        autor.moral = Math.min(100, autor.moral + 15); // Autor do gol ganha muita moral
        textoNarracao = `⚽ ${minuto}' - GOOOOOOL! Do Nostalgia FC! Sensacional finalização de ${autor.name}!`;
    } else if (chanceGolRival > chanceGolMeu + 25 && dadosJogo.postura !== "RETRANCA") {
        placarRival++;
        textoNarracao = `🚨 ${minuto}' - GOL DO RIVAL! Falha na marcação e eles balançam as redes!`;
    } 
    // Postura tática influenciando eventos
    else if (dadosJogo.postura === "RETRANCA" && Math.random() > 0.6) {
        textoNarracao = `⏳ ${minuto}' - Nostalgia FC segura a bola na lateral, fazendo cera irritante!`;
    }

    // Evento Perigoso: Expulsão Automática (Gera parada compulsória do treinador)
    let houveParadaForcada = false;
    if (eventoAleatorio < 0.04 && dadosJogo.titulares.length > 7) {
        let expulsoIdx = Math.floor(Math.random() * dadosJogo.titulares.length);
        let expulso = dadosJogo.titulares[expulsoIdx];
        textoNarracao = `🟥 ${minuto}' - CARTÃO VERMELHO! ${expulso.name} fez falta violenta e foi EXPULSO de campo!`;
        expulso.moral = Math.max(0, expulso.moral - 25);
        
        let novosTitulares = dadosJogo.titulares.filter((_, i) => i !== expulsoIdx);
        houveParadaForcada = true;
        
        setDadosJogo(antigo => ({
            ...antigo,
            minuto: minuto, meuPlacar: meuPlacar, placarRival: placarRival,
            titulares: novosTitulares, emAndamento: false
        }));
        pausarJogoParaMudar(textoNarracao, true); // Trava a tela exigindo substituição
    } 
    // Evento Perigoso: Lesão/Caçado em campo
    else if (eventoAleatorio > 0.95) {
        let vitima = dadosJogo.titulares[Math.floor(Math.random() * dadosJogo.titulares.length)];
        vitima.estamina = Math.max(10, vitima.estamina - 30);
        vitima.moral = Math.max(10, vitima.moral - 10);
        textoNarracao = `🤕 ${minuto}' - JOGO DURO! ${vitima.name} sofreu uma entrada violenta e está mancando!`;
    }

    if (!houveParadaForcada) {
        // Reduz estamina geral dos atletas por jogarem o minuto (gasta mais se pressionar)
        let gastoEstamina = dadosJogo.postura === "PRESSAO" ? 7 : 4;
        dadosJogo.titulares.forEach(j => {
            j.estamina = Math.max(5, j.estamina - gastoEstamina);
        });

        setDadosJogo(antigo => ({
            ...antigo, minuto: minuto, meuPlacar: meuPlacar, placarRival: placarRival
        }));
        acaoNarracao(textoNarracao);
    }
}

function finalizarCampeonato(dadosJogo, setDadosJogo, acaoNarracao) {
    // Processamento pós-jogo estilo Elifoot (Recupera estamina de quem descansou, diminui de quem correu)
    dadosJogo.titulares.forEach(j => {
        if (dadosJogo.meuPlacar > dadosJogo.placarRival) j.moral = Math.min(100, j.moral + 10);
        else j.moral = Math.max(0, j.moral - 12);
    });
    dadosJogo.reservas.forEach(j => {
        j.estamina = Math.min(100, j.estamina + 25); // Quem ficou no banco recuperou estamina
    });

    let resultado = dadosJogo.meuPlacar > dadosJogo.placarRival ? "VITÓRIA!" : (dadosJogo.meuPlacar === dadosJogo.placarRival ? "EMPATE." : "DERROTA.");
    setDadosJogo(antigo => ({ ...antigo, emAndamento: false, minuto: 0 }));
    acaoNarracao(`🏁 Fim de jogo! Resultado: ${resultado} Placar final: ${dadosJogo.meuPlacar} x ${dadosJogo.placarRival}`);
}