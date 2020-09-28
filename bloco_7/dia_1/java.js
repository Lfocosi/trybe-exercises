function fatorial(numero) {
  let resposta = 1;
  for (let num = numero; num > 1; num -= 1) {
    resposta *= num;
  }
  return resposta;
}

function maiorpalavra(frase) {
  let resposta = ""
  for (let numpalavra = 0; numpalavra < frase.split(' ').length; numpalavra += 1) {
    if (resposta.length < frase.split(' ')[numpalavra].length)
    resposta = frase.split(' ')[numpalavra];
  }
  return resposta;
}