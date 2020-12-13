// Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números
// deste vetor estão no intervalo[10, 20](repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos
// deles estão fora do intervalo, escrevendo estas informações
function verificaIntervalo(vetorNumeros) {
  let dentro = 0;
  let fora = 0;
  vetorNumeros.forEach((numero) => {
    if (numero >= 10 && numero <= 20) {
      dentro++;
    } else {
      fora++
    }
  })
  console.log(`${dentro} números dentro do intervalo. ${fora} números fora do intervalo.`)
}

verificaIntervalo([1, 2, 5, 8, 10, 11, 50, 22, 30, 40, 20, 19])