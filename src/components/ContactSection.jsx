import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
`;

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  color: #fff;
  backdrop-filter: blur(10px);
  animation: ${fadeInUp} 1s ease both;
`;

const ContactTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #ffffff, #cccccc);
  -webkit-background-clip: text;
  color: rgb(250, 250, 250);
`;

const ContactSubtitle = styled.p`
  color: #ddd;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-inline: auto;
  font-size: 1.1rem;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  flex-wrap: wrap;
  max-width: 600px;
  margin: 0 auto;
`;

const EmailInput = styled.input`
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: 6px;
  border: 1px solid #333;
  font-family: 'Kanit', sans-serif;
  background-color: rgba(15, 35, 45, 0.8);
  color: #fff;
  transition: border 0.3s ease;

  &:focus {
    outline: none;
    border: 1px solid #00ffab;
    box-shadow: 0 0 8px rgba(0, 255, 171, 0.3);
  }
`;

const SubscribeButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #00ffab;
  color: #0f0f0f;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-family: 'Kanit', sans-serif;
  transition: background 0.3s ease;

  &:hover {
    background-color: #00e0a0;
  }
`;

const ResponseMessage = styled.p`
  color: lightgreen;
  margin-top: 1rem;
  font-size: 1rem;
`;

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xnnpnako', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage('Successfully subscribed! 🎉 Check your email for confirmation.');
        setEmail('');

        if (window.gtag) {
          window.gtag('event', 'submit', {
            event_category: 'Newsletter',
            event_label: 'Contact Form',
            value: 1
          });
        }
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessage('Error connecting to Formspree. Please try again.');
    }
  };

  return (
    <ContactContainer id="contact">
      <ContactTitle>Stay in Touch</ContactTitle>
      <ContactSubtitle>
        Sign up for our newsletter to receive updates, tips, and best practices on collaboration.
      </ContactSubtitle>
      <Form onSubmit={handleSubmit}>
        <EmailInput
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <SubscribeButton type="submit">Subscribe</SubscribeButton>
      </Form>
      {message && <ResponseMessage>{message}</ResponseMessage>}
    </ContactContainer>
  );
};

export default ContactSection;
