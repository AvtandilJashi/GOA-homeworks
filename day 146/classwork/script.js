//1)

const greetAlice = new Promise(resolve => {
  setTimeout(() => resolve("Hi from Alice"), 1000);
});

const greetBob = new Promise(resolve => {
  setTimeout(() => resolve("Hi from Bob"), 1500);
});

const greetCharlie = new Promise(resolve => {
  setTimeout(() => resolve("Hi from Charlie"), 1200);
});

Promise.all([greetAlice, greetBob, greetCharlie])
  .then(messages => {
    console.log(messages);
  });



//2)

const alice = new Promise(resolve => {
  const time = Math.floor(Math.random() * 3000) + 1000; // 1–4 sec
  setTimeout(() => resolve(`🏁 Alice wins in ${time}ms`), time);
});

const bob = new Promise(resolve => {
  const time = Math.floor(Math.random() * 3000) + 1000;
  setTimeout(() => resolve(`🏁 Bob wins in ${time}ms`), time);
});

const charlie = new Promise(resolve => {
  const time = Math.floor(Math.random() * 3000) + 1000;
  setTimeout(() => resolve(`🏁 Charlie wins in ${time}ms`), time);
});

Promise.race([alice, bob, charlie])
  .then(winner => console.log(winner));