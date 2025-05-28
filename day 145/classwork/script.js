//1)

let promise1 = Promise.resolve(true);
let promise2 = Promise.resolve(true);
let promise3 = Promise.resolve(true);


Promise.all(
    promise1,
    promise2,
    promise3,
).then(res => console.log('Success'))