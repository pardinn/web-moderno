// A fim de criar um mecanismo de busca para sua aplicação, você precisa iniciar criando uma função para
// identificar palavras semelhantes.
// Escreva uma função que recebe como primeiro parâmetro uma palavra e, como segundo parâmetro, um array de
// strings.A função deverá filtrar as palavras do array que contêm nelas a string do primeiro parâmetro.
function buscarPalavrasSemelhantes1(palavraBuscada, palavras) {
  let resultado = [];
  for (let palavra of palavras) {
    if (palavra.includes(palavraBuscada)) {
      resultado.push(palavra);
    }
  }
  return resultado
}

function buscarPalavrasSemelhantes2(palavraBuscada, palavras) {
  const palavrasSemelhantes = palavra => palavra.indexOf(palavraBuscada) >= 0;
  return palavras.filter(palavrasSemelhantes);
}

function buscarPalavrasSemelhantes3(palavraBuscada, palavras) {
  return palavras.filter(palavra => palavra.includes(palavraBuscada));
}

console.log(buscarPalavrasSemelhantes1("pro", ["programação", "mobile", "profissional"])); // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes2("pro", ["pragmático", "princípio", "esporádico", "problema"])); // retornará ["programação", "profissional"]
console.log(buscarPalavrasSemelhantes3("java", ["javascript", "java", "c++"])); // retornará ["javascript", "java"]
