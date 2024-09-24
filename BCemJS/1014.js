var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var lines = input.split('\n');

let km = parseInt(lines.shift())
let gasosa = parseFloat(lines.shift())

let consumomedio = km / gasosa

console.log(`${consumomedio.toFixed(3)} km/l`)