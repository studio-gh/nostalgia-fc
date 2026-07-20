type Props = {
  label: string;
  left: number;
  top: number;
};

export default function PositionSlot({ label, left, top }: Props) {
  return (
    <div
      style={{
        position: "absolute",
        left: `${left}%`,
        top: `${top}%`,
        transform: "translate(-50%,-50%)",
        width: 42,
        height: 42,
        borderRadius: "50%",
        background: "#27272A",
        border: "2px solid #C9A14A",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 700,
        fontSize: 12
      }}
    >
      {label}
    </div>
  );
}
