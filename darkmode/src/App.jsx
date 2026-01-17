import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      <div className="content-box">
        <h1>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</h1>
        <p>Toggle between dark and light themes using the button below.</p>
        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌜"}
        </button>
      </div>
    </div>
  );
};

export default App;
