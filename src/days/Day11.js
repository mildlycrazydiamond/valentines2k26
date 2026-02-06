import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";

export default function Day11() {
  return (
    <DayCard
      title={VALENTINE_DAYS[11]}
      imageUrl="/images/promise.jpg"
      message="A special moment for you today"
    />
  );
}
