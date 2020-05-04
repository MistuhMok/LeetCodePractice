/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const hash = {}
    
    for(let i = 0; i < magazine.length; i++){
        let curr = magazine[i]
        if(hash[curr]) hash[curr]++
        else hash[curr] = 1
    }
    
    for(let i = 0; i < ransomNote.length; i++){
        let curr = ransomNote[i]
        if(!hash[curr]) return false
        hash[curr]--
    }
    
    return true
};


var canConstruct=(r,m)=>[...r].every(e=>m.includes(e)?m=m.replace(e,''):0)
                                               
