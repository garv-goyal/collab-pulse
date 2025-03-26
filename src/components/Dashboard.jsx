import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaSlack, FaBitbucket, FaStickyNote, FaUserCircle } from 'react-icons/fa';
import Navbar from './Navbar';
import githubLogo from '../assets/Github-desktop-logo-symbol.svg.png';
import slackLogo from '../assets/306_Slack_logo-512.png';
import jiraLogo from '../assets/jira.svg';
import trelloLogo from '../assets/trello.png';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const PageWrapper = styled.div`
  font-family: 'Kanit', sans-serif;
  background: linear-gradient(135deg, #1b4457, #284954, #294b5b); 
  min-height: 100vh;
  color: #fff;
`;

const DashboardContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const DashboardHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  animation: ${fadeIn} 0.8s ease forwards;
`;

const WelcomeMessage = styled.div`
  text-align: center;
  h1 {
    font-size: 2rem;
    margin: 0;
    color: #e0f7fa;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1.1rem;
    color: #b0bec5;
  }
`;

const HeaderNav = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1.5rem;
  a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s;
    &:hover { color: #00bcd4; }
  }
  svg { color: #00bcd4; }
`;

const ContentArea = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;

const LeftColumn = styled.div`
  flex: 1;
  min-width: 280px;
`;

const ToolsGrid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;


const ToolCard = styled.div`
  background: linear-gradient(145deg, #1c1c1c, #202020);
  padding: 1.2rem 1rem;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.35);
  border: 1px solid #2b2b2b;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s, box-shadow 0.3s;
  min-height: 230px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px rgba(0, 0, 0, 0.5);
    background: linear-gradient(145deg, #232323, #1e1e1e);
  }
`;

const ToolTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 0.3rem;
  color: #fff;
  font-weight: 600;
`;

const ToolDesc = styled.p`
  color: #aaa;
  font-size: 0.8rem;
  margin: 0.4rem 0 1rem;
  flex-grow: 1;
`;

const ConnectButton = styled.button`
  font-family: 'Kanit', sans-serif;
  background: #00bcd4;
  color: #000;
  border: none;
  border-radius: 20px;
  padding: 0.5rem 1.2rem;
  font-size: 0.85rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease;
  margin-top: auto;

  &:hover {
    background: #00a6be;
  }
`;

const IconContainer = styled.div`
  width: 58px;
  height: 58px;
  border-radius: 12px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 0.8rem;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;

  img {
    height: 28px;
    width: auto;
    object-fit: contain;
  }

  ${ToolCard}:hover & {
    transform: scale(1.1);
  }
`;

const historyLogs = [
  {
    text: `[09:45] GitHub → Commit pushed by Sarah`,
    link: 'https://github.com/your-repo/commit/abc123'
  },
  {
    text: `[09:48] Slack → Message in #frontend`,
    link: 'https://slack.com/app_redirect?channel=frontend'
  },
  {
    text: `[10:01] Jira → Task "Auth bug" updated`,
    link: 'https://your-domain.atlassian.net/browse/AUTH-99'
  },
  {
    text: `[10:17] Trello → Card moved to Done`,
    link: 'https://trello.com/c/yourCardId'
  }
];

const ToggleSwitch = styled.span`
  font-size: 0.85rem;
  color: #00bcd4;
  cursor: pointer;
  user-select: none;
  transition: color 0.3s;

  &:hover {
    color: #7de6ff;
    text-decoration: underline;
  }
`;


const RightColumn = styled.div`
  flex: 2;
  min-width: 320px;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #00bcd4;
  border-bottom: 2px solid #00bcd4;
  display: inline-block;
  padding-bottom: 0.3rem;
`;

const SummaryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const SummaryCard = styled.div`
  background: #1a1a1a;
  border-radius: 12px;
  padding: 1.2rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.3);
`;

const SummaryTitle = styled.h4`
  font-size: 1rem;
  color: #00bcd4;
  margin-bottom: 0.3rem;
`;

const SummaryValue = styled.p`
  font-size: 0.9rem;
  color: #fff;
`;

const TerminalBox = styled.div`
  background: #101f29;
  border: 1px solid #1d2e3a;
  border-radius: 12px;
  padding: 1.5rem;
  font-family: 'Source Code Pro', monospace;
  font-size: 0.9rem;
  color: #c4f0e4;
  box-shadow: 0 0 20px rgba(0,255,171,0.05);
  min-height: 250px;
  overflow-y: auto;
`;

const LogLine = styled.div`
  margin-bottom: 0.6rem;
  animation: ${fadeIn} 0.5s ease forwards;
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


const Dashboard = ({ userInfo }) => {
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [showSlackModal, setShowSlackModal] = useState(false);
  const [showNotionModal, setShowNotionModal] = useState(false);
  const [showBitbucketModal, setShowBitbucketModal] = useState(false);

  const [connected, setConnected] = useState({
    github: false,
    slack: false,
    jira: false,
    trello: false
  });
  
  const teamStats = {
    connectedTools: "3 active",
    teamMembers: "12 contributors",
    commitsToday: "47 pushes",
    openIssues: "8 in progress"
  };

  const [viewHistory, setViewHistory] = useState(false);

  const [logs, setLogs] = useState([]);
  useEffect(() => {
    const sampleLogs = [
      () => `[${time()}] GitHub → New PR opened by Sarah`,
      () => `[${time()}] Slack → 15 messages in #frontend`,
      () => `[${time()}] Bitbucket → Commit pushed to "main"`,
      () => `[${time()}] Notion → New note added in Project Board`,
      () => `[${time()}] Jira → Issue "Login bug" updated`
    ];
    const interval = setInterval(() => {
      setLogs(prevLogs => {
        const next = [...prevLogs, sampleLogs[Math.floor(Math.random() * sampleLogs.length)]()];
        return next.slice(-5);
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);
  function time() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  return (
    <PageWrapper>
      <Navbar userInfo={userInfo} />
      <DashboardContainer>
        <DashboardHeader>
          <WelcomeMessage>
            <h1>Welcome to CollabPulse 👋</h1>
            <p>Connect your tools, manage projects, and view live collaboration data.</p>
          </WelcomeMessage>
        </DashboardHeader>

        <ContentArea>
          <LeftColumn>
            <SectionTitle>Tool Integrations</SectionTitle>
            <ToolsGrid>

            <ToolCard>
            <IconContainer>
              <img src={githubLogo} alt="GitHub" />
            </IconContainer>
              <ToolTitle>GitHub</ToolTitle>
              <ToolDesc>Sync repository data and track pull requests.</ToolDesc>
              <ConnectButton
                  disabled={connected.github}
                  onClick={() => {
                    if (!connected.github) {
                      alert("GitHub connected (demo)!");
                      setConnected(prev => ({ ...prev, github: true }));
                    }
                  }}
                >
                  {connected.github ? 'Connected' : 'Connect GitHub'}
                </ConnectButton>
            </ToolCard>

              <ToolCard>
              <IconContainer>
              <img src={slackLogo} alt="Slack" />
            </IconContainer>
                <ToolTitle>Slack</ToolTitle>
                <ToolDesc>Analyze communication and sentiment trends.</ToolDesc>
                <ConnectButton
                  disabled={connected.slack}
                  onClick={() => {
                    if (!connected.slack) {
                      alert("Slack connected (demo)!");
                      setConnected(prev => ({ ...prev, slack: true }));
                    }
                  }}
                >
                  {connected.slack ? 'Connected' : 'Connect Slack'}
                </ConnectButton>
                </ToolCard>

                <ToolCard>
                <IconContainer>
                  <img src={jiraLogo} alt="Jira" />
                </IconContainer>
                <ToolTitle>Jira</ToolTitle>
                <ToolDesc>Sync tasks, issues, and sprint insights.</ToolDesc>
                <ConnectButton
                  disabled={connected.jira}
                  onClick={() => {
                    if (!connected.jira) {
                      alert('Jira connected (demo)!');
                      setConnected(prev => ({ ...prev, jira: true }));
                    }
                  }}
                >
                  {connected.jira ? 'Connected' : 'Connect Jira'}
                </ConnectButton>
              </ToolCard>

              <ToolCard>
              <IconContainer>
                <img src={trelloLogo} alt="Trello" />
              </IconContainer>
              <ToolTitle>Trello</ToolTitle>
              <ToolDesc>Track boards, cards, and task flows in real time.</ToolDesc>
              <ConnectButton
                disabled={connected.trello}
                onClick={() => {
                  if (!connected.trello) {
                    alert('Trello connected (demo)!');
                    setConnected(prev => ({ ...prev, trello: true }));
                  }
                }}
              >
                {connected.trello ? 'Connected' : 'Connect Trello'}
              </ConnectButton>
            </ToolCard>

            </ToolsGrid>
          </LeftColumn>

          <RightColumn>
            <SectionTitle>Team Overview</SectionTitle>
            <SummaryGrid>
              <SummaryCard>
                <SummaryTitle>Connected Tools</SummaryTitle>
                <SummaryValue>{teamStats.connectedTools}</SummaryValue>
              </SummaryCard>
              <SummaryCard>
                <SummaryTitle>Team Members</SummaryTitle>
                <SummaryValue>{teamStats.teamMembers}</SummaryValue>
              </SummaryCard>
              <SummaryCard>
                <SummaryTitle>Commits Today</SummaryTitle>
                <SummaryValue>{teamStats.commitsToday}</SummaryValue>
              </SummaryCard>
              <SummaryCard>
                <SummaryTitle>Open Issues</SummaryTitle>
                <SummaryValue>{teamStats.openIssues}</SummaryValue>
              </SummaryCard>
            </SummaryGrid>

            <SectionTitle style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              Live Activity
              <ToggleSwitch onClick={() => setViewHistory(!viewHistory)}>
                {viewHistory ? '← Back to Live Feed' : 'View History →'}
              </ToggleSwitch>
            </SectionTitle>

            <TerminalBox>
              {viewHistory ? (
                <>
                  {historyLogs.map((log, idx) => (
                    <LogLine key={idx}>
                      <LiveDot /> 
                      <a href={log.link} target="_blank" rel="noreferrer" style={{ color: '#7ee6e6' }}>
                        {log.text}
                      </a>
                    </LogLine>
                  ))}
                </>
              ) : (
                <>
                  {logs.map((log, idx) => (
                    <LogLine key={idx}>
                      <LiveDot /> {log}
                    </LogLine>
                  ))}
                </>
              )}
            </TerminalBox>
     
          </RightColumn>
        </ContentArea>
      </DashboardContainer>

      {showGitHubModal && (
        <ModalOverlay onClick={() => setShowGitHubModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowGitHubModal(false)}>&times;</CloseButton>
            <h2>Connect Your GitHub Account</h2>
            <p>Sync your GitHub repositories to track commit trends and pull request activity.</p>
            <ConnectButton onClick={() => {
                alert("GitHub connected (demo)!");
                setShowGitHubModal(false);
              }}>
              Connect GitHub
            </ConnectButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {showSlackModal && (
        <ModalOverlay onClick={() => setShowSlackModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowSlackModal(false)}>&times;</CloseButton>
            <h2>Connect Your Slack Workspace</h2>
            <p>Sync your Slack workspace to analyze communication and sentiment trends.</p>
            <ConnectButton onClick={() => {
                alert("Slack connected (demo)!");
                setShowSlackModal(false);
              }}>
              Connect Slack
            </ConnectButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {showNotionModal && (
        <ModalOverlay onClick={() => setShowNotionModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowNotionModal(false)}>&times;</CloseButton>
            <h2>Connect Your Notion Workspace</h2>
            <p>Integrate your Notion workspace to centralize documents and project boards.</p>
            <ConnectButton onClick={() => {
                alert("Notion connected (demo)!");
                setShowNotionModal(false);
              }}>
              Connect Notion
            </ConnectButton>
          </ModalContent>
        </ModalOverlay>
      )}

      {showBitbucketModal && (
        <ModalOverlay onClick={() => setShowBitbucketModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowBitbucketModal(false)}>&times;</CloseButton>
            <h2>Connect Your Bitbucket Account</h2>
            <p>Sync your Bitbucket repositories to track commit history and branch activity.</p>
            <ConnectButton onClick={() => {
                alert("Bitbucket connected (demo)!");
                setShowBitbucketModal(false);
              }}>
              Connect Bitbucket
            </ConnectButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </PageWrapper>
  );
};

export default Dashboard;
