import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Nav = styled.nav`
  padding: 1rem 2rem;
  background-color: #2a4a55;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const NavLeft = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 3rem;
  margin: 0;
  font-size: 1.1rem;
  @media (max-width: 1054px) {
    flex-direction: column;
    background-color: #2a4a55;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    padding: 1rem 2rem;
    gap: 1rem;
    display: ${props => (props.open ? 'flex' : 'none')};
  }
`;

const NavLink = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
    &:hover {
      color: #00bcd4;
    }
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: 1054px) {
    display: ${props => (props.hideOnMobile ? 'none' : 'flex')};
  }
`;

const LoginButton = styled.button`
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 0.5rem 0.8rem;
  border-radius: 6px;
  cursor: pointer;
`;

const Hamburger = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  display: none;
  @media (max-width: 1054px) {
    display: block;
  }
`;

const Navbar = ({ userInfo }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    window.location.href = '/';
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <Nav>
      <NavLeft>CollabPulse</NavLeft>
      <Hamburger onClick={() => setMenuOpen(prev => !prev)}>
        {menuOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} />}
      </Hamburger>
      <NavLinks open={menuOpen}>
        {userInfo ? (
          <>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('dashboard'); }}>
                Dashboard
              </a>
            </NavLink>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>
                Projects
              </a>
            </NavLink>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('activity'); }}>
                Activity Feed
              </a>
            </NavLink>
            <NavLink>
              <a href="#settings">Settings</a>
            </NavLink>
            <NavLink>
              <a href="#help">Help & Support</a>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                Home
              </a>
            </NavLink>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('insights'); }}>
                Insights
              </a>
            </NavLink>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('collaborate'); }}>
                Collaborate
              </a>
            </NavLink>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('live'); }}>
                Live
              </a>
            </NavLink>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('howitworks'); }}>
                How It Works
              </a>
            </NavLink>
            <NavLink>
              <a onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                Contact
              </a>
            </NavLink>
          </>
        )}
      </NavLinks>
      <NavRight>
        {userInfo ? (
          <>
            <span style={{ color: '#fff' }}>{userInfo.name}</span>
            <LoginButton onClick={handleLogout}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </LoginButton>
          </>
        ) : (
          <>
            <a
              href="http://localhost:5001/api/auth/google"
              style={{ color: '#fff', textDecoration: 'none', fontWeight: '500' }}
            >
              Login
            </a>
            <LoginButton onClick={() => window.location.href = "http://localhost:5001/api/auth/google"}>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </LoginButton>
          </>
        )}
      </NavRight>
    </Nav>
  );
};

export default Navbar;
