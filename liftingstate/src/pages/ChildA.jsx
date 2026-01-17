import React from "react";


const ChildA = ({ count, setCount }) => {
  return (
    <div className="child-container">
      <h2>This is Child A — Count: {count}</h2>
     <button className="btn" onClick={() => setCount(count + 1)}>
   Increase
</button>

    </div>
  );
};

export default ChildA;
