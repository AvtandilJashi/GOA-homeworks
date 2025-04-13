const mixedData = [10, "apple", 5, "banana", 20, "cherry"];

const firstString = mixedData.find(item => typeof item === "string");
console.log("First String:", firstString);

const fruits = ["mango", "orange"];
const isFruitsArray = Array.isArray(fruits);
console.log("Is Fruits Array:", isFruitsArray);

const stringLengths = Array.from(
  mixedData.filter(item => typeof item === "string"),
  str => str.length
);
console.log("String Lengths:", stringLengths);

const reversedData = [...mixedData].reverse();
console.log("Reversed Data:", reversedData);

const sortedNumbers = mixedData
  .filter(item => typeof item === "number")
  .sort((a, b) => a - b);
console.log("Sorted Numbers:", sortedNumbers);
