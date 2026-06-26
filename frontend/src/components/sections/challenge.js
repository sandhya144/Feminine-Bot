
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
            <h2>Problem Statement</h2>
           <p>
Despite making significant progress in all professional fields, many women in India still face serious health issues due to social taboos surrounding women's health. Fear of judgment and limited access to safe, private health information often prevent them from seeking timely help. FeminineBot addresses this gap by providing an intelligent, judgment-free virtual assistant that offers private health guidance, home remedies, and mental wellness support, while ensuring that no user data is stored.
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
