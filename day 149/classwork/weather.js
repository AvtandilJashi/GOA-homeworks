let weather = `
    {
        "tbilisi" : "sunny",
        "guria" : "rainy",
        "imereti" : "windy"
    }
`

let obj = JSON.parse(weatherTxt)
let txt = JSON.stringify(weatherObj)


console.log(obj)
console.log(txt)