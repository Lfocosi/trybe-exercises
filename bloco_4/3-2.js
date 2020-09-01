let array = [2, 4, 6, 7, 10, 0, -3];
function MM(array) {
    let maior = 100000;
    let posição = 0
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] < maior){
            posição = i
            maior = array[i];
        }
    }
    console.log (posição);
}
MM(array);