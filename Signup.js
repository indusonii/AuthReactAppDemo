import React, { useState } from 'react';
import '../styles/Signup.css'; // Import your CSS file for styling
import { Link } from 'react-router-dom'; 

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    console.log('Signup clicked. Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
    // Add your signup logic here
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
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
          <Link to="/login"> {/* Use the Link component for navigation */}
            <button type="button">Login</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
