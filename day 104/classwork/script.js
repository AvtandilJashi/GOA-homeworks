//1)

let fruits = ['apple', 'orange', 'banana', 'watermalon', 'melon']

let citrus = fruits.slice(1, 3);

fruits.splice(-2, 2, 'grape');

let allFruit = fruits.join('-')



console.log(fruits)
console.log(citrus)
console.log(allFruit)