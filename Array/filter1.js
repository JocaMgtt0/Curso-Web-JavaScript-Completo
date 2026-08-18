const produtos = [
    {nome: 'Notebook', preco: 3200.5, fragil: true},
    {nome: 'iPad', preco: 454.5, fragil: false},
    {nome: 'copo de vidro', preco: 21.3, fragil: true},
    {nome: 'copo de plastico', preco: 43.4, fragil: false}
]

console.log(produtos
    .filter(f => f.preco >= 45 )
    .filter(f => f.fragil == true)
)
