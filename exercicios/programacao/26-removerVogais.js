// Desenvolva uma função que receba uma frase como parâmetro e retorne essa string somente 
// com as consoantes, ou seja, sem as vogais.
function removerVogais1(frase) {
  const vogais = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  vogais.forEach(vogal => frase = frase.replace(vogal, ''));
  return frase;
}

function removerVogais2(frase) {
  return frase.replace(/[aeiou]/ig, '');
}

console.log(removerVogais1("Cod3r")); // retornará "Cd3r"
console.log(removerVogais1("Fundamentos")); // retornará "Fndmnts"
