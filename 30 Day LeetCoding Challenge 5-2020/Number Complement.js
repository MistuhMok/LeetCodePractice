/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let sum = 1
    while (sum < num){
        sum = (sum << 1) + 1
    }
    
    return sum - num
};
