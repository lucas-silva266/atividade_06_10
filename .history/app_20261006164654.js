import express from 'express';
import AmostraRoutes from './routes/AmostraRoutes.js';

const app = express();

app.use(express.json());

app.use('/amostra', AmostraRoutes);


app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001.');
});