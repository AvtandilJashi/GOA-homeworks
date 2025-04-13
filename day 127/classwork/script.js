//1)

let numbers = [1, 2, 3,]
let [num1, num2, num3] = numbers

console.log(num1)
console.log(num2)
console.log(num3)



let text = ['BMW', 'BENTLEY', 'OPEL']
let [text1, text2, text3] = text

console.log(text1)
console.log(text2)
console.log(text3)



let boolean = [false, true, false]
let [boolean1, boolean2, boolean3] = boolean

console.log(boolean1)
console.log(boolean2)
console.log(boolean3)



//2)

let me = {
    name: 'Avtandil',
    lastName: 'Jashi',
    age: 14,
}
let {name, lastName, age} = me

console.log(name)
console.log(lastName)
console.log(age)


let car = {
    brand: 'BENTLEY',
    year: 2020,
    model: 'Continental GT'
}
let {brand, year, model} = car

console.log(brand)
console.log(year)
console.log(model)

