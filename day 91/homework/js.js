//1)

for (let i = 1; i <= 20; i++) {
    if (i === 7 || i === 13) {
        continue; 
    }

    console.log(i);
}



//2)

for (let i = 1; i <= 30; i++) {
    if (i % 2 !== 0) { 
        continue; 
    }
    console.log(i);
    if (i % 8 === 0) { 
        break; 
    }
}



//3)

for (let i = 1; i <= 30; i++) {
    if (i % 5 === 0) {
        continue; 
    }
    console.log(i);
}


