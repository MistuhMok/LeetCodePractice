//https://leetcode.com/problems/number-of-islands/submissions/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if(!grid.length) return 0
    let count = 0
    let height = grid.length
    let width = grid[0].length
    
    for(let r = 0; r < height; r++){
        for(let c = 0; c < width; c++){
            if(grid[r][c] === '1'){
                count++
                search(r,c)
            }
        }
    }
    
    return count
    
    function search(row, col){
        if(row === height || row < 0) return
        if(col === width || col < 0) return
        if(grid[row][col] === '0') return
        
        grid[row][col] = '0'
        search(row + 1, col)
        search(row - 1, col)
        search(row, col + 1)
        search(row, col - 1)
    }
};
