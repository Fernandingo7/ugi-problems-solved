// ! Problem 1001 //

var a = prompt('Qual foi a primeira nota do aluno?')
var b = prompt('Qual foi a segunda nota do aluno?')
var c = prompt('Qual foi a terceira nota do aluno?')
if (a > 10.0) {
  console.log('Essa nota não é valida!')
} else {
}
if (b > 10.0) {
  console.log('Essa nota não é valida!')
} else { 
}
if (c > 10.0) {
  console.log('Essa nota não é valida!')
} else { 
}

var nota1 = (Number.parseInt(a) * 0.2)
let nota2 = (Number.parseInt(b) * 0.3)
var nota3 = (Number.parseInt(c) * 0.5)
var media = nota1 + nota2 + nota3

console.log(media)

// It can't work in the website test, but it will work in your console (UGI bug) //
