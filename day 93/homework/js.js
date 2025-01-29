//1)

const name = prompt("შეიყვანეთ თქვენი სახელი:");
const age = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"), 10);
const distance = parseFloat(prompt("რამდენი კმ-ით დაშორებულია თქვენი სამუშაო ადგილი?"));
const workDays = parseInt(prompt("კვირაში რამდენ დღეს მუშაობთ? (0-7)"), 10);

if (isNaN(age) || isNaN(distance) || isNaN(workDays) || workDays < 0 || workDays > 7) {
    console.log("გთხოვთ, შეიყვანოთ ვალიდური მონაცემები.");
} else {
    console.log(`გამარჯობა, ${name}!`);

    if (age < 16) {
        console.log("გთხოვთ, მოითხოვოთ გამგზავრების ნებართვა უფროსისგან.");
    } else if (age >= 16 && age < 65) {
        if (distance >= 0 && distance < 5) {
            console.log("რეკომენდირებული ტრანსპორტი: ველოსიპედი.");
        } else if (distance >= 5 && distance < 20) {
            console.log("რეკომენდირებული ტრანსპორტი: მანქანა.");
        } else {
            console.log(" რეკომენდირებული ტრანსპორტი: მატარებელი.");
        }
    }

    if (workDays >= 5) {
        console.log("რეკომენდაცია: შეიძლება სარგებლობდეთ ტრანსპორტის შეღავათებით.");
    }
}



//2)

const userName = prompt("შეიყვანეთ თქვენი სახელი:");
const userAge = parseInt(prompt("შეიყვანეთ თქვენი ასაკი:"), 10);
const dailyRun = parseFloat(prompt("რამდენ კმ-ია თქვენი ყოველდღიური სირბილი?"));
const trainingDays = parseInt(prompt("კვირაში რამდენ დღეს ვარჯიშობთ? (0-7)"), 10);

if (isNaN(userAge) || isNaN(dailyRun) || isNaN(trainingDays) || trainingDays < 0 || trainingDays > 7) {
    console.log("გთხოვთ, შეიყვანოთ ვალიდური მონაცემები.");
} else {
    console.log(`გამარჯობა, ${userName}!`);

    if (userAge < 16 || userAge > 60) {
        console.log("გთხოვთ, გაიაროთ ექიმის კონსულტაცია.");
    }

    const weeklyRun = dailyRun * trainingDays;
    console.log(`თქვენი ყოველკვირეული გაშვების საერთო მანძილი: ${weeklyRun} კმ`);

    if (weeklyRun < 20) {
        console.log("შესაძლებელია მეტი ვარჯიში.");
    }
}
