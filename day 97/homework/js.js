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
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    updateEmail: function(newEmail) {
        this.email = newEmail;
    }
};




const movie = {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    duration: 148,
    getMovieInfo: function() {
        return `${this.title}, directed by ${this.director}, released in ${this.releaseYear}, runs for ${this.duration} minutes.`;
    }
};



const ticket = {
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
