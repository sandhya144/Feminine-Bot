

import React from 'react';
import logo from "../../assets/logo-nav.png"; 
import './head.css'; 

function Navbar({ onAboutClick, onVisionClick, onChallengeClick, onHomeClick, isChatPage }) {
  
  // 💬 Layout configuration when displayed inside the Chatbot page view
  if (isChatPage) {
    return (
      <div className="luxe-glass-navigation-bar">
        <div className="luxe-nav-brand-zone">
          <img src={logo} alt="Feminine Logo" className="luxe-brand-logo-img" />
        </div>
        <div className="luxe-nav-inner-row">
          {/* 🏠 Added home navigation route trigger action button wrapper */}
          <button type="button" className="luxe-nav-item-btn" onClick={onHomeClick} >
            Home
          </button>
          <button type="button" className="luxe-nav-item-btn" onClick={onChallengeClick}>
            Challenge
          </button>
          <button type="button" className="luxe-nav-item-btn" onClick={onVisionClick}>
            Our Vision
          </button>
          <button type="button" className="luxe-nav-item-btn" onClick={onAboutClick}>
            About Us
          </button>
        </div>
      </div>
    );
  }

  // 🍊 Layout configuration for your primary orange Landing page view (Removes "Home")
  return (
    <div className="luxe-glass-navigation-bar">
      <div className="luxe-nav-brand-zone">
        <img src={logo} alt="Feminine Logo" className="luxe-brand-logo-img" />
      </div>
      <div className="luxe-nav-inner-row">
        <button type="button" className="luxe-nav-item-btn" onClick={onChallengeClick}>
          Challenge
        </button>
        <button type="button" className="luxe-nav-item-btn" onClick={onVisionClick}>
          Our Vision
        </button>
        <button type="button" className="luxe-nav-item-btn" onClick={onAboutClick}>
          About Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;