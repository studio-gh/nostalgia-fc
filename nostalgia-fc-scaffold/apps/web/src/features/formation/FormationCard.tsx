import Button from "../../components/ui/Button/Button";
import { Formation } from "../../types/Formation";

export default function FormationCard({
  formation,
  onSelect
}: {
  formation: Formation;
  onSelect: () => void;
}) {
  return <Button onClick={onSelect}>{formation.name}</Button>;
}
