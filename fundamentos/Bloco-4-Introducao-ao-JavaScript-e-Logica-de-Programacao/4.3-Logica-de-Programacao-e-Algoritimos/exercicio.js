// O fatorial é representado pelo sinal !
// ! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 1;
// for (let index = 10; index > 0; index -= 1) {
//     fatorial *= [index];
// }
// console.log(fatorial);

// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. 
// Por exemplo, a palavra "banana" seria invertida para "ananab". 
// Utilize a string abaixo como exemplo, depois troque por outras para verificar se 
// seu algoritmo está funcionando corretamente.

// let word = 'tryber';
// let inverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//     inverseWord += (word[word.length - 1 - index]);
// }
// console.log(inverseWord);

// Considere o array de strings abaixo:

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. 
// Considere o número de caracteres de cada palavra.

// let longgestWord = array[0];
// for (let index = 0; index < array.length; index += 1) {
//     if (longgestWord.length < array[index].length) {
//         longgestWord = array[index];
//     }
// }
// console.log(longgestWord)

// let shortestWord = array[0];
// for (let index = 0; index < array.length; index += 1) {
//     if (shortestWord.length > array[index].length) {
//         shortestWord = array[index];
//     }
// }
// console.log(shortestWord);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. 
// Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

let biggestNumber = 0;
for (let currentNumber = 0; currentNumber <= 50; currentNumber += 1) {
    let isPrime = true;
    for (let currentDivisor = 2; currentDivisor < currentNumber; currentDivisor += 1) {
        if (currentNumber % currentDivisor === 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        biggestNumber = currentNumber;
    }    
}
console.log(biggestNumber);