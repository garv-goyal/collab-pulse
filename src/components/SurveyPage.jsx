import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const PageWrapper = styled.section`
  padding: 4rem 2rem;
  min-height: 100vh;
  background-color: #f5f7fa;
  font-family: 'Kanit', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.6s ease forwards;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #111;
  text-align: center;
`;

const Subheading = styled.p`
  font-size: 1.1rem;
  color: #444;
  max-width: 600px;
  text-align: center;
  margin-bottom: 2.5rem;
`;

const Form = styled.form`
  width: 100%;
  max-width: 540px;
  background: #ffffff;
  padding: 2rem;
  border-radius: 14px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.05);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-family: 'Kanit', sans-serif;
  font-size: 1rem;
  color: #111;

  &:focus {
    outline: none;
    border-color: #6d7a89;
    box-shadow: 0 0 0 2px rgba(109, 122, 137, 0.15);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.85rem 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-family: 'Kanit', sans-serif;
  font-size: 1rem;
  color: #111;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #6d7a89;
    box-shadow: 0 0 0 2px rgba(109, 122, 137, 0.15);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 1rem;
  background-color: #2c2f3a;
  color: #fff;
  font-family: 'Kanit', sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;


const Field = styled.div`
  margin-bottom: 1.8rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.6rem;
  color: #222;
  font-size: 1rem;
  font-weight: 500;
`;


const ErrorMsg = styled.p`
  margin-top: 1rem;
  color: crimson;
  text-align: center;
  font-size: 0.95rem;
`;

const SurveyPage = () => {
  const [teamSize, setTeamSize] = useState('');
  const [challenge, setChallenge] = useState('');
  const [vision, setVision] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const surveyData = { teamSize, challenge, vision };

    try {
      const response = await fetch('https://formspree.io/f/mvgkkzny', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(surveyData),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Error submitting survey');
        setLoading(false);
        return;
      }

      window.location.href = "http://localhost:5001/api/auth/google";
    } catch (err) {
      console.error(err);
      setError('Error connecting to the server');
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <Heading>Let's Get to Know Your Team</Heading>
      <Subheading>Answer a few quick questions so we can tailor CollabPulse just for you.</Subheading>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label>How big is your team?</Label>
          <Input 
            type="number"
            placeholder="e.g., 12"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            required
          />
        </Field>
        <Field>
          <Label>Biggest current challenge?</Label>
          <Input 
            type="text"
            placeholder="e.g., Communication gaps, slow feedback..."
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            required
          />
        </Field>
        <Field>
          <Label>What's your ideal team experience?</Label>
          <TextArea 
            placeholder="Share a short vision of how your team could work better..."
            value={vision}
            onChange={(e) => setVision(e.target.value)}
            required
          />
        </Field>
        <Button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit & Continue with Google'}
        </Button>
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </Form>
    </PageWrapper>
  );
};

export default SurveyPage;
