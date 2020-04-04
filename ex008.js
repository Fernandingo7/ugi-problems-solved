// ! Problem 1001 //

var cd1 = 'Fernando';
var cd2 = 'Ronaldo';
var cd3 = 'Cristiano';
var cd4 = 'Orlando';
var cd5 = 'Monica';

var hora = 0;
var PH = 0;

var code = prompt('Qual é o codigo do funcionario?');

switch (code) {
  case 'cd1':
  console.log('20h'),
  hora += 20
  console.log('12PH');
  PH += 12
  break;
  case 'cd2':
  console.log('40h'),
  hora += 40
  console.log('13PH')
  PH += 13
  break;
  case 'cd3': 
  console.log('10h'),
  hora += 10
  console.log('22PH')
  PH += 22
  break;
  case 'cd4':
  console.log('40h'),
  hora += 40
  console.log('13PH')
  PH += 13
  break;
  case 'cd5':
  console.log('30h'),
  hora += 30
  console.log('20PH')
  PH += 20
}

var mensal = hora * PH
console.log('U$' + mensal+'.00')

// It can't work in the website test, but it will work in your console (UGI bug) //
