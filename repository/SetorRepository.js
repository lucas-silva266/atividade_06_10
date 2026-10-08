const setores = [];

export function salvar(setor){
    setores.push(setor);
}

export function listar(){
    return setores;
}

export function atualizar(indice, novoSetor){
    setores[indice] = novoSetor;
}

export function deletar(indice){
    setores.splice(indice, 1);
}

export function buscarPorIndice(indice){
    return setores[indice];
}
