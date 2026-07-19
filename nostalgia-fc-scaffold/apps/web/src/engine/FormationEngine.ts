import { Formation } from "../types/Formation";

export class FormationEngine {
  static validate(formation: Formation) {
    return formation.positions.length === 11;
  }
}
