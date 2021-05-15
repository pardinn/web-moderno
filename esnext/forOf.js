for (let letra of 'Cod3r') {
  console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise'];

// 'for in' percorre índice
for (let i in assuntosEcma) {
  console.log(i);
}

// 'for of' percorre de valores
for (let assunto of assuntosEcma) {
  console.log(assunto);
}

const assuntosMap = new Map([
  ['Map', { abrodado: true }],
  ['Set', { abrodado: true }],
  ['Promise', { abrodado: false }],
])

for (let assunto of assuntosMap) {
  console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
  console.log(chave);
}

for (let valor of assuntosMap.values()) {
  console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl);
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra);
}