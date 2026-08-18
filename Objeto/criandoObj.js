// usando a notacao literal
const obj = {

}

// Objectt em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

// Funcoes contrutoras
function Produto(nome, prec, desc){
    this.nome = nome
    this.getPrecoDesconto = () => {
        return prec * (1- desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
console.log(p1.getPrecoDesconto())

// factory function
function criarFuncionario(nome, salarioBase, faltas){
    return{
        nome, 
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}


const f1 = criarFuncionario('Joao', 759.2, 2)
console.log(f1.getSalario())

//object create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

//funcao famosa que retorna obj
const fromJSON = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJSON.info)