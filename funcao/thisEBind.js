const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO

//sempre que passar o 'this' em uma funçao
//e usar a funcao bind, o bind vai traduzir
//o'this' para a funcao que esta chamando 
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()