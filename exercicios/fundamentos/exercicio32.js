// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros
function mediaAritmetica(vetor) {
  let soma = 0;
  vetor.forEach((num) => {
    soma += num;
  })

  return soma / vetor.length;
}

console.log(mediaAritmetica([1, 2, 3, 4, 5]));