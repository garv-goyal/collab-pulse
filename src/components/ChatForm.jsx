import React, { useRef } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  align-items: center;
  border-radius: 24px;
  padding: 0 8px;
  border: 0.5px solid rgb(60, 103, 141);
  width: 100%;
    &:focus-within {
    border: 1px solid #284954;
    background:rgb(240, 240, 240);
  }
`;

const Input = styled.input`
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
  background: transparent;
  color: #000;
  font-size: 0.95rem;
  padding: 0 10px;
  font-family: 'Inter', sans-serif;
  &::placeholder {
    color: #aaa;
  }
`;

const SendButton = styled.button`
  background: #284954;
  border: none;
  width: 35px;     
  height: 35px;    
  padding: 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  color: #fff;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  &:hover {
    background:rgb(61, 83, 130);
  }
`;

const ChatForm = ({ handleSendMessage }) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = inputRef.current.value.trim();
    if (message) {
      handleSendMessage(message);
      inputRef.current.value = "";
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input ref={inputRef} placeholder="Type your message..." required />
      <SendButton type="submit"><FaArrowUp size={20} color="#fff" /></SendButton>
    </Form>
  );
};

export default ChatForm;
