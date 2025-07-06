import React from "react";

const Update = ({ setcount }) => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>🚀 This is the Parent Component</h1>

      <div style={styles.buttons}>
        <button style={styles.button} onClick={() => setcount((prev) => prev + 1)}>
          Increment
        </button>
        <button style={styles.button} onClick={() => setcount((prev) => prev - 1)}>
        Decrement
        </button>
        <button style={{ ...styles.button, backgroundColor: "#ff4d4d" }} onClick={() => setcount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    marginTop: "20px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#f0f8ff",
    textAlign: "center",
  },
  heading: {
    marginBottom: "20px",
    color: "#333",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "15px",
    flexWrap: "wrap",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#00bcd4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
}

export default Update;