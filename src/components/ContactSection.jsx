import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  color: #fff;
`;

const Card = styled.div`
  border: 1px solid #1d2e3a;
  border-radius: 12px;
  padding: 2.5rem;
  max-width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 255, 171, 0.05);
`;

const ContactTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 0.75rem;
  background: linear-gradient(to right, #ffffff, #bbbbbb);
  -webkit-background-clip: text;
  color: transparent;
`;

const ContactSubtitle = styled.p`
  color: #ccc;
  margin-bottom: 2rem;
  font-size: 1.05rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EmailInput = styled.input`
  padding: 0.9rem 1.2rem;
  border-radius: 8px;
  border: none;
  background-color: #0d1a22;
  color: #fff;
  font-size: 1rem;
  font-family: 'Kanit', sans-serif;

  &:focus {
    outline: 1px solid #00ffab;
    background-color: #0a1720;
  }
`;

const Button = styled.button`
  background-color: #00ffab;
  color: #0f0f0f;
  padding: 0.9rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Kanit', sans-serif;

  &:hover {
    background-color: #00e6a0;
  }
`;


const Message = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  color: #00ffab;
`;

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const res = await fetch('https://formspree.io/f/xnnpnako', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setMessage('Thanks for subscribing! 🎉');
        setEmail('');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    } catch {
      setMessage('Unable to connect. Please check your network.');
    }
  };

  return (
    <ContactContainer id="contact">
      <Card>
        <ContactTitle>Stay in the Loop</ContactTitle>
        <ContactSubtitle>
          Get early access to features, updates, and productivity tips. No spam.
        </ContactSubtitle>
        <Form onSubmit={handleSubmit}>
          <EmailInput
            type="email"
            required
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button type="submit">Subscribe</Button>
        </Form>
        {message && <Message>{message}</Message>}
      </Card>
    </ContactContainer>
  );
};

export default ContactSection;
