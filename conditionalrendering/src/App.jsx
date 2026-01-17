import React, { useState } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  return (
    <div className="container">
      
      <Header isLoggedIn={isLoggedIn} onToggleLogin={toggleLogin} />
      <Welcome isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default App;
