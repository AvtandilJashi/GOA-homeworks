function modifyArray(arr) {
    let numsArray = [1, 2, 3];
    let strArray = ['a', 'b', 'c'];
    let combinedArray = numsArray.concat(strArray);
    
    combinedArray.copyWithin(4, 0, 3);
    combinedArray.fill("filled", 2, 5);
    combinedArray.pop();
    combinedArray.shift();
    combinedArray.unshift(100, 200);
    
    return combinedArray;
}

let people = [{ name: 'avtandil' }, { name: 'shota' }];
let places = [{ city: 'tbilisi' }, { city: 'tbilisi' }];

let mergedArray = people.concat(places);
mergedArray.copyWithin(2, 0, 2);
mergedArray.fill({ city: 'qutaisi' }, mergedArray.length - 2, mergedArray.length);
mergedArray.pop();
mergedArray.shift();
mergedArray.unshift({ name: 'manucha' }, { name: 'gurami' });

let mixedArray = [1, "two", 3, "four", 5];
let extendedArray = mixedArray.concat([true, false]);
extendedArray.copyWithin(0, 2, 4);
extendedArray.fill(0, 4, 7);
extendedArray.pop();
extendedArray.shift();
extendedArray.unshift(null, undefined);

console.log("Modified Array:", modifyArray([]));
console.log("Merged Array:", mergedArray);
console.log("Extended Array:", extendedArray);