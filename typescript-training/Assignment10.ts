//Best Time to Buy and Sell Stock
//You are given an array prices where prices[i] is the price of a given stock on the i
//th day.
//You want to maximize your profit by choosing a single day to buy one stock and choosing
//a different day in the future to sell that stock.
//Return the maximum profit you can achieve from this transaction. If you cannot achieve
//any profit, return 0.


function calculateMaxProfit(prices: number[]): number {
    // Case 1: Less than 2 prices means no transaction can happen
    if (prices.length < 2) return 0;

    let minPrice: number = prices[0]; // Start with the first price as minimum
    let maxProfit: number = 0;        // Default to 0 profit

    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];

        // If price is higher than our min, check for profit
        if (currentPrice > minPrice) {
            const profit = currentPrice - minPrice;
            // Only update maxProfit if this deal is better than what we found before
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        } 
        // If price is lower than our min, update min
        else {
            minPrice = currentPrice;
        }
    }

    return maxProfit;
}

// example 1 and example 2:
console.log(calculateMaxProfit([7, 1, 5, 3, 6, 4])); 
console.log(calculateMaxProfit([7, 6, 4, 3, 1]));     



