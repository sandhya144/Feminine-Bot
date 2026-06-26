
import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Feminine</h1>

        <p>Our one-stop solution for your protection.</p>

        <div className="detail">
          <h2>
            <span id="element">Women's Health Chatbot</span>
          </h2>

          <p>
            Empowering women with personalized health guidance, our chatbot
            offers 24/7 support on reproductive, mental, and general wellness,
            bridging healthcare gaps with trusted advice, symptom checks, and
            multilingual accessibility.
          </p>
        </div>

        {/* Check Out Button */}
        <button
          className="btn"
          onClick={() => navigate("/chatbot")}
        >
          Check Out
        </button>
      </div>
    </section>
  );
}

export default Hero;