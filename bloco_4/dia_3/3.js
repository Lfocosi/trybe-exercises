let n = 5;
let linha = ""
if (n > 1){
    for (let p = 0; p < n; p += 1) {
        linha = "";
        for (let e = 1; e < (n - p); e++) {
            linha += " ";
        }
        for (let a = -1; a < p; a += 1) {
            linha += "*"
        }
        console.log(linha)
    }
}
