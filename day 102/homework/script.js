function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.introduce = function() {
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old ${this.profession}.`);
    };
}

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return `${this.title} by ${this.author}, published in ${this.year}.`;
    };
}

let book1 = new Book("1990", "Avtandil Jashi", 2090);
let book2 = new Book("kill killers", "manucha", 2009);
let book3 = new Book("kill boxers", "shota", 2007);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());

function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.changePassword = function(newPassword) {
        this.password = newPassword;
    };
    this.getDetails = function() {
        return `Username: ${this.username}, Email: ${this.email}`;
    };
}

let user1 = new User("manucha", "manucha@gmail.com", "manucha2009");
let user2 = new User("shota", "shota@gmail.com", "shota2007");

console.log(user1.getDetails());
console.log(user2.getDetails());

user1.changePassword("blackniga9800");
console.log("Password changed for user1.");

function getArrayLength(arr) {
    return arr.length;
}

function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function pushToArray(arr, value) {
    return arr.push(value);
}

function popFromArray(arr) {
    return arr.pop();
}

function concatAndPush(arr1, arr2, value) {
    let newArray = arr1.concat(arr2);
    newArray.push(value);
    return newArray;
}

function sumArrayElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function getEvenIndexedElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i += 2) {
        result.push(arr[i]);
    }
    return result;
}

function getStringLengths(arr) {
    let lengths = [];
    for (let i = 0; i < arr.length; i++) {
        lengths.push(arr[i].length);
    }
    return lengths;
}
