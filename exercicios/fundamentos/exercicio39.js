// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar
function troca(vetorA, vetorB) {
  if (vetorA.length == vetorB.length) {
    for (let i = 0; i < vetorA.length; i++) {
      [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
    }
  } else {
    console.log('Vetores de tamanhos diferentes');
  }
  console.log('Novo vetor A: ' + vetorA);
  console.log('Novo vetor B: ' + vetorB);
}

let vetorA = [1, 4, 5, 80, 6, 3]
let vetorB = [0, 5, 3, 90, 4, 7]

troca(vetorA, vetorB);