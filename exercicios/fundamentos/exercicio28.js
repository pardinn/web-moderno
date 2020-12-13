// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.
function paresImpares(numeros) {
  let qtdPares = 0;
  let qtdImpares = 0;
  numeros.forEach((numero) => {
    if (numero % 2 == 0) {
      qtdPares++;
    } else {
      qtdImpares++;
    }
  });
  console.log(`${qtdPares} números pares. ${qtdImpares} números ímpares`)
}
paresImpares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]);