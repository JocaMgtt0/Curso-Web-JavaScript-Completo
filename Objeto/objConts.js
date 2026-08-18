// pessoa -> 12313 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

//pessoa <- 123 -> {...}
//pessoa = {nome: 'Ana'}

Object.freeze(pessoa)
pessoa.nome = 'Maria'
pessoa.rua  = 'sdasd'
delete pessoa.nome

console.log(pessoa.nome)