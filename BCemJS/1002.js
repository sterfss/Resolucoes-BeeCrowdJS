var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let raio = Number(input)
const pi = 3.14159
let area =  pi * Math.pow(raio,2)

console.log(`A=${area.toFixed(4)}`)