import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slideOut = keyframes`
  0% { opacity: 1; transform: translateX(0); }
  100% { opacity: 0; transform: translateX(100%); }
`;

const slideIn = keyframes`
  0% { opacity: 0; transform: translateX(-100%); }
  100% { opacity: 1; transform: translateX(0); }
`;

const HeroSection = styled.section`
  position: relative;
  padding: 6rem 2rem 0;
  height: 92vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  color: #fff;
  text-align: center;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  max-width: 750px;
  margin: 0 auto 2.5rem;
`;

const AnimatedText = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  animation: ${(props) => (props.animating ? slideOut : slideIn)} 1s ease forwards;
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.6;
  max-width: 700px;
  margin: 0 auto 2rem;
`;

const HeroButton = styled.button`
  font-family: 'Kanit', sans-serif;
  background-color: #fff;
  color: #0f0f0f;
  padding: 0.9rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;
  &:hover {
    opacity: 0.85;
  }
`;

const phrases = [
  "Unlock Team Potential with CollabPulse",
  "Empower Your Team with Data-Driven Insights",
  "Streamline Collaboration for Greater Productivity",
  "Revolutionize Your Workflow with Real-Time Analytics"
];

const Hero = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setAnimating(false);
      }, 1000);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleGetStarted = () => {
    navigate('/survey');
  };

  return (
    <HeroSection className="hero">
      <HeroContent className="hero-content">
        <AnimatedText className="hero-title" animating={animating}>
          {phrases[currentIndex]}
        </AnimatedText>
        <HeroSubtitle className="hero-subtitle">
          Stay ahead in fast-paced projects with real-time collaboration insights.
          CollabPulse seamlessly integrates with GitHub, Slack, and project management tools
          to track activity, analyze communication, and boost teamwork.
        </HeroSubtitle>
        <HeroButton className="hero-button" onClick={handleGetStarted}>
          Get Started
        </HeroButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
