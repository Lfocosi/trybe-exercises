let array = [2, 3, 6, 7, 10, 1];
function PM(array) {
    let maior = 0;
    let posição = 0
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] > maior){
            posição = i
            maior = array[i];
        }
    }
    console.log (posição);
}
PM(array);