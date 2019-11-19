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