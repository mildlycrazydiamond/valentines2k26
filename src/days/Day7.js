import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import rose from "../assets/images/rose.jpg";

export default function Day7() {
  return (
    <DayCard
      title={VALENTINE_DAYS[7]}
      imageUrl={rose}
      message="A special moment for you today"
    />
  );
}
