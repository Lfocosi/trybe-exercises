let array = [2, 3, 2, 5, 8, 2, 3];
function MM(array) {
    let maior = 0;
    let numero = 0;
    let repetição = 0
    for (let i = 0; i < array.length; i += 1) {
        for (let j = 0; j < array.length; j += 1) {
            if (array[i] == array[j]) {
                repetição +=1
            }
        }
        if (repetição > maior){
            maior = repetição
            numero = array[i]
        }
        repetição = 0
    }
    console.log (numero);
}
MM(array);