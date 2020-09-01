let stringWord = "trybe";
let stringEnding = "be";
function verificaFimPalavra(stringWord, stringEnding) {
    let boo = "false"
    let fim1 = []
    let fim2 = []
    for (let troca1 = 0; troca1 < stringWord.length; troca1 += 1) {
        fim1[troca1] = stringWord[stringWord.length - 1 - troca1]
    }
    for (let troca2 = 0; troca2 < stringEnding.length; troca2 += 1) {
        fim2[troca2] = stringEnding[stringEnding.length - 1 - troca2]
    }
    for (let T = 0; T < stringEnding.length; T += 1) {
        if (fim1[T] == fim2[T]) {
            boo = "true"
        }
        else {
            boo = "false"
            break
        }
    }
    console.log (boo)
}
verificaFimPalavra(stringWord, stringEnding)