new Promise(resolve => {
  setTimeout(() => resolve("Hello, friend!"), 2000);
}).then(console.log);

const p1 = new Promise(res => setTimeout(() => res("Anna"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Ben"), 2000));
const p3 = new Promise(res => setTimeout(() => res("Charlie"), 1500));

Promise.all([p1, p2, p3])
  .then(names => console.log(`Everyone arrived: [${names.join(', ')}]`));

const s1 = new Promise(res => setTimeout(() => res("Server1"), 3000));
const s2 = new Promise(res => setTimeout(() => res("Server2"), 1000));
const s3 = new Promise(res => setTimeout(() => res("Server3"), 2000));

Promise.race([s1, s2, s3])
  .then(first => console.log(`First server: ${first}`));

const any1 = Promise.reject("Error 1");
const any2 = Promise.reject("Error 2");
const any3 = Promise.resolve("Success!");

Promise.any([any1, any2, any3])
  .then(success => console.log(success));

const api1 = Promise.resolve("Data1");
const api2 = Promise.reject("API2 failed");
const api3 = Promise.resolve("Data3");

Promise.allSettled([api1, api2, api3])
  .then(results => {
    console.log("Final Report:", results);
  });

Promise.resolve(5)
  .then(n => n + 10)
  .then(result => console.log(result));

const fail1 = Promise.reject("Server A down");
const fail2 = Promise.reject("Timeout");
const fail3 = Promise.reject("Network error");

Promise.any([fail1, fail2, fail3])
  .catch(err => {
    console.log(`All options failed: [${err.errors.join(', ')}]`);
  });

const fastReject = new Promise((_, reject) => setTimeout(() => reject("Too slow!"), 1000));
const slowResolve = new Promise(res => setTimeout(() => res("Done"), 2000));

Promise.race([fastReject, slowResolve])
  .then(console.log)
  .catch(err => console.log(`Race failed: ${err}`));

const fakeApi = new Promise(res => setTimeout(() => res("📦 Data received"), 3000));
const timeout = new Promise((_, reject) => setTimeout(() => reject("⏰ Request timed out!"), 2000));

Promise.race([fakeApi, timeout])
  .then(console.log)
  .catch(console.log);

const result1 = Promise.resolve("Loaded A");
const result2 = Promise.reject("Service B crashed");
const result3 = Promise.resolve("Loaded C");

Promise.allSettled([result1, result2, result3])
  .then(results => {
    results.forEach(result => {
      if (result.status === "fulfilled") {
        console.log(`✔ Success: ${result.value}`);
      } else {
        console.log(`❌ Failed: ${result.reason}`);
      }
    });
  });
