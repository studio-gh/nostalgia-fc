// STUB: built from the "Files" page wireframe - one row per player in the
// revealed squad, tappable to select for the draft (GR-009: off-position penalty
// should be surfaced here once SelectionEngine/SquadValidator are wired in).
import { Player } from "../../types/Player";

export default function PlayerRow({
  player,
  onSelect
}: {
  player: Player;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "12px 14px",
        marginBottom: 8,
        background: "#18181B",
        border: "1px solid #27272A",
        borderRadius: 12,
        color: "#fff",
        textAlign: "left"
      }}
    >
      <span style={{ fontSize: 11, color: "#A1A1AA", width: 32 }}>{player.position}</span>
      <span style={{ flex: 1, fontWeight: 600, fontSize: 14 }}>{player.name}</span>
      <span style={{ fontWeight: 800, color: "#C9A14A" }}>{player.overall}</span>
    </button>
  );
}
