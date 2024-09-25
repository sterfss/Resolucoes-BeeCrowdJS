var input = require('fs').readFileSync('stdin', 'utf8');

var [a, b] = input.split('\n');
let PROD = produto(a,b)

console.log(`PROD = ${PROD}`)

function produto(a,b){
    return a * b
}
