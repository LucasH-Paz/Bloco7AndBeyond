const { test, expect } = require('@jest/globals');
const sum = require('./exercicio1');

describe('Funcao Soma', () => {
    test('verifica a soma', () => expect(sum(1, 2)).toBe(3));
    test('verifica se exibe erro caso parametros nao forem numros', () => {
        expect(() => { sum('1', 2) }).toThrowError(new Error('parameters must be numbers'));
    });
});