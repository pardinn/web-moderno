// Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
// quantidade especificada no parâmetro.
function simboloMais1(quantidade) {
  let resultado = '';
  for (let i = 0; i < quantidade; i++) {
    resultado += '+';
  }
  return resultado;
}

function simboloMais2(quantidade) {
  return Array(quantidade).fill('+').join('')
}

function simboloMais3(quantidade) {
  return '+'.repeat(quantidade)
}

console.log(simboloMais1(2)); // retornará "++"
console.log(simboloMais2(4)); // retornará "++++"
console.log(simboloMais3(7)); // retornará "++++"
