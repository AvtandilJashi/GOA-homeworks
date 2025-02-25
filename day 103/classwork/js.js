//1)

let array1 = [1, 2, 3, 4, 5]
let array2 = [6, 7, 8, 9, 10]

concatArray = array1.concat(array2)

concatArray.copyWithin(9, 0, 2)

concatArray.fill(0, concatArray.length - 3);

let lastElement = concatArray.pop();

console.log(concatArray)