//1)

function loveCalculate(name1, name2) {
   let calculateLove = Math.floor(Math.random() * 100);

   alert(`${name1} and ${name2}, your love perctange is ${lovePercentage}%`);
}

let firstName = prompt("შეიყვანეთ პირველი სახელი:");
let secondName = prompt("შეიყვანეთ მეორე სახელი:");

loveCalculate(firstName, secondName);
