function loader(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('img')
var date = new Date()
var hour = date.getHours()
msg.innerHTML = `Agora são ${hour} horas`
if (hour >= 0 && hour < 12){
        img.src = '../asets/manha.png'
        document.body.style.background = '#f3eedc'
    } else if ( hour >= 12 && hour < 18){
        img.src = '../asets/tarde.png'
        document.body.style.background = '#fd5a01'
    } else {
        img.src = '../asets/noite.png'
        document.body.style.background = '#241a1d'
}
}