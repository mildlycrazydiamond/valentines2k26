import { VALENTINE_DAYS } from "../utils/dateUtils";
import DayCard from "../components/DayCard";
import proposal from "../assets/images/proposal.jpg";

export default function Day8() {
  return (
    <DayCard
      title={VALENTINE_DAYS[8]}
      imageUrl={proposal}
      message="Proposing to you is a dream for me. You are my dream girl. You deserve to be wanted and proposed to, like a queen."
    />
  );
}
