import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ userInfo }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  // For smooth scrolling, you can later add a scroll-behavior: smooth style to html in CSS.
  return (
    <nav className="navbar" style={{ padding: '1rem 2rem', backgroundColor: '#151515' }}>
      <div className="nav-left" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
        CollabPulse
      </div>
      <ul className="nav-links" style={{ listStyle: 'none', display: 'flex', gap: '3rem', margin: 0 }}>
        {userInfo ? (
          <>
            <li><a href="#dashboard" style={{ color: '#fff', textDecoration: 'none' }}>Dashboard</a></li>
            <li><a href="/projects" style={{ color: '#fff', textDecoration: 'none' }}>Projects</a></li>
            <li><a href="/activity" style={{ color: '#fff', textDecoration: 'none' }}>Activity Feed</a></li>
            <li><a href="/settings" style={{ color: '#fff', textDecoration: 'none' }}>Settings</a></li>
            <li><a href="/help" style={{ color: '#fff', textDecoration: 'none' }}>Help & Support</a></li>
          </>
        ) : (
          <>
            <li><a href="#hero" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
            <li><a href="#insights" style={{ color: '#fff', textDecoration: 'none' }}>Insights</a></li>
            <li><a href="#collaborate" style={{ color: '#fff', textDecoration: 'none' }}>Collaborate</a></li>
            <li><a href="#howitworks" style={{ color: '#fff', textDecoration: 'none' }}>How It Works</a></li>
            <li><a href="#contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
          </>
        )}
      </ul>

      <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {userInfo ? (
          <>
            <span style={{ color: '#fff' }}>{userInfo.name}</span>
            <button onClick={handleLogout} className="login-button" style={{
              background: 'transparent',
              border: '2px solid #fff',
              color: '#fff',
              padding: '0.5rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </>
        ) : (
          <>
            <a href="http://localhost:5001/api/auth/google" className="login-link" style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Login
            </a>
            <button className="login-button" onClick={() => window.location.href = "http://localhost:5001/api/auth/google"} style={{
              background: 'transparent',
              border: '2px solid #fff',
              color: '#fff',
              padding: '0.5rem 0.8rem',
              borderRadius: '6px',
              cursor: 'pointer'
            }}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
