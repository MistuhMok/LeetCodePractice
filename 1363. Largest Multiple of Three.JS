//https://leetcode.com/problems/largest-multiple-of-three/

/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    const nums = new Array(10).fill(0);
    
    let sum = 0
    for(let num of digits){
        nums[num]++
        sum += num
    }
    
    if(sum === 0) return '0'
    if (sum % 3 === 0) return stringify(nums)
    
    const remainder = sum % 3
    for(let i = remainder; i < 10; i += 3){
        if(nums[i] > 0){
            nums[i]--
            return stringify(nums)
        }
    }
    
    let count = 0
    const start = 3 - remainder
    
    for(let i = start; i < 10; i+= 3){
        while(nums[i] > 0) {
            nums[i]--
            count++
            if(count === 2) return stringify(nums)
        }
    }

          
    return ""
    
    function stringify(arr) {
        let res = ''
        
        for(let i = arr.length - 1; i > -1; i--){
            if(arr[i] > 0){
                let curr = i.toString()
                res += curr.repeat(arr[i])
            }
        }
        
        return res
    }
};
