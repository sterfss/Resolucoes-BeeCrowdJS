var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('/n')

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

// Verifica se as chaves existem na tabela antes de acessar
if (tabela[classe1] && tabela[classe1][classe2] && tabela[classe1][classe2][classe3]) {
    const animal = tabela[classe1][classe2][classe3];
    console.log(animal);
} else {
    console.error('Entrada inválida');
}
