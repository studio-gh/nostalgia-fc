export class DraftEngine {
  private selectedPlayers: string[] = [];

  select(playerId: string) {
    this.selectedPlayers.push(playerId);
  }

  isSelected(playerId: string) {
    return this.selectedPlayers.includes(playerId);
  }

  totalSelected() {
    return this.selectedPlayers.length;
  }
}
