// ! Problem 1001 //

var fer = 'Fernando';
var ron = 'Ronaldo';
var cris = 'Cristiano';
var orl = 'Orlando';
var mo = 'Monica'

var fixo = 0
var vendas = 0 

var code = prompt('Qual é o apelido do vendendor?')

switch (code) {
  case 'fer':
  console.log(994.14)
  fixo += 994.14
  console.log(6000.24)
  vendas += 6000.24
  break;
  case 'ron':
  console.log(3000.94)
  fixo += 3000.94
  console.log(8000.21)
  vendas += 8000.21
  break;
  case 'cris':
  console.log(1000.40)
  fixo += 1000.40
  console.log(7000.20)
  vendas += 7000.20
  break;
  case 'orl':
  console.log(1700.33)
  fixo += 1700.33
  console.log(3000.02)
  vendas += 3000.02
  break;
  case 'mo':
  console.log(2000.11)
  fixo += 2000.11
  console.log(4000.06)
  vendas += 4000.06
  break;
}

var final = fixo + (vendas * 0.15)
var final = final.toFixed(2)
console.log(`TOTAL = U$${final}`)

// It can't work in the website test, but it will work in your console (UGI bug) //
