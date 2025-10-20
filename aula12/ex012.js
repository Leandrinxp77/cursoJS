var idade = 19
if (idade < 16) {
    console.log(`Você tem ${idade} anos`)
    console.log('Não vota')
} else if (idade < 18) {
    console.log(`Você tem ${idade} anos`)
    console.log('Voto opcional')
} else if (idade > 18) {
    console.log(`Você tem ${idade} anos`)
    console.log('Voto obrigatório')
}