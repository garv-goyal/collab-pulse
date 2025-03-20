import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">CollabPulse</div>

      <ul className="nav-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#activity">Activity Feed</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#help">Help & Support</a></li>
      </ul>

      <div className="nav-right">
        {/* Update login link to use Google OAuth */}
        <a href="http://localhost:5001/api/auth/google" className="login-link">Login</a>
        <button className="login-button" onClick={() => window.location.href = "http://localhost:5001/api/auth/google"}>
          <FontAwesomeIcon icon={faSignInAlt} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

