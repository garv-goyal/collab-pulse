import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 2rem 1rem;
  text-align: center;
  color: #ddd;
  font-size: 0.95rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  font-family: 'Kanit', sans-serif;
`;

const Footer = () => {
  return (
    <FooterContainer>
      CollabPulse © {new Date().getFullYear()} — Built for better teamwork
    </FooterContainer>
  );
};

export default Footer;