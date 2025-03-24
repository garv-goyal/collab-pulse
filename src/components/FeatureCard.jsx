import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const FeatureCard = ({ icon, title, description, detailedDescription }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div
      className="feature-card"
      onClick={handleToggle}
      style={{
        cursor: 'pointer',
        border: '1px solid rgba(0, 255, 171, 0.1)',
        borderRadius: '16px',
        background: 'rgba(58, 96, 115, 0.6)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        transition: 'all 0.3s ease',
        padding: '2rem',
        boxShadow: isExpanded
          ? '0 0 10px rgba(0,255,171,0.12)'
          : '0 0 8px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        color: '#fdfdfd'
      }}
    >
      <div
        className="feature-card-header"
        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          <FontAwesomeIcon icon={icon} style={{ fontSize: '1.8rem', color: '#ffffff' }} />
          <h3 style={{ margin: 0, color: '#ffffff' }}>{title}</h3>
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          style={{
            color: isExpanded ? '#00ffab' : '#ccc',
            fontSize: '1.1rem',
            transition: 'transform 0.3s, color 0.3s',
            transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </div>

      <p style={{ color: '#e0e0e0', marginTop: '0.75rem', fontSize: '0.95rem' }}>
        {description}
      </p>

      <div
        style={{
          maxHeight: isExpanded ? '500px' : '0',
          overflow: 'hidden',
          opacity: isExpanded ? 1 : 0,
          transition: 'all 0.4s ease',
          marginTop: isExpanded ? '1rem' : '0',
        }}
      >
        <p style={{ color: '#f2f2f2', fontSize: '0.95rem', lineHeight: 1.6 }}>
          {detailedDescription || (
            <>
              {description}
              <br />
              <br />
              <strong>Details:</strong> This feature offers comprehensive insight with interactive charts and collaboration stats to support performance analysis.
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
