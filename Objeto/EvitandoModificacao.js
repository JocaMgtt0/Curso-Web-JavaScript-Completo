// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 123, tag: 'promo'
})

//pode ser modificado, porem nao pode ser adiicnado novos atributos
console.log('Extendivel: ', Object.isExtensible(produto))
produto.descricao = 'Borracha'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = {nome: 'julia', idade: 35}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))
console.log(pessoa)

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 39
console.log(pessoa)

//Object.freeze = selado + valores constante
