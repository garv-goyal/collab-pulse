import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faCogs,
  faPlug,
  faEye,
  faRocket
} from '@fortawesome/free-solid-svg-icons';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulseGlow = keyframes`
  0% {
    box-shadow: 0 0 0 rgba(0, 255, 171, 0);
  }
  50% {
    box-shadow: 0 0 15px rgba(0, 255, 171, 0.3);
  }
  100% {
    box-shadow: 0 0 0 rgba(0, 255, 171, 0);
  }
`;

const TimelineSection = styled.section`
  padding: 4rem 2rem;
  backdrop-filter: blur(8px);
`;

const TimelineTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  color: #fff;
  margin-bottom: 3rem;
  background: linear-gradient(to right, #ffffff, #aaaaaa);
  -webkit-background-clip: text;
  rgb(250, 250, 250)
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
  animation: ${fadeInUp} 1s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: linear-gradient(to bottom, #ffffab, #f5f5bb);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    z-index: 0;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  width: 50%;
  padding: 1.5rem 2rem;
  box-sizing: border-box;
  text-align: ${(props) => (props.align === 'left' ? 'right' : 'left')};
  left: ${(props) => (props.align === 'left' ? '0' : '50%')};
  z-index: 1;

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    text-align: left;
    padding-left: 60px;
    margin-bottom: 2rem;
  }
`;

const TimelineContent = styled.div`
  padding: 1.2rem 1.5rem;
  background: ${(props) =>
    props.align === 'left'
      ? 'rgba(0, 255, 171, 0.06)'
      : 'rgba(0, 214, 255, 0.06)'};
  border-left: ${(props) =>
    props.align === 'left' ? '4px solid #ffffab' : '4px solid #ffffab'};
  border-radius: 8px;
  color: #fefefe;
  transition: background 0.3s;
  box-shadow: 0 0 12px rgba(0, 255, 171, 0.03);
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 20px;
  ${(props) => (props.align === 'left' ? 'right: -35px;' : 'left: -35px;')}
  background: #101f29;
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border: 3px solid #f6f6bd;
  animation: ${pulseGlow} 3s infinite;

  &:hover {
    background: #f6f6bd;
    color: #0f0f0f;
    transform: scale(1.05);
    transition: all 0.3s ease;
  }

  @media (max-width: 768px) {
    left: 10px !important;
    right: auto !important;
  }
`;

const HowItWorks = () => {
  const steps = [
    {
      id: 2,
      icon: faCogs,
      title: 'Customize Your Experience',
      description:
        "Complete a brief onboarding survey to tailor the platform to your team's needs."
    },
    {
      id: 1,
      icon: faUserPlus,
      title: 'Create Your Account',
      description:
        'Sign up using your email or social login to begin your journey with CollabPulse.'
    },
    {
      id: 3,
      icon: faPlug,
      title: 'Connect Your Tools',
      description:
        "Integrate GitHub, Slack, and other apps to seamlessly sync your team's data."
    },
    {
      id: 4,
      icon: faEye,
      title: 'Explore Your Dashboard',
      description:
        'Dive into your personalized dashboard to view real-time analytics and performance metrics.'
    },
    {
      id: 5,
      icon: faRocket,
      title: 'Launch & Optimize',
      description:
        'Receive actionable insights and recommendations to boost collaboration and productivity.'
    }
  ];

  return (
    <TimelineSection id="howitworks">
      <TimelineTitle>Getting Started with CollabPulse</TimelineTitle>
      <TimelineContainer>
        {steps.map((step, index) => {
          const align = index % 2 === 0 ? 'left' : 'right';
          return (
            <TimelineItem key={step.id} align={align}>
              <TimelineIcon align={align}>
                <FontAwesomeIcon icon={step.icon} />
              </TimelineIcon>
              <TimelineContent align={align}>
                <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.3rem' }}>{step.title}</h3>
                <p style={{ margin: 0, fontSize: '1rem', color: '#ccc' }}>{step.description}</p>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </TimelineContainer>
    </TimelineSection>
  );
};

export default HowItWorks;
