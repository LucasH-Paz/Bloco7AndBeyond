const { test, expect, afterEach, it } = require('@jest/globals');
let { randomNumber } = require('./exercicio1');

describe('Exercicio 1, 2 e 3', () => {

    randomNumber = jest.fn().mockReturnValue(10);
    afterEach(randomNumber.mockReset);

    test('testa se o mock da função esta funcionando', () => {
        expect(randomNumber()).toBe(10);
        expect(randomNumber).toHaveBeenCalled();
        expect(randomNumber).toHaveBeenCalledTimes(1);
    });
    test('Testa se a nova implementação usando divisão funciona', () => {
        randomNumber.mockImplementationOnce((a, b) => a / b);
        // randomNumber = jest.mockImplementation((a, b) => a / b);
        expect(randomNumber(10, 5)).toBe(2);
        expect(randomNumber(10, 5)).not.toBe(2);
    });
    test('Testa se a nova implementação usando multiplicação e dobro funciona', () => {
        randomNumber
            .mockImplementationOnce((a, b, c) => a * b * c)
            .mockImplementationOnce(a => a * 2);
        expect(randomNumber(10, 5, 2)).toBe(100);
        expect(randomNumber(10)).toBe(20);
    });
});




