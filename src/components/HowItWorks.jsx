import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUserPlus, 
  faCogs, 
  faPlug, 
  faEye, 
  faRocket 
} from '@fortawesome/free-solid-svg-icons';

const TimelineSection = styled.section`
  padding: 4rem 2rem;
  position: relative;
`;

const TimelineTitle = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  color: #fff;
  margin-bottom: 3rem;
`;

const TimelineContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background-color: #444;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    z-index: 0;
  }
`;

const TimelineItem = styled.div`
  padding: 1rem 2rem;
  position: relative;
  width: 50%;
  box-sizing: border-box;
  text-align: ${(props) => (props.align === 'left' ? 'right' : 'left')};
  left: ${(props) => (props.align === 'left' ? '0' : '50%')};

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
    text-align: left;
    padding-left: 70px;
    margin-bottom: 2rem;
  }
`;

const TimelineContent = styled.div`
  padding: 1rem;
  background-color: #2a2a2a;
  position: relative;
  border-radius: 6px;
  color: #ccc;
`;

const TimelineIcon = styled.div`
  position: absolute;
  top: 15px;
  ${(props) => (props.align === 'left' ? 'right: -30px;' : 'left: -30px;')}
  background-color: #333;
  color: #fff;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  border: 3px solid #1a1a1a;
  z-index: 2;
`;

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      icon: faUserPlus,
      title: "Create Your Account",
      description: "Sign up using your email or social login to begin your journey with CollabPulse."
    },
    {
      id: 2,
      icon: faCogs,
      title: "Customize Your Experience",
      description: "Complete a brief onboarding survey to tailor the platform to your team's needs."
    },
    {
      id: 3,
      icon: faPlug,
      title: "Connect Your Tools",
      description: "Integrate GitHub, Slack, and other apps to seamlessly sync your team's data."
    },
    {
      id: 4,
      icon: faEye,
      title: "Explore Your Dashboard",
      description: "Dive into your personalized dashboard to view real-time analytics and performance metrics."
    },
    {
      id: 5,
      icon: faRocket,
      title: "Launch & Optimize",
      description: "Receive actionable insights and recommendations to boost collaboration and productivity."
    }
  ];

  return (
    <TimelineSection>
      <TimelineTitle>Getting Started with CollabPulse</TimelineTitle>
      <TimelineContainer>
        {steps.map((step, index) => {
          const align = index % 2 === 0 ? 'left' : 'right';
          return (
            <TimelineItem key={step.id} align={align}>
              <TimelineIcon align={align}>
                <FontAwesomeIcon icon={step.icon} />
              </TimelineIcon>
              <TimelineContent>
                <h3 style={{ margin: '0 0 0.5rem', color: '#fff', fontSize: '1.3rem' }}>
                  {step.title}
                </h3>
                <p style={{ margin: 0, fontSize: '1rem' }}>{step.description}</p>
              </TimelineContent>
            </TimelineItem>
          );
        })}
      </TimelineContainer>
    </TimelineSection>
  );
};

export default HowItWorks;
