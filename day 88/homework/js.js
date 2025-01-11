//პაროლის გამოცნობა

let password = 'Group 41 is best';

function guessPassword() {
    let userPassword = prompt('Enter your password:');

    if (userPassword === password) {
        alert('თქვენი შეყვანილი პაროლი სწორია');
    } else {
        alert('თქვენი შეყვანილი პაროლი არასწორია');
    }
}

guessPassword();



//N რიცხვის ფაქტორიალის გამოთვლა

let n = 9;

function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}

console.log('The factorial of ${n} is ${calculateFactorial(n)}');



//უკუთვლა

function countdown() {
    for (let i = 100; i >= 0; i--) {
        console.log('დარჩენილია ${i} წამი');
    }
}

countdown();

