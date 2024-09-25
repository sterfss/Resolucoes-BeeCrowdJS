var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')

let [a1, b1, c1] = lines[0].split(' ').map(Number)
let [a2, b2, c2] = lines[1].split(' ').map(Number)

let total1 = b1 * c1
let total2 = b2 * c2

let totalcompra = total1 + total2

console.log(`VALOR A PAGAR: R$ ${totalcompra.toFixed(2)}`)
