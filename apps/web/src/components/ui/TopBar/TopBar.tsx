// STUB: listed in Commit 3 tree but content not provided in the Notion doc.
type Props = {
  title: string;
};

export default function TopBar({ title }: Props) {
  return (
    <header
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px 0",
        fontWeight: 700,
        fontSize: 18,
        letterSpacing: "0.05em",
        color: "#C9A14A"
      }}
    >
      {title}
    </header>
  );
}
