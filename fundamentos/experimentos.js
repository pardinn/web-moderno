let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variável maluca: sem var e let!
abc = 3 // não faça isso em casa!!!
console.log(global.abc)

// module.exports = { e = 456, f: false, g: 'teste' }