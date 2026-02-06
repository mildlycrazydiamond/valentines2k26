import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import valentines from "../assets/images/valentines.jpg";

export default function Day14() {
  return (
    <DayCard
      title={VALENTINE_DAYS[14]}
      imageUrl={valentines}
      message="To my forever valentine, I love you to the end of the universe and back. 😘"
    />
  );
}
