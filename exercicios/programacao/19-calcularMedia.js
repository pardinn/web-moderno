// Numa aplicação Web de investimento financeiro da qual você faz parte da equipe de desenvolvimento, 
// pretende-se adicionar a funcionalidade de calcular a média de um conjunto de números informados pelo usuário.
// Com o intuito de realizar esse cálculo, crie uma função que receba um array com uma quantidade indeterminada
// de números e retorne a média simples desses números.
// 💡 A média simples é o resultado da soma de todos os números dividido pela quantidade de números.
function calcularMedia1(numeros) {
  const quantidadeDeNumeros = numeros.length;
  const somaTotal = numeros.filter((total, valorAtual) => total + valorAtual);
  return somaTotal / quantidadeDeNumeros;
}

function calcularMedia2(numeros) {
  const quantidadeDeNumeros = numeros.length;
  let somaTotal = 0

  for (let numero of numeros) {
    somaTotal += numero;
  }

  return somaTotal / quantidadeDeNumeros;
}

console.log(calcularMedia1([0, 10])); // retornará 5
console.log(calcularMedia2([1, 2, 3, 4, 5])); // retornará 3
