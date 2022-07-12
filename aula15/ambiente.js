let num = [0,5,8,4]
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor é ${num}`)
num[0] = 5
num.push(2)
console.log(`O vetor de forma crescente fica ${num.sort()}`)
console.log(num[3])
for(let pos=0; pos<num.length;pos++){
    console.log(num[pos])
}

// simplificando 
for (let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}