// src/components/ActivityFeedSection.jsx
import React from 'react';
import styled from 'styled-components';

const FeedContainer = styled.section`
  padding: 2rem 3rem;
  background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
  color: #fff;
`;

const FeedTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #f9f9f9;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FeedList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 800px;
`;

const FeedItem = styled.li`
  background-color: #212121;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  border-left: 4px solid #e50914;
  box-shadow: 0 2px 4px rgba(0,0,0,0.3);
  transition: transform 0.2s ease;
  &:hover {
    transform: translateX(5px);
  }
`;

const ActivityText = styled.span`
  margin-bottom: 0.5rem;
`;

const Timestamp = styled.span`
  font-size: 0.85rem;
  color: #888;
`;

const ActivityFeedSection = () => {
  const dummyActivities = [
    { id: 1, text: "User A committed code to Project Alpha.", timestamp: "10:30 AM" },
    { id: 2, text: "User B created an issue in Project Beta.", timestamp: "11:15 AM" },
    { id: 3, text: "User C merged a pull request in Project Gamma.", timestamp: "12:00 PM" },
    { id: 4, text: "User A commented on a commit in Project Alpha.", timestamp: "1:45 PM" },
  ];

  return (
    <FeedContainer id="activity">
      <FeedTitle>Activity Feed</FeedTitle>
      <FeedList>
        {dummyActivities.map(activity => (
          <FeedItem key={activity.id}>
            <ActivityText>{activity.text}</ActivityText>
            <Timestamp>{activity.timestamp}</Timestamp>
          </FeedItem>
        ))}
      </FeedList>
    </FeedContainer>
  );
};

export default ActivityFeedSection;
