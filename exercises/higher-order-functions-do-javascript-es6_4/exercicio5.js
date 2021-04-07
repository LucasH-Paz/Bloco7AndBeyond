
const assert = require('assert');

const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
    const times = (array) => array.reduce((acc, crr) => (crr === 'a' || crr === 'A') ? acc += 1 : acc, 0);
    return names.reduce((showTimes, nome) => showTimes += times(nome.split('')), 0);
}

assert.deepStrictEqual(containsA(), 20);