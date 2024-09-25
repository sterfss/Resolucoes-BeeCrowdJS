var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [a,b] = input.split('\n').map(Number)
let media = calculomedia(a,b)

console.log(`MEDIA = ${media.toFixed(5)}`)

function calculomedia (a,b){
    return ((a*3.5)+(b*7.5))/11
}
