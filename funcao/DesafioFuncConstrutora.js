function Pessoa(nome = null){

    this.nome = nome

    this.RetornaPessoa = function(){
        return nome
    } 
}

let p1 = new Pessoa()

let p2 = new Pessoa('Pedro')

console.log(p1.RetornaPessoa())
console.log(p2.RetornaPessoa())