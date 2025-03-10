import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo or Brand */}
      <div className="nav-left">CollabPulse</div>

      {/* Center: Nav Links */}
      <ul className="nav-links">
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#activity">Activity Feed</a></li>
        <li><a href="#settings">Settings</a></li>
        <li><a href="#help">Help & Support</a></li>
      </ul>

      {/* Right: Login Button */}
      <div className="nav-right">
        <a href="#login">Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
