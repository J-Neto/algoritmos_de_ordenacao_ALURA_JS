const listaLivros = require('./array');

function encontraMenores(pivo, array) {
    let menores = 0;

    // Verifica quantos itens são menores que o pivô
    for (let atual = 0; atual < array.length; atual++) {
        let produtoAtual = array[atual];
        if (produtoAtual.preco < pivo.preco) {
            menores++;
        }
    }
    trocaLugar(array, array.indexOf(pivo), menores);
    return array;
}

function trocaLugar (array, de, para) {
    let elem1 = array[de];
    let elem2 = array[para];

    array[para] = elem1;
    array[de] = elem2;
}

console.log(encontraMenores(listaLivros[2], listaLivros));