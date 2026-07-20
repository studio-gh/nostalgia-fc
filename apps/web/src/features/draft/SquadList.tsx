// STUB: built from the "Files" page wireframe - full squad of the drawn club,
// one PlayerRow each. Parent screen removes the squad from the pool after 1 pick.
import { Player } from "../../types/Player";
import PlayerRow from "./PlayerRow";

export default function SquadList({
  players,
  onSelect
}: {
  players: Player[];
  onSelect: (player: Player) => void;
}) {
  return (
    <div>
      {players.map((player) => (
        <PlayerRow key={player.id} player={player} onSelect={() => onSelect(player)} />
      ))}
    </div>
  );
}
