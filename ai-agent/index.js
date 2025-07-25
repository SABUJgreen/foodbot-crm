import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({ model: process.env.GEMINI_MODEL });



// ✅ TEMP TEST
model.generateContent("Hello Gemini!").then(res => {
  console.log("✅ Gemini test OK:", res.response.text());
}).catch(err => {
  console.error("❌ Gemini test FAIL:", err.message);
});

// POST endpoint for AI chat
app.post('/ask', async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt || typeof prompt !== 'string') {
      return res.status(400).json({ error: 'Invalid or missing message' });
    }

    const result = await model.generateContent(prompt);
    const response = result.response.text();

    return res.json({ response });
  } catch (err) {
    console.error('Gemini API Error:', err.message);
    return res.status(500).json({ error: 'Something went wrong with Gemini.' });
  }
});

app.listen(PORT, () => {
  console.log(`🤖 AI Agent Server running on http://localhost:${PORT}`);
});
