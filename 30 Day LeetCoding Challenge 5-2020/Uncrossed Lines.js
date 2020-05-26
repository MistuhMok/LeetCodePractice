/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */

var maxUncrossedLines = function(A, B) {
    const dp = []
    const a = A.length
    const b = B.length
    let counter = a + 1
    while(counter--) dp.push(new Array(b + 1).fill(0))
   
    for(let i = 1; i <= a; i++){
        for(let j = 1; j <= b; j++){
            if(A[i-1] === B[j-1]) dp[i][j] = dp[i-1][j-1] + 1
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1])
        }
    }
    
    console.log(dp)
    return dp[a][b]
};
