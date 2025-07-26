# foodbot-crm
An AI-powered CRM system for restaurants to manage leads, automate command processing, and generate sales insights using Gemini AI.

🚀 Features
✅ Lead Management API – Create, fetch, and manage restaurant leads
✅ Modular Command Processor (MCP) – Execute commands like createLead dynamically
✅ AI Agent Integration – Gemini-powered agent that parses sales conversations into actionable commands
✅ React Frontend – Simple UI to test API, commands, and AI playground
✅ JWT Authentication – Secure API endpoints
✅ Validation with Zod – Data validation for incoming requests
✅ Modern UI with TailwindCSS

🏗️ Tech Stack
Backend: Node.js (Express), Firestore/PostgreSQL

Frontend: React + Vite + TailwindCSS

AI Integration: Google Gemini API

Auth: JWT

Validation: Zod

📂 Project Structure
bash
Copy
Edit
foodbot-crm/
│
├── backend-api/       # Core API for Lead Management
│   ├── routes/        # API Routes
│   ├── controllers/   # Business Logic
│   ├── db/            # Database Config
│   ├── .env           # Environment Variables
│
├── mcp-server/        # Modular Command Processor
│
├── ai-agent/          # AI Agent Server (Gemini)
│   └── index.js
│
├── frontend/          # React + Vite Frontend
│   ├── src/
│   └── vite.config.js
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
bash
Copy
Edit
git clone git@github.com:SABUJgreen/foodbot-crm.git
cd foodbot-crm
2️⃣ Setup Backend API
bash
Copy
Edit
cd backend-api
npm install
Create .env file:

ini
Copy
Edit
PORT=4000
DATABASE_URL=your_postgres_or_firestore_connection
JWT_SECRET=your_jwt_secret
Run the backend:

bash
Copy
Edit
npm start
3️⃣ Setup MCP Server
bash
Copy
Edit
cd ../mcp-server
npm install
npm start
4️⃣ Setup AI Agent
bash
Copy
Edit
cd ../ai-agent
npm install
Create .env:

ini
Copy
Edit
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
Run AI Agent:

bash
Copy
Edit
node index.js
5️⃣ Setup Frontend
bash
Copy
Edit
cd ../frontend
npm install
npm run dev
🔑 Environment Variables
backend-api:

ini
Copy
Edit
PORT=4000
DATABASE_URL=your_database_url
JWT_SECRET=your_jwt_secret
ai-agent:

ini
Copy
Edit
GEMINI_API_KEY=your_gemini_api_key
🎯 How It Works
Create Leads via API or UI

Process Commands like createLead via MCP

AI Playground – Ask questions like “Show me top leads” → AI converts to commands

Data Stored in Firestore/PostgreSQL

🛡️ Security Best Practices
✔ Do NOT commit .env files or credentials
✔ Use GitHub Secrets for deployment
✔ Add sensitive files to .gitignore:

bash
Copy
Edit
.env
backend-api/db/*.json
node_modules/
✅ To-Do / Future Enhancements
 Add role-based authentication

 Deploy on Vercel (Frontend) & Render/Heroku (Backend)

 Add real-time chat with AI

 Analytics dashboard for sales performance

🧠 AI Agent
Model: Gemini 1.5 Pro

Purpose: Convert sales conversation into structured commands

Example:

pgsql
Copy
Edit
User: “John from XYZ restaurant wants to book a call”
AI: createLead { name: "John", company: "XYZ restaurant" }
💻 Commands
Start All Services
bash
Copy
Edit
# Terminal 1 - Backend API
cd backend-api && npm start

# Terminal 2 - MCP Server
cd mcp-server && npm start

# Terminal 3 - AI Agent
cd ai-agent && node index.js

# Terminal 4 - Frontend
cd frontend && npm run dev
📜 License
MIT License © 2025 SABUJgreen