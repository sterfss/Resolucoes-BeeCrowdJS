var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const lines1 = lines[0].split(' ')

const x = Number(lines1[0])
const y = Number(lines1[1])

if (x == 0 && y == 0){
    console.log(`Origem`)
}else if (x == 0 && y != 0){
    console.log(`Eixo Y`)
}else if (x != 0 && y == 0){
    console.group(`Eixo X`)
}else if (x > 0 && y > 0){
    console.log(`Q1`)
}else if (x < 0 && y > 0){
    console.log(`Q2`)
}else if (x < 0 && y < 0){
    console.log(`Q3`)
}else if (x > 0 && y < 0){
    console.log(`Q4`)
}
