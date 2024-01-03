import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Login.css'; // Import your CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login clicked. Email:', email, 'Password:', password);
    // Add your login logic here
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                console.log('Email changed:', e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                console.log('Password changed:', e.target.value);
              }}
            />
          </label>
          <br />
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          Don't have an account? <Link to="/signup">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
