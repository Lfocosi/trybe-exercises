let N = 5;
function PM(N) {
    let soma = 0
    for (let i = 1; i < N + 1; i += 1) {
        soma += i
    }
    console.log (soma);
}
PM(N);