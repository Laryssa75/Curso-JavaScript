function contar() {
    var inicio = document.getElementById('inicioNum')
    var fim = document.getElementById('fimNum')
    var passo = document.getElementById('passoNum')
    var resultado = document.getElementById('resultado')

    //convertendo para número
    inicio = Number(inicio.value)
    fim = Number(fim.value)
    passo = Number(passo.value)

    if(inicio.value.length === 0 || fim.value.length === 0 || passo.value.length === 0){
        window.alert('Insira um número maior do que zero!')
        resultado.innerHTML = "Impossível contar!"

    if(passo = 0){
        window.alert('Passo inválido!Considerando PASSO 1')
        passo = 1
    }
    }else {
        resultado.innerHTML = 'Contando:<br>'
        if(inicio < fim) {
            for(let i = inicio; i <= fim; i += passo){
                
                if(i + passo > fim) {
                    resultado.innerHTML += `${i}` 
                }else {
                    resultado.innerHTML += `${i} \u{1F449}`
                }
            }
        }else {
            for(let i = inicio; i >= fim; i -= passo){

                if(i + passo < fim){
                    resultado.innerHTML -= `${i}`
                }else {
                    resultado.innerHTML -= `${i} \u{1F449}`
                }
            }
        }
        resultado.innerHTML += '\u{1F3F3}'
    }
}
