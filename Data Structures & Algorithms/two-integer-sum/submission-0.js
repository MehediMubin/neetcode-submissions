class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const mp = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (mp.has(nums[i])) {
                mp.get(nums[i]).push(i);
            } else {
                mp.set(nums[i], [i]);
            }
        }

        const ans = [];
        for (let i = 0; i < nums.length; i++) {
            let val = target - nums[i];
            if (mp.has(val)) {
                if (val == nums[i]) {
                    if (mp.get(val).length >= 2) {
                        ans.push(mp.get(val)[0], mp.get(val)[1]);
                        break;
                    }
                } else {
                    ans.push(i, mp.get(val)[0]);
                    break;
                }
            }
        }

        return ans;
    }
}
