import "./Panel.module.css";

export default function Panel({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="nf-panel">
      <h2>{title}</h2>
      {children}
    </section>
  );
}
