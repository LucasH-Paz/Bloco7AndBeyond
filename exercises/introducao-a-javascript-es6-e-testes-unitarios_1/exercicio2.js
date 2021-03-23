const fatorial = numero => {
    let resultado = 1;
    for (let index = 0; index < numero; index += 1) {
        resultado += resultado * index;
    }
    return resultado;
}

console.log(fatorial(3));

const maiorPalavra = string => string.split(' ').sort((palavra1, palavra2) => palavra2.length - palavra1.length)[0];
// separa string em palvras a cada espaço -> organizar as palavras em ordem decrescente ->
// Retorna primeiro valor do array (Maior palavra)
// a função dentro do sort compara palavra a palavra e as organiza (Analise Combinatória)

console.log(maiorPalavra("Antônio foi no banheiro e não sabemos o que aconteceu"));