var btn = window.document.getElementById('btn')
var sel = window.document.getElementById('sel')
btn.addEventListener('click', add)
let values = []  // posso declarar o array vazio 

function add (){
    var num = window.document.getElementById('num').value
    if ( numbers$(num) && inlist(num)) {


    }
    if(num.length == 0  ){ 
        window.alert('valor invalido')
    }
    if ( num < 0 || num > 100 ){
        window.alert('Digite outro valor')
    }
    else{
        var item = document.createElement('option')
        item.text = `Numero ${num} `
        sel.appendChild(item)   

        }
        

}