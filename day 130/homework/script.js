const getFullName = (firstName, lastName) => firstName + " " + lastName;

const square = num => num * num;

const numbers = [1, 2, 3, 4, 5];
const [first, , , , last] = numbers;

const student = { name: 'Emma', age: 20 };
const { name: studentName, age: studentAge } = student;

const product = {
  id: 101,
  details: {
    name: "Laptop",
    price: 1200
  }
};
const { details: { name: productName, price: productPrice } } = product;

const car = { make: 'Toyota', model: 'Camry', year: 2020 };
for (let key in car) {
  console.log(key, car[key]);
}

const colors = ['red', 'green', 'blue'];
for (let color of colors) {
  console.log(color);
}

for (let char of "JavaScript") {
  console.log(char);
}

function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5));
console.log(multiply(5, undefined));
console.log(multiply(5, 3));

function getDefaultGreeting() {
  return "Hello";
}
function greet(message = getDefaultGreeting()) {
  return message;
}
console.log(greet());
console.log(greet("Hi"));

/* 
Arrow function არის ფუნქციის მოკლე ჩაწერის გზა JavaScript-ში. 
იგი გამოიყენება ფუნქციის გასამარტივებლად და კონტექსტის (this) სწორად მემკვიდრეობისთვის.
*/

/* 
Destructuring არის გზა, რომლითაც შეგვიძლია ავიღოთ კონკრეტული მნიშვნელობები მასივიდან ან ობიექტიდან 
მარტივი და გასაგები სინტაქსით.
*/

/* 
for...in გამოიყენება ობიექტის თვისებებზე (property) გასავლელად, 
ხოლო for...of გამოიყენება მასივებზე ან iterable ობიექტებზე თითოეული მნიშვნელობის გასავლელად.
*/

/* 
Object enhancement არის ობიექტის შექმნის პროცესი, როცა ცვლადების სახელები ემთხვევა 
ობიექტის key-ს და value-ს, რითაც კოდი ხდება მოკლე და სუფთა.
*/

/* 
Default parameter გამოიყენება ფუნქციაში, რათა ავტომატურად მიენიჭოს პარამეტრს მნიშვნელობა, 
თუ ფუნქციის გამოძახებისას ეს პარამეტრი არ გადაეცა ან undefined იყო.
*/
