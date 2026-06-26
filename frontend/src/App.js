import ChatbotKit from "react-chatbot-kit";

// import "./components/chatbot/chatcss.css";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/pages/home";
import ChatbotPage from "./components/pages/chatbot";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<ChatbotPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;