//https://leetcode.com/problems/find-lucky-integer-in-an-array/

/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    const counts = new Map();
    for (const num of arr) counts.set(num, (counts.get(num) || 0) + 1);
    let res = -1;
    for (const [num, cnt] of counts.entries()) {
        if (num === cnt) {
            if (num > res) res = num;
        }
    }
    return res;
};
