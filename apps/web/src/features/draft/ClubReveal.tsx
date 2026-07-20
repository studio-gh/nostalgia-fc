// STUB: built from the "Files" page wireframe - after the dice settles, show the
// drawn club crest/name/season before revealing the full squad list.
export default function ClubReveal({ name, season }: { name: string; season: number }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "24px 0",
        borderRadius: 16,
        background: "#18181B",
        border: "1px solid #27272A",
        marginBottom: 16
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: "0.2em", color: "#C9A14A" }}>
        VOCÊ SORTEOU
      </div>
      <div style={{ fontSize: 28, fontWeight: 800 }}>{name}</div>
      <div style={{ fontSize: 14, color: "#A1A1AA" }}>Temporada {season}</div>
    </div>
  );
}
