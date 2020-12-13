/* Quando temos um objeto e manipulamos seus atributos, adicionando, atualizando ou removendo-os, estamos
apenas modificando-o, mas, em essência, o objeto continua o mesmo, ou seja a sua referência de memória é a
mesma.
Num projeto que você está trabalhando, você foi designado a refatorar diversas funções para que façam cópias
de objetos e manipulem os dados dessas cópias, com o intuito de evitar efeitos indesejáveis em algumas
situações devido a referências a objetos. Abaixo, está a descrição de uma dessas funções.
Você escreverá uma função que recebe um objeto como primeiro parâmetro e, como segundo parâmetro, o nome
de uma propriedade contida nesse objeto. Em seguida, retorne uma cópia desse objeto sem a propriedade
especificada no segundo parâmetro.

removerPropriedade({ a: 1, b: 2 }, "a") // retornará {b: 2}
removerPropriedade({
  id: 20,
  nome: "caneta",
  descricao: "Não preenchido"
}, "descricao") // retornará {id: 20, nome: "caneta"}

💡 A fim de testar se o objeto retornado não é o mesmo que foi passado como parâmetro para a função
removerPropriedade, você poderá usar a função Object.is(), por exemplo:
Object.is(removerPropriedade(objeto, "descricao"), objeto)
Retornará false se o objeto não for o mesmo.
 */

function removerPropriedade1(objeto, propriedade) {
  const copia = Object.assign({}, objeto);
  delete copia[propriedade]

  console.log('Mesmo objeto? ' + Object.is(objeto, copia));
  return copia
}

function removerPropriedade2(objeto, propriedade) {
  const copia = { ...objeto }
  delete copia[propriedade]

  console.log('Mesmo objeto? ' + Object.is(objeto, copia));
  return copia
}

const obj1 = { a: 1, b: 2 }
const obj2 = { id: 20, nome: "caneta", descricao: "Não preenchido" }

console.log(removerPropriedade1(obj1, "a")); // retornará {b: 2}
console.log(removerPropriedade2(obj2, "descricao")); // retornará {id: 20, nome: "caneta"}