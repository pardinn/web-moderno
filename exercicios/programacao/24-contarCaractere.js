// Desenvolva uma função que recebe um caractere e uma string como parâmetros e retorne a quantidade de vezes
// que o caractere se repete na string. A função deverá ser case-sensitive, ou seja, irá diferenciar maiúsculas de
// minúsculas.
function contarCaractere1(caractereBuscado, frase) {
  let contador = 0;
  for (let i = 0; i < frase.length; i++) {
    if (frase.charAt(i) === caractereBuscado) {
      contador++;
    }
  }
  return contador;
}

function contarCaractere2(caractereBuscado, frase) {
  const buscarCaracteresCorrespondentes = caractere => caractere === caractereBuscado;
  return [...frase].filter(buscarCaracteresCorrespondentes).length
}
console.log(contarCaractere1("r", "A sorte favorece os audazes")); // retornará 2
console.log(contarCaractere2("c", "Conhece-te a ti mesmo")); // retornará 1
