//Object

let car = {
    brand: "Bentley",
    model: " Lyndhurst",
    year: 2023,
    color: "Dark Blue",
    weight: "2400KG",
    
    carDescribe: function() {
        console.log(`ამ მანქანის ბრენდია ${this.brand}, კონკრეტული მოდელია ${this.model}, გამოშვების წელი ${this.year}, ფერი ${this.color}, და წონა ${this.weight}.`);
    }
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.weight);


car.brand = "Mercedes";
car.model = "Amg";
car.year = 2016;
car.color = "darkgrey";
car.weight = "2000KG";
car.mode = "Sport";

delete car.mode;

let myCar = "Bentley";
if (car.brand === myCar) {
    console.log("იგივე მანქანის ბრენდი გვყოლია");
} else {
    console.log("სხვადასხვა მანქანის ბრენდია");
}

car.carDescribe();
