var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let x1y1 = lines.shift().split(" ")
let x2y2 = lines.shift().split(" ")

let x1 = x1y1.shift()
let y1 = x1y1.shift()
let x2 = x2y2.shift()
let y2 = x2y2.shift()

let distancia = Math.sqrt(Math.pow(x1-x2,2) + Math.pow(y2-y1,2))

console.log(distancia.toFixed(4))