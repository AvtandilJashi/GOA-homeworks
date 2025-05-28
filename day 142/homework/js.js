let score = 0;

function increaseScore() {
  score += 10;
}

increaseScore();
increaseScore();

console.log(score);

function secretCode() {
  let code = '1234';
}

secretCode();

try {
  console.log(code);
} catch (e) {
  console.log("Error:", e.message);
}

let name = "World";

function greet() {
  let name = "Alice";
  console.log(name);
}

greet();
console.log(name);

function counterGame() {
  let counter = 0;
  counter++;
  console.log(counter);
}

counterGame();
counterGame();

function carelessAssign() {
  globalVar = 99;
}

carelessAssign();
console.log(globalVar);

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

console.log(add(4, 6));
console.log(subtract(10, 3));

function log(msg) {
  console.log(msg);
}

log("Logger test");

function createUser(name) {
  console.log(`User ${name} created.`);
}

function deleteUser(id) {
  console.log(`User with ID ${id} deleted.`);
}

createUser("John");
deleteUser(77);
