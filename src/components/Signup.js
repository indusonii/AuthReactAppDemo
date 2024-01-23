import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Signup.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Invalid email format.');
      return;
    }

    // Validate password criteria (e.g., at least 6 characters)
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    // Validate password and confirm password match
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

    // Your signup logic here (replace the following line with your actual logic)
    console.log('Signup clicked. Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);

    // Clear any previous error
    setError('');
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSignup}>
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <br />
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Sign Up</button>
          <Link to="/login">
            <button type="button">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
