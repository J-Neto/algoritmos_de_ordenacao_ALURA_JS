//  FUNÇÃO INTERNA DO SELECTION SORT

//  Funcionamento: 
//  Percorre a lista a partir da posição inicial recebida da função externa...
//  comparando um valor de referência (atual) com o resto da lista para saber...
//  quem é o menor número.

function menorValor(arrProdutos, posicaoInicial) {
    let maisBarato = posicaoInicial;

    for (let atual = posicaoInicial; atual < arrProdutos.length; atual++) {
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
            maisBarato = atual;
        }
    }
    return maisBarato;
}

// Exportando função
module.exports = menorValor;