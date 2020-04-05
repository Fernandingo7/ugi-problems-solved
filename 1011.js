// ! Problem 1001 //

alert('Calculadora de volume de uma esfera')
var pi = 3.14159
var R = prompt('Digite aqui o valor do raio')

var res = (4/3) * pi * R**3 
res.toFixed(3)
console.log(`O volume dessa esfera é ${res.toFixed(3)}`)

// It can't work in the website test, but it will work in your console (UGI bug) //
