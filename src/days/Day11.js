import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import promise from "../assets/images/promise.png";

export default function Day11() {
  return (
    <DayCard
      title={VALENTINE_DAYS[11]}
      imageUrl={promise}
      message="25 days remain for our Ashirwaad. My love for you is my promise."
    />
  );
}
