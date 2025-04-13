//1)

let products = [
    {name: 'Keyboard', price: 80},
    {name: 'HDMI', price: 15},
    {name: 'mouse', price: 50},
    {name: 'Screen', price: 250}
]


let productNames = products.map(p => p.name);

let affordableProduct = products.filter(p => p.price < 100)

let totalPrice = products.reduce((all, p) => all + p.price, 0)

let  productNamesReversed = products.reduceRight((acc, p) => {
    if (acc === '') {
        return p.name
    }
    else {
        return acc + ' - ' + p.name
    }

})

console.log(productNames)
console.log(affordableProduct)
console.log(totalPrice)
console.log(productNamesReversed)