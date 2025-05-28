const promise1 = new Promise((resolve, reject) => {
  resolve("Hello, Promise!");
});

promise1.then(msg => console.log("Task 1:", msg));

const promise2 = new Promise((resolve, reject) => {
  reject("Something went wrong!");
});

promise2.catch(err => console.log("Task 2:", err));

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2 seconds have passed");
  }, 2000);
});

promise3.then(msg => console.log("Task 3:", msg));

const promise4 = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  if (success) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
});

promise4
  .then(msg => console.log("Task 4:", msg))
  .catch(err => console.log("Task 4:", err));

const promise5 = new Promise((resolve, reject) => {
  resolve(5);
});

promise5
  .then(num => num * 2)
  .then(num => num * 2)
  .then(num => num * 2)
  .then(result => console.log("Task 5:", result));

const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data fetched!");
  }, 1000);
});

promise6.then(msg => console.log("Task 6:", msg));
