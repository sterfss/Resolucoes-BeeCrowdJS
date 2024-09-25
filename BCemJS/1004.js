var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var [a, b] = input.split('\n');
let PROD = produto(a,b)

console.log(`PROD = ${PROD}`)

function produto(a,b){
    return a * b
}
