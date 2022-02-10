// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.

let peca = 'PEAO';

switch (peca.toLocaleLowerCase()) {
    case 'peao':
        console.log("Uma casa para frente");
        break;
    case 'torre':
        console.log("horizontal e vertical");
        break;
    case 'cavalo':
        console.log("duas na vertical e uma na horizontal. Ou uma na vertical e duas na horizontal");
        break;
    case 'bispo':
        console.log("diagonal");
        break;
    case 'rainha':
        console.log("vertical, horizontal ou diagonal");
        break;
    case 'rei':
        console.log("uma casa na vertical, horizontal ou diagonal");
        break;
}