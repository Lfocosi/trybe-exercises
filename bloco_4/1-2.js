let palavra = "arara";
let letras = palavra.length;

function palindromo(palavra, letras) {
    let pali = []
    let boo = "true"
    for (let le = 0; le < letras; le += 1) {
        pali[le] = palavra[letras - 1 - le]
    }
    console.log (pali)
    for (let co = 0; co < letras; co += 1) {
        if (pali[co] != palavra[co]) {
            boo = "false";
        }
        
    }
    console.log (boo)
}
palindromo(palavra, letras);