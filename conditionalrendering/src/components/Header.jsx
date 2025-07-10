import React from 'react';

function Header({ isLoggedIn, onToggleLogin }) {
  return (
    <header className="header">
      <h1 className="logo">🌟 React App</h1>
      <button className="login-btn" onClick={onToggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </header>
  );
}

export default Header;
