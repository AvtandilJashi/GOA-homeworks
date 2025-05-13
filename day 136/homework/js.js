let countries = new Map([
  ["Georgia", "Tbilisi"],
  ["France", "Paris"],
  ["Japan", "Tokyo"],
  ["Brazil", "Brazil"],
  ["Spain", "Madrid"]
]);

console.log("Countries and Capitals:");
for (let [country, capital] of countries) {
  console.log(`${country}: ${capital}`);
}

let fruits = new Map([
  ["Pitch", "Pink"],
  ["Banana", "Yellow"],
  ["Grapes", "Purple"]
]);

fruits.set("Orange", "Orange");
fruits.set("Kiwi", "Green");
fruits.delete("Banana");

console.log("Fruits and Colors:");
for (let [fruit, color] of fruits) {
  console.log(`${fruit}: ${color}`);
}

let keyToCheck = "Apple";
console.log(`Does '${keyToCheck}' exist?`);
console.log(fruits.has(keyToCheck) ? "Yes" : "No");

console.log("Formatted Countries and Capitals:");
for (let [country, capital] of countries) {
  console.log(`The capital of ${country} is ${capital}`);
}

let mapArray = Array.from(countries);
let newMapFromArr = new Map(mapArray);

console.log("Converted Map from Array:");
for (let [country, capital] of newMapFromArr) {
  console.log(`${country}: ${capital}`);
}

function sortMapByKey(inputMap) {
  return new Map([...inputMap.entries()].sort((a, b) => a[0].localeCompare(b[0])));
}

let sortedCountries = sortMapByKey(countries);
console.log("Sorted Countries Map:");
for (let [country, capital] of sortedCountries) {
  console.log(`${country}: ${capital}`);
}

function countWords(sentence) {
  let wordMap = new Map();
  let words = sentence.toLowerCase().split(/\s+/);
  for (let word of words) {
    wordMap.set(word, (wordMap.get(word) || 0) + 1);
  }
  return wordMap;
}

let sentence = "this is a test and this is fun";
let wordCount = countWords(sentence);
console.log("Word Occurrences:");
for (let [word, count] of wordCount) {
  console.log(`${word}: ${count}`);
}
