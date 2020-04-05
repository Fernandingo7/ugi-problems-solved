// ! Problem 1015 //

var x2 = prompt('Digite aqui o valor de x2') 
var x1 = prompt('Digite aqui o valor de x1') 
var y2 = prompt('Digite aqui o valor de y2')
var y1 = prompt('Digite aqui o valor de x2') 


var xc2 = Number.parseInt(x2)
var xc1 = Number.parseInt(x1)
var yc2 = Number.parseInt(y2)
var yc1 = Number.parseInt(y1)




var numero = ((xc2-xc1)**2)-((y2-y1)**2);
var divisor = 1, dividido = 0;
for (var  i = 0; i < numero; i++) {
    dividido = numero / divisor;
    divisor = (dividido + divisor) / 2;
}

var distancia = divisor
console.log(distancia.toFixed(4));

// It can't work in the website test, but it will work in your console (UGI bug) //
