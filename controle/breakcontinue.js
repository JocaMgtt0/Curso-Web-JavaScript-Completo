const num  = [1,2,3,4, 5, 6, 8, 6,4]

for (x in num){
    if(x == 5){
        break
    }
    console.log(`x = ${num[x]}`)
}

for(y in num){
    if(y == 5){
        continue
    }
    console.log(`indice: ${y} = ${num[y]}`)
}

externo: for(a in num){
    for(b in num){
        if(a == 2 && b == 3) break externo
        console.log(`par = ${a}, ${b}`)
    }
}