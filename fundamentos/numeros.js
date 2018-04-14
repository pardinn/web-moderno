const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))  // toFixed controla as casas decimais, mas não altera o valor original
console.log(media.toString()) // valor original permanece intacto
console.log(media.toString(2)) // toString recebendo o valor 2 converte em binário (funciona apenas para number)
console.log(typeof media)
