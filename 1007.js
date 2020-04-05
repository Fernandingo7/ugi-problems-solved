// ! Problem 1007 //

var a = prompt('Digite aqui o valor do produto "a"')
var b = prompt('Digite aqui o valor do produto "b"')
var c = prompt('Digite aqui o valor do produto "c"')
var d = prompt('Digite aqui o valor do produto "d"')

var res1 = (Number.parseInt(a) * (Number.parseInt(b)))
var res2 = (Number.parseInt(c) * (Number.parseInt(d)))

var diferenca = res1 - res2

console.log(diferenca)

// It can't work in the website test, but it will work in your console (UGI bug) //
