{
    {
        {
            { 
                var sera = 'Será???'  //var só possui dois escopos. Escopo global ou escopo de funcao
                console.log(sera)
            }
        }
    }
}

console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)