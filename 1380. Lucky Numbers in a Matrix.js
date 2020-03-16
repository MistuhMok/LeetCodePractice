//https://leetcode.com/problems/lucky-numbers-in-a-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers  = function(matrix) {
    const ROWS = matrix.length
    const COLS = matrix[0].length
    const colMax = new Array(COLS).fill(-Infinity)
    const rowMin = new Set()
    const res = []

    for(let r = 0; r < ROWS; r++){
        let currMin = Infinity
        
        for(let c = 0; c < COLS; c++){
            let curr = matrix[r][c]
            
            if(curr < currMin) currMin = curr
            if(curr > colMax[c]) colMax[c] = curr
        }
        
        rowMin.add(currMin)
    }
    
    for(let i = 0; i < COLS; i++){
        if(rowMin.has(colMax[i])) res.push(colMax[i])
    }
    
    return res
};
