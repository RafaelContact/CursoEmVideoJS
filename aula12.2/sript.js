function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('section#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else { 
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '' // Repare como  aqui foi inserido um valor na variavel com os elementos radio, primeiro ela está vazia mas recebe os valores do if
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade  >= 0 && idade < 10){
                // criança
                img.setAttribute('src', './fotos/foto-bebe-m.png' )
            } else if  (idade >= 10 && idade < 21){
                //  jovem
                img.setAttribute('src', './fotos/foto-jovem-m.png')
            } else if (idade >= 21 && idade < 50){
                // adulto
                img.setAttribute('src', './fotos/foto-adulto-m.png')
            } else {
                // idoso
                img.setAttribute('src', './fotos/foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade  >= 0 && idade < 10){
                // criança
                img.setAttribute('src', './fotos/foto-bebe-f.png')
            } else if  (idade >= 10 && idade < 21){
                //  jovem
                img.setAttribute('src', './fotos/foto-jovem-f.png')
            } else if (idade >= 21 && idade < 50){
                // adulto
                img.setAttribute('src', './fotos/foto-adulto-f.png')
            } else {
                // idoso
                img.setAttribute('src', './fotos/foto-idoso-f.png')
            }
        }
        res.getElementsByClassName.textAligne = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}