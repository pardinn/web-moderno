require('./global')

console.log(MinhaApp.saudacao());

MinhaApp.nome = 'Eita!';  //não vai mudar se usar Object.freeze
console.log(MinhaApp.nome);