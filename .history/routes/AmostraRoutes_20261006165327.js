import express from "express";
import { salvarAmostra, deletarAmostra, listarAmostras, buscarAmostra, atualizarAmostras } from "../controller/AmostraController.js";

const router = express.Router();
//Pega a função do framework express e salva na variável router.

router.post('/', salvarAmostra);
router.get('/', listarAmostras);
router.patch('/:indice', atualizarAmostras);
router.delete('/:indice', deletarAmostra);
router.get('/:indice', buscarAmostra);

//declara que se chamar a rota POST vai executar a função de salvarProduto do controller.

export default router;
//Torna pública a rota dentro do backend.