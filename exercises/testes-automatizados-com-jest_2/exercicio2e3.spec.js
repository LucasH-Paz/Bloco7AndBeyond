const { test, expect, it } = require('@jest/globals');
const getUserName = require('./exercicio2e3');

describe('Exercicios 2 e 3', () => {
    it('testa se encontra o usuario', async () => {
        const result = await getUserName(4);
        expect(result).toEqual('Mark');
    });
    it('testa se exibe um erro caso não exita o usuario', async () => {
        try {
           await getUserName(3);
        } catch (erro) {
            expect(erro.error).toBe('User with 3 not found.');
        }
    });
});