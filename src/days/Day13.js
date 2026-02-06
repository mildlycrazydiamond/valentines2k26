import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import kiss from "../assets/images/kiss.jpg";

export default function Day13() {
  return (
    <DayCard
      title={VALENTINE_DAYS[13]}
      imageUrl={kiss}
      message="There is nothing better than kissing you, soaking you in and just dissolving like nothing between us exists."
    />
  );
}
