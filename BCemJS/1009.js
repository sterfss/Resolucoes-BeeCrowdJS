var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var a = lines.shift()
var b = parseFloat(lines.shift())
var c = parseFloat(lines.shift())

var vendedor = a
var salariofixo = b
var vendas = c
var salariobonus = b + (c * 0.15)

console.log(`TOTAL = R$ ${salariobonus.toFixed(2)}`)