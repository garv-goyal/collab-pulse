// src/components/Dashboard.jsx
import React, { useState } from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faSlack, faBitbucket } from '@fortawesome/free-brands-svg-icons';
import { faStickyNote } from '@fortawesome/free-solid-svg-icons';
import ProjectsSection from './ProjectsSection';
import ActivityFeedSection from './ActivityFeed';

const DashboardContainer = styled.div`
  background-color: #0f0f0f;
  min-height: 100vh;
  color: #fff;
`;

const ContentContainer = styled.div`
  padding: 2rem 3rem;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const SubHeader = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

const ToolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ToolCard = styled.div`
  background-color: #212121;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;

const ToolIcon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const ConnectButton = styled.button`
  margin-top: 1rem;
  padding: 0.8rem 1.2rem;
  border: none;
  border-radius: 4px;
  background-color: ${(props) => props.bgColor || '#fff'};
  color: ${(props) => props.color || '#0f0f0f'};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: ${(props) => props.hoverBgColor || '#e0e0e0'};
  }
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.8);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  width: 90%;
  color: #fff;
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
`;

const Dashboard = ({ userInfo }) => {
  const [showGitHubModal, setShowGitHubModal] = useState(false);
  const [showSlackModal, setShowSlackModal] = useState(false);
  const [showNotionModal, setShowNotionModal] = useState(false);
  const [showBitbucketModal, setShowBitbucketModal] = useState(false);

  const handleGitHubConnect = () => {
    setShowGitHubModal(true);
  };

  const handleSlackConnect = () => {
    setShowSlackModal(true);
  };

  const handleNotionConnect = () => {
    setShowNotionModal(true);
  };

  const handleBitbucketConnect = () => {
    setShowBitbucketModal(true);
  };

  return (
    <DashboardContainer>
      <Navbar userInfo={userInfo} />
      <ContentContainer>
        <Header>Dashboard</Header>
        <SubHeader>
          Welcome, {userInfo ? userInfo.name : "User"}! Connect your tools below to start syncing your team's data.
        </SubHeader>
        <ToolsGrid>
          <ToolCard onClick={handleGitHubConnect}>
            <ToolIcon>
              <FontAwesomeIcon icon={faGithub} />
            </ToolIcon>
            <h3>Connect GitHub</h3>
            <p>Sync repository data and view simulated commit trends and pull request activity.</p>
            <ConnectButton
              bgColor="#24292e"
              color="#fff"
              hoverBgColor="#1e2227"
              onClick={handleGitHubConnect}
            >
              Connect GitHub
            </ConnectButton>
          </ToolCard>
          <ToolCard onClick={handleSlackConnect}>
            <ToolIcon>
              <FontAwesomeIcon icon={faSlack} />
            </ToolIcon>
            <h3>Connect Slack</h3>
            <p>Sync your Slack workspace to analyze simulated communication and sentiment trends.</p>
            <ConnectButton
              bgColor="#4A154B"
              color="#fff"
              hoverBgColor="#3d123e"
              onClick={handleSlackConnect}
            >
              Connect Slack
            </ConnectButton>
          </ToolCard>
          <ToolCard onClick={handleNotionConnect}>
            <ToolIcon>
              <FontAwesomeIcon icon={faStickyNote} />
            </ToolIcon>
            <h3>Connect Notion</h3>
            <p>Integrate your Notion workspace to centralize documents, project boards, and notes.</p>
            <ConnectButton
              bgColor="#000000"
              color="#fff"
              hoverBgColor="#333"
              onClick={handleNotionConnect}
            >
              Connect Notion
            </ConnectButton>
          </ToolCard>
          <ToolCard onClick={handleBitbucketConnect}>
            <ToolIcon>
              <FontAwesomeIcon icon={faBitbucket} />
            </ToolIcon>
            <h3>Connect Bitbucket</h3>
            <p>Sync your Bitbucket repositories to view commit history, branch activity, and pull request trends.</p>
            <ConnectButton
              bgColor="#205081"
              color="#fff"
              hoverBgColor="#18365e"
              onClick={handleBitbucketConnect}
            >
              Connect Bitbucket
            </ConnectButton>
          </ToolCard>
        </ToolsGrid>
        <ProjectsSection />
        <ActivityFeedSection />
      </ContentContainer>

      {showGitHubModal && (
        <ModalOverlay onClick={() => setShowGitHubModal(false)}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setShowGitHubModal(false)}>&times;</CloseButton>
            <h2>Connect Your GitHub Account</h2>
            <p>
              Connect your GitHub account to sync repository data and view interactive graphs that simulate commit trends, pull request activity, and issue tracking. Filter data by repository, time frame, and contributor for deeper insights.
            </p>
            <img 
              src="https://via.placeholder.com/600x300?text=GitHub+Graph+Demo" 
              alt="GitHub Graph Demo" 
              style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
            />
            <ConnectButton
              bgColor="#24292e"
              color="#fff"
              hoverBgColor="#1e2227"
              onClick={() => {
                alert("GitHub connected (demo)!");
                setShowGitHubModal(false);
              }}
              style={{ marginTop: '1rem' }}
            >
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
            <p>
              Connect your Slack workspace to sync communication data and analyze simulated sentiment trends. Interactive heatmaps and word clouds provide insight into team engagement.
            </p>
            <img 
              src="https://via.placeholder.com/600x300?text=Slack+Sentiment+Demo" 
              alt="Slack Sentiment Demo" 
              style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
            />
            <ConnectButton
              bgColor="#4A154B"
              color="#fff"
              hoverBgColor="#3d123e"
              onClick={() => {
                alert("Slack connected (demo)!");
                setShowSlackModal(false);
              }}
              style={{ marginTop: '1rem' }}
            >
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
            <p>
              Connect your Notion workspace to centralize your documents, project boards, and notes. View an interactive demo dashboard that simulates integration with Notion.
            </p>
            <img 
              src="https://via.placeholder.com/600x300?text=Notion+Dashboard+Demo" 
              alt="Notion Dashboard Demo" 
              style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
            />
            <ConnectButton
              bgColor="#000000"
              color="#fff"
              hoverBgColor="#333"
              onClick={() => {
                alert("Notion connected (demo)!");
                setShowNotionModal(false);
              }}
              style={{ marginTop: '1rem' }}
            >
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
            <p>
              Connect your Bitbucket account to sync repository data and view interactive graphs that simulate commit history, branch activity, and pull request trends.
            </p>
            <img 
              src="https://via.placeholder.com/600x300?text=Bitbucket+Dashboard+Demo" 
              alt="Bitbucket Dashboard Demo" 
              style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
            />
            <ConnectButton
              bgColor="#205081"
              color="#fff"
              hoverBgColor="#18365e"
              onClick={() => {
                alert("Bitbucket connected (demo)!");
                setShowBitbucketModal(false);
              }}
              style={{ marginTop: '1rem' }}
            >
              Connect Bitbucket
            </ConnectButton>
          </ModalContent>
        </ModalOverlay>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;
