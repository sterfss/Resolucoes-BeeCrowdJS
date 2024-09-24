var input = require('fs').readFileSync('/dev/stdin', 'utf8');

let [A, B, C] = input.split(" ").map(item => parseFloat(item))
let pi = 3.14159

let areatriangulo = (A * C) / 2
let areacirculo = pi * Math.pow(C,2)
let areatrapezio = ((A + B) * C ) / 2
let areaquadrado = B * B
let arearetangulo = A * B


console.log("TRIANGULO: "+ areatriangulo.toFixed(3))
console.log("CIRCULO: "+ areacirculo.toFixed(3))
console.log("TRAPEZIO: "+ areatrapezio.toFixed(3))
console.log("QUADRADO: "+ areaquadrado.toFixed(3))
console.log("RETANGULO: "+ arearetangulo.toFixed(3))



















