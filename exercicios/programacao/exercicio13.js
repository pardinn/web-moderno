// Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
// array recebido como parâmetro.
function filtrarNumeros1(array) {
  return array.filter((item) => typeof item === "number");
}

function filtrarNumeros2(elementos) {
  const resultado = []
  for (let item of elementos) {
    if (typeof item === "number") {
      resultado.push(item);
    }
  }
  return resultado
}

console.log(filtrarNumeros1(["Javascript", 1, "3", "Web", 20])); // retornará [1, 20]
console.log(filtrarNumeros2(["a", "c"])); // retornará []