//Codewars 2
//Printer Errors

function printerError(s) {
    let err = 0
    let length = s.length
    for(let i = 0; i < length; i++) {
      if(s[i] < 'a' || s[i] > 'm') {
        err++
      }
    }
  
  return `${err}/${length}`
}

