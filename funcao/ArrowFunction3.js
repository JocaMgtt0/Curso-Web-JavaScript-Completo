let comparaComThis = function (param){
    console.log(this === param)
}

comparaComThis(global)

const obj ={}

//falamos que o this pertence ao contexto do obj
comparaComThis = comparaComThis.bind(obj)

/* Como ele pertence ao contexto do obj
logo ele nao esta relacionado ao contexto global
por isso daria falso */
comparaComThis(global)

/*Aqui seria true pois ele esta relacionado ao contexto do objeto, pois passamos ele como bind */
comparaComThis(obj)

/* Como é um arrow, o this aponta para o obj corrente, no caos o local que essa funcao foi definida, na funcao normal ele aponta para o obj global (em node é o 
'global', no navegaor é o window)*/
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)

//aqui da true pois o ''this' realmente aponta para o contexto do modulo que a funcao
// foi definida
comparaComThisArrow(module.exports)

/*Arrow function é mais 'forte', pore isso ela nao vai mudar em quem o 
this esta amarrado, nem mesmo usando o bind, ela vai continuar apontando
para o contexto em que a arrow function foi definida */
comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)

//continua true pois aponta para o contexto do modulo da arrow function
comparaComThisArrow(module.exports)