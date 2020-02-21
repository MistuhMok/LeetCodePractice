//https://leetcode.com/problems/move-zeroes/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {    
    let pointer = 0
    
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i]
        if(curr !== 0) {
            nums[i] = nums[pointer]
            nums[pointer] = curr
            pointer++
        }   
    }
};
    
   
