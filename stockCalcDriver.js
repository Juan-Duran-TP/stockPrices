const getMaxProfit = require('./getMaxProfit.js')
const getPrices = require('./getPrices.js')
let min = "1min";

let priceArray = [];
getPrices().then(data => {
    let item;
    for (const timestamp in data[`Time Series (${min})`]) {
      item = data[`Time Series (${min})`][timestamp]["4. close"];
      priceArray.push(parseFloat(item));
    }
    console.log(getMaxProfit(priceArray));
});
