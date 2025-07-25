import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);

// Existing routes like /api/leads go here

app.listen(4000, () => console.log('Backend API running on http://localhost:4000'));
