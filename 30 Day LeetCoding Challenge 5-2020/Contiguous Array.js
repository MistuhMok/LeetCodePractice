/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    const countHash = {}
    let max = 0
    let count = 0
    
    countHash[0] = -1
    
    for(let i = 0; i < nums.length; i++){
        count += nums[i] === 0 ? 1 : -1
        if(countHash[count] !== undefined) max = Math.max(max, i - countHash[count])
        else countHash[count] = i
    }
    
    return max
};
