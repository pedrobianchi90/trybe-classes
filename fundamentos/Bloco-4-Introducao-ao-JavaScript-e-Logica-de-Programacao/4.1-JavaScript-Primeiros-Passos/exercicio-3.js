// Faça um programa que retorne o maior de três números.
// Defina no começo do programa três constantes com os valores que serão comparados.

const a = 3;
const b = 5;
const c = 8;

let maior;

if (a > b && a > c) {
    maior = a;
} else if (b > a & b > c) { 
    maior = b;
} else if (c > a & c > b) {
    maior = c;
}

console.log(maior);