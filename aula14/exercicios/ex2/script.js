function tabuada() {
 var num = document.getElementById('txtn')
 var tab = document.getElementById('select')
if (num.value.length == 0) {  // como fazer para identificar se um valor está vazio !!!
 let n = Number(num.value)
  window.alert('Por favor, digite um número !')
} else {
    let n = Number(num.value)
    let c = 1 
    tab.innerHTML = ''
    while( c <= 10){
        let item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        tab.appendChild(item)
        c++ 
    }
}

}