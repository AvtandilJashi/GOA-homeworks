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

