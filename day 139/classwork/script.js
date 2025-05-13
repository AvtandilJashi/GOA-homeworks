//1)

let score1 = Number(prompt('Enter score1: '))
let score2 = Number(prompt('Enter score2: '))
let score3 = Number(prompt('Enter score3: '))

class Exams {
    static average(score1, score2, score3) {
        return Math.round((score1 + score2 + score3) / 3)
    }
}

console.log(Exams.average(score1, score2, score3))