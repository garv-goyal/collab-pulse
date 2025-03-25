import React from 'react';
import styled from 'styled-components';
import { keyframes } from 'styled-components';

const Section = styled.section`
  padding: 3rem 1.5rem;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 1rem;
  background: linear-gradient(90deg, #ffffff, #bbbbbb);
  -webkit-background-clip: text;
  color: #fff; /* fallback for older browsers */
`;

const Subtitle = styled.p`
  max-width: 700px;
  margin: 0 auto 3rem;
  font-size: 1rem;
  line-height: 1.6;
  color: #ddd;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const CardWrapper = styled.div`
  width: 220px;
  height: 280px;
  perspective: 1000px;
`;


const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.7s ease;
  transform-style: preserve-3d;
  
  ${CardWrapper}:hover & {
    transform: rotateY(180deg);
  }
`;

const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const CardFront = styled(CardFace)`
  background: linear-gradient(
    135deg,
    rgba(0, 255, 171, 0.07),
    rgba(255, 255, 255, 0.1)
  );
  border: 1px solid rgba(255, 255, 255, 0.12);
`;

const StepTitle = styled.h3`
  font-size: 1.2rem;
  margin: 0 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  background: linear-gradient(90deg,rgb(255, 255, 255),rgb(255, 255, 255));
  -webkit-background-clip: text;
  color: transparent;
`;


const CardBack = styled(CardFace)`
  background: #101f29;
  border: 1px solid #1d2e3a;
  transform: rotateY(180deg);
`;


// Add this keyframe for fade-in effect
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const BulletItem = styled.li`
  margin-bottom: 0.5rem;
  position: relative;
  padding-left: 1.5rem;
  font-size: 0.95rem;
  color: #c4f0e4;
  animation: ${fadeInUp} 0.6s ease forwards;
  opacity: 0;

  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }

  &::before {
    content: '✦';
    position: absolute;
    left: 0;
    top: 0;
    color: #00ffab;
    font-size: 1rem;
    line-height: 1.2;
  }

  &:hover {
    color: #fff;
    transform: translateX(4px);
    transition: all 0.3s ease;
  }
`;

const BackContent = styled.div`
  padding: 1rem 1.2rem;
  text-align: left;
  color: #c4f0e4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const BackTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  background: linear-gradient(90deg, #ffffff, #bbbbbb);
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 0.5px;
  text-transform: uppercase;
`;

const BulletList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const steps = [
  {
    frontTitle: '1. Sign Up',
    backTitle: 'Quick & Secure',
    bullets: [
      'Simple email or SSO signup',
      'No credit card required',
      'Encrypted data from the start'
    ]
  },
  {
    frontTitle: '2. Personalize',
    backTitle: 'Tailored to You',
    bullets: [
      'Define your team structure',
      'Set up your analytics preferences',
      'Choose real-time alerts or daily digests'
    ]
  },
  {
    frontTitle: '3. Integrate',
    backTitle: 'Seamless Connections',
    bullets: [
      'GitHub, Slack, Jira, Trello…',
      'Sync tasks, commits, messages',
      'All in one unified dashboard'
    ]
  },
  {
    frontTitle: '4. Track Live',
    backTitle: 'Stay in the Loop',
    bullets: [
      'Monitor code reviews & PRs',
      'Watch tasks move across boards',
      'Real-time collaboration metrics'
    ]
  },
  {
    frontTitle: '5. Optimize',
    backTitle: 'Work Smarter',
    bullets: [
      'Utilize intelligent insights',
      'Identify bottlenecks early',
      'Boost productivity & morale'
    ]
  }
];

const HowItWorksFlip = () => {
  return (
    <Section id="howitworks">
      <Title>How CollabPulse Works</Title>
      <Subtitle>
        Quickly onboard your team and connect your favorite tools 
        to unlock real-time collaboration analytics.
      </Subtitle>

      <CardsContainer>
        {steps.map((step, i) => (
          <CardWrapper key={i}>
            <CardInner>
              <CardFront>
                <StepTitle>{step.frontTitle}</StepTitle>
              </CardFront>

              <CardBack>
                <BackContent>
                  <BackTitle>{step.backTitle}</BackTitle>
                  <BulletList>
  {step.bullets.map((text, j) => (
    <BulletItem key={j}>{text}</BulletItem>
  ))}
</BulletList>
                </BackContent>
              </CardBack>
            </CardInner>
          </CardWrapper>
        ))}
      </CardsContainer>
    </Section>
  );
};

export default HowItWorksFlip;
