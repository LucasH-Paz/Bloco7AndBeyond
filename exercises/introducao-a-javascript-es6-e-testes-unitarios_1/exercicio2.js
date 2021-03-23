const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const organizaLista = lista => lista.sort(function(a, b){return a-b});

organizaLista(oddsAndEvens);
console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`);