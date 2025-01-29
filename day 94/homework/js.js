//1)

function isTriangle(a, b, c) {
    return (a + b > c && b + c > a && c + a > b);
}

console.log(isTriangle(3, 4, 5)); 
console.log(isTriangle(1, 2, 3)); 



//2)

const gmail = prompt("გთხოვთ, შეიყვანოთ თქვენი ელფოსტა:");
if (gmail) {
    console.log("Access granted");
} else {
    console.log("გთხოვთ, შეიყვანოთ ელფოსტა!");
}



//3)

const num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი:"));
const num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი:"));

if (num1 === num2) {
    console.log("რიცხვები ტოლია");
} else if (num1 > num2) {
    console.log(`${num1} უფრო დიდია ვიდრე ${num2}`);
} else {
    console.log(`${num1} უფრო მცირეა ვიდრე ${num2}`);
}



//4)

const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));
const gender = prompt("შეიყვანეთ თქვენი სქესი (მამაკაცი/ქალი):").toLowerCase();
const income = parseFloat(prompt("შეიყვანეთ თქვენი შემოსავალი ლარში:"));

if (age < 18) {
    console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
} else {
    if (gender === "ქალი") {
        if (income > 5000) {
            console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
        } else if (income > 3000) {
            console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
        } else {
            console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        }
    } else if (gender === "მამაკაცი") {
        if (income > 6000) {
            console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
        } else if (income > 4000) {
            console.log("შემოსავალი სტაბილურია");
        } else {
            console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        }
    } else {
        console.log("გთხოვთ, სწორად მიუთითოთ სქესი (მამაკაცი/ქალი)");
    }
}



//5)

switch (true) {
    case (age < 18):
        console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
        break;
    case (gender === "ქალი"):
        switch (true) {
            case (income > 5000):
                console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
                break;
            case (income > 3000):
                console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
                break;
            default:
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        }
        break;
    case (gender === "მამაკაცი"):
        switch (true) {
            case (income > 6000):
                console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
                break;
            case (income > 4000):
                console.log("შემოსავალი სტაბილურია");
                break;
            default:
                console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        }
        break;
    default:
        console.log("გთხოვთ, სწორად მიუთითოთ სქესი (მამაკაცი/ქალი)");
}



//6)

const userAge = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"));
const examScore = parseInt(prompt("შეიყვანეთ გამოცდის შეფასება (0-100):"));

const result = userAge >= 18 
    ? (examScore > 50 ? "თქვენ წარმატებული ხართ" : "გჭირდებათ მეტი სწავლა")
    : "👶 შენც ბავშვი ხარ, მაგრამ შეგიძლია წარმატებას მიაღწიო";

console.log(result);



//7)

let sum = 0;

for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
        sum += i;
    }
}

console.log("მარტივი რიცხვების ჯამი:", sum);



//8)

let num = 2;
let totalSum = 0;

while (num <= 100) {
    let isPrime = true;
    let divisor = 2;
    
    while (divisor < num) {
        if (num % divisor === 0) {
            isPrime = false;
            break;
        }
        divisor++;
    }

    if (isPrime) {
        console.log(num);
        totalSum += num;
    }

    num++;
}

console.log("მარტივი რიცხვების ჯამი:", totalSum);



//9)

for (let i = 1; i <= 50; i++) {
    if (i === 25) {
        continue; 
    }
    if (i % 2 === 0) {
        console.log(i); 
    }
}
