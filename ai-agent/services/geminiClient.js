import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function extractLeadFromConversation(conversation) {
  const prompt = `
You're an AI CRM agent. Extract structured data from the conversation below and return a JSON payload for the createLead command.
The source is "cold_call".

Conversation:
${conversation}

Return JSON with the following format:
{
  "command": "createLead",
  "data": {
    "name": "",
    "source": "cold_call",
    "interestedProducts": [],
    "notes": ""
  }
}
`;

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text().trim();

  const jsonMatch = text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) throw new Error("No valid JSON found in Gemini response");

  return JSON.parse(jsonMatch[0]);
}
