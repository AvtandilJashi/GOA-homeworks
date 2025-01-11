//while loop დახმარებით, 50 - ჯერ გამოიტანეთ 'GOA'\

let i = 0;
while (i < 50) {
  console.log("GOA");
  i++;
}



//while ციკლის საშვალებით გამოიტანეთ რიცხვები 20-იდან 0-მდე

let x = 20;
while (x >= 0) {
  console.log(x);
  x--;
}



//while ციკლის საშვალებით გამოიტანეთ 1-დან 20-მდე მხოლოდ ლუწი რიცხვები

let y = 1;
while (y <= 20) {
  if (y % 2 === 0) {
    console.log(y);
  }
  y++;
}



//while ციკლის საშვალებით გამოიტანეთ 1-იდან 100-მდე ყველა 5-ის ჯერადი რიცხვი

let z = 1;
while (z <= 100) {
    if (z % 5 === 0) {
        console.log(z);
    }
    z++;
}



//5)

let countdown = Number(prompt("Enter the number of seconds:"));

while (countdown >= 0) {
  console.log(countdown);
  countdown--;
}


