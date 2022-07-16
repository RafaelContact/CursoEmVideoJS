//etapa um

//condições
//valores acima de 100 ou abaixo de 1 são invalidos e retornam um alerta
// caixa vazia retorna alerta
// valores repitidos  não são adicionados.

// funcionalidades 
// adiciona atravez do evento onclick os numeros no select
// são adicionados dentro de um array local
// os numeros adicionados estão em uma template string com frase dentro do select
// ao adicionar um número a caixa de digitação é zerada.

// etapa 2

// condições 
// se eu adicionar outros valores , os resultados são apagados da tela aguardando o evento click novamente
// se eu tentar finalizar antes de adicionar ele retorna um alert

// funcionalidades 
// atravez do evento clicar ele retorna os seguintes valores na tela: 
// total de números cadastrados 
// o menor valor 
// a soma de todos os valores
// a media dos valores digitados



var sel = window.document.getElementById('sel') // select
var btn = window.document.getElementById('btn') // botão de adicionar
var valores = [] // toda vez que um função retorna um valor, essa variável global acrescenta mais um
x = 0 // essa variável se incrementada recebe o valor que vem da função
btn.addEventListener('click', add)


function add(){
    var num = window.document.getElementById('num').value // input number, se eu declarar fora da função ela vai receber o valor do escopo global do carregamento
    valores.push(num)
    console.log(valores)
    
    
}

