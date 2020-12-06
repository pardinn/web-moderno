// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.
function multiplicaTodos(vetor, multiplicador) {
  let final = [];
  vetor.forEach((num) => {
    final.push(num * multiplicador);
  });
  console.log(final)
}
function multiplicaMultiplos(vetor, multiplicador) {
  let final = [];
  vetor.forEach((num) => {
    final.push(num > 5 ? num * multiplicador : num);
  });
  console.log(final)
}

let vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let multiplicador = 2
multiplicaTodos(vetor, multiplicador)
multiplicaMultiplos(vetor, multiplicador)