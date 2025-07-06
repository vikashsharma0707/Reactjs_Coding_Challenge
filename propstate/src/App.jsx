import React from "react";
import Parent from "./Props/Parent";
import Display from "./State/Display";

const App = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitle}>🚀 React Props & State Drilling Demo</h1>

      <section style={styles.section}>
        <h2 style={styles.heading}>📦 Props Drilling</h2>
        <Parent />
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading}>🔁 State Drilling</h2>
        <Display />
      </section>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f4f4f4",
    minHeight: "100vh",
  },
  mainTitle: {
    textAlign: "center",
    color: "#333",
    marginBottom: "30px",
  },
  section: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "20px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
  },
  heading: {
    borderBottom: "2px solid #00bcd4",
    paddingBottom: "8px",
    marginBottom: "15px",
    color: "#00bcd4",
  },
};

export default App;
