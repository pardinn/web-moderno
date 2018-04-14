const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))  // não retorna erro
console.log(escola.charCodeAt(3))  // retorna codigo unicode
console.log(escola.indexOf('3'))

console.log(escola.substring(1))
console.log(escola.substring(0, 3))

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola ' + escola + '!')
console.log(escola.replace(3, 'e'))
console.log(escola.replace(/\d/, 'e'))
console.log(escola.replace(/\w/, 'e'))
console.log(escola.replace(/\w/g, 'e'))

console.log('Ana,Maria,Pedro'.split(','))