export default function DayCard({ title, imageUrl, message }) {
  return (
    <div style={styles.page}>
      <h1>{title}</h1>
      <div style={styles.imageContainer}>
        <img src={imageUrl} alt={title} style={styles.image} />
      </div>
      <p style={styles.message}>{message}</p>
      <p style={styles.footer}>💕 Jayati - Aditya 💕</p>
    </div>
  );
}

const styles = {
  page: {
    padding: "2rem",
    textAlign: "center",
    minHeight: "100vh",
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF5F7",
    marginLeft: "calc(-50vw + 50%)",
    boxSizing: "border-box",
  },
  imageContainer: {
    margin: "2rem 1.5rem",
    padding: "15px",
    background: "#fff",
    border: "3px solid #daa9a0",
    borderRadius: "12px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.15)",
    display: "inline-block",
  },
  image: {
    width: "65vw",
    maxWidth: "300px",
    height: "auto",
    aspectRatio: "1",
    borderRadius: "8px",
    objectFit: "cover",
    display: "block",
  },
  message: {
    fontSize: "1.1rem",
    color: "#8B0000",
    maxWidth: "500px",
  },
  footer: {
    fontSize: "1rem",
    color: "#a85a78",
    marginTop: "2rem",
    fontStyle: "italic",
  },
}
