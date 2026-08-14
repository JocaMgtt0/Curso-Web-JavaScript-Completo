const pessoa ={ 
    nome: 'rebeca',
    idade: 2,
    peso: 13 
}
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e =>{
    console.log(`${e[0]}: ${e[1]}`)
})

// ou
Object.entries(pessoa).forEach(([chave, valor]) =>{
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNacimento = '01/01/27'
console.log(pessoa.dataNacimento)
console.log(Object.keys(pessoa))

// obj.assign

const det = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4}
const obj = Object.assign(DecompressionStream, o1, o2)

Object.freeze(obj)
obj.c = 123
console.log(obj)