export const getValentinePhase = () => {
  const today = new Date();

  const start = new Date("2026-02-07T00:00:00");
  const end = new Date("2026-02-14T23:59:59");

  if (today < start) return "before";
  if (today > end) return "after";
  return "during";
};

// src/utils/dateUtils.js
export const VALENTINE_DAYS = {
  7: "Rose Day 🌹",
  8: "Propose Day 💍",
  9: "Chocolate Day 🍫",
  10: "Teddy Day 🧸",
  11: "Promise Day 🤞",
  12: "Hug Day 🤗",
  13: "Kiss Day 💋",
  14: "Valentine’s Day ❤️",
};

export const getTodayInfo = () => {
  const phase = getValentinePhase();
  if (phase === "before") return { phase: "before" };
  if (phase === "after") return { phase: "after" };

  const today = new Date();
  const day = today.getDate();

  return { phase: "during", unlockedDay: day };
};
