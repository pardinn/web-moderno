console.log(module.exports)
console.log(module.exports === this)
console.log(module.exports === exports)

// os três apontam para a mesma referência em memória
// this e exports são só duas referências que module.exports aponta
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

// trocou a referência, mas quem é exportado é o module.exports
exports = {
  nome: 'Teste'
}

console.log(module.exports)

module.exports = { publico: true }