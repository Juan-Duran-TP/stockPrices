const getMaxProfit = require('./getMaxProfit.js')

const stockPricesA = [ 10, 7, 5, 8, 11, 9];
const stockPricesB = [ 2, 4, 10, 3, 1, 3];
const stockPricesC = [ 20, 10, 8, 5, 3, 2];
const stockPricesD = [ 3, 3, 3, 3, 3, 3];


describe('getMaxProfit', () => {
    test("handles lowest buy found first then highest sell", () => {
        const subject = getMaxProfit(stockPricesA);
        expect(subject).toBe(6);
    })
    test("handles highest sell found first then lowest buy", () => {
        const subject = getMaxProfit(stockPricesB);
        expect(subject).toBe(9);
    })
    test("handles successively smaller values", () => {
        const subject = getMaxProfit(stockPricesC);
        expect(subject).toBe(-1);
    })
    test("handles all matching values", () => {
        const subject = getMaxProfit(stockPricesD);
        expect(subject).toBe(0);
    })
})