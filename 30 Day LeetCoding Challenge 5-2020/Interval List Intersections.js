/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
var intervalIntersection = function(A, B) {
    const res = []
    let i = 0
    let j = 0
    
    while (A[i] && B[j]){
        let [aStart, aEnd] = A[i]
        let [bStart, bEnd] = B[j]
        let min = Math.max(aStart, bStart)
        let max = Math.min(aEnd, bEnd)
        
        if(min <= max){
            res.push([min,max])
        }
        console.log(min,max, i, j)
        if(aEnd > bEnd) j++
        else i++
    }
    
    return res
};

//Code golf - 146
var intervalIntersection=(A,B,r=[],i=j=0)=>{while(A[i]&&B[j]){[x,y]=A[i];[X,Y]=B[j];(m=X>x?X:x)<=(M=Y<y?Y:y)?r.push([m,M]):0;y>Y?j++:i++}return r}
