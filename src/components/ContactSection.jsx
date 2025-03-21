import React, { useState } from 'react';

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
            'event_category': 'Newsletter',
            'event_label': 'Contact Form',
            'value': 1
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
    <section id="contact" style={{padding: '3rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '700' }}>Stay in Touch</h2>
      <p style={{ color: '#ccc', marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto' }}>
        Sign up for our newsletter to receive updates, tips, and best practices on collaboration.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
        <input
          type="email"
          required
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: '0.8rem',
            borderRadius: '4px',
            border: '1px solid #333',
            fontFamily: "'Kanit', sans-serif",
            backgroundColor: '#0f0f0f',
            color: '#fff'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '0.8rem 1.5rem',
            backgroundColor: '#fff',
            color: '#0f0f0f',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: '600'
          }}
        >
          Subscribe
        </button>
      </form>

      {message && <p style={{ color: 'lightgreen', marginTop: '1rem' }}>{message}</p>}
    </section>
  );
};

export default ContactSection;
