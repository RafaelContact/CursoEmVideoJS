var agora = new Date() 
var hora = agora.getHours()
console.log (`agora são exatamente ${hora} horas`)
if (hora >= 12 && hora < 18){
    console.log('boa tarde')
} else if ( hora >= 18 ){
    console.log('boa noite')
} else{
    console.log('bom dia')
}