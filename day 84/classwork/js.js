//Codewars 1
//Grasshopper - Debug sayHello

function sayHello(name) {
    return 'Hello, ' + name;
  }



//Codewars 2
//Switch it Up!

function switchItUp(number){
   if (number === 0) {
     return 'Zero'
   }
   if (number === 1) {
     return 'One'
   }
   if (number === 2) {
     return 'Two'
   }
   if (number === 3) {
     return 'Three'
   }
   if (number === 4) {
     return 'Four'
   }
   if (number === 5) {
     return 'Five'
   }
   if (number === 6) {
     return 'Six'
   }
   if (number === 7) {
     return 'Seven'
   }
   if (number === 8) {
     return 'Eight'
   }
   if (number === 9) {
     return 'Nine'
   }
}



//Codewars 3
//Even or Odd

function evenOrOdd(number) {
    if (number % 2 === 0) {
       return 'Even'
    }
    else {
      return 'Odd'
    }
 }


//Codewars 4
//Grasshopper - Grade book

  function getGrade (s1, s2, s3) {
    let avg = (s1 + s2 + s3) / 3
      if (avg >= 90) {
      return 'A';
    } else if (avg >= 80) {
      return 'B';
    } else if (avg >= 70) {
      return 'C';
    } else if (avg >= 60) {
      return 'D';
    } else {
      return 'F';
    }
  }



//Codewars 5
//Simple multiplication

function simpleMultiplication(number) {
    if (number % 2 == 0) {
       return number * 8
    }
    else {
       return number * 9
    }
          
  }



//Codewars 6
//Return Negative

function makeNegative(num) {
  if ( num > 0 ) {
        return -num;
    }
    else {
        return num;
    }
}



//Codewars 7
//Convert boolean values to strings 'Yes' or 'No'.

function boolToWord( bool ){
    if (bool) {
      return 'Yes';
    } else {
      return 'No';
    }
  }



