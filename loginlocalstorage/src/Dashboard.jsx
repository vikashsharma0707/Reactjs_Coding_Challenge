import React from 'react';

const Dashboard = ({ setIsLoggedIn }) => {
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <div className="card dashboard-card">
      <h2>🎉 Welcome, {username}!</h2>
      <p>You are now logged in.</p>
      <button onClick={handleLogout}>🚪 Logout</button>
    </div>
  );
};

export default Dashboard;
