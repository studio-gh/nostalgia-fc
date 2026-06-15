# ⚽ Nostalgia FC — Backlog Técnico de Implementação (V12)

## 🔴 CRÍTICO / ALTA PRIORIDADE

### 1. Sistema de Ocultação de Atributos (Modo Manager)
* **Objetivo**: Forçar o usuário a jogar com base no seu conhecimento de futebol histórico no modo de gerenciamento puro.
* **Regra**: Se a flag de estado `modoJogo === 'manager'`, toda a interface de Draft, Cards de Jogador e Visualização de Elenco deve omitir os atributos numéricos de Overalls.
* **Critério de Aceite**: Ratings ocultados visualmente sem quebrar o cálculo matemático por trás da simulação da engine.

### 2. Deflação Geral de Ratings
* **Objetivo**: Corrigir as notas inflacionadas vindas da V11 e criar um abismo técnico real entre craques comuns e as lendas imortais.
* **Teto da Pirâmide**:
  - **GOAT**: 95-99 (Apenas Pelé, Maradona, Ronaldo 97, Zidane 98, Ronaldinho 2005, etc.)
  - **Lendário**: 91-94
  - **Elite**: 87-90
  - **Muito Bom**: 83-86
  - **Bom**: 79-82
* **Critério de Aceite**: Atualização massiva no banco de dados local restringindo as notas aos limites estipulados.

### 3. Tela de Preparação Pré-Jogo (Vestiário)
* **Objetivo**: Criar um hub obrigatório de ações táticas entre uma rodada e outra.
* **Componentes**:
  - **Energia / Stamina**: Barra visual que decai com o desgaste físico das partidas.
  - **Gerenciador de Substituição**: Interface interativa que permite mover jogadores do banco de reservas de luxo para a escalação titular.
  - **Painel Estatístico**: Exibição em tempo real dos líderes de Artilharia, contagem de MVPs e controle de cartões acumulados suspensivos (Amarelos/Vermelhos).

### 4. Mecânica de Setas de Moral (Inspirado no ISS)
* **Objetivo**: Trazer a dinâmica clássica dos jogos de futebol dos anos 90 onde o momento psicológico altera a gameplay.
* **Estados Visuais**: ⬆ (Em alta / Vermelha), ➡️ (Normal / Verde), ⬇ (Em baixa / Roxa).
* **Regra de Negócio**: Jogador que atua bem (marca gol, dá assistência, faz defesas difíceis como GK ou leva o prêmio de MVP) ganha +1 de Forma para o jogo seguinte. A seta ⬆ garante um bônus temporário de até **+3 OVR** acumulativo na partida atual.

### 5. Sinergias e Entrosamento "Old School"
* **Bônus Dupla Dinâmica**: Validar se há duplas/trios históricos escalados juntos (ex: Romário e Bebeto, Ronaldo e Rivaldo, Xavi e Iniesta, Maldini e Nesta). Caso positivo, ativar bônus automático de **+3 OVR** nos atletas da dupla.
* **Bônus de Nacionalidade**: Jogadores adjacentes na formação que partilham do mesmo país criam linhas visuais de conexão tática na interface e aumentam o multiplicador de *Momentum* ofensivo nas simulações.

### 6. Modal Pós-Jogo e Compartilhamento Premium
* **Tela de Fim de Jogo**: Nova interface estilizada gerando memória da campanha. Exibe: Placar destacado, Goleadores (com o minuto exato do gol) e o MVP nomeado.
* **Card/Poster**: Geração de imagem via Canvas integrando Placar, Elenco, Artilheiro e Logo Oficial.
  - **Ações**: Botão de compartilhamento nativo via API `navigator.share()` e botão físico de download em formato `.png`.
  - **Ajuste**: Descontinuar a caixa de texto de cópia de caracteres corridos.

## 🟡 MÉDIA PRIORIDADE & DESIGN SYSTEM

### 7. Limpeza de Interface e Nomenclatura
* **Visual Sóbrio**: Remover emojis como 🚨, ⚽, 🚀 do feed de narração e menus. Adotar tipografia pesada em caixa alta (ex: `GOL`, `CARTÃO AMARELO`) ou ícones pixel art discretos.
* **Nomes dos Clubes**: Exibir estritamente o nome limpo nos placares principais (ex: `VASCO`, `INTER DE MILÃO`). Anos de temporada clássica (`1998`) devem ser mitigados para tooltips ou textos de apoio. Proibido o uso de expressões como "Vasco de Edmundo".
* **Branding Footer**: Rodapé global estático com a mensagem em destaque: `"Siga @nostalgia.f.c"` com hiperlink direcionando para `https://www.instagram.com/nostalgia.f.c`.

## 🟢 UX / UI & GRID RESPONSIVO

### 8. Acessibilidade Mobile
* Aumentar o tamanho de fonte padrão do app em **20%**.
* Ajustar o `line-height` e aplicar a paleta Creme-Nostalgia com contraste forte contra o Preto Analógico para leitura confortável no smartphone.

### 9. Área de Narração Otimizada
* Redimensionar a caixa de eventos do simulador para comportar de **8 a 10 linhas em tempo real** de forma simultânea.
* Reduzir margens estruturais e compactar a escala do componente do painel do placar de TV para evitar o transbordo da tela mobile e eliminar a necessidade de scroll manual por parte do usuário.

### 10. Layout Desktop (Modo Revista)
* Adicionar limitação global de `max-width: 1200px` centralizado.
* Organizar o layout em **Três Colunas Horizontais**:
  - *Coluna Esquerda*: Placar fixo, cronômetro e tabela de classificação da Copa Nostalgia.
  - *Coluna Central*: Área estendida de narração e crônica dos eventos minuto a minuto.
  - *Coluna Direita*: Painel de ações táticas, botões de alteração de velocidade de simulação e substituições rápidas.