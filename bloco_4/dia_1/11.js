let salarioB = 3000.00
let INSS = 0
let IR = 0
let salarioL = 0


if (salarioB <= 1903.98){
    INSS = salarioB * 0.08;
}
else if (salarioB <= 2594.92){
    INSS = salarioB * 0.09;
}
else if (salarioB <= 5189.82){
    INSS = salarioB * 0.11;
}
else if (salarioB > 5189.82){
    INSS = 570.88;
}


salarioB -= INSS;


if (salarioB<=1903.98){
    IR = 0;
}
else if (salarioB<=2826.65){
    IR = (salarioB * 0.075) - 142.80;
}
else if (salarioB<=3751.05){
    IR = (salarioB * 0.15) - 354.80;
}
else if (salarioB<=54664.68){
    IR = (salarioB * 0.225) - 636.13;
}
else if (salarioB>54664.68){
    IR = (salarioB * 0.275) - 869.36;
}


salarioL = salarioB - IR

console.log (salarioL)