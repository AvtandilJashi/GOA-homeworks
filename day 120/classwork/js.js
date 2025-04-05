//1)

const car = {
    brand: 'Toyota',
    model: 'Corolla',
    color: 'Red'
  };
  
  console.log("Brand:", car.brand);
  console.log("Model:", car.model);
  console.log("Color:", car.color);
  
  console.log(`ეს არის ${car.brand} ბრენდი, კონკრეტულად ${car.model} მოდელი, რომლის ფერი არის ${car.color}.`);
  


//2)

const fruits = ['Apple', 'Banana', 'Cherry', 'Date', 'Grape'];
  
for (const index in fruits) {
    console.log(`ეს არის ${fruits[index]} მნიშვნელობა და ეს არის მისი ინდექსი ${index}.`);
}



//3)

const items = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5', 'Item6', 'Item7', 'Item8', 'Item9', 'Item10'];
  
for (const item of items) {
    console.log(item);
}
  