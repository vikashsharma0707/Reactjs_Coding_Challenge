import React from 'react';
import { useCounter } from '../context/CounterContext';

const CounterButtons = () => {
  const { increment, decrement, reset } = useCounter();

  return (
    <div style={styles.buttonContainer}>
      <button style={styles.button} onClick={increment}>+</button>
      <button style={styles.button} onClick={decrement}>-</button>
      <button style={styles.reset} onClick={reset}>Reset</button>
    </div>
  );
};

const styles = {
  buttonContainer: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    marginTop: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '24px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#007bff',
    color: '#fff',
    cursor: 'pointer',
  },
  reset: {
    padding: '10px 20px',
    fontSize: '16px',
    border: '1px solid #dc3545',
    borderRadius: '8px',
    backgroundColor: '#fff',
    color: '#dc3545',
    cursor: 'pointer',
  },
};

export default CounterButtons;
