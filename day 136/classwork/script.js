//1)

let generalyMap = new Map()

generalyMap.set('name', 'Avtandl')
generalyMap.set('age', '14')
generalyMap.set('student', 'true')
generalyMap.set('sport', 'box')
generalyMap.set('skills', 'programming')


console.log(generalyMap.has('sport'))

generalyMap.delete('age')

console.log(generalyMap.get('age'))
