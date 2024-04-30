let prices = [250, 645, 300, 900, 50];

for (let price of prices) {

    price = price - price * .1;

}

for (let price of prices) {
    console.log(price);
}

for (let i = 0; i < prices.length; i++) {
    prices[i] = prices[i] * .9;
}

console.log(prices);


