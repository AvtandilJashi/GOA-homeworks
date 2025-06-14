//Codewars 1
//List Filtering

function filter_list(l) {
  return l.filter(item => typeof item === 'number')
}



//Codewars 2
//Find the smallest integer in the array

function findSmallestInt(arr) {
   return Math.min(...arr)
}



//Codewars 3
//The highest profit wins!

function minMax(arr){
   return [Math.min(...arr), Math.max(...arr)]
}



//Codewars 4
//Incorrect division method

const solve = (x, y) => x / y;



//Codewars 5
//Is that a real phone number? (British version)

function validateNumber(str) {
  if (!str) return "Plenty more fish in the sea";

  const cleaned = str.replace(/-/g, ""); // remove all dashes

  if (/^07\d{9}$/.test(cleaned) || /^\+447\d{9}$/.test(cleaned)) {
    return "In with a chance";
  }

  return "Plenty more fish in the sea";
}


