const { expect } = require('@jest/globals');
const uppercase = require('./exercicio1');

describe('Teste usando Callback', () => {
    test('testa a funcao', () => {
        uppercase('para teste', (str) => {
            expect(str).toBe('PARA TESTE');
        });
    });
});