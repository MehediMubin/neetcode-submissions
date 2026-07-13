class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false;
        }

        const mp = new Map();
        for (let i = 0; i < s.length; i++) {
            if (mp.has(s[i])) {
                mp.set(s[i], mp.get(s[i]) + 1);
            } else {
                mp.set(s[i], 1);
            }
        }

        for (let i = 0; i < t.length; i++) {
            if (!mp.has(t[i])) {
                return false;
            } else {
                const count = mp.get(t[i]) - 1;
                if (count == 0) {
                    mp.delete(t[i]);
                } else {
                    mp.set(t[i], mp.get(t[i]) - 1);
                }
            }
        }

        if (mp.size == 0) return true;
        return false;
    }
}
