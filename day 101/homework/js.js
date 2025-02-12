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

let book1 = new Book("1920", "Avtandil Jashi", 1999);
let book2 = new Book("tom soier", "Harper Lee", 1998);
let book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1997);

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

let user1 = new User("klara", "klara@gmail.com", "niga23");
let user2 = new User("mia", "mia@gmail.com", "black890");

console.log(user1.getDetails());
console.log(user2.getDetails());

user1.changePassword("newPass789");
console.log("Password changed for user1.");

const university = {
    name: "Tech University",
    departments: 5,
    website: "www.techuniversity.com",
    ratings: {
        student1: 4.5,
        student2: 4.7,
        student3: 4.8
    }
};

console.log(university);
console.log(university.hasOwnProperty("scholarship"));
university.studentsCount = 15000;
Object.freeze(university);
university.name = "New Name";
console.log(Object.isFrozen(university));

let sportsClub = {
    clubName: "Wild Tigers",
    sportType: "Football",
    foundedYear: 1990,
    achievements: {
        title1: "National Championship",
        title2: "Regional Cup",
        title3: "International League"
    }
};

console.log(Object.keys(sportsClub));
console.log(Object.values(sportsClub));
console.log(sportsClub.hasOwnProperty("sponsors"));
sportsClub.stadiumCapacity = 50000;
Object.freeze(sportsClub);
sportsClub.clubName = "New Club";
console.log(Object.isFrozen(sportsClub));

let hotel = {
    hotelName: "paragraph",
    stars: 5,
    location: "Digomi",
    guestReviews: {
        guest1: 4.5,
        guest2: 4.3,
        guest3: 4.7
    }
};

console.log(hotel);
console.log(hotel.hasOwnProperty("spa"));
hotel.roomsCount = 200;
Object.freeze(hotel);
hotel.hotelName = "New Hotel";
console.log(Object.isFrozen(hotel));

let cinema = {
    cinemaName: "Cavea",
    moviesCount: 10,
    location: "CityMall",
    movieReviews: {
        user1: "Great experience!",
        user2: "Good selection of movies.",
        user3: "Comfortable seating."
    }
};

console.log(cinema);
console.log(cinema.hasOwnProperty("vipSeats"));
cinema.ticketPrice = 12;
Object.freeze(cinema);
cinema.moviesCount = 15;
console.log(Object.isFrozen(cinema));
