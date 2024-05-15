/* Login Page */
import React, { useState } from 'react';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Logging in with:', username, password);
  };

  return (
    <div className="login-container"> {/* Add class name for the container */}
      <h2>Login</h2>
      <form onSubmit={handleLogin} method="post">
        <div className="input-group"> {/* Add class name for the input group */}
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group"> {/* Add class name for the input group */}
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
