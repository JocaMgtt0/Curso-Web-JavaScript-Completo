const prod1 = {} //objeto
prod1.nome = 'celuar Ultra Mega'
console.log(prod1)
prod1.preco = 323
console.log(prod1)
prod1['desconto'] = 0.30
console.log(prod1)

//posso definir objeto dessa forma
const prod2 = {
    nome: 'camisa polo',
    preco: 32.4

}

//posso definir objetos dentro de objetos
//objeto em js nada mais é que chave valor

const const3 = {
    nome: 'algum',
    obj:  {
        nome: 'outro',
        obj: {
            outro: 32
        }
        
    }
}

console.log(const3)