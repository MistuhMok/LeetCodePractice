/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let map = new Map()
    
    for(let i = 0; i < s.length; i++){
        let curr = s[i]
        
        if(map.has(curr)) map.set(curr, map.get(curr) + 1)
        else map.set(curr, 1)
    }
    
    for(let [key, value] of map){
        if(value === 1) return s.indexOf(key)
    }
    
    return -1
};

//Code golf - 83
var firstUniqChar=s=>s.indexOf([...s].filter(e=>s.indexOf(e)==s.lastIndexOf(e))[0])

