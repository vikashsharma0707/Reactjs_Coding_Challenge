import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import AlertData from './pages/AlertData';

const App = () => {
  return (
    <div className="app-container">
      <header className="header">
        <h1> My React App</h1>
        <p>Simple and Stylish with Reusable Components</p>
      </header>
      
      <main className="main-content">
        <Home />
        <About />
        <AlertData/>
      </main>

      <footer className="footer">
        <p>© 2025 Vikash. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
