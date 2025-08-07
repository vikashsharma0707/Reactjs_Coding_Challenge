import React from 'react';
import { useCounter } from '../context/CounterContext';

const CounterControls = () => {
  const { increment, decrement } = useCounter();

  return (
    <div>
      <button style={btn} onClick={increment}>➕</button>
      <button style={btn} onClick={decrement}>➖</button>
    </div>
  );
};

const btn = {
  margin: '10px',
  padding: '10px 20px',
  fontSize: '20px',
  borderRadius: '8px',
  backgroundColor: '#1e90ff',
  color: 'white',
  border: 'none',
  cursor: 'pointer',
};

export default CounterControls;
