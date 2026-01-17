// App.jsx
import React from 'react';
import useInput from './UserInput';


const App = () => {
  const name = useInput('');

  return (
    <div className="container">
      <h2 className="title">Stylish Input with Custom Hook</h2>
      <input
        type="text"
        placeholder="Enter your name"
        className="input-field"
        value={name.value}
        onChange={name.onChange}
      />
      <div className="buttons">
        <button onClick={name.reset} className="btn reset">Clear</button>
      </div>
      {name.value && <p className="output">Hello, <strong>{name.value}</strong>!</p>}
    </div>
  );
};

export default App;
