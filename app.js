import express from 'express';
import AmostraRoutes from './routes/AmostraRoutes.js';
import SetorRoutes from './routes/SetorRoutes.js';

const app = express();

app.use(express.json());

app.use('/amostra', AmostraRoutes);

app.use('/setor', SetorRoutes);

app.use((req, res) => {
  res.status(404).json({ mensagem: "Rota não encontrada." });
});

app.listen(3001, () => {
  console.log('Servidor a rodar na porta 3001.');
});