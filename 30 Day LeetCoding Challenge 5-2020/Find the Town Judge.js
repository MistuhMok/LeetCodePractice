/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if(trust.length === 0) return 1
    
    const trustCount = new Array(N+1).fill(0)
    const trustOthers = new Set()
    
    for(const [A,B] of trust){
        trustCount[B]++
        trustOthers.add(A)
    }

    for(let i = 0; i < trustCount.length; i++){
        if(trustCount[i] === N - 1 && !trustOthers.has(i)) return i
    }
    
    return -1
};
