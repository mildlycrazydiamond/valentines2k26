import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";

export default function Day12() {
  return (
    <DayCard
      title={VALENTINE_DAYS[12]}
      imageUrl="/images/hug.jpg"
      message="A special moment for you today"
    />
  );
}
