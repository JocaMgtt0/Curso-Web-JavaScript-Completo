function rand([min = 0, max = 100 ]){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
}

console.log(rand([40, 32]))
console.log(rand([922]))