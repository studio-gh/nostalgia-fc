// STUB: listed in Commit 5 tree but no implementation given in the Notion doc.
// Should own the "choose ONE player from the revealed squad" rule (GR-009: position penalty when off-position).
export class SelectionEngine {
  selectPlayer(playerId: string, alreadySelected: string[]): string[] {
    if (alreadySelected.includes(playerId)) return alreadySelected;
    return [...alreadySelected, playerId];
  }
}
