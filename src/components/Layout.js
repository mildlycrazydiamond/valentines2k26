// src/components/Layout.jsx
export default function Layout({ children }) {
  return (
    <div style={styles.wrapper}>
      {children}
    </div>
  );
}

const styles = {
  wrapper: {
    maxWidth: "420px",
    margin: "0 auto",
    minHeight: "100vh",
    background: "#fff",
  },
};
