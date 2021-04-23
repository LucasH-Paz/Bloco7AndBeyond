const { test, expect, afterEach, it } = require('@jest/globals');
let { randomNumber } = require('./exercicio1');
const funcs4 = require('./exercicio4');

describe('Exercicio 1, 2 e 3', () => {

    randomNumber = jest.fn().mockReturnValue(10);

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

jest.mock('./exercicio4');

describe('Exercicio 4', () => {

    // O jest.mock não pode ser declarado dentro do escopo do describe

    funcs4.toUpper.mockImplementation(string => string.toLowerCase());
    funcs4.firstLetter.mockImplementation(string => string[string.length - 1]);
    funcs4.concat.mockImplementation((str1, str2, str3) => `${str1} ${str2} ${str3}`);

    it('testa se a função retorna string em minusculas', () => {
        expect(funcs4.toUpper('TesTeDaFUncaO')).toBe('testedafuncao');
        expect(funcs4.toUpper).toHaveBeenCalled();
    });
    it('testa se a funcao 2 retorna a ultima letra', () => {
        expect(funcs4.firstLetter('Ola')).toBe('a');
        expect(funcs4.firstLetter('tudo bem')).toBe('m');
        expect(funcs4.firstLetter).toHaveBeenCalled();
    });
    it('testa se a terceira funcao concatena 3 strings', () => {
        expect(funcs4.concat('oi', 'senhor', 'Lucas')).toBe('oi senhor Lucas');
    });
});

describe('Exercicio 5', () => {
    it('Testa se a funcao retorna ao comportamento original', () => {
       const upTest = jest.spyOn(funcs4, 'toUpper')
       .mockImplementation( str => str.toLowerCase());

       expect(upTest('UP')).toBe('up');

       funcs4.toUpper.mockRestore();
       // Para que o mockRestore funcione, a função deve ser mockada obrigatoriamente com
       // o spyOn, caso a mesma seja mockada com o jest.mock, o restore irá retornar undefined.
       // A solução para este problema seria separar os testes da questão 4 em um arquivo e da questão 5 em outro;
       expect(funcs4.toUpper('up')).toBe('UP');
    });
});




