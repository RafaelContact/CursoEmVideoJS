var btn = window.document.getElementById('btn')
var res = window.document.getElementById('res')



function text(){
    res.innerText = " "
    var beggin = window.document.getElementById('beggin').value
    var end = window.document.getElementById('end').value
    var jump = window.document.getElementById('jump').value
    var result = Number(beggin)
     while ( result < Number(end)){
         res.innerHTML += result   
         res.innerHTML += " "
        result += Number(jump)
    }   
    if ( result == end){
        res.innerHTML += result
    }

}