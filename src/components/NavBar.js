// Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logout from './Logout'; // Import the Logout component
import '../styles/Navbar.css';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        React Auth App
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          {/* Show Home and Logout only on the Login page */}
          {location.pathname === '/login' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Logout />
              </li>
            </>
          )}

          {/* Show all items on other pages */}
          {location.pathname !== '/login' && (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Logout />
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
