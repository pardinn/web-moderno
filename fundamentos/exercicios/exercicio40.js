// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A
function conceituarNotas(notas) {
  let conceitos = [];
  notas.forEach((nota) => {
    if (nota >= 0 && nota <= 4.9) {
      conceitos.push({ nota: nota, conceito: 'D' });
    } else if (nota >= 5.0 && nota <= 6.9) {
      conceitos.push({ nota: nota, conceito: 'C' });
    } else if (nota >= 7.0 && nota <= 8.9) {
      conceitos.push({ nota: nota, conceito: 'B' });
    } else if (nota >= 9.0 && nota <= 10.0) {
      conceitos.push({ nota: nota, conceito: 'A' });
    } else {
      conceitos.push({ nota: nota, conteito: 'Nota inválida' });
    }
  })
  return conceitos;
}

let notas = [10, 13, 9, 8.2, 2.5, 7.7, 6.8, -1]
console.log(conceituarNotas(notas));