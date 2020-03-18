//https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
    const count = new Array(3).fill(0)
    let res = 0 
    let i = 0
    const charCodeA = 'a'.charCodeAt()
    for (let j = 0; j < s.length; j++) {
        count[s[j].charCodeAt() - charCodeA]++;
        while (count[0] > 0 && count[1] > 0 && count[2] > 0){
            let curr = s[i++]
            
            if(curr) count[curr.charCodeAt() - charCodeA]--;
        }
        res += i;
    }
    
    return res;
};
