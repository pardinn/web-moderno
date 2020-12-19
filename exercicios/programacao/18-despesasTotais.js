// Você está trabalhando numa aplicação pessoal de controle de despesas. Na tela principal dessa aplicação, é
// possível adicionar produtos ou serviços, informando nome, categoria e preço. Uma funcionalidade que você está
// desenvolvendo no momento é a de somar o total das despesas.
// Crie uma função que receba um array de produtos e retorne o total das despesas.
function despesasTotais1(produtos) {
  return produtos
    .map(item => item.preco)
    .reduce((acumulador, valorAtual) => acumulador + valorAtual);
}

function despesasTotais2(produtos) {
  const soma = (subtotal, itemAtual) => subtotal + itemAtual.preco;
  return produtos.reduce(soma, 0);
}

const produtos1 = [
  { nome: "Jornal online", categoria: "Informação", preco: 89.99 },
  { nome: "Cinema", categoria: "Entretenimento", preco: 150 },
];
const produtos2 = [
  { nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99 },
  { nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90 },
];

console.log(despesasTotais1(produtos1)); // retornará 239.99
console.log(despesasTotais2(produtos2)); // retornará 34599.89