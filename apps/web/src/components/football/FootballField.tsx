import PositionSlot from "./PositionSlot";
import { Formation } from "../../types/Formation";

export default function FootballField({ formation }: { formation: Formation }) {
  return (
    <div
      style={{
        position: "relative",
        height: 620,
        borderRadius: 20,
        background: "#1B5E20",
        overflow: "hidden"
      }}
    >
      {formation.positions.map((position) => (
        <PositionSlot
          key={position.id}
          label={position.position}
          left={position.x}
          top={position.y}
        />
      ))}
    </div>
  );
}
