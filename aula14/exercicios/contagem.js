var btn = window.document.getElementById('btn')
var res = window.document.getElementById('res')

var searching = window.document.getElementById('searching')



function text(){
    res.innerText = " "
    var beggin = window.document.getElementById('beggin').value
    var end = window.document.getElementById('end').value
    var jump = window.document.getElementById('jump').value


    searching.innerHTML = " Contando : "
    var result = Number(beggin)
     while ( result < Number(end)){
         res.innerText += result   
         res.innerText += ` \u{1F449} `
        result += Number(jump)
    }   
    if ( result == end){
        res.innerHTML += ` ${result}`
    }
    res.innerHTML += ` \u{1F3C1}`
}