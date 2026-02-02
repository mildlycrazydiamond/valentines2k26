// src/App.jsx
import React from "react";
import { getValentinePhase } from "./utils/dateUtils";

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  card: {
    background: "white",
    padding: "2.5rem",
    borderRadius: "20px",
    textAlign: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
    maxWidth: "400px",
  },
};

const Before = () => (
  <Message
    title="💌 Almost there…"
    text="Stay tuned for love and kisses on the 7th 💋"
  />
);

const During = () => (
  <Message
    title="❤️ Valentine’s Week ❤️"
    text="Your love story begins here…"
  />
);

const After = () => (
  <Message
    title="💖 Until next time…"
    text="Return for more love and kisses next year 💕"
  />
);

const Message = ({ title, text }) => (
  <div style={styles.card}>
    <h1>{title}</h1>
    <p>{text}</p>
  </div>
);


function App() {
  const phase = getValentinePhase();

  return (
    <div style={styles.container}>
      {phase === "before" && <Before />}
      {phase === "during" && <During />}
      {phase === "after" && <After />}
    </div>
  );
}

export default App;
