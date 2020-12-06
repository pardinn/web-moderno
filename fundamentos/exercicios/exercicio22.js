// Criar uma função para calcular o valor a ser pago de anuidade de uma associação. A função recebe como
// parâmetro um inteiro que representa o mês (1 - janeiro, 2 - fevereiro…) que foi paga e o valor da anuidade. A
// anuidade deve ser paga no mês de janeiro. Por mês, é cobrado 5 % de juros (sob o regime de juros
// compostos). O retorno deve ser o valor a ser pago para o respectivo mês escolhido.
function calcularAnuidade(valorPrincipal, mes) {
  if (mes > 0 && mes < 13) {
    let atraso = mes - 1
    return (valorPrincipal * (1.05 ** atraso)).toFixed(2);
  } else {
    return 'Mês inválido.'
  }
}

console.log(calcularAnuidade(100, 0));
console.log(calcularAnuidade(100, 1));
console.log(calcularAnuidade(100, 2));
console.log(calcularAnuidade(100, 3));
console.log(calcularAnuidade(100, 4));
console.log(calcularAnuidade(100, 5));
console.log(calcularAnuidade(100, 6));
console.log(calcularAnuidade(100, 7));
console.log(calcularAnuidade(100, 8));
console.log(calcularAnuidade(100, 9));
console.log(calcularAnuidade(100, 10));
console.log(calcularAnuidade(100, 11));
console.log(calcularAnuidade(100, 12));