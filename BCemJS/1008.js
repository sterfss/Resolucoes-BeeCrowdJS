var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var [a, b, c] = input.split('\n').map(Number)

var numeroFuncionario = a
var salario = b * c

console.log(`NUMBER = ${a}`)
console.log(`SALARY = U$ ${salario.toFixed(2)}`)