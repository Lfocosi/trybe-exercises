let PX = "";
let px = PX.toLowerCase();

switch (px){
    case "peão":
        console.log("(|)Um frente");
    break;
    case "torre":
        console.log("(+)frente, tras, direita e esquerda");
    break;
    case "cavalo":
        console.log("(L)dois frente e um lado");
    break;
    case "bispo":
        console.log("(X)diagonais");
    break;
    case "rainha":
        console.log("(*)todas as direções");
    break;
    case "rei":
        console.log("(*)um em todas as direções");
    break;
    default:
        console.log("peça não encontrada");
}