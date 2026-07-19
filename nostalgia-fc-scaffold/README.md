# Nostalgia FC — Web (scaffold)

Gerado a partir do doc "Game Nostalgia FC" no Notion (páginas: GAME CONSTITUTION,
Readme.md, Files — Commits 1 a 5).

## O que veio pronto do doc
- Config raiz (package.json workspaces, tsconfig.base, .gitignore)
- apps/web: bootstrap Vite+React, AppRouter, HomePage, globals.css
- Design system: Button, Card, Logo, theme (colors/typography/spacing), MobileLayout
- Formation: types, formations.ts, FormationCard, FormationPage, FootballField, PositionSlot, FormationEngine
- packages/engine/draft: DraftEngine.ts e RandomClubEngine.ts (código completo do doc)

## O que é STUB (não tinha código no doc, escrito a partir dos wireframes/contexto)
Marcado com comentário `// STUB` no topo de cada arquivo:
- `components/ui/Panel/Panel.module.css`
- `components/ui/TopBar/TopBar.tsx`
- `components/ui/BottomNavigation/BottomNavigation.tsx`
- `packages/engine/draft/SquadValidator.ts`
- `packages/engine/draft/SelectionEngine.ts`
- `features/draft/DraftStore.ts`
- `features/draft/DraftHeader.tsx`
- `features/draft/DraftDice.tsx`
- `features/draft/ClubReveal.tsx`
- `features/draft/PlayerRow.tsx`
- `features/draft/SquadList.tsx`

Esses stubs ainda não estão conectados entre si (DraftPage não usa DraftStore/Dice/
ClubReveal/SquadList ainda — é o próximo passo de integração).

## Instalar e rodar
```
npm install
npm run dev
```

## Próximos passos sugeridos
1. Conectar DraftPage aos stubs (DraftStore + DraftDice + ClubReveal + SquadList)
2. Portar o banco de jogadores (players_part1/2/3.js) para o formato `Player`/`Club`
3. Ligar SquadValidator/SelectionEngine nas regras reais da constitution (GR-009, GR-011)
