import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";

export default function Day8() {
  return (
    <DayCard
      title={VALENTINE_DAYS[8]}
      imageUrl="/images/propose.jpg"
      message="A special moment for you today"
    />
  );
}
