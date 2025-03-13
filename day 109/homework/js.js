function main() {
    let increase = parseInt(readLine(), 10);
    let prices = [98.99, 15.2, 20, 1026];
    
    for (var i = 0; i < prices.length; i++) {
        prices[i] += increase;
    }
    
    console.log(prices);
}
