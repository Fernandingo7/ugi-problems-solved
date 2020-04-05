// ! Problem 1012 //

const a = prompt('Digite aqui o valor de A')
const b = prompt('Digite aqui o valor de B')
const c = prompt('Digite aqui o valor de C')
const pi = 3.14159







const TRIANGULO = Number.parseInt(a) * Number.parseInt(c) / 2
console.log(`TRIANGULO = ${TRIANGULO.toFixed(3)}`)

const CIRCULO = pi * c**2
console.log(`CIRCULO = ${CIRCULO.toFixed(3)}`)

const QUADRADO = b * b 
console.log(`QUADRADO = ${QUADRADO.toFixed(3)}`)

const TRAPEZIO = (Number.parseInt(a) + Number.parseInt(b)) * c / 2
console.log(`TRAPEZIO = ${TRAPEZIO.toFixed(3)}`)

const RETANGULO = a * b
console.log(`RETANGULO = ${RETANGULO.toFixed(3)}`)

 

// It can't work in the website test, but it will work in your console (UGI bug) //
