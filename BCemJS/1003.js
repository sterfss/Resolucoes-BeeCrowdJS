var input = require('fs').readFileSync('/dev/stdin', 'utf8');


var[a, b] = input.split('\n').map(Number)

var soma = a + b

console.log(`SOMA = ${soma}`)
