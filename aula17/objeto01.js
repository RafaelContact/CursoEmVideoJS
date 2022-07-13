let amigo = {} // Uma especie de evolução de um array
console.log(typeof amigo)
let aray = []
console.log (typeof aray)

amigo = {nome: 'Josẽ', // agora meu indice não é mais um índice, é um identificador.
        sexo: 'M', 
        peso: '85,5',   
        engordar(p=0){    // agora eu tenho uma função dentro de uma variável
            console.log('Engordou')
            this += p
        }   
    }
    console.log(amigo)
    amigo.engordar(2)
    console.log(`${amigo.nome} pesa ${amigo.peso}kg`)