//Codewars 1
//You're a square!

var isSquare = function(n){
    return Math.sqrt(n) % 1 === 0
}



//Codewars 2
//Descending Order

function descendingOrder(n){
    let strarr = String(n)
    
    let splited = strarr.split('')
    let sorted
    for (let i = 0;i < splited.length; i++) {
      if (splited[i] >= 0) {
        sorted = splited.sort((a,b) => b - a) 
      }
    }
   
   return Number(sorted.join(''))
}


