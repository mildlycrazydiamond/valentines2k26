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
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #fff5f7, #ffe0e6)",
    marginLeft: "calc(-50vw + 50%)",
    boxSizing: "border-box",
  },
  text: {
    fontSize: "1.3rem",
    textAlign: "center",
    color: "#8B0000",
    wordWrap: "break-word",
    overflowWrap: "break-word",
    whiteSpace: "normal",
    maxWidth: "85%",
    lineHeight: "1.6",
    padding: "1.5rem",
  },
};
