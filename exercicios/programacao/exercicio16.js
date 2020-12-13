// A fim de manter o calendário anual ajustado com o movimento de translação da Terra, criou-se os anos bissextos,
// que têm 366 dias em vez dos 365 presentes nos anos normais.
// Para determinar se um ano é bissexto, é necessário saber se ele é multiplo de 4. Não pode ser múltiplo de 100,
// exceto se for também múltiplo de 400.
// Com isso em mente, desenvolva uma função que recebe um número correspondente a um ano e retorna se ele é
// bissexto ou não.
function checarAnoBissexto1(ano) {
  const divisivelPorQuatro = ano % 4 === 0
  const divisivelPorCem = ano % 100 === 0
  const divisivelPorQuatrocentos = ano % 400 === 0

  return (divisivelPorQuatro && !divisivelPorCem) || divisivelPorQuatrocentos;
}

function checarAnoBissexto2(ano) {
  //checagem indireta, validando se o mês de fevereiro do ano em questão tem 29 dias
  return new Date(ano, 1, 29).getDate() === 29
}

console.log(checarAnoBissexto1(2020)); // retornará true
console.log(checarAnoBissexto1(2100)); // retornará false, pois é múltiplo de 100 e não é múltiplo de 400
console.log(checarAnoBissexto2(2020)); // retornará true
console.log(checarAnoBissexto2(2100)); // retornará false, pois é múltiplo de 100 e não é múltiplo de 400