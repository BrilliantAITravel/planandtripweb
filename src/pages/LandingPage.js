import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LandingPage() {
  const navigate = useNavigate();
  const [animateLogo, setAnimateLogo] = useState(false);
  const [animateText, setAnimateText] = useState(false);

  useEffect(() => {
    const hasPlayed = localStorage.getItem('logoAnimated');
    if (!hasPlayed) {
      setAnimateLogo(true);
      localStorage.setItem('logoAnimated', 'true');
    }

    // Trigger text animation after a short delay
    setTimeout(() => setAnimateText(true), 500);

    const timer = setTimeout(() => {
      navigate('/next');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="landing">
      <img 
        src="/logo.png" 
        alt="Logo" 
        className={`logo ${animateLogo ? 'animate-logo' : ''}`} 
      />

      <div className={`explore ${animateText ? 'animate-text' : ''}`}>
        EXPLORE THIS WONDERFUL WORLD WITH US
      </div>

      <img 
        src="/icon.png" 
        alt="Login" 
        style={{
          position: 'absolute',
          top: '20px',
          right: '30px',
          width: '35px',    
          height: '40px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      />
      <img 
        src="/bell.png" 
        alt="Notifications" 
        style={{
          position: 'absolute',
          top: '20px',
          right: '85px', 
          width: '40px',    
          height: '40px',
          cursor: 'pointer',
          zIndex: 1000
        }}
      />
    </div>
  );
}

export default LandingPage;
