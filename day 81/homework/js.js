//1)

function alertText (text) {
    if (text.length > 140)
       return text.slice(0 , 140)
    else {
        return text
    }
}

alertText();



//2)

function greetUser() {
    let name = prompt("Please enter your name in lowercase:");
    console.log(`Hello ${name.charAt(0).toUpperCase() + name.slice(1)}`);
}

greetUser();



//3)

let name1 = prompt("User 1, please enter your name:");
let name2 = prompt("User 2, please enter your name:");

if (name1.length > name2.length) {
    console.log("User 1's name is longer than User 2's name.");
} else if (name1.length < name2.length) {
    console.log("User 2's name is longer than User 1's name.");
} else {
    console.log("Both names are the same length.");
}



//4)

let num1 = parseFloat(prompt("User 1, please enter a number:"));
let num2 = parseFloat(prompt("User 2, please enter a number:"));

console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Remainder: " + (num1 % num2));
