// Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.
function segundoMaior1(numeros) {
  let indiceDoMaior = 0;
  let segundoMaior;

  numeros.forEach((numero, indice) => {
    if (numero > numeros[indiceDoMaior])
      indiceDoMaior = indice;
  });

  numeros.splice(indiceDoMaior, 1);
  segundoMaior = numeros[0];

  numeros.forEach(numero => {
    if (numero > segundoMaior)
      segundoMaior = numero;
  })

  return segundoMaior;
}

function segundoMaior2(numeros) {
  const maiorNumero = Math.max(...numeros);
  numeros = numeros.filter(numero => numero != maiorNumero);
  const segundoMaior = Math.max(...numeros);

  return segundoMaior;
}

function segundoMaior3(numeros) {
  const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA);
  const segundoMaior = numerosOrdenados[1];

  return segundoMaior;
}

console.log(segundoMaior1([12, 16, 1, 5])); // retornará 12
console.log(segundoMaior2([8, 4, 5, 6])); // retornará 6
console.log(segundoMaior3([7, 20, 8, 90])); // retornará 20
