//https://leetcode.com/problems/word-search/submissions/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const COLS = board[0].length
    const ROWS = board.length
    let found = false
    
    for(let row = 0; row < board.length; row++){
        for(let col =0; col < board[0].length; col++){
            if(board[row][col] === word[0]){
                traverse(row, col, 0)
            } 
        }
    }
    
    return found

    
    function traverse(row,col,idx) {
        if(idx === word.length){
            found = true
            return
        }
        if(row < 0 || row >= ROWS) return 
        if(col < 0 || col >= COLS) return
        if(board[row][col] !== word[idx] || found) return
        
        let temp = board[row][col]
        board[row][col] = ''

        idx++
        traverse(row - 1, col, idx)
        traverse(row + 1, col, idx)
        traverse(row, col + 1, idx)
        traverse(row, col - 1, idx)
        board[row][col] = temp   
    }
};
