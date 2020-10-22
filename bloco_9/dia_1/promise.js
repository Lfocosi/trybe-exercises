let soma = 0;
const promise = new Promise((resolve, reject) => {
    let array = [];
    for (let numero = 0; numero < 10; numero += 1) {
        array.push(Math.round(Math.random() * 50));
    }
    for (let numero = 0; numero < 10; numero += 1) {
        array[numero] *= array[numero];
        soma += array[numero]
    }
    console.log(soma);
    if (soma > 8000) {
        return reject(console.log("É mais de oito mil! Essa promise deve estar quebrada!"));
    }
    let resultado = [];
    resultado.push(soma/2);
    resultado.push(soma/3);
    resultado.push(soma/5);
    resultado.push(soma/10);
    return resolve(console.log(resultado), func2(resultado));
});
function func2(params) {
    soma = 0;
    for (let index = 0; index < params.length; index += 1) {
        soma += params[index];
    }
    return console.log(soma);
}