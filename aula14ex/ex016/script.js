function contar() {
    var inicio = document.getElementById('inicioNum').value
    var fim = document.getElementById('fimNum').value
    var passo = document.getElementById('passoNum').value
    var resultado = document.getElementById('resultado')

    //convertendo para número
    inicio = Number(inicio)
    fim = Number(fim)
    passo = Number(passo)

    if(inicio === 0 || fim === 0 || passo === 0){
        alert('Insira um número maior do que zero!')
    }else {
        resultado.innerHTML = 'Contando:<br>'
        if(inicio < fim) {
            for(let i = inicio; i < fim; i += passo){
                
                if(i + passo > fim) {
                    resultado.innerHTML += `${i}` 
                }else {
                    resultado.innerHTML += `${i} \u{1F449}`
                }
            }
        }
        resultado.innerHTML += '\u{1F3F3}'
    }
}
