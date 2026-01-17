import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"; // for simple styling

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Navbar</h2>

      <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
        <Link to="Home" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="About" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="Contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="Service" onClick={() => setIsOpen(false)}>Service</Link>
      </div>
    </nav>
  );
}

export default Navbar;
