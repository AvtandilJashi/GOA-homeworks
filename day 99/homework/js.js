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

let book1 = new Book("1984", "George Orwell", 1949);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);

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

let user1 = new User("jashi", "jashi@gmail.com", "brosgoniavetyvi");
let user2 = new User("jash", "jash@gmail.com", "brosufrogoniavetyvi");

console.log(user1.getDetails());
console.log(user2.getDetails());

user1.changePassword("newPass789");
console.log("Password changed for user1.");

let student = {
    name: "avtandil",
    age: 14,
    grade: "A++",
    isEnrolled: true,
    getInfo: function() {
        return `${this.name}, Age: ${this.age}, Grade: ${this.grade}, Enrolled: ${this.isEnrolled}`;
    }
};

console.log(student.getInfo());
student.grade = "A+";
console.log(student.getInfo());

function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    
    this.getCarInfo = function() {
        return `${this.brand} ${this.model}, Year: ${this.year}`;
    };
}

let car1 = new Car("Toyota", "Camry", 2022);
let car2 = new Car("Honda", "Civic", 2021);
let car3 = new Car("Ford", "Mustang", 2020);

console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());

let library = {
    name: "City Library",
    location: "Downtown",
    books: {
        title: "Moby Dick",
        author: "Herman Melville",
        year: 1851
    },
    listBooks: function() {
        console.log(`This book name is ${this.books.title}, written by ${this.books.author}, published in ${this.books.year}. You can find this book at ${this.name} in ${this.location}.`);
    }
};

library.listBooks();

let inventory = {
    product1: {
        productName: "Laptop",
        price: 1500,
        quantity: 5,
        isAvailable: true
    },
    product2: {
        productName: "Phone",
        price: 1000,
        quantity: 8,
        isAvailable: false
    },
    product3: {
        productName: "Tablet",
        price: 900,
        quantity: 30,
        isAvailable: true
    },
    displayAvailableProducts: function() {
        if (this.product1.isAvailable && this.product1.quantity > 0) {
            console.log(`Product: ${this.product1.productName}, Price: $${this.product1.price}, Quantity: ${this.product1.quantity}`);
        }
        if (this.product2.isAvailable && this.product2.quantity > 0) {
            console.log(`Product: ${this.product2.productName}, Price: $${this.product2.price}, Quantity: ${this.product2.quantity}`);
        }
        if (this.product3.isAvailable && this.product3.quantity > 0) {
            console.log(`Product: ${this.product3.productName}, Price: $${this.product3.price}, Quantity: ${this.product3.quantity}`);
        }
    }
};

inventory.displayAvailableProducts();
