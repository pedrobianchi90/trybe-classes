// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , 
// ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

// function palindromeVerify (word) {
//     if (word === word.split('').reverse().join('')) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(palindromeVerify('amarelo'));


// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// function findBiggestNumberIndex (array) {
//     let biggestNumber = array[0];
//     let biggestNumberIndex = 0;
//     for (index = 0; index < array.length; index += 1) {
//         if (biggestNumber < array[index]) {
//             biggestNumber = array[index];
//             biggestNumberIndex = index;
//         }
//     }
//     return biggestNumberIndex;
// }

// console.log(findBiggestNumberIndex([2, 3, 6, 7, 10, 1]))

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// function findSmallerNumberIndex (array) {
//     let smallerindex = 0;
//     for (let index in array) {
//         if (array[index] < array[smallerindex]) {
//             smallerindex = index;
//         }
//     }
//     return smallerindex;
// }

// console.log(findSmallerNumberIndex([2, 4, 6, 7, 10, 0, -3]));

// 4 - Crie uma função que receba um array de nomes e retorne o nome 
// com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// function findBiggestName (array) {
//     let biggestName = array[0];
//     for (name in array) {
//         if (biggestName.length < array[name].length) {
//             biggestName = array[name];
//         }
//     }
//     return biggestName;
// }

// let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// console.log(findBiggestName(array))
