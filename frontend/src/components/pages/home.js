

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Navbar from "../layouts/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Vision from '../sections/vision';
import Challenge from '../sections/challenge';
import './homeDesign.css'; 

// Import assets so they are bound safely via Webpack/Vite compilation layers
import homeIllustration from "../../assets/home.jpeg"; 

function Home() {
  // Retains your responsive popup state hooks for toggling the About view
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isVisionOpen, setIsVisionOpen] = useState(false);
   const [isChallengeOpen, setIsChallengeOpen] = useState(false);

  // 2. Initialize the navigation control handler
  const navigate = useNavigate();

  return (
    <div className="premium-page-wrapper">
      
      {/* 1. FLOATING GLASS NAVBAR (Keeps your centralized active routes working) */}
      {/* <Navbar onAboutClick={() => setIsAboutOpen(true)} /> */}

      <Navbar 
        onAboutClick={() => setIsAboutOpen(true)} 
        onVisionClick={() => setIsVisionOpen(true)} 
        onChallengeClick={()=> setIsChallengeOpen(true)}
        isChatPage={false}
      />

      {/* 2. SIDEWAY ECO-GRAPHIC TEXT STAMPS */}
      <div className="side-badge badge-left">EMPOWERING</div>
      <div className="side-badge badge-right">HEALTH</div>

      {/* 3. HERO HERO HERO MAIN BANNER WRAPPER */}
      <main className="hero-section-container">
        <div 
          className="hero-background-card"
          style={{ backgroundImage: `url(${homeIllustration})` }}
        >
          <div className="hero-content-overlay">
            <h1 className="hero-main-title" style={{ fontSize: '115px', fontWeight: '850', lineHeight: '0.95' }}  >Feminine</h1>
            <h2 className="hero-sub-title" style={{ fontSize: '36px', fontWeight: '750' }} >Women's Health Chatbot</h2>
            <p className="hero-description-para">
              Empowering women with personalized health guidance, our 
              chatbot offers 24/7 support on reproductive, mental, and 
              general wellness, bridging healthcare gaps with trusted advice, 
              symptom checks, and multilingual accessibility.
            </p>
            
            {/* 3. Attached the click listener event to execute transition to the chatbot app view */}
            <button 
              className="hero-cta-btn" 
              onClick={() => navigate("/chatbot")}
            >
              Check Out
            </button>

          </div>
        </div>
      </main>

      {/* 4. NEW SINGLE SCREEN BRAND UTILITY FOOTER */}
      <footer className="luxe-home-bottom-bar">
        <div className="luxe-social-links">
          <span className="luxe-social-icon"><i className="fab fa-facebook-f"></i></span>
          <span className="luxe-social-icon"><i className="fab fa-youtube"></i></span>
          <span className="luxe-social-icon"><i className="fab fa-telegram-plane"></i></span>
        </div>
        <div className="luxe-legal-copy">
          Built with ❤️ for Women's Health & Well-being.
        </div>
      </footer>

      {/* 4. MODAL POPUP LAYER (Stays completely hidden until About Us button trigger event runs) */}
      <About isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <Vision isOpen={isVisionOpen} onClose={() => setIsVisionOpen(false)} />
      <Challenge isOpen={isChallengeOpen} onClose={() => setIsChallengeOpen(false)} />
      
    </div>
  );
}

export default Home;