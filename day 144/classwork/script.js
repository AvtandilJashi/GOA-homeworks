//1)

let promise = new Promise((resolve, reject) => {
    let response = true

    if(response) {
        console.log("I'll help you no problem")
    }
    else {
        console.log("I'll help you tommorow sorry")
    }
})

promise
    .then(res => console.log("I'll help you no problem"))
    .catch(error => console.log("I'll help you tommorow sorry"))
    .finally(console.log("OFC I'll help you anyway"))



//2)

let promise2 = new Promise((resolve, reject) => {
  resolve(5);
});

promise2
  .then(num => num * 2)
  .then(num => num * 2)
  .then(num => num * 2)
  .then(result => console.log("Final result:", result));
