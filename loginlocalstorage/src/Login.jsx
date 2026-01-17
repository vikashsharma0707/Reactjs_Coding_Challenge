import React, { useState } from 'react';

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
    } else {
      alert('❌ Invalid credentials');
    }
  };

  return (
    <div className="card login-card">
      <h2>🔐 Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="👤 Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="🔑 Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
