var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')

const [horaInicial, horaFinal] = lines[0].split(' ').map(Number)

let duracao
if (horaFinal > horaInicial){
    duracao = horaFinal - horaInicial
}else{
    duracao = (24 - horaInicial) + horaFinal
}
 console.log(`O JOGO DUROU ${duracao} HORA(S)`)


