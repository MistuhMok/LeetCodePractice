/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const hash = {}
    
    for(let i = 0; i < nums.length; i++){
        let curr = nums[i]
        
        if(hash[curr]) hash[curr]++
        else hash[curr] = 1
        
        if(hash[curr] === Math.ceil(nums.length/2)) return curr
    }
};

//Code golf - 44 chars
var majorityElement=n=>n.sort()[n.length>>1]
