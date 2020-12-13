// Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas
// crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em
// quantos anos isso acontecerá. Utilize centímetros para as unidades de medida
function calcularCrescimento(crianca1, crianca2) {
  if (crianca1.altura == crianca2.altura) {
    if (crianca1.taxa > crianca2.taxa) {
      return 'A criança 1 ultrapassará a criança 2 em 1 ano.';
    } else if (crianca1.taxa < crianca2.taxa) {
      return 'A criança 2 ultrapassará a criança 1 em 1 ano.';
    } else {
      'As crianças tem iagual altura e taxa de crescimento';
    }
  } else {
    if (crianca1.altura > crianca2.altura) {
      if (crianca1.taxa >= crianca2.taxa) {
        return 'A criança 2 não ultrapassará a criança 1.';
      } else {
        return `A criança 2 ultrapassará a criança 1 em ${calcularTempo(crianca2, crianca1)} ano(s)`;
      }
    } else {
      if (crianca2.taxa >= crianca1.taxa) {
        return 'A criança 1 não ultrapassará a criança 2.';
      } else {
        return `A criança 1 ultrapassará a criança 2 em ${calcularTempo(crianca1, crianca2)} ano(s)`;
      }
    }
  }
}
function calcularTempo(criancaMenor, criancaMaior) {
  let qtdAnos = 0;
  while (criancaMenor.altura <= criancaMaior.altura) {
    criancaMenor.altura += criancaMenor.taxa;
    criancaMaior.altura += criancaMaior.taxa;
    qtdAnos++;
  }
  return qtdAnos;
}

console.log(calcularCrescimento({ altura: 150, taxa: 2 }, { altura: 130, taxa: 4 }));