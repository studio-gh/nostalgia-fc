// STUB: built from the ASCII wireframe in the "Files" page:
// ────────────────────────
// DRAFT
// Jogadores
// 0 / 16
// ────────────────────────
export default function DraftHeader({ filled, total }: { filled: number; total: number }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "16px 0",
        borderTop: "1px solid #27272A",
        borderBottom: "1px solid #27272A"
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: "0.2em", color: "#A1A1AA" }}>DRAFT</div>
      <div style={{ fontSize: 12, letterSpacing: "0.2em", color: "#A1A1AA" }}>JOGADORES</div>
      <div style={{ fontSize: 20, fontWeight: 700 }}>
        {filled} / {total}
      </div>
    </div>
  );
}
