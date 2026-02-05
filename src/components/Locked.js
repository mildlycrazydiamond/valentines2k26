// src/components/Locked.jsx
export default function Locked({ message }) {
  return (
    <div style={styles.container}>
      <p style={styles.text}>{message}</p>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1.5rem",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
  },
  text: {
    fontSize: "1.3rem",
    textAlign: "center",
    color: "#fff",
  },
};
