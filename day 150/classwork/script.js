//1)

let userData = 
` {
        "Firstname" : "Avtandili",
        "Lastname" : "Jashi",
        "Age" : 14,
        "Hobby" : "Programming"
   }`

let user = JSON.parse(userData)

userData.Lastname = "Nukradze"

let updateuser = JSON.stringify(user)

console.log(updateuser)



//2)

// JSON - არის JavaScript Object Notation
// JSON - გამოიყენება ინფორმაციის გასაცვლელად და ის არის ცალკე არცერთ ენას არ ექვემდებარება,მაგრამ გამოიყენება
// ბევრ ენებთან
