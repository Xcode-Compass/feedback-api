const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./config/database'); // Conectar ao MongoDB
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/feedbacks', feedbackRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
