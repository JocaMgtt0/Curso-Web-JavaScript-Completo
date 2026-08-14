const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a,b,c}
console.log(obj1, obj2)

const nome = 'nota'
const valorAtr = 123

const obj3 = {}
obj3[nome] = valorAtr
console.log(obj3)

const obj4 = {[nomeAtr]: nome}
console.log(obj4)

const obj4 = {
    funcao1: {

    },
    funcao2: {

    }
}
console.log(obj5.funcao1, obj5.funcao2) 