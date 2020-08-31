let n = 5;
let linha = ""
let nl = (n+1)/2
if (n > 1 && n % 2 == 1){
    for (let p = 0; p < n; p += 1) {
        if ((p+1)%2 == 1){
            linha = "";
            for (let e = 0; e < (nl - 1); e++) {
                linha += " ";
            }
            for (let a = -1; a < p; a += 1) {
                linha += "*"
            }
            console.log(linha)
            nl -= 1
        }
    }
}