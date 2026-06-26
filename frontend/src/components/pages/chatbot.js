import ChatbotKit from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";

import "../chatbot/chatcss.css";
import ActionProvider from "../chatbot/ActionProvider";
import MessageParser from "../chatbot/MessageParser";
import config from "../chatbot/config";

import Head from "../layouts/Head";
import Footer from "../layouts/Footer";
import { useState } from "react";
import Navbar from "../layouts/Navbar";
import About from "../sections/About";
import Vision from "../sections/vision";
import Challenge from "../sections/challenge";

import "./chatbot.css";

function ChatbotPage() {

  // 3. Create the state variable to keep track of if the modal is showing
  const [isAboutOpen, setIsAboutOpen] = useState(false);
   const [isVisionOpen, setIsVisionOpen] = useState(false);
   const [isChallengeOpen, setIsChallengeOpen] = useState(false);

   const handleHomeClick = () => {
    window.location.href = "/"; // Takes you back to your main screen
  };

  return (
    <div className="chatbot-page page-background">

      {/* Pass the transparent prop to strip the background on this page only */}
      {/* <Navbar 
      onAboutClick={() => setIsAboutOpen(true)} 
      onVisionClick={() => setIsVisionOpen(true)} 
      onChallengeClick={() => setIsChallengeOpen(true)} 
      
      /> */}
 
        {/* ✨ FIXED: Passed all click props, home handler, and the isChatPage flag */}
      <Navbar 
        onAboutClick={() => setIsAboutOpen(true)} 
        onVisionClick={() => setIsVisionOpen(true)} 
        onChallengeClick={() => setIsChallengeOpen(true)}
        onHomeClick={handleHomeClick}
        isChatPage={true} 
      />


        <Head />

      {/* Centering container to make the chatbot look clean over the background */}
      <div className="chatbot-container">   
      <ChatbotKit
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />

      {/* Must render the About component with props at the bottom */}
    <About isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
    <Vision isOpen={isVisionOpen} onClose={() => setIsVisionOpen(false)}/>
    <Challenge isOpen={isChallengeOpen} onClose={() => setIsChallengeOpen(false)}/>

      </div>

      <Footer />
    </div>
  );
}

export default ChatbotPage;

