import "./Card.module.css";

export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="nf-card">{children}</div>;
}
