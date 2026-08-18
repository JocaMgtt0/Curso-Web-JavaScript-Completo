const sequencia ={
    _valor: 1, // convencao

    get valor(){return this._valor++ },
    set valor(valor){this._valor = valor}
}

console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 100
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 200
console.log(sequencia.valor, sequencia.valor)