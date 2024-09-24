var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n')

var [a, b, c] = input.split('\n').map(Number)

var media = (a * 2 + b * 3 + c * 5) / 10

console.log(`MEDIA = ${media.toFixed(1)}`)