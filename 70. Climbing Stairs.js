//https://leetcode.com/problems/climbing-stairs/solution/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const memo = []
    
    return climb(0)
    
    function climb(curr){
        if(curr > n) return 0
        if(curr === n) return 1
        if(memo[curr] > 0) return memo[curr]
        
        memo[curr] = climb(curr + 1) + climb(curr + 2)
        console.log(memo)
        return memo[curr]
    }
};
