var num = window.document.getElementById('num')
var sel = window.document.getElementById('sel')

let values = []  // posso declarar o array vazio 

var btn = window.document.getElementById('btn')
btn.addEventListener('click', add)

function isNumber(n){
    if(Numver(n) > 1 && Number(n) <= 100){
        return true

    }else{
        return false
    }
}

function inlist(n, l){
    if (l.indexOf(Number(n) != -1 ) ){
        return true 
    }else { 
        return false
    }
}

function add(){
    if (isNumber(num.value) && inlist(num.value, valores)){

    } else {
        window.alert('Valor invalido ou já encontrado na lista.')
    }
}