const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de Lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}',

]

const paraObjeto = string => JSON.parse(string);
const apenasPreco = produto => produto.preco

//Retornar um array apenas com os preços
const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)