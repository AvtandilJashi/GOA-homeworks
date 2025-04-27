function filterAndSum(threshold, ...numbers) {
    return numbers.filter(num => num > threshold).reduce((sum, num) => sum + num, 0);
}

console.log(filterAndSum(5, 1, 6, 2, 8, 3, 9));

const product = {
    id: 101,
    name: "Laptop",
    price: 1200,
    brand: "TechCorp",
    color: "Silver",
    weight: "2kg"
};

const { id, name, ...details } = product;

console.log(id);
console.log(name);
console.log(details);

function combineArrays(str, ...arrays) {
    return [str, ...arrays.flat()];
}

console.log(combineArrays("Start", [1, 2], [3, 4], [5]));

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

const merged = { ...obj1, ...obj2 };

console.log(merged);

const numbers = [10, 20, 30];

const newNumbers = [...numbers, 40, 50];

console.log(numbers);
console.log(newNumbers);

function getMax(a, b, c) {
    return Math.max(a, b, c);
}

const values = [25, 10, 35, 5];

const result = getMax(...values.slice(0, 3));

console.log(result);
