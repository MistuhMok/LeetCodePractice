/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    const r = grid.length
    const c = grid[0].length
    const memo = []
    
    for (let i = 0; i < r; i++) {
        memo.push(new Array(c).fill(0))
    }
    return path(r-1, c-1);
    
    function path(r, c) {
        if (r === 0 && c === 0) return grid[0][0]
        if (r < 0 || c < 0) return Infinity
        if (memo[r][c] != 0) return memo[r][c]

        const res = Math.min(path(r-1, c), path(r, c-1)) + grid[r][c]
        memo[r][c] = res

        return res
    };
};

