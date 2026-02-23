// Faça uma função que recebe a base e a altura de um triângulo e retorne a área desse triângulo.A precisão deverá
// ser de duas casas decimais, arredondando se necessário.
// 📕 Obs: a fórmula para calcular a área de um triângulo é (base x altura) / 2
function areaDoTriangulo(base, altura) {
  const area = (base * altura) / 2;
  return area.toFixed(2);
}

console.log(areaDoTriangulo(10, 15)); // retornará "75,00"
console.log(areaDoTriangulo(7, 9)); // retornará "31,50"
console.log(areaDoTriangulo(9.25, 13.1)); // retornará "60.59"
