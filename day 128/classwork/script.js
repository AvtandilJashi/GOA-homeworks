//Codewars 1
//Small enough? - Beginner

function smallEnough(array, limit) {
    return array.every(num => num <= limit);
}



//Codewars 2
//Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
    numbers.sort((a, b) => a - b);
    return numbers[0] + numbers[1];
}
  
  