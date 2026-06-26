
import React from 'react';
import womenImg from "../../assets/WhatsApp Image 2024-11-25 at 21.28.58_bdb54962.jpg";
import crossIcon from '../../assets/cross.png'; 
import './vision.css'; 

function Vision({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="about-modal-overlay" onClick={onClose}>
      <div className="about-modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose}>
          <img src={crossIcon} alt="Close" className="close-icon-img" />
        </button>

        <div className="about-modal-body">
          <div className="about-text-side">
            {/* 🎯 ONLY THE VISION TEXT LIVES HERE NOW */}
            <h2>Our Vision</h2>
            <p>
              We aspire to redefine women's healthcare by creating a trustworthy, 
              intelligent, and empathetic digital assistant that contributes to better 
              health outcomes and improved quality of life for women worldwide.
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

export default Vision;
