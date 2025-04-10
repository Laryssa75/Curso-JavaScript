function gerarTabuada(){
    let numero = document.getElementById('num')
    let resTabuada = document.getElementById('resultadoTabuada')

    
    //convertendo o input para número
    if(numero.value.lenght === 0){
        window.alert('Insira um número maior ou menor do que zero!')
        
    }else{
        let num = Number(numero.value)
        
        //limpa a lista antes de criar uma nova
        resTabuada.innerHTML = ''

       //lista no javascript que será mostrada no html
        for(let i = 1; i <= 10; i++){
            // let item = document.createElement('li')
            let res = num * i

            let item = document.createElement('option')
            item.text = `${i} x ${num} = ${res}`
            item.value = `resTabuada${i}`
            resTabuada.appendChild(item)
        } 

        // for(let i = 1; i <= 10; i++){
        //     // let item = document.createElement('li')
        //     let res = num * i

        //     let input = document.createElement('input')
        //     input.type = 'text'
        //     input.value = `${i} x ${num} = ${res}`
        //     input.readOnly = true
        //     input.style.margin = '5px 0'
        //     resTabuada.appendChild(input)
        // } 

        // for(let i = 1; i <= 10; i++){
        //     let item = document.createElement('li')
        //     let res = num * i
        //     item.textContent = `${i} x ${num} = ${res}`
        //     resTabuada.appendChild(item)
        // }
    }
    
}