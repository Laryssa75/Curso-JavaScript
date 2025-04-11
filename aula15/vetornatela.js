let valores = [8,1,7,4,2,9]
valores.sort
console.log(valores) //todos os valores dentro da mesma linha

// console.log(valores[0]) //o valor mostrado de forma vertical
// console.log(valores[1])
// console.log(valores[2])
// console.log(valores[3])
// console.log(valores[4])
// console.log(valores[5])

// for(let valor=0; valor < valores.length; valor++){
//     console.log(`A posição ${valor} tem o valor ${valores[valor]}`)
// }

for(let valor in valores){
    console.log(`A posição ${valor} tem o valor ${valores[valor]}`)
}