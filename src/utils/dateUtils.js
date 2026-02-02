export const getValentinePhase = () => {
  const today = new Date();

  const start = new Date("2026-02-07T00:00:00");
  const end = new Date("2026-02-14T23:59:59");

  if (today < start) return "before";
  if (today > end) return "after";
  return "during";
};