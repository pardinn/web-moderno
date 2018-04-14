function teste1(num) {
    if (num > 7)
        console.log(num)
    console.log('final')

}

teste1(8)
teste1(6)

function teste1(num) {
    if (num > 7); { // cuidado com ';', não usar com estruturas de controle 
        console.log(num)
    }
}

teste1(8)
teste1(6)