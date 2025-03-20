// import React, { useState, useEffect } from 'react';

// const ScrollToTop = () => {
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const toggleVisibility = () => {
//       if (window.scrollY > 300) {
//         setVisible(true);
//       } else {
//         setVisible(false);
//       }
//     };
//     window.addEventListener('scroll', toggleVisibility);
//     return () => window.removeEventListener('scroll', toggleVisibility);
//   }, []);

//   return (
//     visible && (
//       <button
//         onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//         style={{
//           fontFamily: 'kanit',  
//           position: 'fixed',
//           bottom: '20px',
//           right: '20px',
//           backgroundColor: '#fff',
//           color: '#0f0f0f',
//           border: 'none',
//           padding: '10px 15px',
//           cursor: 'pointer',
//           borderRadius: '5px',
//           boxShadow: '0px 4px 6px rgba(0,0,0,0.1)'
//         }}
//       >
//         ↑ Top
//       </button>
//     )
//   );
// };

// export default ScrollToTop;

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
          fontFamily: 'kanit',
          position: 'fixed',
          bottom: '20px', 
          right: '20px',   
          backgroundColor: '#fff',
          color: '#0f0f0f',
          border: 'none',
          padding: '12px 15px',  
          cursor: 'pointer',
          borderRadius: '5px', 
          boxShadow: '0px 6px 10px rgba(0,0,0,0.15)', 
          transition: 'transform 0.2s ease-in-out', 
        }}
        onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'} // Slight zoom on hover
        onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
      >
        ↑ Top
      </button>
    )
  );
};

export default ScrollToTop;
