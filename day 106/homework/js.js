function comprehensiveArrayTask(arr1, arr2, arr3, nestedArray) {
    let combinedArray = arr1.concat(arr2);
    combinedArray.copyWithin(5, 0, 3);
    combinedArray.fill(0, 6);
    combinedArray.pop();
    combinedArray.shift();
    combinedArray.unshift(100, 200);
    combinedArray.splice(2, 2, ...arr3);
    let slicedArray = combinedArray.slice(-5);
    let flatArray = nestedArray.flat();
    let includesEight = flatArray.includes(8);
    let indexOfNine = flatArray.indexOf(9);
    let lastIndexOfSeven = flatArray.lastIndexOf(7);
    return { joined: slicedArray.join(','), flatArray, includesEight, indexOfNine, lastIndexOfSeven };
}

function addStudent(students, grades, student, grade) {
    students.unshift(student);
    grades.unshift(grade);
    return { students, grades };
}

function removeLastStudent(students, grades) {
    students.pop();
    grades.pop();
    return { students, grades };
}

function replaceGrade(grades, index, newGrade) {
    grades.splice(index, 1, newGrade);
    return grades;
}

function updateGrades(grades, newGrade) {
    grades.fill(newGrade);
    return grades;
}

function addItem(playlist, item) {
    playlist.unshift(item);
    return playlist;
}

function removeFirstItem(playlist) {
    playlist.shift();
    return playlist;
}

function replaceItem(playlist, index, newItem) {
    playlist.splice(index, 1, newItem);
    return playlist;
}

function createReceipt(cartItems) {
    return cartItems.join(',');
}

function applyDiscount(prices, discountPrice) {
    prices.fill(discountPrice);
    return prices;
}

function addBook(library, book) {
    library.push(book);
    return library;
}

function removeLastBook(library) {
    library.pop();
    return library;
}

function updateBookCopies(library, title, copies) {
    let index = library.findIndex(book => book.title === title);
    if (index !== -1) {
        library.splice(index, 1, { ...library[index], copies });
    }
    return library;
}

function listBooks(library) {
    return library.map(book => book.title).join(',');
}

function extractBooks(library, count) {
    return library.slice(0, count);
}

function modifyBooks(library) {
    library.copyWithin(library.length - 1, 0, 1);
    return library;
}

function resetCopies(library, copies) {
    library.forEach(book => book.copies = copies);
    return library;
}

function removeFirstBook(library) {
    library.shift();
    return library;
}

function addFirstBook(library, book) {
    library.unshift(book);
    return library;
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function selectRandomPayer(names) {
    let randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

function fizzBuzz(numbers) {
    return numbers.map(num => {
        if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
        if (num % 3 === 0) return "Fizz";
        if (num % 5 === 0) return "Buzz";
        return num;
    }).filter(item => typeof item === 'string');
}

function generateRandomNumbers(n) {
    let numbers = Array.from({ length: n }, () => Math.floor(Math.random() * 100));
    let sum = numbers.reduce((acc, num) => acc + num, 0);
    return sum / n;
}