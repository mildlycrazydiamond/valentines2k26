// src/components/ProtectedDay.jsx
import { Navigate, useParams } from "react-router-dom";
import { getTodayInfo } from "../utils/dateUtils";
import Locked from "./Locked";

export default function ProtectedDay({ children }) {
  const { day } = useParams();
  const info = getTodayInfo();
  const dayNumber = Number(day);

  if (info.phase === "before")
    return <Locked message="Stay tuned for love and kisses on the 7th 💋" />;

  if (info.phase === "after")
    return <Locked message="Return for more love and kisses next year 💕" />;

  if (dayNumber > info.unlockedDay)
    return <Locked message="This day is still a little shy… come back soon ❤️" />;

  return children;
}
