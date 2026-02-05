// src/components/DayWrapper.jsx
import { Navigate } from "react-router-dom";
import { getTodayInfo } from "../utils/dateUtils";
import Locked from "./Locked";

export default function DayWrapper() {
  const info = getTodayInfo();

  if (info.phase === "before")
    return <Locked message="Stay tuned for love and kisses on the 7th 💋" />;

  if (info.phase === "after")
    return <Locked message="Return for more love and kisses next year 💕" />;

  return <Navigate to={`/day/${info.unlockedDay}`} />;
}
