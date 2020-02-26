//https://leetcode.com/problems/closest-divisors/

/**
 * @param {number} num
 * @return {number[]}
 */
var closestDivisors = function(num) {
    let num1 = num + 1
    let num2 = num + 2
    const res = []
    let diff = Infinity
    const calc = (num) => Math.floor(Math.sqrt(num))
    
    for(let i = calc(num2); i >= 1; i--){
        if(num2 % i === 0) {
            res.push(i, num2/i)
            diff = num2/i - i
            break;
        }
    }
    
    for(let i = calc(num1); i >= 1; i--){
        if(num1 % i === 0 && num1/i - i < diff) return [i, num1/i]
    }
    
    return res
};
