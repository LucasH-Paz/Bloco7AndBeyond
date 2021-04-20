const { test, describe, expect, it } = require("@jest/globals");

function encode(string) {
  let stringOut = [];
  let stringIn = string.split('');
  for (let index = 0; index < stringIn.length; index += 1) {
    switch (stringIn[index]) {
      case 'a':
        stringOut += '1';
        break;
      case 'e':
        stringOut += '2';
        break;
      case 'i':
        stringOut += '3';
        break;
      case 'o':
        stringOut += '4';
        break;
      case 'u':
        stringOut += '5';
        break;
      default:
        stringOut += stringIn[index];
    }
  }
  return stringOut;
}

function decode(stringBack) {
  let stringOut = [];
  let stringIn = stringBack.split('');
  for (let index = 0; index < stringIn.length; index += 1) {
    switch (stringIn[index]) {
      case '1':
        stringOut += 'a';
        break;
      case '2':
        stringOut += 'e';
        break;
      case '3':
        stringOut += 'i';
        break;
      case '4':
        stringOut += 'o';
        break;
      case '5':
        stringOut += 'u';
        break;
      default:
        stringOut += stringIn[index];
    }
  }
  return stringOut;
}

describe('Requisito 9', () => {
  test('verifica se as funcoes estao declaradas', () => {
    expect(typeof encode && typeof decode).toBe('function');
  });
  test('verifica se as vogais sao convertidas em numeros', () => {
    expect(encode('aeiou')).toEqual('12345');
  });
  it('verifica se não inverte consoantes', () => {
    expect(encode('plvr')).toBe('plvr');
  });
});