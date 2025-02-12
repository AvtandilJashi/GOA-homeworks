//Object Constuctor

function person(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;
}
  
this.info = function() {
    return `ჩემი სახელია ${this.name}, ჩემი გვარია ${this.lastName}, ჩემი ტელეფონის ნომერია ${this.phoneNumber}, ჩემი ელფოსტაა ${this.email}.`;
};

  let user1 = new User("ავთანდილ", "ჯაში", "555-888-777", "jashi@email.com", "jashi1234", "jashi1234");
  let user2 = new User("ლუკა", "ჭაჭიაშვილი", "551-881-771", "chachiashvili@email.com", "chacha1234", "chacha1234");
  let user3 = new User("ლუკა", "სუხიტაშვილი", "593-893-793", "suxitashvili@email.com", "suxita1234", "suxita1234");
  
  console.log(info.user1);
  console.log(info.user2);
  console.log(info.user3);
  