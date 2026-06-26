class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
    this.msgQ =
      "The following is a conversation with an AI assistant. The assistant is helpful, creative, clever, and very friendly.\n\n";
  }

  async greet(lowerCaseMessage) {
    console.log("Calling greeting...");
    const customMsg = `Human: ${lowerCaseMessage}\n`;
    this.msgQ += customMsg;

    try {
      const response = await fetch("http://localhost:5000/api/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: this.msgQ }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend Error Details:", errorData);
        throw new Error(
          errorData.error?.message || `Error: ${response.status}`
        );
      }

      const data = await response.json();
      console.log("Backend Response:", data);

      const aiResponse =
        data.candidates?.[0]?.content?.parts?.[0]?.text ||
        "AI did not respond.";
      this.msgQ += `AI: ${aiResponse}\n`;
      console.log("Updated msgQ:", this.msgQ);

      return aiResponse;
    } catch (error) {
      console.error("Error communicating with the backend API:", error);

      return (
        error.message ||
        "I'm sorry, there was an error processing your request."
      );
    }
  }

  async parse(message) {
    const lowerCaseMessage = message.toLowerCase();

    try {
      const aiResponse = await this.greet(lowerCaseMessage);

      console.log("Parsed AI Response:", aiResponse);

      this.actionProvider.greet(aiResponse);
    } catch (error) {
      console.error("Error in parsing message:", error);
    }
  }
}

export default MessageParser;
