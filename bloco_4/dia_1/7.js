let nota = 100

switch (nota){
    case (nota>90):
        console.log("A");
    break;
    case (nota>80):
        console.log("B");
    break;
    case (nota>70):
        console.log("C");
    break;
    case (nota>60):
        console.log("D");
    break;
    case (nota>50):
        console.log("E");
    break;
    case (nota<50):
        console.log("F");
    break;
    case (nota>100):
        console.log("erro");
    break;
    case (nota<0):
        console.log("erro");
    break;
}