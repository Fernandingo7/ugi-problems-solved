// ! Problem 1038 //

var c1 = 'hotdog'
var c2 = 'xsalada'
var c3 = 'xbacon'
var c4 = 'torrada'
var c5 = 'refri'

alert('Na nossa lanchonete temos: 1-hotdog 2-X salada 3-X bacon 4-Torrada 5-Refrigerante')
var pedido1 = prompt('O que voce vai querer?')
var pedido2 = prompt('O que voce vai querer mais algo?')
var valor = 0 
switch (pedido1) {
  case 'c1':
  console.log('R$: 4,00');
  valor += 4
  break;
  case 'c2':
  console.log('R$: 4,50');
  valor += 4.50
  break;
  case 'c3':
  console.log('R$: 5,00');
  valor += 5
  break;
  case 'c4':
  console.log('R$: 2,00');
  valor += 2
  break;
  case 'c5':
  console.log('R$: 1,50')
  valor += 1.50
  break
}
switch (pedido2) {
  case 'c1': 
  console.log('R$: 4,00');
  valor += 4;
  break;
  case 'c2':
  console.log('R$: 4,50');
  valor += 4.50;
  break;
  case 'c3':
  console.log('R$: 5,00');
  valor += 5
  break;
  case 'c4':
  console.log('R$: 2,00');
  valor += 2;
  break;
  case 'c5':
  console.log('R$: 1,50');
  valor += 1.50;
  break;
}

console.log(valor)

// It can't work in the website test, but it will work in your console (UGI bug) //
