let set1 = new Set()
set1.add(1)
set1.add(2)
set1.add(3)
console.log(set1.has(2))
console.log(set1.size)
set1.delete(2)
set1.clear()
set1 = new Set([1, 2, 3])
set1.forEach(v => console.log(v))
let arrFromSet = [...set1]
let a = new Set([1, 2, 3])
let b = new Set([3, 4, 5])
let union = new Set([...a, ...b])
let intersection = new Set([...a].filter(x => b.has(x)))
console.log(union)
console.log(intersection)

let nums = new Set([1, 2, 3, 4, 5])
let fruits = new Set(["apple", "banana"])
fruits.add("orange")
fruits.add("apple")
console.log(fruits)
console.log(fruits.has("banana"))
fruits.delete("banana")
console.log(fruits)
let colors = new Set(["red", "blue", "green"])
for (let color of colors) console.log(color)
let namesSet = new Set(["Alice", "Bob", "Charlie"])
let namesArr = [...namesSet]
console.log(namesArr)
let dupArr = [1, 2, 2, 3, 3, 4]
let uniqueArr = [...new Set(dupArr)]
console.log(uniqueArr)
let letters = ['a', 'b', 'a', 'c', 'b']
console.log(new Set(letters).size)
let tempSet = new Set(["x", "y", "z"])
tempSet.clear()
console.log(tempSet)

let pets = new Set()
console.log(pets)
pets.add("cat").add("dog").add("parrot")
console.log(pets.has("dog"))
pets.delete("parrot")
console.log(pets.size)
let nums2 = new Set([1, 2, 3, 4])
for (let n of nums2) console.log(n)
nums2.clear()
console.log(nums2)
let arrToSet = new Set([1, 2, 2, 3, 4, 4])
console.log(arrToSet)
let backToArray = [...arrToSet]
console.log(backToArray)
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length
}
console.log(hasDuplicates([1, 2, 3, 4, 4]))
console.log(hasDuplicates([1, 2, 3]))

let sentence = "The sun shines and the moon glows"
let uniqueWords = new Set(sentence.toLowerCase().split(" "))
console.log(uniqueWords)
function intersectSets(s1, s2) {
  return new Set([...s1].filter(x => s2.has(x)))
}
console.log(intersectSets(new Set([1,2,3]), new Set([2,3,4])))
function difference(s1, s2) {
  return new Set([...s1].filter(x => !s2.has(x)))
}
console.log(difference(new Set([1,2,3]), new Set([2,4])))
function uniqueCharCount(str) {
  return new Set(str).size
}
console.log(uniqueCharCount("hello"))
console.log(uniqueCharCount("world"))
function sameUnique(arr1, arr2) {
  let s1 = new Set(arr1)
  let s2 = new Set(arr2)
  if (s1.size !== s2.size) return false
  for (let v of s1) if (!s2.has(v)) return false
  return true
}
console.log(sameUnique([1,2,3], [3,2,1]))
console.log(sameUnique([1,2,2], [1,2,3]))
let nested = [[1,2], [2,3], [1,2]]
let serialized = new Set(nested.map(JSON.stringify))
let uniqueNested = [...serialized].map(JSON.parse)
console.log(uniqueNested)
let objs = [{id:1}, {id:2}, {id:1}]
let seen = new Set()
let filtered = objs.filter(o => {
  if (seen.has(o.id)) return false
  seen.add(o.id)
  return true
})
console.log(filtered)
let visitors = ["alice", "bob", "alice", "dave", "bob"]
let uniqueVisitors = new Set(visitors)
console.log(uniqueVisitors.size)
let numbers = [15, 30, 45, 50, 60, 70, 75]
let divBy3And5 = new Set(numbers.filter(n => n % 3 === 0 && n % 5 === 0))
console.log(divBy3And5)
function allUniqueChars(str) {
  return new Set(str).size === str.length
}
console.log(allUniqueChars("lamp"))
console.log(allUniqueChars("moon"))
