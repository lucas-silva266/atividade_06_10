import { Setor } from "../model/Setor.js";
import { salvar, deletar, buscarPorIndice, listar, atualizar } from "../repository/SetorRepository.js";

export function salvarSetor(req, res) {
    const { nome, sigla, responsavel, ramal } = req.body;

    const setor = new Setor(nome, sigla, responsavel, ramal);

    salvar(setor);

    res.status(201).json(setor);
}

export function listarSetores(req, res) {
    const setores = listar();

    res.status(200).json(setores);
}

export function atualizarSetor(req, res){
    const indice = Number(req.params.indice);
    const setor = buscarPorIndice(indice);
    
    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    const {nome, sigla, responsavel, ramal} = req.body;

    if (nome !== undefined){
        setor.nome = setor;
    }

    if (sigla !== undefined){
        setor.sigla = sigla;
    }

    if (responsavel !== undefined){
        setor.responsavel = responsavel;
    }

    if (ramal !== undefined){
        setor.ramal = ramal;
    }

    atualizar(indice, setor);

    res.status(200).json(setor);
}

export function buscarSetor(req, res) {
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    res.status(200).json(setor);
}

export function deletarSetor(req, res) {
    const indice = Number(req.params.indice);

    const setor = buscarPorIndice(indice);

    if (!setor) {
        return res.status(404).json({
            mensagem: "Setor não encontrado."
        });
    }

    deletar(indice);

    res.status(204).send();
}