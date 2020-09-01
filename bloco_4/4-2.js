let array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function PM(array) {
    let maior = 0;
    let posição = ""
    for (let i = 0; i < array.length; i += 1) {
        if (array[i].length > maior){
            posição = array[i]
            maior = array[i].length;
        }
    }
    console.log (posição);
}
PM(array);