// STUB: listed in Commit 5 tree but no implementation given in the Notion doc.
// Should validate final squad composition (11 starters + 5 reserves, position rules, no duplicate players).
export class SquadValidator {
  static isComplete(starterCount: number, reserveCount: number): boolean {
    return starterCount === 11 && reserveCount === 5;
  }
}
