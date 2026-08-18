function Alua(nome, videoID){
    this.nome = nome
    this.videoID =  videoID
}

const aula1 = new Alua('Bem vindo', 123)
const aula2 = new Alua('Até brve', 345)
console.log(aula1, aula2)

//simular o new

function novo(f, ...params){
    const obj = {}
    obj.__proto__ = f.__proto__
    f.apply(this, params)
    return obj
}

const aula3 = novo(Alua, 'Bem vindo', 123)
const aula4 = novo(Alua, 'Até breve', 324)

console.log(aula3, aula4)
