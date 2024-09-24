var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')

let tempogasto = parseInt(lines.shift())
let vmedia = parseInt(lines.shift())
let efic = 12

let dp = tempogasto * vmedia
let gasosagasta = dp / efic

console.log(`${gasosagasta.toFixed(3)}`)





