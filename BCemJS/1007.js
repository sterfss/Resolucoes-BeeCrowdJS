var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var [a, b, c, d] = input.split('\n').map(Number)

var diferença = (a * b - c * d)

console.log(`DIFERENCA = ${diferença}`)