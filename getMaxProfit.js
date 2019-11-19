function getMaxProfit(stockPrices) {
    if (!stockPrices || stockPrices.length < 2){
        console.error('Invalid input, requires an array of at least 2 numeric stock prices');
        return Error('Invalid input, requires an array of at least 2 numeric stock prices');
    }
    let maxProfit = 0;
    let minBuy = stockPrices[0] ;
    let profit = 0;
    let minLoss = Number.NEGATIVE_INFINITY;
    for (let i = 1; i < stockPrices.length; i++){
        profit = stockPrices[i] - minBuy;
        if (profit > minLoss){
            minLoss = profit;
        }
        if (profit > maxProfit){
            maxProfit = profit;
        }
        if (stockPrices[i] < minBuy ){
            minBuy = stockPrices[i];
        }
    }
    if (maxProfit === 0){ // negative trend
        maxProfit = minLoss;
    }
    return maxProfit;
}


module.exports = getMaxProfit;