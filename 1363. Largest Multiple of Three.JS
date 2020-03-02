//https://leetcode.com/problems/largest-multiple-of-three/

/**
 * @param {number[]} digits
 * @return {string}
 */
var largestMultipleOfThree = function(digits) {
    const nums = new Array(10).fill(0);
    
    //Populate an array with the amount of each digit at that index
    let sum = 0
    for(let num of digits){
        nums[num]++
        sum += num
    }
    
    //Edge case: if an array is all 0s return '0'
    if(sum === 0) return '0'

    //When all the digits of a number added together are divisible by 3 that means the number is divisible by 3
    if (sum % 3 === 0) return stringify(nums)
    
    //When there is a remainder try to remove the digit that would give us that remainder
    //E.g. if there is a remainder of 1, we try to remove the digits 1, 4, or 7 so that our sum will become divisible by 3
    const remainder = sum % 3
    for(let i = remainder; i < 10; i += 3){
        if(nums[i] > 0){
            nums[i]--
            return stringify(nums)
        }
    }
    
    //If one of the digits that would cause a remainder does not exist we try to remove two of the next lowest digit
    //E.g. if there is a remainder of 1 but there is no 1, 4, or 7, we try to remove two numbers that would each have a remainder of 2
    //So we try to remove two of the digits 2, 5, or 8 so that our sum will become divisible by 3
    let count = 0
    const start = 3 - remainder
    for(let i = start; i < 10; i+= 3){
        while(nums[i] > 0) {
            nums[i]--
            count++
            if(count === 2) return stringify(nums)
        }
    }

    //If neither condition can be satisfied we return an empty string     
    return ""
    
    //Takes an array, starts from the end to create the largest number possible, and appends the available digits to the result
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
