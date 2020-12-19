// Elabore uma função que receba um array de números e retorne um array que tenha todos os números que são
// pares e que também tenham índices pares.
// 💡 Lembre-se que um número é par porque é divisível por 2, ou seja, o resto da divisão da divisão dele por
// 2 é zero.

function receberSomenteOsParesDeIndicesPares1(numeros) {
  const resultado = [];
  numeros.forEach((numero, indice) => {
    if (numero % 2 === 0 && indice % 2 === 0) {
      resultado.push(numero);
    }
  });

  return resultado;
}

function receberSomenteOsParesDeIndicesPares2(numeros) {
  const resultado = [];
  for (let i = 0; i < numeros.length; i += 2) {
    const numeroPar = numeros[i] % 2 === 0
    if (numeroPar) {
      resultado.push(numeros[i]);
    }
  }

  return resultado;
}

function receberSomenteOsParesDeIndicesPares3(numeros) {
  return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0;
    const indicePar = indice % 2 === 0;

    return numeroPar && indicePar;
  })
}

console.log(receberSomenteOsParesDeIndicesPares1([1, 2, 3, 4, 6])); // retornará [6]
console.log(receberSomenteOsParesDeIndicesPares2([10, 70, 22, 43])); // retornará [10, 22]
console.log(receberSomenteOsParesDeIndicesPares3([4, 70, 28, 43, 40])); // retornará [4, 28, 40]