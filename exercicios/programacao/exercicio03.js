// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um
// funcionário num mês, e o quanto ele recebe por hora. O retorno da função deve ser a string "Salário igual a R$
// X", em que X é o quanto o funcionário ganhou no mês.
function exibirSalario(horasTrabalhadas, salarioHora) {
  const salario = salarioHora * horasTrabalhadas;
  return `Salário igual a R$ ${salario.toFixed(2).replace('.', ',')}`;
}

console.log(exibirSalario(150, 40.5)) // retornará "Salário igual a R$ 6075"


// No PDF de respostas, o desafio pede calculo de salário líquido. Decidi incorporar os dois
// Desenvolva uma função que recebe dois parâmetros, um é a quantidade de horas trabalhadas por um funcionário
// num mês, e o quanto ele recebe por hora.A função deverá calcular o salário líquido mensal do funcionário, que é
// da quantidade de horas trabalhadas no mês multiplicada pelo valor da sua hora.Desse valor, deve ser subtraído
// 30 %, relativo a impostos.

function calcularSalarioBrutoELiquido(horasTrabalhadas, ganhoHora) {
  const impostos = 0.3
  const salarioBruto = horasTrabalhadas * ganhoHora;
  const salarioLiquido = salarioBruto * (1 - impostos);
  const formatarSalario = salario => salario.toFixed(2).replace('.', ',');

  return `Salário bruto: R$ ${formatarSalario(salarioBruto)}. Salário líquido: R$ ${formatarSalario(salarioLiquido)}`;
}

console.log(calcularSalarioBrutoELiquido(150, 40.5)) // retornará "Salário igual a R$ 6075"
