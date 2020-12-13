// Um funcionário irá receber um aumento de acordo com o seu plano de trabalho, conforme a tabela abaixo:
// | Plano | Aumento |
// |   A   |   10 %  |
// |   B   |   15 %  |
// |   C   |   20 %  |
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.
function calcularAumento(plano, salario) {
  switch (plano) {
    case 'A':
      return `R$ ${salario * 1.1}`;
    case 'B':
      return `R$ ${salario * 1.15}`;
    case 'C':
      return `R$ ${salario * 1.2}`;
    default:
      return 'Plano inválido';
  }
}

console.log(calcularAumento("A", 2000));
console.log(calcularAumento("B", 2000));
console.log(calcularAumento("C", 2000));
console.log(calcularAumento("D", 2000));