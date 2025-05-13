class Temperature {
  constructor(celsius) {
    this.celsius = celsius
  }

  get fahrenheit() {
    return this.celsius * 1.8 + 32
  }

  static fromFahrenheit(f) {
    return new Temperature((f - 32) / 1.8)
  }
}

const t1 = new Temperature(25)
console.log(t1.fahrenheit)

const t2 = Temperature.fromFahrenheit(77)
console.log(t2.celsius)


class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get area() {
    return Math.PI * this.radius ** 2
  }

  static isValidRadius(r) {
    return typeof r === "number" && r > 0
  }
}

const c = new Circle(5)
console.log(c.area)
console.log(Circle.isValidRadius(3))



class Car {
  constructor(brand, model, speed) {
    this.brand = brand
    this.model = model
    this.speed = speed
  }

  get info() {
    return `${this.brand} ${this.model} is going at ${this.speed} km/h`
  }

  static compareSpeed(car1, car2) {
    return car1.speed >= car2.speed ? car1 : car2
  }
}

const car1 = new Car("Bentley", "gts", 150)
const car2 = new Car("BMW", "M3", 180)
console.log(car1.info)
console.log(car2.info)
console.log(Car.compareSpeed(car1, car2).info)



class BankAccount {
  static totalAccountsCreated = 0

  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName
    this._balance = initialBalance
    BankAccount.totalAccountsCreated++
  }

  get balance() {
    return this._balance
  }
}

const acc1 = new BankAccount("Avtandil", 1000)
const acc2 = new BankAccount("Shota", 1500)
console.log(acc1.balance)
console.log(BankAccount.totalAccountsCreated)



class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.pages = pages
  }

  get summary() {
    return `${this.title} by ${this.author} - ${this.pages} pages`
  }

  static isLongBook(book) {
    return book.pages > 300
  }
}

const book1 = new Book("die on nilos", "Aghata Christ", 368)
const book2 = new Book("The Alchemist", "Paulo Coelho", 208)
console.log(book1.summary)
console.log(Book.isLongBook(book1))
console.log(Book.isLongBook(book2))
