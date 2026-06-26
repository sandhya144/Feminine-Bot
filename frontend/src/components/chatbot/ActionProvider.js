class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async greet(aiResponse) {
    try {
      console.log("AI Response Received:", aiResponse);
      const responseText = aiResponse.trim();

      const greetingMessage = this.createChatBotMessage(responseText);

      this.updateChatbotState(greetingMessage);
    } catch (error) {
      console.error("Error in ActionProvider.greet:", error);

      const fallbackMessage = this.createChatBotMessage(
        "I'm sorry, I couldn't process your request. Please try again."
      );
      this.updateChatbotState(fallbackMessage);
    }
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  }
}

export default ActionProvider;
