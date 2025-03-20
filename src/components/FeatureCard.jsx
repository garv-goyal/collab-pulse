import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTimes } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, title, description, detailedDescription}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div 
        className="feature-card" 
        onClick={handleCardClick} 
        style={{
          cursor: 'pointer', 
          padding: '1rem', 
          border: '1px solid #333', 
          borderRadius: '8px', 
          backgroundColor: '#2a2a2a', 
          marginBottom: '1rem'
        }}
      >
        <div 
          className="feature-card-header" 
          style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <FontAwesomeIcon 
              icon={icon} 
              className="feature-icon" 
              style={{ fontSize: '1.8rem', color: '#fff' }} 
            />
            <h3 style={{ color: '#fff', margin: 0 }}>{title}</h3>
          </div>
          <FontAwesomeIcon 
            icon={faArrowRight} 
            className="feature-arrow" 
            style={{ color: '#fff', fontSize: '1.3rem' }} 
          />
        </div>
        <p style={{ color: '#ccc', marginTop: '0.5rem', fontSize: '0.95rem' }}>
          {description}
        </p>
      </div>
      
      {isModalOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}
        >
          <div 
            style={{
              backgroundColor: '#2a2a2a',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '90%',
              maxHeight: '80%',
              overflowY: 'auto',
              position: 'relative',
              color: '#fff'
            }}
          >
            <button 
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: '#fff'
              }}
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <h3 style={{ marginTop: 0 }}>{title}</h3>
            <div style={{ fontSize: '1.1rem', marginTop: '1rem', lineHeight: 1.6 }}>
              {detailedDescription || (
                <>
                  {description} <br /><br />
                  <strong>Detailed Explanation:</strong>
                  <p>
                    This feature offers a comprehensive view along with interactive elements. Explore its functionalities through dynamic charts and data visualizations that provide deep insights and actionable metrics.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeatureCard;
