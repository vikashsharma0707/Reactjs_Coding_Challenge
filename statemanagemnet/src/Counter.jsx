import React, { useState, useEffect } from 'react';
import './index.css'; // Add this line to import CSS

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`🔁 Count changed: ${count}`);
  }, [count]);

  return (
    <div className="container">
      <h1 className="title">🎯 Stylish Counter App</h1>
      <div className="counter-box">
        <h2 className="count">{count}</h2>
        <div className="buttons">
          <button onClick={() => setCount(count - 1)} className="btn red">➖ Decrease</button>
          <button onClick={() => setCount(0)} className="btn gray">🔁 Reset</button>
          <button onClick={() => setCount(count + 1)} className="btn green">➕ Increase</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
