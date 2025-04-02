import React from 'react';
import styled from 'styled-components';

const MessageContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.role === 'user' ? 'row-reverse' : 'row')};
  align-items: flex-end;
  margin-bottom: 10px;
`;

const MessageText = styled.p`
  background: ${props =>
    props.role === 'user' ? '#6D4FC2' : '#333'};
  color: #fff;
  padding: 10px 15px;
  border-radius: 15px;
  max-width: 75%;
  word-wrap: break-word;
  font-size: 0.9rem;
  margin: 0;
`;

const ChatMessage = ({ chat }) => {
  if (chat.hideInChat) return null;
  return (
    <MessageContainer role={chat.role}>
      {chat.role === 'model'}
      <MessageText role={chat.role}>{chat.text || "Empty message"}</MessageText>
    </MessageContainer>
  );
};

export default ChatMessage;
