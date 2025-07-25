import express from 'express';
import cors from 'cors';
import mcpRoutes from './routes/mcpRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/execute', mcpRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🧠 MCP Server running on port ${PORT}`);
});
