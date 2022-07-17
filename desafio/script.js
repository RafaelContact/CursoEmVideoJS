//etapa um

//condições
//[x]valores acima de 100 ou abaixo de 1 são invalidos e retornam um alerta
//[x] caixa vazia retorna alerta
//[x] valores repitidos  não são adicionados.

// funcionalidades 
//[x] adiciona atravez do evento onclick os numeros no select
//[x] são adicionados dentro de um array local
//[x] os numeros adicionados estão em uma template string com frase dentro do select
// ao adicionar um número a caixa de digitação é zerada.

// etapa 2

// condições 
// [x] se eu tentar finalizar antes de adicionar numeros ele retorna um alert
// [x] se eu adicionar outros valores , os resultados são apagados da tela aguardando o evento click novamente

// funcionalidades 
// atravez do evento clicar ele retorna os seguintes valores na tela: 
//[x] total de números cadastrados 
//[x] o menor valor 
// a soma de todos os valores
// a media dos valores digitados



var sel = window.document.getElementById('sel') // select
var btn = window.document.getElementById('btn') // botão de adicionar
var valores = [] // toda vez que um função retorna um valor, essa variável global acrescenta mais um
var x = 0 // essa variável se incrementada recebe o valor que vem da função
let soma = 0
var finish = window.document.getElementById('finish')
btn.addEventListener('click', add)


function add(){
    var num = window.document.getElementById('num').value // input number, se eu declarar fora da função ela vai receber o valor do escopo global do carregamento
    var print = valores.indexOf(num)
    if(num > 0 && num < 100 ){
        if( print == -1){
            valores.push(num)
            var option = document.createElement('option')
            option.innerHTML = `Adicionado número ${num}`
            sel.appendChild(option)
            res.innerHTML = ''
            x++
            
        }else{
            window.alert('Valor já adicionado!')
        }
    }else{
        window.alert('Valor incorreto !')
    }
    
}

function result(){

    if( valores.length <= 1){
        window.alert('[ERRO] Digite outros números tente novamente!')
    }else{
        res.innerHTML = `O total de número cadastrados foi de ${valores.length} <br>`
        valores.sort()
        res.innerHTML += `O menor número cadastrado foi de ${valores[0]} <br>`
        for( let y in valores){
          soma += Number(valores[y])
          console.log(valores[y])
        }
        res.innerHTML += `A soma de todos os números é ${soma}`
        
    }

}
