// Desenvolva uma função que recebe dois números inteiros não negativos(maiores ou iguais a zero) e realize a
// multiplicação deles.Porém, não utilize o operador de mutiplicação.
function multiplicar1(numero, multiplicador) {
  let resultado = 0;
  for (let i = 0; i < multiplicador; i++) {
    resultado += numero;
  }
  return resultado;
}
console.log(multiplicar1(5, 5)) // retornará 25
console.log(multiplicar1(0, 7)) // retornará 0


// Resolução 2 usando recursividade
function multiplicar2(numero, multiplicador) {
  if (numero === 0 || multiplicador === 0) return 0

  console.log('Multiplicar2: chamado')
  return multiplicador === 1 ? numero : numero + multiplicar2(numero, multiplicador - 1)
}
console.log(multiplicar2(2, 180)) // retornará 25
console.log(multiplicar2(5, 8)) // retornará 0


// Resolução 3, usando recursividade e garantindo que o multiplicador é o menor número,
// para reduzir a quantidade de chamadas recursivas
function multiplicar3(numero, multiplicador) {
  if (numero === 0 || multiplicador === 0) return 0

  // garantindo que o multiplicador é menor, para otimizar as chamadas recursivas
  if (multiplicador > numero) [numero, multiplicador] = [multiplicador, numero]

  function multiplicarRecursivamente(maior, menor) {
    console.log('Multiplicar3: chamado')
    return (
      menor === 1 ?
        maior :
        maior + multiplicarRecursivamente(maior, menor - 1)
    )
  }
  return multiplicarRecursivamente(numero, multiplicador)
}
console.log(multiplicar3(2, 180)) // retornará 25
console.log(multiplicar3(5, 8)) // retornará 0