/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let lastPos = nums.length - 1
    for (let i = nums.length - 2; i >= 0; i--){
        if (i + nums[i] >= lastPos) lastPos = i
    }
    return lastPos === 0
};

//Code golf - 58 chars    
var canJump=(n,m)=>n.every((e,i)=>m<i?0:(m=m>e+i?m:e+i)|1)
