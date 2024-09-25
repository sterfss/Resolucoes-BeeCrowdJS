var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const entradas = lines[0].split(' ').map(Number)

const N1 = entradas[0]
const N2 = entradas[1]
 
if (N2 % N1 === 0 || N1 % N2 === 0){
    console.log(`Sao Multiplos`)
} else{
    console.log(`Nao sao Multiplos`)
}




