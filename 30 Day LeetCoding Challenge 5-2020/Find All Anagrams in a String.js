/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    if(s.length < p.length) return []
    
    const pCount = new Array(26).fill(0)
    const sCount = new Array(26).fill(0)
    const res = []
    
    for(let char of p){
        pCount[char.charCodeAt() - 97]++
    }
    
    for(let i = 0; i < s.length; i++){
        sCount[s.charCodeAt(i) - 97]++
        
        if(i>= p.length) sCount[s.charCodeAt(i - p.length) - 97]--
        if(pCount.join('') === sCount.join('')) res.push(i-p.length + 1)
    }
    
    
    return res
};


//Code golf - 179
var findAnagrams=(s,p,A=Array(122).fill(0),f=(w,a=[...A])=>[...w].map(e=>a[e.charCodeAt()]++)&&a.join``,P=f(p),r=[])=>[...s].map((e,i)=>f(s.slice(i,i+p.length))==P?r.push(i):0)&&r
