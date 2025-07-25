import axios from "axios";
import { extractLeadFromConversation } from "../services/geminiClient.js";
import dotenv from "dotenv";
dotenv.config();

export const parseAndCreateLead = async (req, res) => {
  const { conversation } = req.body;

  if (!conversation) {
    return res.status(400).json({ error: "Missing conversation text." });
  }

  try {
    const payload = await extractLeadFromConversation(conversation);

    const response = await axios.post(process.env.MCP_URL, payload);

    res.status(200).json({
      message: "Lead successfully created via AI.",
      mcpResponse: response.data,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
