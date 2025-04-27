//1)

function sumNumber(... numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumber(1, 2, 3, 4, 5, 6, 7, 8, 9))



