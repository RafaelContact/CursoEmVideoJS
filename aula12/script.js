function loader(){
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('photo')
var date = new Date()
var hour = date.getHours()
msg.innerHTML = `Agora são ${hour} horas`
if (hours >= 0 && hours < 12){
    // bom dia 
    } else if ( hours >= 12 && hours < 18){
    // boa tarde 
    } else {
    // boa noite
}
}