//https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length === 0) return 0
    let l = 0
    let r = 0
    const hash = {}
    let count = 0
    
    while(r < s.length){
        let curr = s[r]
        if(hash[curr] !== undefined) l = Math.max(hash[curr]+1,l)
        
        count = Math.max(count, r - l + 1)
        hash[curr] = r
        r++
    }
    
    return count
};
