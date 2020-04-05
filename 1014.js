// ! Problem 1014 //

var km = prompt('Quantos quilomêtros o carro andou?')
var gas = prompt('Quantos litros o carro estava?')

var average = Number.parseInt(km) / Number.parseInt(gas)

console.log(`${average.toFixed(3)} km/l`)

// It can't work in the website test, but it will work in your console (UGI bug) //
