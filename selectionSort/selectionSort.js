// FUNÇÃO PRINCIPAL

// importando lista de livros e função interna
const livros = require('../listaLivros');
const menorValor = require('./menorValor');

console.log('Lista inicial: ', livros);

// Função principal
for (let atual = 0; atual < livros.length; atual++) {

    // Índice do menor valor
    let menor = menorValor(livros, atual);

    // Salva o valor do livro atual e do livro de menor preço
    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    // Troca o livro atual e o de menor preço de lugar
    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
}

// Exibe a lista ordenada
console.log('\nLista ordenada: ', livros);