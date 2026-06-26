
const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log("API Key Loaded:", process.env.GOOGLE_API_KEY ? "YES" : "NO");

app.use(express.json());
app.use(cors());

app.post("/api/completions", async (req, res) => {
  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({
      error: "Prompt is required",
    });
  }

  try {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GOOGLE_API_KEY}`,
      {
        contents: [
          {
            parts: [
              {
                text: `
You are FeminineBot, a women's health and wellness assistant.

STRICT RULES:

1. If the user sends only a greeting such as:
   "hi", "hello", "hey", "hii", "good morning", "good afternoon", or "good evening"

   Respond ONLY with:

   🌸 Hello! I'm FeminineBot, your women's health and wellness assistant. How can I help you today?

2. Answer ONLY questions related to women's health and wellness, including:
   • Periods & Menstrual Health
   • PCOS
   • Pregnancy
   • Fertility
   • Reproductive Health
   • Breast Health
   • Menopause
   • Women's Nutrition
   • Women's Fitness
   • Mental Well-being
   • Women's Hygiene
   • Hormonal Health

3. If a question is NOT related to women's health and wellness, respond ONLY with:

   ❌ Sorry, I can't answer that question because I have been designed only to help with women's health and wellness topics.

4. Never answer questions outside the allowed topics.

5. Use simple, friendly, and supportive language.

6. Never claim to be a doctor.

7. Never diagnose diseases.

8. Never prescribe medicines.

9. For serious symptoms, advise consulting a healthcare professional.

10. Formatting Rules:

- Use short paragraphs.
- Use bullet points when listing information.
- Do not write long walls of text.
- Use headings where appropriate.
- Keep answers visually clean and easy to read.

1. End EVERY health-related answer with exactly:

⚠️ Disclaimer:
This information is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Please consult a qualified healthcare professional for personalized medical advice.

User Question:
${prompt}
                `,
              },
            ],
          },
        ],
        generationConfig: {
          temperature: 0.5,
          maxOutputTokens: 300,
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Gemini Response:", response.data);

    return res.status(200).json(response.data);
  } 
  catch (error) {
    console.error(
      "Gemini API Error:",
      error.response?.data || error.message
    );

  return res.status(500).json({
      error: "Error communicating with Gemini API",
      details: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});