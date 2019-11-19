/* How much money could you have made yesterday if you spent all day
trading Google stocks (GOOG; ABC)?

1. Get historic stock prices from yesterday, store
them in a list
2. this list may be an array with minutes after
opening bell (9:30AM) as indices. Values are price (in USD) of one 
share of the stock at the time.

Example: if stock was $500 at 10:30 AM,
'stockPrice[60] = 500'.


Write an efficient function that takes the stock price data
and returs the best profit you could make from one purchase and
one sale of one share yesterday.

You may not short (sell before you buy). You cannot buy and sell in the same minute; at least
one minute should pass between buying and selling. 

//
stockPrices = [ 10, 7, 5, 8, 11, 9];
getMaxProfit(stockPrices) // 6 (buy for $5, sell for $11)
*/

const fetch = require("node-fetch");

async function getPrices() {
    let min = "1min";
    let stockPrices;
    try {
      const response = await fetch(
        `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GOOG&outputsize=full&interval=${min}&apikey=266O79C8AOTKG4R2`
      );
      stockPrices = await response.text();
      stockPrices = JSON.parse(stockPrices);
      return stockPrices;
    } 
    catch (error) {
      console.error("Error:", error);
      return null;
    }
}


module.exports = getPrices;