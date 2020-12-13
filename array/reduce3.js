Array.prototype.reduce2 = function (callback, valorInicial) {
  let indiceInicial = valorInicial !== undefined ? 0 : 1;
  let acumulador = valorInicial !== undefined ? valorInicial : this[0];
  for (let i = indiceInicial; i < this.length; i++) {
    acumulador = callback(acumulador, this[i], i, this);
  }
  return acumulador;
}


const alunos = [
  { nome: 'João', nota: 7.3, bolsista: false },
  { nome: 'Maria', nota: 9.2, bolsista: false },
  { nome: 'Pedro', nota: 9.8, bolsista: false },
  { nome: 'Ana', nota: 8.7, bolsista: false },
];

// Desafio 1: Todos os alunos são bolsista?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista;
console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas, true));

// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista;
console.log(alunos.map(a => a.bolsista).reduce2(algumBolsista, true));

const soma = (total, valor) => total + valor;
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma, 21));