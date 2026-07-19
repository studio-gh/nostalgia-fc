import { useNavigate } from "react-router-dom";

import MobileLayout from "../layouts/MobileLayout";
import Logo from "../components/ui/Logo/Logo";
import Button from "../components/ui/Button/Button";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <Logo />
      <div style={{ height: 48 }} />
      <Button onClick={() => navigate("/formation")}>Nova Campanha</Button>
      <div style={{ height: 16 }} />
      <Button>Museu</Button>
      <div style={{ height: 16 }} />
      <Button>Estatísticas</Button>
      <div style={{ height: 16 }} />
      <Button>Configurações</Button>
    </MobileLayout>
  );
}
