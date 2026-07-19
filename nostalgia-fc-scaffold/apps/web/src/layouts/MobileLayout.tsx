export default function MobileLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: 480,
        margin: "0 auto",
        minHeight: "100vh",
        padding: 24
      }}
    >
      {children}
    </div>
  );
}
