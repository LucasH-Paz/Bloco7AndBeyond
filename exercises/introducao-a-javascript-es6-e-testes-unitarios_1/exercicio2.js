const fatorial = numero => {
    let resultado = 1;
  for (let index = 0; index < numero; index += 1 ) {
      resultado += resultado * index;
  }
  return resultado;
}

console.log(fatorial(5));