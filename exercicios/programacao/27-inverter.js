// Desenvolva uma função que recebe um objeto como parâmetro e retorne um outro objeto que corresponde ao ao
// objeto recebido como parâmetro, porém com as posições das chaves e valores invertidas
function inverter1(objeto) {
  const objetoInvertido = {};
  Object.entries(objeto).forEach(parChaveValor => {
    const chave = 0,
      valor = 1

    objetoInvertido[parChaveValor[valor]] = parChaveValor[chave];
  });

  return objetoInvertido
}

function inverter2(objeto) {
  const parValorChave = parChaveValor => parChaveValor.reverse();
  const paresInvertidos = Object.entries(objeto).map(parValorChave);

  return Object.fromEntries(paresInvertidos);
}

console.log(inverter1({ a: 1, b: 2, c: 3 })); // retornará { 1: "a", 2: "b", 3: "c"}
console.log(inverter2({ a: 1, b: 2, c: 3 })); // retornará { 1: "a", 2: "b", 3: "c"}