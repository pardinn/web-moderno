// Criar uma função que receba um array de números e retorne o menor número desse array.
function menorNumero1(numeros) {
  let menor = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] < menor) menor = numeros[i];
  }

  return menor;
}

function menorNumero2(numeros) {
  const menorNumero = (anterior, atual) => atual < anterior ? atual : anterior;
  return numeros.reduce(menorNumero);
}

function menorNumero3(numeros) {
  return Math.min(...numeros)
}

console.log(menorNumero1([10, 5, 35, 65])); // retornará 5
console.log(menorNumero2([5, -15, 50, 3])); // retornará -15
console.log(menorNumero3([8, 70, -7, 45])); // retornará -7