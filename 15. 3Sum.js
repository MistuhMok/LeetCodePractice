//https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    const res = []
    
    if(nums.length < 3) return res
    
    nums.sort((a,b)=> a-b)

    for(let i = 0; i < nums.length; i++){
        let curr = nums[i]       
        if(curr > 0) break
        if(curr === nums[i-1]) continue
        
        let j = i + 1
        let k = nums.length - 1
        
        
        while(j < k){
            let sum = curr + nums[j] + nums[k]       

             if(sum === 0) {
                res.push([curr,nums[j],nums[k]])  
                while(nums[j] === nums[j+1]) j++
                while(nums[k] === nums[k-1]) k--
                j++
                k--
            }
            else if(sum > 0) k--
            else j++
            
        }
        
        
    }
    
    return res
};
