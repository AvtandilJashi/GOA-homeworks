const person = {
  "name": "John",
  "age": 30,
  "city": "London",
  "hobbies": ["reading", "traveling"]
};

console.log(person.name);
console.log(person["age"]);
console.log(person.city);

const jsonString = '{"brand":"Toyota","model":"Corolla"}';
const car = JSON.parse(jsonString);
console.log(car.brand);
console.log(car.model);

const obj = {
  make: "Tesla",
  year: 2022,
  color: "red"
};
const jsonObj = JSON.stringify(obj);
console.log(jsonObj);

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 22 }
];
for (const user of users) {
  console.log(user.name, user.age);
}
