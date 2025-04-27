//1)

let user = (name) => `Hello ${name}`

console.log(user('Avtandil'))



//2)

let fruits = ['apple', 'banana', 'grape']

let [fruit1, fruit2, fruit3] = fruits

console.log(fruit1)
console.log(fruit2)
console.log(fruit3)



//3)

let brand = 'Mercedes'
let model = 'Amg'

let car = {brand, model};
console.log(car)



//4)

const person = { name: 'Ana', age: 22 };
for (const key in person) {
    console.log(key, person[key]);
}



//5)

function greet(name = 'Avtandil') {
    console.log('Hello' + name)
}

greet()







