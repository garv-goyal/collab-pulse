// src/components/SurveyPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SurveyPage = () => {
  const navigate = useNavigate();
  const [teamSize, setTeamSize] = useState('');
  const [challenge, setChallenge] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    const surveyData = { teamSize, challenge };

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
    <section style={{ padding: '4rem 2rem', backgroundColor: '#1a1a1a', color: '#fff', minHeight: '100vh' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1rem' }}>
        Customize Your Experience
      </h2>
      <p style={{ textAlign: 'center', marginBottom: '2rem', maxWidth: '700px', margin: '0 auto' }}>
        Complete this brief survey to tailor CollabPulse to your team’s needs.
      </p>
      <form onSubmit={handleSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ marginBottom: '1.5rem' , marginTop: '1.5rem'}}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'Kanit, sans-serif' }}>
            Team Size:
          </label>
          <input 
            type="number"
            value={teamSize}
            onChange={(e) => setTeamSize(e.target.value)}
            placeholder="Enter number of team members"
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#0f0f0f',
              color: '#fff',
              fontFamily: 'Kanit, sans-serif'
            }}
            required
          />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'Kanit, sans-serif' }}>
            Primary Challenge:
          </label>
          <input 
            type="text"
            value={challenge}
            onChange={(e) => setChallenge(e.target.value)}
            placeholder="e.g., Communication, Workflow, etc."
            style={{
              width: '100%',
              padding: '0.8rem',
              borderRadius: '4px',
              border: '1px solid #333',
              backgroundColor: '#0f0f0f',
              color: '#fff',
              fontFamily: 'Kanit, sans-serif'
            }}
            required
          />
        </div>
        <button 
          type="submit"
          style={{ 
            display: 'block', 
            width: '100%', 
            padding: '1rem', 
            backgroundColor: '#fff', 
            color: '#0f0f0f', 
            border: 'none', 
            borderRadius: '30px', 
            fontSize: '1.1rem', 
            fontWeight: '600',
            cursor: 'pointer'
          }}
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Survey & Login'}
        </button>
        {error && <p style={{ color: 'red', marginTop: '1rem' }}>{error}</p>}
      </form>
    </section>
  );
};

export default SurveyPage;
