import React from 'react';
import { faChartLine, faArrowTrendUp, faBell } from '@fortawesome/free-solid-svg-icons';
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

const InsightsContainer = styled.section`
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
  animation: ${fadeInUp} 0.8s ease both;
`;

const InsightsTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #cccccc);
  -webkit-background-clip: text;
  rgb(250, 250, 250)
`;

const InsightsSubtitle = styled.p`
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

const InsightsSection = () => {
  return (
    <InsightsContainer id="insights">
      <InsightsTitle>
        Insights When You Need Them, Wherever You Are
      </InsightsTitle>
      <InsightsSubtitle>
        Access real-time analytics and performance metrics with our dynamic dashboard. 
        Stay informed and make data-driven decisions from any location.
      </InsightsSubtitle>
      <FeaturesGrid>
        <FeatureCard
          icon={faChartLine}
          title="Activity Analysis"
          description="Monitor code commits, pull requests, and issue discussions."
          detailedDescription="Track code commits, pull requests, and issue discussions in depth with interactive charts that highlight participation trends and pinpoint areas for improvement."
        />
        <FeatureCard
          icon={faArrowTrendUp}
          title="Task Progress"
          description="Visualize project timelines."
          detailedDescription="Explore project timelines with dynamic, interactive graphs that display task progress and identify bottlenecks, helping teams stay on track."
        />
        <FeatureCard
          icon={faBell}
          title="Notifications"
          description="Receive collaboration alerts."
          detailedDescription="Stay on top of your team's performance with timely notifications. Detailed alert logs help you monitor issues and take corrective actions promptly."
        />
      </FeaturesGrid>
    </InsightsContainer>
  );
};

export default InsightsSection;
