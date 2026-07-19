import { useNavigate } from "react-router-dom";

import { formations } from "./formations";
import FormationCard from "./FormationCard";

export default function FormationPage() {
  const navigate = useNavigate();

  return (
    <>
      <h2>Escolha sua formação</h2>
      {formations.map((f) => (
        <FormationCard key={f.id} formation={f} onSelect={() => navigate("/draft")} />
      ))}
    </>
  );
}
