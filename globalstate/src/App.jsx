import React from 'react';
import CounterDisplay from './components/CounterDisplay';
import CounterButtons from './components/CounterButtons';

const App = () => {
  return (
    <div style={styles.container}>
      <h2>🚀 Stylish React Counter</h2>
      <CounterDisplay />
      <CounterButtons />
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    textAlign: 'center',
    maxWidth: '400px',
    margin: 'auto',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    borderRadius: '12px',
    marginTop: '80px',
  },
};

export default App;
