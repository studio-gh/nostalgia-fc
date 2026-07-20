import FootballField from "../../components/football/FootballField";
import { formations } from "../formation/formations";

export default function DraftPage() {
  return <FootballField formation={formations[0]} />;
}
