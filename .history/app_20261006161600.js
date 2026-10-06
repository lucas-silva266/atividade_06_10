import express from 'express';
import AmostraRoutes from './routes/AmostraRoutes.js';

const app = express();

app.use(express.json());

app.use('/amostras', AmostraRoutes);

// Middleware para capturar rotas não encontradas (404)
app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada." });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001.');
});