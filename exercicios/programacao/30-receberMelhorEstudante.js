// Elabore uma função que recebe um objeto com estudantes e suas notas. As notas de cada estudante estarão num
// array, conforme exemplo abaixo. Você deverá calcular a média da nota de cada aluno e retornar um objeto com
// os atributos nome e media, que indica o aluno que teve o melhor desempenho nas notas.
const somar = array => array.reduce((acumulador, atual) => acumulador + atual, 0);
const calcularMedia = array => somar(array) / array.length;

function receberMelhorEstudante(estudantes) {
  const estudantesComMedia = Object.entries(estudantes).map((estudante) => {
    const chave = 0;
    const valor = 1;

    return { nome: estudante[chave], media: calcularMedia(estudante[valor]) };
  });

  const estudantesOrdenados = estudantesComMedia.sort((estudanteA, estudanteB) => estudanteB.media - estudanteA.media);
  const melhorEstudante = estudantesOrdenados[0];

  return melhorEstudante;
}

console.log(receberMelhorEstudante({
  Joao: [8, 7.6, 8.9, 6], // média 7.625
  Mariana: [9, 6.6, 7.9, 8], // média 7.875
  Carla: [7, 7, 8, 9] // média 7.75
})); // retornará { nome: "Mariana", media: 7.875 }