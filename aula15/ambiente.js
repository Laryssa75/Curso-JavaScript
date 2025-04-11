let num = [5,2,8,9,3]
num[3] = 6 //adicionar valor no idice 3 
num.push(2) //adiciona valor no último índice
num.length //fala a quantidade de elementos na lista
num.sort() //coloca os elementos de forma crescente

console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)


if(pos == -1){
    console.log('O valor não foi encontrado.')
}else{
    console.log(`O valor está na posição ${pos}.`)
}

//-1 dentro do javascript significa que não tem foi encontrado valor válido
