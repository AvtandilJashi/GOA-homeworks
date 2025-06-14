const jsonString = '{"name": "Luna", "age": 4, "type": "cat"}';
const pet = JSON.parse(jsonString);
console.log(pet.name);
console.log(pet.age);
pet.color = "black";
console.log(pet);

const user = {
  username: "masterjaneza",
  loggedIn: true,
  favorites: ["React", "Tailwind", "JSON"]
};
const jsonUser = JSON.stringify(user);
console.log(jsonUser);

const userWithFunction = {
  username: "masterjaneza",
  greet: function () {
    return "Hello!";
  }
};
const json = JSON.stringify(userWithFunction);
console.log(json);

const fixedJson = {
  "name": "Broken Object",
  "age": 27,
  "hobbies": ["debugging", "fixing bugs"]
};
console.log(fixedJson);
