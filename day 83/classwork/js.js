//დაწერეთ პროგრამა, რომელიც მომხმარებელს მოსთხოვს ასაკის შეყვანას. თუ შემოტანილი ასაკი მეტია 5 ზე, მაშინ უნდა გამოიტანოს 'შენ ხარ ბავშვი', თუ ასაკი მეტია 12 - ზე, მაშინ უნდა გამოიტანოს, 'შენ ხარ თინეიჯერი/მოზარდი', თუ ასაკი მეტია 18 - ზე, მაშინ უნდა გამოიტანოს, 'შენ ხარ სრულწოვანი', თუ ასაკი მეტია 80 - ზე, მაშინ უნდა გამოიტანოს, 'დაბერდი ძმაო'.

function ageCalculate (age) {
    if (age > 5) {
        return 'შენ ხარ ბავშვი'
    }
    else if (age > 12) {
        return 'შენ ხარ თინეიჯერი '
    }
    else if (age > 18) {
        return 'შენ ხარ სრულწლოვანი'
    }
    else if (age > 80) {
        return 'დაბერდი ძმაო'
    }
    else {
        return 'მალე მოკვდები'
    }
}

ageCalculate();



//კალკულატორი

function calculator() {
    const num1 = parseFloat(prompt("შეიყვანეთ პირველი რიცხვი: "));
    const num2 = parseFloat(prompt("შეიყვანეთ მეორე რიცხვი: "));
    const operation = prompt("აირჩიეთ ოპერაცია (+, -, *, /): ");

    if (isNaN(num1) || isNaN(num2)) {
        alert("შეცდომა: დარწმუნდით, რომ შეიყვანეთ რიცხვები.");
        return;
    }

    let result;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert("შეცდომა: გაყოფა ნულით შეუძლებელია.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert("შეცდომა: გაუგებარი ოპერაცია.");
            return;
    }

    alert(`რეზულტატი: ${result}`);
}

calculator();