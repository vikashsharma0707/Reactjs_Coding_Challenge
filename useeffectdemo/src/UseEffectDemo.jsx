import React, { useState, useEffect } from 'react';

function UseEffectDemo() {
  const [count, setCount] = useState(0);

  // ✅ Run on mount only
  useEffect(() => {
    console.log("✅ Component Mounted");
  }, []);

  // ✅ Run when count changes
  useEffect(() => {
    console.log(`🔁 Count changed to: ${count}`);
  }, [count]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>🔥 useEffect Demo</h2>
      <p style={styles.text}>You clicked <strong>{count}</strong> times</p>
      <button
        style={styles.button}
        onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
        onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
        onClick={() => setCount(count + 1)}
      >
        ➕ Click Me
      </button>
    </div>
  );
}

const styles = {
  container: {
    margin: '50px auto',
    padding: '30px',
    width: '300px',
    textAlign: 'center',
    background: '#f9f9f9',
    borderRadius: '12px',
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
  },
  text: {
    fontSize: '18px',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }
};

export default UseEffectDemo;
