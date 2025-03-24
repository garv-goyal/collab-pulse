import React from 'react';
import { faMessage, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import FeatureCard from './FeatureCard';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CollaborateContainer = styled.section`
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease both;
`;

const CollaborateTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #cccccc);
  -webkit-background-clip: text;
  rgb(250, 250, 250)
`;

const CollaborateSubtitle = styled.p`
  max-width: 700px;
  margin: 0 auto 2.5rem auto;
  font-size: 1.1rem;
  color: #ccc;
  line-height: 1.6;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const CollaborateSection = () => {
  return (
    <CollaborateContainer id="collaborate">
      <CollaborateTitle>
        Collaborate Seamlessly, No Matter the Team Size
      </CollaborateTitle>
      <CollaborateSubtitle>
        Experience unified communication and smooth task management that brings everyone together. 
        Our platform scales effortlessly, supporting teams of every size.
      </CollaborateSubtitle>
      <FeaturesGrid>
        <FeatureCard
          icon={faMessage}
          title="Communication Sentiment"
          description="Analyze chat and forum messages."
          detailedDescription="Leverage natural language processing to analyze team chat and forum messages. Detailed sentiment analysis highlights emotional trends and flags potential conflicts early."
        />
        <FeatureCard
          icon={faLightbulb}
          title="Actionable Insights"
          description="Receive proactive suggestions."
          detailedDescription="Get tailored recommendations based on comprehensive data analysis. Detailed insights suggest scheduling check-ins, rebalancing tasks, and optimizing workflows to enhance team collaboration."
        />
      </FeaturesGrid>
    </CollaborateContainer>
  );
};

export default CollaborateSection;
