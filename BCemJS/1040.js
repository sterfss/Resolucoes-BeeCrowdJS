var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const lines1 = lines[0].split(' ')

const N1 = Number(lines1[0])
const N2 = Number(lines1[1])
const N3 = Number(lines1[2])
const N4 = Number(lines1[3])
const N5 = Number(lines[1])

function mediaPonderada(){
    return ((N1 * 2) + (N2 * 3) + (N3 * 4) + N4) / 10
}

function exame(){
    return (N5 + mediaPonderada()) / 2
}

if(mediaPonderada() >= 7){
    console.log(`Media: ${mediaPonderada().toFixed(1)}
Aluno aprovado.`)
}else if(mediaPonderada() < 5){
    console.log(`Media: ${mediaPonderada().toFixed(1)}
Aluno reprovado.`)
}else if(N5 <= 5){
    console.log(`Media: ${mediaPonderada().toFixed(1)}
Aluno em exame.
Nota do exame: ${N5.toFixed(1)} 
Aluno reprovado.
Media final: ${exame().toFixed(1)}`)

}else{
    console.log(`Media: ${mediaPonderada().toFixed(1)}
Aluno em exame.
Nota do exame: ${N5.toFixed(1)}
Aluno aprovado.
Media final: ${exame().toFixed(1)}`)
}
