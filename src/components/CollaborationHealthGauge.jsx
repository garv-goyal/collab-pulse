// src/components/CollaborationHealthGauge.jsx
import React from 'react';
import styled from 'styled-components';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const GaugeContainer = styled.div`
  background: linear-gradient(135deg, #0d2538, #102027);
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem auto;
  max-width: 800px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #00bcd4;
  margin-bottom: 1rem;
  border-bottom: 2px solid #00bcd4;
  display: inline-block;
  padding-bottom: 0.3rem;
`;

const GaugeWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #b0bec5;
  max-width: 600px;
  margin: 0 auto;
`;

const CollaborationHealthGauge = ({ score = 75 }) => {
  return (
    <GaugeContainer id="health">
      <Title>Collaboration Health Score</Title>
      <GaugeWrapper>
        <CircularProgressbar
          value={score}
          text={`${score}%`}
          styles={buildStyles({
            textColor: "#fff",
            pathColor: "#00bcd4",
            trailColor: "#2c2f3a"
          })}
        />
      </GaugeWrapper>
      <Description>
        This gauge represents your team’s overall collaboration health—based on communication, task balance, and workflow efficiency. A higher score indicates better performance.
      </Description>
    </GaugeContainer>
  );
};

export default CollaborationHealthGauge;
