import express from "express";
import { salvarSetor, deletarSetor, listarSetores, atualizarSetor, buscarSetor } from "../controller/SetorController.js";

const router = express.Router();
//Pega a função do framework express e salva na variável router.

router.post('/', salvarSetor);
router.get('/', listarSetores);
router.patch('/:indice', atualizarSetor);
router.delete('/:indice', deletarSetor);
router.get('/:indice', buscarSetor);

//declara que se chamar a rota POST vai executar a função de salvarProduto do controller.

export default router;
//Torna pública a rota dentro do backend.