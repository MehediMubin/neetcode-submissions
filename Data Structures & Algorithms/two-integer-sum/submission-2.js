class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mp = new Map();

        const ans = [];
        for (let i = 0; i < nums.length; i++) {
            let val = target - nums[i];
            if (mp.has(val)) {
                return [mp.get(val), i];
            } else {
                mp.set(nums[i], i);
            }
        }
    }
}
