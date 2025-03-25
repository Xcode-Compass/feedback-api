import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './src/config/database.js';
import feedbackRoutes from './src/routes/feedbackRoutes.js'; 

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Define routes for the feedback API.
app.use('/api/v1', feedbackRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
