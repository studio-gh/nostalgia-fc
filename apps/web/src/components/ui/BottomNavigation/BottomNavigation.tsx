// STUB: listed in Commit 3 tree but content not provided in the Notion doc.
import { Link } from "react-router-dom";

export default function BottomNavigation() {
  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        display: "flex",
        justifyContent: "space-around",
        padding: "12px 0",
        background: "#18181B",
        borderTop: "1px solid #27272A"
      }}
    >
      <Link to="/" style={{ color: "#fff" }}>Início</Link>
      <Link to="/formation" style={{ color: "#fff" }}>Formação</Link>
      <Link to="/draft" style={{ color: "#fff" }}>Draft</Link>
    </nav>
  );
}
