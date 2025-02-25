//Codewars 1
//L1: Set Alarm

function setAlarm(employed, vacation){
    return employed && !vacation;
}



//Codewars 2
//Thinkful - Logic Drills: Traffic light

function updateLight(current) {
    const lights = { green: "yellow", yellow: "red", red: "green" };
    return lights[current];
}



//Codewars 3
//Return the day

function whatday(num) { 
    let user = Number('Enter a number: ')
    
    if (num === 1) {
       return 'Sunday'
    }
    if (num === 2) {
       return 'Monday'
    }
    if (num === 3) {
       return 'Tuesday'
    }
    if (num === 4) {
       return 'Wednesday'
    }
    if (num === 5) {
       return 'Thursday'
    }
    if (num === 6) {
       return 'Friday'
    }
    if (num === 7) {
       return 'Saturday'
    }
    else {
        return 'Wrong, please enter a number between 1 and 7'
    }
}



//Codewars 4
//The highest profit wins!

function minMax(arr) {
    return [Math.min(...arr), Math.max(...arr)];
}



//Codewars 5
//Sum Mixed Array

function sumMix(x){
    let result = 0;
    for (let n of x) {
      result += parseInt(n);
    }
    return result;
}

