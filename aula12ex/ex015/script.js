function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if(fano.value.length == 0 || Number(fano.value) > ano){
      window.alert('[ERRO] Verifique os dados e tente novamente!')
   }else {
      var fsex = document.getElementsByName('radsex')
      var idade = ano - Number(fano.value)
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')

      if (fsex[0].checked) {
         genero = 'Homem'
         if(idade >= 0 && idade <= 10){
            //criança
            img.setAttribute('src', 'crianca-homem.png')
            document.body.style.background = '#e50103ff'
         }else if(idade <= 20) {
            //adolescente
            img.setAttribute('src', 'adolescente-homem.png')
            document.body.style.background = '#e8c76aff'
         } else if (idade <= 50) {
            //adulto
            img.setAttribute('src', 'adulto-homem.png')
            document.body.style.background = '#526d98ff'
         }else {
            //idoso
            img.setAttribute('src', 'idoso-homem.png')
            document.body.style.background = '#ccd1caff'
         }
      }
      else if(fsex[1].checked){
         genero = 'Mulher'
         if (idade >= 0 && idade <= 10) {
            //criança
            img.setAttribute('src', 'crianca-mulher.png')
            document.body.style.background = '#f9d3f1ff'
         } else if(idade <= 20) {
            //adolescente
            img.setAttribute('src', 'adolescente-mulher.png')
            document.body.style.background = '#e4e3d4ff'
         } else if(idade <= 50) {
            //adulto
            img.setAttribute('src', 'adulta-mulher.png')
            document.body.style.background = '#df6548ff'
         } else {
            //idoso
            img.setAttribute('src', 'idosa-mulher.png')
            document.body.style.background = '#2e1e0eff'
         }
      }

      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
   }
}

