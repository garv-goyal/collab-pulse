import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.3); }
`;

const scrollUp = keyframes`
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  color: #fff;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #bbbbbb);
  -webkit-background-clip: text;
  color: #fff;
`;

const Subtitle = styled.p`
  font-size: 1.05rem;
  color: #ddd;
  max-width: 700px;
  margin: 0 auto 2.5rem;
`;

const Terminal = styled.div`
  background: #101f29;
  border: 1px solid #1d2e3a;
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 700px;
  margin: 0 auto;
  text-align: left;
  font-family: 'Source Code Pro', monospace;
  font-size: 0.95rem;
  color: #c4f0e4;
  box-shadow: 0 0 20px rgba(0, 255, 171, 0.05);
  min-height: 260px;
`;

const Line = styled.div`
  animation: ${scrollUp} 0.5s ease forwards;
  margin-bottom: 0.6rem;
`;

const LiveDot = styled.span`
  display: inline-block;
  background: #00ffab;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-right: 0.5rem;
  animation: ${pulse} 1.2s infinite;
`;

const LivePulseSection = () => {
  const [logs, setLogs] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sampleLogs = [
    () => `[${time()}] Pull request #421 merged by Sarah (3 reviewers)`,
    () => `[${time()}] New issue opened: "Refactor user onboarding flow"`,
    () => `[${time()}] Slack spike in #design — 21 messages in 5 mins`,
    () => `[${time()}] Standup sentiment: 🟢 Positive (8.4/10)`,
    () => `[${time()}] Trello card moved to 'In Progress': “Dark mode support”`,
    () => `[${time()}] Alert: PR review time rising in frontend repo`,
    () => `[${time()}] 📊 Team Alpha resolved 13 tickets today`,
    () => `[${time()}] GitHub push detected on 'feature/invite-flows'`,
    () => `[${time()}] 🔔 Weekly report generated for Engineering team`,
    () => `[${time()}] Jira story updated: “Auth fallback edge case”`,
  ];

  function time() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setLogs((prev) => {
        const next = [...prev, sampleLogs[Math.floor(Math.random() * sampleLogs.length)]()];
        return next.slice(-8);
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [sampleLogs]);

  return (
    <Section id="live">
      <Title>Live Collaboration Pulse</Title>
      <Subtitle>
        CollabPulse constantly listens to team activity, surfacing insights as they happen.
      </Subtitle>

      <Terminal>
        {logs.map((log, idx) => (
          <Line key={idx}>
            <LiveDot />
            {log}
          </Line>
        ))}
      </Terminal>
    </Section>
  );
};

export default LivePulseSection;
