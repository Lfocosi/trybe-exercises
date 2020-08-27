let custo = 50;
let preco = 100;
let juros = custo * 0.2;
let vendidos = 1000;
let lucro = (preco - (custo + juros)) * vendidos

if (custo<0 || preco<0 || vendidos<0){
    console.log("erro");
}
else {
    console.log(lucro);
}