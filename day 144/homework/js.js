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

const isInStock = Math.random() > 0.5;
const promise4 = new Promise((resolve, reject) => {
  if (isInStock) {
    resolve("Product is ready to ship!");
  } else {
    reject("Out of stock.");
  }
});
promise4
  .then(msg => console.log("Task 4:", msg))
  .catch(err => console.log("Task 4:", err))
  .finally(() => console.log("Checked product availability."));

const isLoggedIn = Math.random() > 0.5;
const promise5 = new Promise((resolve, reject) => {
  if (isLoggedIn) {
    resolve("Login successful");
  } else {
    reject("Access denied");
  }
});
promise5
  .then(msg => console.log("Task 5:", msg))
  .catch(err => console.log("Task 5:", err))
  .finally(() => console.log("Auth process completed."));

const promise6 = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve("Server responded OK");
  } else {
    reject("Server error occurred");
  }
});
promise6
  .then(msg => console.log("Task 6:", msg))
  .catch(err => console.log("Task 6:", err))
  .finally(() => console.log("Server request finished."));

const isLightOn = Math.random() > 0.5;
const promise7 = new Promise((resolve, reject) => {
  if (isLightOn) {
    resolve("The light is on");
  } else {
    reject("The room is dark");
  }
});
promise7
  .then(msg => console.log("Task 7:", msg))
  .catch(err => console.log("Task 7:", err))
  .finally(() => console.log("Checked the light switch."));

function shouldGoOut() {
  const isRaining = Math.random() > 0.5;
  return new Promise((resolve, reject) => {
    if (!isRaining) {
      resolve("Go for a walk!");
    } else {
      reject("Better stay in today.");
    }
  });
}

shouldGoOut()
  .then(msg => console.log("Task 8:", msg))
  .catch(err => console.log("Task 8:", err))
  .finally(() => console.log("Decision made."));
