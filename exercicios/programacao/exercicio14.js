/* Desenvolva uma função que recebe como parâmetro um objeto e retorne um array de arrays, em que cada
elemento é um array formado pelos pares chave/valor que corresponde a um atributo do objeto. Observe os
exemplos abaixo para um melhor entendimento:
Exemplos:
objetoParaArray({
  nome: "Maria",
  profissao: "Desenvolvedora de software"
}) // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
objetoParaArray({
  codigo: 11111,
  preco: 12000
}) // irá retornar [["codigo", 11111], ["preco", 12000]] */

function objetoParaArray1(objeto) {
  const resultado = [];
  for (let chave in objeto) {
    resultado.push([chave, objeto[chave]]);
  }
  return resultado;
}


function objetoParaArray2(objeto) {
  const chaves = Object.keys(objeto);
  const resultado = chaves.map(chave => [chave, objeto[chave]]);

  return resultado;

}

function objetoParaArray3(objeto) {
  return Object.entries(objeto);
}

const obj1 = {
  nome: "Maria",
  profissao: "Desenvolvedora de software"
}

const obj2 = {
  codigo: 11111,
  preco: 12000
}

const obj3 = {
  marca: "Music Man",
  modelo: "JP12"
}

console.log(objetoParaArray1(obj1)); // irá retornar [["nome", "Maria"], ["profissao", "Desenvolvedora de Software"]]
console.log(objetoParaArray2(obj2)); // irá retornar [["codigo", 11111], ["preco", 12000]]
console.log(objetoParaArray3(obj3)); // irá retornar [["marca", "Music Man"], ["modelo", "JP12"]]