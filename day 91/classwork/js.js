//1)

let num1 = 1;

for (let x = 1; x <= 100; x++) {
    num1 *= i;
    if (num1 > 10000) {
        break;
    }
}

console.log(num1);



//2)

function welcome() {
    let userName = prompt('Please enter your username: ');

    console.log('Welcome' + userName);
}

welcome();



//3)

let Foot = parseInt(readLine(), 10);

function convert(Foot) {
    console.log(Foot * 12);
}

convert(Foot);
