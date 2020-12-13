// Faça um algoritmo que calcule o fatorial de um número.
function fatorial(numero) {
  if (numero == 1) {
    return numero
  }
  return numero * fatorial(numero - 1)
}
console.log(fatorial(10))
console.log(fatorial(5))