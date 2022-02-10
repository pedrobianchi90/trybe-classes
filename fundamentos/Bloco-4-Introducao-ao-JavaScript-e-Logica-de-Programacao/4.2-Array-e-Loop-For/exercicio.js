let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
// for (number of numbers) {
//     console.log(number);
// }

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum +=  numbers[index];
// }
// console.log(sum);

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum +=  numbers[index];
// }
// let median = sum / numbers.length;
// console.log(median);

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
// imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let sum = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     sum +=  numbers[index];
// }
// let median = sum / numbers.length;
// if (median > 20) {
//     console.log("valor maior que 20")
// } else {
//     console.log("valor menor ou igual a 20")
// }

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let biggestNumber = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//     if (biggestNumber < numbers[index]) {
//         biggestNumber = numbers[index];
//     };
// }
// console.log(biggestNumber);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: 
// "nenhum valor ímpar encontrado";
// let oddNumbers = [];
// for (let index = 0; index < numbers.length; index+= 1) {
//     if (numbers[index] % 2 === 1) {
//         oddNumbers.push(numbers[index]);
//     }
// }
// console.log(oddNumbers);

// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
// let lowerNumber = numbers[0];
// for (let index = 0; index < numbers.length; index += 1) {
//     if (lowerNumber > numbers[index]) {
//         lowerNumber = numbers[index];
//     }
// }
// console.log(lowerNumber);

// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let array = [];
for (let index = 0; index <= 25; index += 1) {
    array.push(index);
}
console.log(array);

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for (div of array) {
    div /= 2;
    console.log(div);
}
