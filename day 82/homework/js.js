//ამოცანა 1
const num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
const num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

console.log("რიცხვი 1 მეტია რიცხვი 2-ზე?", num1 > num2);
console.log("რიცხვი 1 ტოლია რიცხვი 2-ის?", num1 === num2);



//ამოცანა 2
let text = "გადაცმეული სტრინგი";
console.log("დიდი ასოებით:", text.toUpperCase());
console.log("პატარა ასოებით:", text.toLowerCase());



//ამოცანა 3: 
const currentYear = 2025; // შეცვალეთ შესაბამისი წლის მიხედვით
const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));
const birthYear = currentYear - age;

console.log(`თქვენ დაიბადეთ ${birthYear} წელს.`);



//ამოცანა 5

const num3 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
const num4 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));
const num5 = parseFloat(prompt("შეიყვანეთ მესამე რიცხვი:"));

const sum = num1 + num2 + num3;
const average = sum / 3;

console.log("ჯამი:", sum);
console.log("საშუალო:", average);

alert(`ჯამი: ${sum}`);
alert(`საშუალო: ${average}`);

