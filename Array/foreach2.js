Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}



const aprovados = ['joca', 'pedro', 'Jao']

aprovados.forEach2(function (nome, i){
    console.log(`${i + 1}) ${nome} `)
})