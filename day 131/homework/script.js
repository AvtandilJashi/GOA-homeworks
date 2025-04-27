/* 
Strict mode (მკაცრი რეჟიმი) არის JavaScript-ის რეჟიმი, რომელიც აუკრძალავს გარკვეულ არასწორ ქმედებებს, 
რათა თავიდან აიცილოთ შეცდომები და გაუმჯობესდეს შესრულება.
*/
/* 
Strict mode-ის მიზანია კოდის უსაფრთხოება და უფრო მკაფიო მახასიათებლების შექმა. 
ეს რეჟიმი აღინიშნება ისეთი ნივთებით, როგორიცაა არასახარბიელო ან უხარისხო კოდის გაუმჯობესება.
*/
/* 
Strict mode-ში არსებობს ორი ტიპი:
1. Global strict mode - როდესაც მთელი სკრიპტი მუშაობს strict mode-ში.
2. Function strict mode - როდესაც მხოლოდ კონკრეტული ფუნქცია მუშაობს strict mode-ში.
Strict mode აქტიურდება ან გამოყენებით "use strict"; სკრიპტზე ან ფუნქციაში.
*/

"use strict"; 

let x = 10;
let y = 20;

console.log(x);
console.log(y);

function myFunction() {
    "use strict"; 
    let z = 50;
    console.log(z);
}

myFunction();

"use strict";

let a = 5;
let b = 10;

function myStrictFunction() {
    "use strict"; 
    let myVar = 100;
}

myStrictFunction();

function functionOne() {
    "use strict"; 
    let varOne = 10;
}

function functionTwo() {
    let varTwo = 40; 
}

functionOne();
functionTwo();
