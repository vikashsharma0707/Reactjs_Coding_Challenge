import React from 'react';

function Welcome({ isLoggedIn }) {
  return (
    <div className="card">
      <h2>
        {isLoggedIn ? '👋 Welcome back, User!' : '🔐 Please log in to continue'}
      </h2>
      <p>
        {isLoggedIn
          ? 'You are now logged in. Enjoy exploring the app!'
          : 'You need to log in to access the features.'}
      </p>
    </div>
  );
}

export default Welcome;
