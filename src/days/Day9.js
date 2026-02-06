import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import chocolate from "../assets/images/chocolate.jpg";

export default function Day9() {
  return (
    <DayCard
      title={VALENTINE_DAYS[9]}
      imageUrl={chocolate}
      message="A special moment for you today"
    />
  );
}
