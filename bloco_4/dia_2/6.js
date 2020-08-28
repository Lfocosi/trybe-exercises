let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let num = 0
for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 == 1){
        num ++
    }
}
if (num > 0) {
    console.log(num)
}
else {
    console.log("nenhum valor impar encontrado")
}