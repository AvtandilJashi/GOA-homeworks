const numbers = [2, 4, 6, 8, 10];
const allEven = numbers.every(num => num % 2 === 0);

const strings = ["book", "apple", "elephant", "sun"];
const hasLongString = strings.some(str => str.length > 5);

const originalNumbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];
originalNumbers.forEach(num => doubledNumbers.push(num * 2));

const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 19 },
  { name: "Charlie", age: 30 }
];
const allAdults = users.every(user => user.age >= 18);

const products = [
  { name: "Notebook", price: 25 },
  { name: "Pen", price: 5 },
  { name: "Backpack", price: 45 }
];
const hasAffordableProduct = products.some(product => product.price < 20);

const customerOrders = [
  {
    orderId: 1,
    customerId: 100,
    items: [
      { title: "Book A", price: 10, quantity: 2 },
      { title: "Book B", price: 15, quantity: 1 }
    ],
    shippingAddress: "123 Main St",
    isDelivered: true
  },
  {
    orderId: 2,
    customerId: 101,
    items: [],
    shippingAddress: "456 Oak Ave",
    isDelivered: false
  },
  {
    orderId: 3,
    customerId: 102,
    items: [{ title: "Book C", price: 20, quantity: 1 }],
    shippingAddress: "789 Pine Rd",
    isDelivered: true
  }
];

const allOrdersHaveItems = customerOrders.every(order => order.items.length > 0);
const hasPendingDelivery = customerOrders.some(order => !order.isDelivered);

customerOrders.forEach(order => {
  console.log(`Processing Order ID: ${order.orderId}`);
});

console.log("All Even:", allEven);
console.log("Has Long String:", hasLongString);
console.log("Doubled Numbers:", doubledNumbers);
console.log("All Adults:", allAdults);
console.log("Has Affordable Product:", hasAffordableProduct);
console.log("All Orders Have Items:", allOrdersHaveItems);
console.log("Has Pending Delivery:", hasPendingDelivery);


