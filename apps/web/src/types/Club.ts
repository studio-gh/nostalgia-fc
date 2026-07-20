import { Player } from "./Player";

export interface Club {
  id: string;
  name: string;
  country: string;
  season: number;
  formation: string;
  players: Player[];
}
