const amostras = [];

export function salvar(amostra){
    amostras.push(amostra);
}

export function listar(){
    return amostras;
}

export function atualizar(indice, novaAmostra){
    amostras[indice] = novaAmostra;
}

export function deletar(indice){
    amostras.splice(indice, 1);
}

export function buscarPorIndice(indice){
    return amostras[indice];
}
