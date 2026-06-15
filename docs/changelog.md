# Changelog - Nostalgia FC

## [V12.0.0] - Planejado / Em Desenvolvimento
### Adicionado
- **Modo de Jogo**: Ocultação completa de ratings numéricos quando o `modoJogo === 'manager'`.
- **Mecânica Pré-Jogo**: Nova tela de "Preparação de Vestiário" contendo gerenciamento de energia/stamina, tela de substituições táticas e painel de estatísticas acumuladas (Artilharia, MVPs e Cartões).
- **Mecânica de Moral**: Sistema de setas de performance inspirado no International Superstar Soccer (estados: ⬆, ➡️, ⬇) integrado às ações da partida (gols, assistências, defesas difíceis e MVPs).
- **Mecânica de Sinergia**: Bônus de entrosamento "+3 OVR" para duplas/trios clássicos e bônus de Momentum tático para jogadores do mesmo país.
- **Banco de Dados**: Injeção de 28 novos clubes clássicos históricos de ligas nacionais e internacionais.
- **Compartilhamento**: Funcionalidade nativa via `navigator.share()` e botão físico de download para exportação do pôster em imagem PNG.
- **Branding**: Link fixo do Instagram (`https://www.instagram.com/nostalgia.f.c`) acoplado ao footer da aplicação.

### Modificado
- **Balanceamento de Ratings**: Redução e deflação geral de atributos baseada na Pirâmide Rígida de Qualidade (GOAT: 95-99).
- **Identidade Visual**: Limpeza visual com remoção completa de emojis informais (sirenes, foguetes), substituindo-os por texto em caixa alta ou pixel art retrô.
- **Nomenclatura**: Nomes de times agora exibem apenas a alcunha limpa (ex: `CHELSEA`), movendo o ano para tooltips e banindo expressões informais ("Chelsea de Zola").
- **UI/UX Mobile**: Aumento geral de 20% no tamanho das fontes, ajuste de contraste e espaçamento (`line-height`).
- **Área de Narração**: Caixa de eventos expandida para exibir de 8 a 10 linhas simultâneas sem scroll, compactando margens e o placar.
- **Layout Desktop**: Adaptação responsiva para monitores (`max-width: 1200px`) distribuída em um grid fixo de 3 colunas paralelas.

### Removido
- Opção textual de copiar caracteres corridos no card de compartilhamento, priorizando o poster visual.

## [V11.0.0] - Versão Anterior
- Implementação do sistema de Draft Roguelike (carta por carta via sorteio de clube).
- Estruturação do campeonato no formato "Copa Nostalgia" (Fase de Grupos + Mata-mata eliminatório).
- Mini-game interativo de disputas de pênaltis na marca da cal.