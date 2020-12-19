// Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
// que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
// têm a quantidade de dígitos indicada pelo segundo parâmetro.
function filtrarPorQuantidadeDeDigitos1(numeros, digitosEsperados) {
  let resultado = [];
  for (let numero of numeros) {
    const quantidadeDeDigitos = String(numero).length
    if (quantidadeDeDigitos === digitosEsperados) {
      resultado.push(numero)
    }
  }
  return resultado;
}

function filtrarPorQuantidadeDeDigitos2(numeros, digitosEsperados) {
  return numeros.filter((numero) => {
    const quantidadeDeDigitos = String(numero).length;
    return quantidadeDeDigitos === digitosEsperados
  });
}

console.log(filtrarPorQuantidadeDeDigitos1([38, 2, 365, 10, 125, 11], 2)); // retornará [38, 10, 11]
console.log(filtrarPorQuantidadeDeDigitos2([5, 9, 1, 125, 11], 1)); // retornará [5, 9, 1]
