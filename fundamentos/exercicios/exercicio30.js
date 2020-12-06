// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.
function maiorMenor(vetor) {
  let maior = vetor[0];
  let menor = vetor[0];
  for (let i = 1; i < vetor.length; i++) {
    if (maior < vetor[i]) {
      maior = vetor[i];
    } else if (menor > vetor[i]) {
      menor = vetor[i];
    }
  }
  console.log(`${maior} é o maior número. ${menor} é o menor número`);
}

maiorMenor([0, 1, 5, 100, 50, 280, 200, 6])
maiorMenor([250, 0, 1, 5, 100, 50, 280, 200, 300])
maiorMenor([-5, 250, 0, 1, 5, 100, 50, 280, 200, 300])