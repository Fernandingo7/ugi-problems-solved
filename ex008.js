// ! Problem 1001 //

var c1 = 'refrigerante'
var c2 = 'iogurte'
var c3 = 'computador'
var c4 = 'detergente'
var c5 = 'feijoada'
var c6 = 'carne'
var c7 = 'frango'
var c8 = 'sabonete'

var produto1 = prompt('Digite o codigo do primeiro produto')
var produto2 = prompt('Digite o codigo do segundo produto')
var preço = prompt('Digite o preço do segundo produto')
var preço2 = preço
var preço1 = preço
var quantidade1 = quant1
var quantidade = quant2
var quant1 = prompt('Digite a quantidade que voce quer desse primeiro produto')
var quant2 = prompt('Digite a quantidade que voce quer desse segundo produto')

switch (produto1) {
  case c1: 
  console.log(preço);
  preço1
  console.log(quant1);
  quantidade1 ;
  break;
  case c2: 
  console.log(preço)
  preço1
  console.log(quant1)
  quantidade1
  break;
  case c3: 
  console.log(preço)
  preço1
  console.log(quant1)
  quantidade1
  break;
  case c4: 
  console.log(preço)
  preço1
  console.log(quant1)
  quantidade1
  break;
  case c5: 
  console.log(preço)
  preço1
  console.log(quant1)
  quantidade1
  break;
  case c6: 
  console.log(preço)
  preço1 
  console.log(quant1)
  quantidade1
  break;
  case c7: 
  console.log(preço)
  preço1
  console.log(quant1)
  quantidade1
  break;
  case c8: 
  console.log(preço)
  preço1
  console.log(quant1)
  quantidade1
  break;

}switch (produto2) {
  case c1: 
  console.log(preço)
  preço2
  console.log(quant2)
  quantidade
  break;
  case c2: 
  console.log(preço)
  preço2
  console.log(quant2)
  quantidade
  break;
  case c3: 
  console.log(preço)
  preço2
  console.log(quant2)
  quant2
  break;
  case c4: 
  console.log(preço)
  preço2
  console.log(quant2)
  quantidade
  break;
  case c5: 
  console.log(preço)
  preço2
  console.log(quant2)
  quantidade
  break;
  case c6: 
  console.log(preço)
  preço2
  console.log(quant2)
  quantidade
  break;
  case c7: 
  console.log(preço)
  preço2
  console.log(quant2)
  quantidade
  break;
  case c8: 
  console.log(preço)
  preço2
  console.log(quant2)
  quantidade
  break;
}
var final1 = (Number.parseInt(preço2) * (Number.parseInt(quantidade)))
var final2 = (Number.parseInt(preço1) * (Number.parseInt(quantidade1)))
var final = (Number.parseInt(final1) + (Number.parseInt(final2)))

console.log(`Voce precisa pagar ${final}.`)

// It can't work in the website test, but it will work in your console (UGI bug) //
