// Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
function receberPrimeiroEUltimoElemento1(elementos) {
  const primeiroElemento = elementos[0];
  const ultimoElemento = elementos[elementos.length - 1];
  return [primeiroElemento, ultimoElemento];
}

function receberPrimeiroEUltimoElemento2(elementos) {
  const primeiroElemento = elementos.shift();
  const ultimoElemento = elementos.pop();
  return [primeiroElemento, ultimoElemento];
}

function receberPrimeiroEUltimoElemento3([primeiroElemento, ...elementosRestantes]) {
  const ultimoElemento = elementosRestantes.pop();
  return [primeiroElemento, ultimoElemento];
}

console.log(receberPrimeiroEUltimoElemento1([7, 14, "olá"])); // retornará [7, "olá"]
console.log(receberPrimeiroEUltimoElemento2([-100, "aplicativo", 16])); // retornará [-100, 16]
console.log(receberPrimeiroEUltimoElemento3([-100, "aplicativo", 16, "aqui"])); // retornará [-100, "aqui"]