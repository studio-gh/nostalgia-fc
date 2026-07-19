// STUB: built from the "Files" page wireframe - clicking the dice button cycles
// through random club+season names for ~2 seconds, then settles on the drawn club.
import { useState } from "react";
import Button from "../../components/ui/Button/Button";

type ClubSeason = { name: string; season: number };

export default function DraftDice({
  pool,
  onResult
}: {
  pool: ClubSeason[];
  onResult: (club: ClubSeason) => void;
}) {
  const [rolling, setRolling] = useState(false);
  const [display, setDisplay] = useState<ClubSeason | null>(null);

  function roll() {
    if (rolling || pool.length === 0) return;
    setRolling(true);
    let ticks = 0;
    const interval = setInterval(() => {
      setDisplay(pool[Math.floor(Math.random() * pool.length)]);
      ticks++;
      if (ticks > 12) {
        clearInterval(interval);
        const final = pool[Math.floor(Math.random() * pool.length)];
        setDisplay(final);
        setRolling(false);
        onResult(final);
      }
    }, 160);
  }

  return (
    <div style={{ textAlign: "center" }}>
      {display && (
        <div style={{ marginBottom: 16, fontSize: 24, fontWeight: 700 }}>
          {display.name} {display.season}
        </div>
      )}
      <Button onClick={roll}>🎲 Rolar Sorteio</Button>
    </div>
  );
}
