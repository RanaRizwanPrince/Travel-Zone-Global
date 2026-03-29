import React, { useState, useEffect } from 'react';
import { GiCommercialAirplane } from "react-icons/gi";

const Preloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Jab window ka sara content (images, scripts) load ho jaye
    const handleLoad = () => {
      // 2 seconds ka delay taake user ko branding nazar aaye
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
      return () => window.removeEventListener('load', handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Moving Airplane Icon */}
        <div className="airplane-animation">
          <GiCommercialAirplane style={styles.icon} />
        </div>
        
        {/* Brand Name */}
        <h1 style={styles.title}>Travel Zone Global</h1>
        
        {/* Progress Bar */}
        <div style={styles.progressContainer}>
          <div className="progress-bar-fill"></div>
        </div>
      </div>

      {/* Internal CSS for Animations */}
      <style>{`
        @keyframes planeFly {
          0% { transform: translateX(-50px) translateY(0); opacity: 0; }
          50% { transform: translateX(0) translateY(-10px); opacity: 1; }
          100% { transform: translateX(50px) translateY(0); opacity: 0; }
        }

        .airplane-animation {
          animation: planeFly 2s infinite ease-in-out;
          color: #F48120;
          font-size: 50px;
          margin-bottom: 10px;
        }

        @keyframes fillProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }

        .progress-bar-fill {
          height: 100%;
          background-color: #F48120;
          width: 0%;
          animation: fillProgress 2.5s linear;
        }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: '#ffffff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10000, // Ziyada z-index taake navbar ke bhi upar aaye
  },
  content: {
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    fontWeight: '800',
    color: '#333',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    margin: '10px 0',
    fontFamily: 'sans-serif'
  },
  progressContainer: {
    width: '200px',
    height: '4px',
    backgroundColor: '#f0f0f0',
    margin: '0 auto',
    borderRadius: '10px',
    overflow: 'hidden'
  }
};

export default Preloader;