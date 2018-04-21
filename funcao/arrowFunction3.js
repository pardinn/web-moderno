let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) 
comparaComThis(this) // este this = module.exports

const obj = {}

comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
comparaComThisArrow(this)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj) //arrow function prevalece sobre o bind
comparaComThisArrow(module.exports) 