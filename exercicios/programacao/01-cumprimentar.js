// Crie uma função que retorna a string "Olá, " concatenada com um argumento text(a ser passado para a
// função) e com ponto de exclamação "!" no final.
function cumprimentar1(nome) {
  const saudacao = "Olá";
  return [saudacao, nome].join(', ').concat("!");
}

function cumprimentar2(nome) {
  return "Olá, " + nome + "!";
}

function cumprimentar3(nome) {
  return `Olá, ${nome}!`;
}

console.log(cumprimentar1("Leonardo")); // retornará "Olá, Leonardo!"
console.log(cumprimentar2("Maria")); // retornará "Olá, Maria!"
console.log(cumprimentar3("Pedro")); // retornará "Olá, Pedro!"
