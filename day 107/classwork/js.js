//Codewars 1
//The Wide-Mouthed frog!

function mouthSize(animal) {
    if (animal === 'alligator') {
      return 'small'
    }
    else {
      return 'wide'
    }
}



//Codewars 2
//Beginner Series #2 Clock

function past(h, m, s) {
    return (h * 3600 + m * 60 + s) * 1000
}



//Codewars 3
//Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence

function replace(s) {
    let ras = ''

    for(let i = 0; i < s.length; i++) {
        let char = s[i]
    }

    if('aeiouAEIOU' .includes(char)) {
        res += '!'
    }
    else {
        res += char
    }
    return res
}


