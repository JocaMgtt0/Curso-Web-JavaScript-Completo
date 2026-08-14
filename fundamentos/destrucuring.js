const pessoa = {
    nome: 'dsad',
    idade: 321,
    endereco: {
        numero: 12
    }
}

//desestrutura um objeto, voce consegue puxar somente
// o que precisa de dentro de um objeto

const {nome, idade } = pessoa //tira o nome e idade de dentro de pessoa
console.log(nome,idade)
console.log(pessoa)

const {nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const{endereco: {numero, cep}} = pessoa
console.log(numero, cep)