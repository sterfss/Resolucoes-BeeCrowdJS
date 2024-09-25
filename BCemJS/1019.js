var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let Nsec = parseInt(input)
let Convert = convertersegundos(Nsec)

 function convertersegundos(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60)
    const segrestantes = Math.floor(segundos % 60)

    return `${horas}:${minutos}:${segrestantes}`
 }

 
 console.log(Convert)
