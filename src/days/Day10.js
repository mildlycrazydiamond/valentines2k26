import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import teddy from "../assets/images/teddy.jpg";

export default function Day10() {
  return (
    <DayCard
      title={VALENTINE_DAYS[10]}
      imageUrl={teddy}
      message="A special moment for you today"
    />
  );
}
