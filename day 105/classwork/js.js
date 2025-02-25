//1)

let nestedArray = [1, 2 [3, 4 [5, 6, [7, 8, [9, 10]]]]]

let flatArray = nestedArray.flat(1)

let fullyFlatArray = nestedArray.flat(Infinity)

function checkElement(array, value) {
    return array.includes(value)
}

function findIndexElement(array, value) {
    return array.indexOf(value)
}

function findLastIndexOfElement(array, value) {
    return array.lastIndexOf(value);
}

console.log(nestedArray)
console.log(flatArray)
console.log(fullyFlatArray)