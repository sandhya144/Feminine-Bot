
import React from 'react';
import womenImg from "../../assets/WhatsApp Image 2024-11-25 at 21.28.58_bdb54962.jpg";
import crossIcon from '../../assets/cross.png'; 
import './about.css'; 

function About({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="about-modal-overlay" onClick={onClose}>
      <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose}>
          <img src={crossIcon} alt="Close" className="close-icon-img" />
        </button>

        <div className="about-modal-body">
          <div className="about-text-side">
            {/* 🎯 ONLY THE ABOUT US TEXT LIVES HERE NOW */}
            <h2>About us</h2>
            <p>
              Welcome to the Women's Health Chatbot, your intelligent digital health 
              companion designed to empower women in their wellness journey. 
              Our mission is to provide a safe, supportive, and reliable platform 
              where women can access accurate health information and personalized guidance 
              anytime, anywhere.
            </p>
          </div>

          <div className="about-image-side">
            <img src={womenImg} alt="Women Empowerment Illustration" className="about-illustration" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;