import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/survey');
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Unlock Team Potential with CollabPulse</h1>
        <p className="hero-subtitle">
          Stay ahead in fast-paced projects with real-time collaboration insights. 
          CollabPulse seamlessly integrates with GitHub, Slack, and project management tools 
          to track activity, analyze communication, and boost teamwork.
        </p>
        <button className="hero-button" onClick={handleGetStarted}>Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
