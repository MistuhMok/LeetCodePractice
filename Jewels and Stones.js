/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    const hash = new Set(J)
    let count = 0
    
    for(let i = 0; i < S.length; i++){
        if(hash.has(S[i])) count++
    }
    
    return count
};


//Code golf - 66 chars
var numJewelsInStones=(J,S,c=0)=>[...S].map(e=>c+=J.includes(e))|c
