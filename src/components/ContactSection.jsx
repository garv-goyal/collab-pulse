import React, { useState } from 'react';

const ContactSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle sending the email to your backend or an email service
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <section style={{ backgroundColor: '#161616', padding: '3rem 2rem', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem', fontWeight: '700' }}>Stay in Touch</h2>
      <p style={{ color: '#ccc', marginBottom: '2rem', maxWidth: '700px', marginInline: 'auto' }}>
        Sign up for our newsletter to receive updates, tips, and best practices on collaboration.
      </p>
      
      {/* Newsletter Subscription Form */}
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

      {/* Direct Contact Section */}
      <div style={{ marginTop: '2rem' }}>
        <p style={{ color: '#ccc', fontSize: '1rem' }}>Need direct support?</p>
        
        {/* Button that opens email client */}
        <a
          href="mailto:support@collabpulse.com"
          style={{
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.8rem 1.5rem',
            backgroundColor: '#fff',
            color: '#0f0f0f',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          Contact Us
        </a>

        {/* Direct email link */}
        <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#ccc' }}>
          Or email us at: <a href="mailto:support@collabpulse.com" style={{ color: '#fff', textDecoration: 'underline' }}>support@collabpulse.com</a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
