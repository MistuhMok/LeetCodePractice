//https://leetcode.com/problems/sort-integers-by-the-power-value/

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function(lo, hi, k) {
    const powers = []
    
    for(let i = lo; i <= hi; i++){
        let curr = i
        let power = 0
        
        while(curr !== 1){
            if(curr % 2 === 0) curr /= 2
            else curr = 3 * curr + 1
            
            power++
        }
        
        powers.push([i, power])        
    }
    
    powers.sort((a,b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1])    
    return powers[k - 1][0]
};
