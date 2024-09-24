var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [A, B, C] = input.split(" ").map(Number)

let AB = ((A + B) + Math.abs((A - B))) / 2
let maiorValor = ((AB + C) +  Math.abs((AB - C))) / 2

console.log(maiorValor + ' eh o maior')