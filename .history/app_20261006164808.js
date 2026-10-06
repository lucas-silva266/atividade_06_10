import express from 'express';
import AmostraRoutes from './routes/AmostraRoutes.js';

const app = express();

app.use(express.json());

// Rota ajustada para /amostra
app.use('/amostra', AmostraRoutes);

// Middleware para rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada." });
});

app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001.');
});