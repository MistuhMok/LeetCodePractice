/**
 * @param {number[]} A
 * @return {number}
 */
var maxSubarraySumCircular = function(A) {
    let max = -Infinity
    let min = Infinity
    let total = 0
    let sum1 = 0
    let sum2 = 0
    for(let i = 0; i < A.length; i++){
        total += A[i]
        sum1 += A[i]
        sum2 += A[i]
        max = Math.max(max, sum1)
        if(sum1 < 0) sum1 = 0
        min = Math.min(sum2, min)
        if(sum2 > 0) sum2 = 0
    }
    
    if(total === min) return max
    else return Math.max(max, total - min)
};

//Code golf - 141
var maxSubarraySumCircular=(A,m=Infinity,M=-m,t=i=j=0)=>A.map(e=>{t+=e;i+=e;j+=e;M=M>i?M:i;i=i<0?0:i;m=m>j?j:m;j=j>0?0:j})|t==m?M:M>t-m?M:t-m

