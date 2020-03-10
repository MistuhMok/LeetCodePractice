//https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    const char1 = 'a'
    const char2 = 'b'
    
    if(n % 2 === 1) return char1.repeat(n)
    
    return char1.repeat(n - 1) + char2
};
