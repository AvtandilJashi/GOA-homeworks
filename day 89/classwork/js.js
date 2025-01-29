//Codewars 1
//Grasshopper - If/else syntax debug

function checkAlive(health) {
    return health > 0;
}



//Codewars 2
//Beginner - Reduce but Grow

function grow(x){ 
    let counter = x[0] 
      for(let i=1; i<x.length; i++){
        counter = counter * x[i] 
      }
    return counter
}



//Codewars 3
//Fake Binary

function fakeBin(x) {
    let result = "";
    for (let i = 0; i < x.length; i++) {
      if (x[i] < '5') {
        result += '0';
      } else {
        result += '1';
      }
    }
    return result;
}
  
