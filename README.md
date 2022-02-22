# ordenacao-selectionSortJS
Criando algoritmo de ordenação 'Selection Sort' em JS

Aprendendo algoritmos de ordenação em JS - Alura
        - 'Selection Sort' em JS da Alura.

# Funcionamento do Projeto
        - A função principal percorre toda a lista, utilizando um valor de referência por vez (valor atual);
        - A partir do valor de referência, ele joga na função auxiliar, compara esse valor com todos os outros da lista e obtém o índice do livro com menor preço da lista;
        - Sabendo quem é o livro com menor preço, ele troca de posição o valor atual com o menor;
        - A cada iteração o valor atual é incrementado;
        * Exemplo: Inicia comparando o primeiro valor da lista com o resto, verifica o menor, troca eles de lugar. Na próxima iteração ele compara o segundo valor da lista com o resto e assim por diante...
# Esqueleto do Projeto
        - Arquivo principal: selectionSort.js
        - Lista de livros: listaLivros.js
        - Função auxiliar: menorValor.js