import { Position } from "./Position";

export interface FormationPosition {
  id: string;
  position: Position;
  x: number;
  y: number;
}

export interface Formation {
  id: string;
  name: string;
  positions: FormationPosition[];
}
