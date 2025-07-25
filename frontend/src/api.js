import axios from "axios";

const API = axios.create({ baseURL: import.meta.env.VITE_API_URL });
const MCP = axios.create({ baseURL: import.meta.env.VITE_MCP_URL });
const AI = axios.create({ baseURL: import.meta.env.VITE_AI_URL });

export const fetchLeads = () => API.get("/leads");
export const sendCommand = (command) => MCP.post("/process", { command });
export const askAI = (message) => AI.post("/ai", { message });
