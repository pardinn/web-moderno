// Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

function somarNumeros1(numeros) {
  return numeros.reduce((acumulador, atual) => acumulador + atual);
}

function somarNumeros2(numeros) {
  const quantidadeDeNumeros = numeros.length;

  return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros2(numeros.slice(1));
}

function somarNumeros3(numeros) {
  let soma = 0
  numeros.forEach((numero) => soma += numero);

  return soma;
}

console.log(somarNumeros1([10, 10, 10])); // retornará 30
console.log(somarNumeros2([15, 15, 15, 15])); // retornará 60
console.log(somarNumeros3([20, 20, 20, 20])); // retornará 80
