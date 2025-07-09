import React, { useState } from "react";
import "./App.css";
import ChildA from "./pages/ChildA";
import ChildB from "./pages/ChildB";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
     <h1>Lifting state in React js</h1>
      <ChildA count={count} setCount={setCount} />
      <ChildB count={count} setCount={setCount} />
    </div>
  );
};

export default App;
