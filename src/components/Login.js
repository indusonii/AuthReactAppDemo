import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Simulating a successful login (replace with your actual login logic)
    console.log('Login clicked. Email:', email, 'Password:', password);

    // Clear any previous error
    setError('');

    // Show a success toast
    toast.success('Login successful!', {
      position: 'top-right',
      autoClose: 3000, // Close the toast after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    // Navigate to the home page after successful login
    navigate('/home');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
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
