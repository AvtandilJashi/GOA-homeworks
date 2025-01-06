// რიცხვის შემოწმება: ლუწი თუ კენტი
function checkNumber(number) {
    if (number % 2 === 0) {
        console.log("რიცხვი არის ლუწი");
    } else {
        console.log("რიცხვი არის კენტი");
    }
}

// ტემპერატურის შემოწმება: ცივი, ზომიერი თუ ცხელი
function checkTemperature(temperature) {
    if (temperature <= 0) {
        console.log("ცივი");
    } else if (temperature <= 25) {
        console.log("ზომიერი");
    } else {
        console.log("ცხელი");
    }
}

// სკოლის შეფასების სისტემა
function checkGrade(grade) {
    if (grade >= 90) {
        console.log("A");
    } else if (grade >= 80) {
        console.log("B");
    } else if (grade >= 70) {
        console.log("C");
    } else if (grade >= 60) {
        console.log("D");
    } else {
        console.log("F");
    }
}



//FINISH
console.log("გთხოვთ, შეიყვანოთ რიცხვი, ტემპერატურა და ქულა");

const number = parseInt(prompt("შეიყვანეთ რიცხვი: "));
checkNumber(number);

const temperature = parseFloat(prompt("შეიყვანეთ ტემპერატურა ცელსიუსში: "));
checkTemperature(temperature);

const grade = parseInt(prompt("შეიყვანეთ ქულა (0-100): "));
checkGrade(grade);
