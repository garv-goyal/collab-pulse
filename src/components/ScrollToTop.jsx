import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    visible && (
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#fff',
          color: '#0f0f0f',
          border: 'none',
          padding: '10px 15px',
          cursor: 'pointer',
          borderRadius: '5px',
          boxShadow: '0px 4px 6px rgba(0,0,0,0.1)'
        }}
      >
        ↑ Top
      </button>
    )
  );
};

export default ScrollToTop;
