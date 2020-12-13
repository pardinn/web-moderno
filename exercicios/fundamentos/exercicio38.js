// Escreva uma função que receba dois parâmetros início e fim.Essa função deve imprimir todos os números
// ímpares que estão entre esses valores.Por padrão os valores devem ser 0 para início e 100 para fim.Atente
// para corrigir a ordem dos parâmetros caso a função receba o valor maior antes do menor
function impares(inicio = 0, fim = 100) {
  if (inicio > fim) {
    inicio = fim + inicio;
    fim = inicio - fim;
    inicio = inicio - fim;
  }

  for (inicio; inicio < fim; inicio++) {
    if (inicio % 2 != 0) {
      console.log(inicio);
    }
  }
}

impares(80, 100);
console.log('-----');
impares(95, 60);
console.log('-----');
impares(19, 3);
console.log('-----');
impares(80);