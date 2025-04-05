function evenOrOdd(number) {
    if(number % 2 === 0) {
        return 'Even'
    }
    else {
        return 'Odd'
    }

}

let checkEvenOdd = function(number) {
    if(number % 2 === 0) {
        return 'Even'
    }
     else {
        return 'Odd'
    }
}

let arrowFunction = (number) => number % 2 === 0 ? 'Even' : 'Odd'


let user = Number(prompt('Enter number: '))



console.log(evenOrOdd)
console.log(checkEvenOdd)
console.log(arrowFunction)