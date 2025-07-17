import { useState } from "react";
import "./ControllInput.css"; // CSS file import

const ControllInput = () => {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert("Controlled component: " + name);
  };

  return (
    <div className="container">
      <h2 className="title">Controlled Component</h2>
      <input
        type="text"
        className="input-box"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default ControllInput;
