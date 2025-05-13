//1)

let number = new Set()

number.add(8)
number.add(7)
number.add(5)

number.delete(5)

console.log(number.size)

number.clear()

console.log(number)