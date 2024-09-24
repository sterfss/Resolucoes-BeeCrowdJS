var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const entradas = lines[0].split(" ").map(Number)

const x = [...entradas].sort((a, b) => a - b);

x.forEach((numero) => console.log(numero))
console.log('')
console.log(entradas[0])
console.log(entradas[1])
console.log(entradas[2])










