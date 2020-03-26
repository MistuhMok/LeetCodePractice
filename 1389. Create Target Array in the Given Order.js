//https://leetcode.com/problems/create-target-array-in-the-given-order/submissions/

/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
var createTargetArray = function(nums, index) {
    const target = []
    
    for(let i = 0; i < nums.length; i++){
        if(target[index[i]] !== undefined) target.splice(index[i], 0, nums[i])
        else target[index[i]] = nums[i]
    }
    
    return target
};
