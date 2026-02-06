import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import hug from "../assets/images/hug.jpg";

export default function Day12() {
  return (
    <DayCard
      title={VALENTINE_DAYS[12]}
      imageUrl={hug}
      message="Every time we hug, we are infinite. Bonded together like atoms."
    />
  );
}
