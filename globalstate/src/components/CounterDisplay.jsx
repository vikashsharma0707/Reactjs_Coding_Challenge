import React from 'react';
import { useCounter } from '../context/CounterContext';

const CounterDisplay = () => {
  const { count } = useCounter();

  return (
    <div style={styles.display}>
      <h1 style={{ fontSize: '48px', margin: 0 }}>{count}</h1>
      <p style={{ color: '#888' }}>Current Count</p>
    </div>
  );
};

const styles = {
  display: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default CounterDisplay;
