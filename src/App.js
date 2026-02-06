// src/App.jsx
import Layout from "./components/Layout";
import Day7 from "./days/Day7";
import Day8 from "./days/Day8";
import Day9 from "./days/Day9";
import Day10 from "./days/Day10";
import Day11 from "./days/Day11";
import Day12 from "./days/Day12";
import Day13 from "./days/Day13";
import Day14 from "./days/Day14";
import { getTodayInfo } from "./utils/dateUtils";
import Locked from "./components/Locked";

export default function App() {
  const info = getTodayInfo();

  const renderContent = () => {
    if (info.phase === "before" || info.phase === "after") {
      const message = info.phase === "before" 
        ? "Stay tuned for love and kisses on 7th February 💋"
        : "Return for more love and kisses next year 💕";
      return <Locked message={message} />;
    }

    switch (info.unlockedDay) {
      case 7:
        return <Day7 />;
      case 8:
        return <Day8 />;
      case 9:
        return <Day9 />;
      case 10:
        return <Day10 />;
      case 11:
        return <Day11 />;
      case 12:
        return <Day12 />;
      case 13:
        return <Day13 />;
      case 14:
        return <Day14 />;
      default:
        return <Locked message="Stay tuned for love and kisses 💋" />;
    }
  };

  return (
    <Layout>
      {renderContent()}
    </Layout>
  );
}
