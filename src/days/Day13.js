import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import kiss from "../assets/images/kiss.jpg";

export default function Day13() {
  return (
    <DayCard
      title={VALENTINE_DAYS[13]}
      imageUrl={kiss}
      message="A special moment for you today"
    />
  );
}
