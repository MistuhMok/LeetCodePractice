/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */
var findNumOfValidWords = function(words, puzzles) {
    const hash = {}
    const res = []
    
    for(let word of words){
        let mask = 0
        for(let char of word){
            mask |= 1 << (char.charCodeAt() - 97)
        }
        hash[mask] ? hash[mask]++ : hash[mask] = 1
    }
    
    for(let puzzle of puzzles){
        let count = 0
        let mask = 0
        
        for(let char of puzzle){
            mask |= 1 << (char.charCodeAt() - 97)
        }
        
        let first = 1 << puzzle[0].charCodeAt() - 97
        let sub = mask

        while(sub > 0){
            if((sub & first) === first) count += hash[sub]|0
            sub = (sub - 1) & mask
        }
        
        res.push(count)
    }
    
    return res
};
