// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console
function contarNegativos(vetor) {
  let count = 0
  vetor.forEach((num) => {
    if (num < 0) {
      count++;
    }
  })
  console.log(count);
}

contarNegativos([-1, 0, - 5, -8, 1, 65, 6, -3]);