


const ChildB = ({ count, setCount }) => {
  return (
    <div className="child-container">
      <h2>This is Child B — Count: {count}</h2>
     <button className="btn" onClick={() => setCount(count + 1)}>
   Increase
</button>

    </div>
  );
};

export default ChildB;
