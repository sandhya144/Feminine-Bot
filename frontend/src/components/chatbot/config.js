import { createChatBotMessage } from 'react-chatbot-kit';
import logo from "../../assets/logo1.png";


const config = { 
  botName: "FeminineBot",

  customComponents: {
    botAvatar: () => (
      <img
        src={logo}
        alt="Bot"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
    ),
  },

  initialMessages: [createChatBotMessage("Hi, I'm FeminineBot."), createChatBotMessage(
    "I'm here to help. What do you want to ask?.",
    {
      withAvatar: true,
      delay: 1000,
    }
  )],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#EEF4F2",
    },
    chatButton: {
      backgroundColor: "#4A7C59",
    },
  },
}

export default config