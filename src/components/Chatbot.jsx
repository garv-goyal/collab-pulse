// src/components/Chatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaComments, FaTimes, FaRobot, FaAngleDown } from 'react-icons/fa';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import { companyInfo } from '../companyInfo';

const slideIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  position: fixed;
  bottom: 30px;
  right: 35px;
  z-index: 10000;
`;

const Toggler = styled.button`
  height: 60px;
  width: 60px;
  border: 2px solid rgb(237, 242, 244);
  border-radius: 50%;
  background: #284954;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.1);
  }
`;

const Popup = styled.div`
  position: fixed;
  bottom: 90px;
  right: 35px;
  width: 420px;
  background: #fff;
  border: 1px solid #284954;
  border-radius: 15px;
  transform-origin: bottom right;
  box-shadow: 0 0 20px rgba(0,0,0,0.2);
  overflow: hidden;
  opacity: ${props => (props.show ? 1 : 0)};
  pointer-events: ${props => (props.show ? 'auto' : 'none')};
  transform: scale(${props => (props.show ? 1 : 0.2)});
  transition: all 0.2s ease;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #284954;
  padding: 15px 22px;
`;

const HeaderInfo = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const LogoText = styled.h2`
  font-size: 1.31rem;
  font-weight: 600;
  letter-spacing: 0.02rem;
  color: #fff;
  margin: 0;
`;

const CloseBtn = styled.button`
  border: none;
  height: 40px;
  width: 40px;
  padding: 5px;
  border-radius: 50%;
  background: none;
  color: #fff;
  cursor: pointer;
  font-size: 1.9rem;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255,255,255,0.2);
  }
`;

const ChatBody = styled.div`
  padding: 25px 22px;
  height: 460px;
  overflow-y: auto;
  animation: ${slideIn} 0.3s ease;
  font-family: 'Kanit', sans-serif;
  font-size: 0.95rem;
  color: #333;
`;

const ChatFooter = styled.div`
  padding: 15px 22px 20px;
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    { role: "model", text: companyInfo, hideInChat: true }
  ]);
  const chatBodyRef = useRef(null);

  const toggleChat = () => {
    setIsOpen(prev => !prev);
  };

  const handleSendMessage = (message) => {
    if (message.trim() === "") return;
    setChatHistory(prev => [...prev, { role: "user", text: message }]);
    setTimeout(() => {
      setChatHistory(prev => [
        ...prev.filter(msg => msg.text !== "Thinking..."),
        { role: "model", text: "I'm here to help! (This is a demo response)" }
      ]);
    }, 800);
  };

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatHistory]);

  return (
    <Container>
      <Toggler onClick={toggleChat}>
        {isOpen ? <FaTimes size={25} color="#fff" /> : <FaComments size={25} color="#fff" />}
      </Toggler>
      <Popup show={isOpen}>
        <Header>
          <HeaderInfo>
            <FaRobot size={30} color="#fff" />
            <LogoText>Chatbot</LogoText>
          </HeaderInfo>
          <CloseBtn onClick={toggleChat}>
            <FaAngleDown size={30} color="#fff" />
          </CloseBtn>
        </Header>
        <ChatBody ref={chatBodyRef}>
          {chatHistory.map((msg, index) => (
            <ChatMessage key={index} chat={msg} />
          ))}
        </ChatBody>
        <ChatFooter>
          <ChatForm handleSendMessage={handleSendMessage} />
        </ChatFooter>
      </Popup>
    </Container>
  );
};

export default Chatbot;
