var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let [A,B,C] = input.split(" ").map((item) => parseFloat(item))

let aux
if (A < B) {
    aux = A
    A = B
    B = aux
}
if (A < C){
    aux = A
    A = C
    C = aux
}
if (B < C){
    aux = B
    B = C
    C = aux
}
if (A >= B + C){
    console.log(`NAO FORMA TRIANGULO`)
}else{
    if (A * A == (B * B) + (C * C)){
    console.log(`TRIANGULO RETANGULO`) 
    }
    if (A * A > B * B + C * C){
    console.log(`TRIANGULO OBTUSANGULO`)    
    }
    if (A * A < B * B + C * C){
    console.log(`TRIANGULO ACUTANGULO`)   
    }
    if (A == B && B == C){
    console.log(`TRIANGULO EQUILATERO`)    
    }else if (A == B || B == C || A == C){
    console.log(`TRIANGULO ISOSCELES`)   
    }

}
