const primeiroElemento = (arrayOuString) => arrayOuString[0];
const letraMinuscula = (letra) => letra.toLowerCase();

new Promise(function (cumprirPromessa) {
  cumprirPromessa(['Ana', 'Bia', 'Carlos', 'Daniel']);
})
  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log)