// importando lista de livros
const livros = require('../listaLivros.js');

console.log('Lista inicial: ', livros);

// Função principal
function insertionSort(lista) {
    for (let atual = 0; atual < lista.length; atual++) {
        let analise = atual;

        // Só entra no while a partir do elemento de índice 1
        while (analise > 0 && lista[analise].preco < lista[analise - 1].preco) {

            // Salva o valor do livro atual e do anterior
            let itemAnalise = lista[analise];
            let itemAnterior = lista[analise - 1];

            // Troca o livro atual e o de anterior de lugar
            lista[analise] = itemAnterior;
            lista[analise - 1] = itemAnalise;

            // Condição para sair do while
            analise--;
        }
    }
    // Exibe a lista ordenada
    console.log('\nLista ordenada: ', livros);
}

insertionSort(livros);