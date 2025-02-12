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

const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

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

const user1 = new User("johnDoe", "john@example.com", "pass123");
const user2 = new User("janeDoe", "jane@example.com", "secure456");

console.log(user1.getDetails());
console.log(user2.getDetails());

user1.changePassword("newPass789");
console.log("Password changed for user1.");

const book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 180,
    publishYear: 1925,
    getSummary: function() {
        return `${this.title} by ${this.author}, published in ${this.publishYear}, contains ${this.pages} pages.`;
    }
};

const customer = {
    firstName: "nugzari",
    lastName: "gobeglejiashvili",
    email: "nugazara.gobe@gmail.com",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    updateEmail: function(newEmail) {
        this.email = newEmail;
    }
};

const movie = {
    title: "Inception",
    director: "jora",
    releaseYear: 2010,
    duration: 148,
    getMovieInfo: function() {
        return `${this.title}, directed by ${this.director}, released in ${this.releaseYear}, runs for ${this.duration} minutes.`;
    }
};

let ticket = {
    eventName: "Rock Concert",
    eventDate: "2025-06-15",
    price: 50,
    isAvailable: true,
    purchaseTicket: function() {
        if (this.isAvailable) {
            this.isAvailable = false;
            return `Ticket for ${this.eventName} on ${this.eventDate} purchased successfully!`;
        } else {
            return `Sorry, tickets for ${this.eventName} are sold out.`;
        }
    }
};