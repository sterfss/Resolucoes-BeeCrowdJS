var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n')

const [classe1, classe2, classe3] = lines

const tabela = {
    vertebrado: {
        ave: {
            carnivoro: 'aguia',
            onivoro: 'pomba'
        },
        mamifero: {
            onivoro: 'homem',
            herbivoro: 'vaca'
        }
    },
    invertebrado: {
        inseto: {
            hematofago: 'pulga',
            herbivoro: 'lagarta'
        },
        anelideo: {
            hematofago: 'sanguessuga',
            onivoro: 'minhoca'
        }
    }
}

var animal = tabela[classe1][classe2][classe3]

console.log(animal)
