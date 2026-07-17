class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0, curr = prices[0];
        for (let i = 0; i < prices.length; i++) {
            if (curr < prices[i]) {
                profit = Math.max(profit, prices[i] - curr);
            } else {
                curr = prices[i];
            }
        }
        return profit;
    }
}
