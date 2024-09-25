var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let valor = parseInt(input)

console.log(valor)

let qtdNotas100 = parseInt(valor / 100);
console.log(`${qtdNotas100} nota(s) de R$ ${100},00`)
valor = valor % 100;

let qtdNotas50 = parseInt(valor / 50);
console.log(`${qtdNotas50} nota(s) de R$ ${50},00`)
valor = valor % 50;

let qtdNotas20 = parseInt(valor / 20);
console.log(`${qtdNotas20} nota(s) de R$ ${20},00`)
valor = valor % 20;

let qtdNotas10 = parseInt(valor / 10);
console.log(`${qtdNotas10} nota(s) de R$ ${10},00`)
valor = valor % 10;

let qtdNotas5 = parseInt(valor / 5);
console.log(`${qtdNotas5} nota(s) de R$ ${5},00`)
valor = valor % 5;

let qtdNotas2 = parseInt(valor / 2);
console.log(`${qtdNotas2} nota(s) de R$ ${2},00`)
valor = valor % 2;

let qtdNotas1 = parseInt(valor / 1);
console.log(`${qtdNotas1} nota(s) de R$ ${1},00`)
valor = valor % 1;
