function tratarErroElancar(erro){
    // throw new Error('...+...')
    //throw 10
    //throw true
    throw 'mensagem' 
}

function imprimierNOmeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + '!!')
    } catch(e){
        tratarErroElancar(e)
    }


}

const obj = {name: 'robs'}
imprimierNOmeGritado(obj)