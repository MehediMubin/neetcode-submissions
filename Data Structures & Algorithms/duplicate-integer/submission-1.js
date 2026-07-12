class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const mp = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (mp.get(nums[i]) !== undefined) {
                return true;
            } else {
                mp.set(nums[i], true);
            }
        }
        return false;
    }
}
