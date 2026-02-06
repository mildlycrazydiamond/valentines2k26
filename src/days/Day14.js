import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";

export default function Day14() {
  return (
    <DayCard
      title={VALENTINE_DAYS[14]}
      imageUrl="/images/valentine.jpg"
      message="A special moment for you today"
    />
  );
}
