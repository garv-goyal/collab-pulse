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

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { box-shadow: 0 0 0 rgba(74, 241, 192, 0); }
  50% { box-shadow: 0 0 16px rgba(74, 241, 192, 0.2); }
  100% { box-shadow: 0 0 0 rgba(74, 241, 192, 0); }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  color: #fff;
`;

const Title = styled.h2`
  font-size: 2.7rem;
  text-align: center;
  margin-bottom: 4rem;
  background: linear-gradient(90deg, #ffffff, #bbbbbb);
  -webkit-background-clip: text;
  color: #fff;
`;

const StepGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const StepCard = styled.div`
  background: rgba(255, 255, 255, 0.035);
  border-radius: 16px;
  padding: 2rem 1.8rem;
  max-width: 220px;
  max-height: 300px;
  flex: 1 1 250px;
  text-align: center;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(12px);
  animation: ${fadeIn} 0.9s ease forwards;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.05);
  }
`;

const IconCircle = styled.div`
  width: 60px;
  height: 60px;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: #0e1a22;
  border: 3px solid #52d1ab;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  animation: ${pulse} 3s infinite;
  color: #4af1c0;

  ${StepCard}:hover & {
    background: #52d1ab;
    color: #0e1a22;
  }
`;

const StepTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.6rem;
  color: #ffffff;
`;

const StepDesc = styled.p`
  font-size: 1rem;
  color: #dddddd;
  line-height: 1.5;
`;

const HowItWorks = () => {
  const steps = [
    {
      icon: faUserPlus,
      title: 'Create Your Account',
      description: 'Sign up with email or SSO to begin your journey with CollabPulse.'
    },
    {
      icon: faCogs,
      title: 'Customize Your Experience',
      description: 'Complete a brief onboarding to tailor analytics to your team.'
    },
    {
      icon: faPlug,
      title: 'Connect Your Tools',
      description: 'Integrate GitHub, Slack, Jira and more to sync your workflows.'
    },
    {
      icon: faEye,
      title: 'View Your Dashboard',
      description: 'Monitor real-time insights and detect collaboration bottlenecks.'
    },
    {
      icon: faRocket,
      title: 'Launch & Optimize',
      description: 'Get proactive recommendations to supercharge productivity.'
    }
  ];

  return (
    <Section id="howitworks">
      <Title>How CollabPulse Works</Title>
      <StepGrid>
        {steps.map((step, i) => (
          <StepCard key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            <IconCircle>
              <FontAwesomeIcon icon={step.icon} />
            </IconCircle>
            <StepTitle>{step.title}</StepTitle>
            <StepDesc>{step.description}</StepDesc>
          </StepCard>
        ))}
      </StepGrid>
    </Section>
  );
};

export default HowItWorks;
