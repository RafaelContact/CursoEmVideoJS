var beggin = window.document.getElementById('beggin').value
var end = window.document.getElementById('end').value
var jump = window.document.getElementById('jump').value
var btn = window.document.getElementById('btn')
var res = window.document.getElementById('res')



function text(){
    c = parseInt(beggin) + parseInt(end)
    res.innerHTML = (c)
}