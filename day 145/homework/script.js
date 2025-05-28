const p1 = new Promise(resolve => setTimeout(() => resolve("Result 1"), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve("Result 2"), 2000));
const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Error in p3"), 1500));

Promise.all([p1, p2])
  .then(results => console.log(results));

Promise.all([p1, p2, p3])
  .then(results => console.log(results))
  .catch(error => console.log(error));

Promise.any([p1, p2, p3])
  .then(result => console.log(result))
  .catch(error => console.log(error));

Promise.any([
  new Promise(resolve => setTimeout(() => resolve("Fastest 1"), 3000)),
  new Promise(resolve => setTimeout(() => resolve("Fastest 2"), 1000)),
  new Promise(resolve => setTimeout(() => resolve("Fastest 3"), 2000))
])
.then(winner => console.log(winner));

Promise.any([
  new Promise((_, reject) => setTimeout(() => reject("Fail 1"), 500)),
  new Promise((_, reject) => setTimeout(() => reject("Fail 2"), 1000)),
  new Promise((_, reject) => setTimeout(() => reject("Fail 3"), 1500))
])
.catch(error => console.log(error.message));
