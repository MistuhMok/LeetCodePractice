/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function(matrix) {
  let count = 0
  for (let r = 0; r < matrix.length; ++r) {
    for (let c = 0; c < matrix[0].length; ++c) {
      if (matrix[r][c] === 1 && r > 0 && c > 0) {
        matrix[r][c] += Math.min(matrix[r - 1][c], matrix[r][c - 1], matrix[r - 1][c - 1]);
      }
      count += matrix[r][c];
    }
  }
  return count;
};

//Code golf - 120
var countSquares=(m,C=0)=>m.map((e,r)=>e.map((E,c)=>C+=E&&r&&c?m[r][c]+=Math.min(m[r][c-1],m[r-1][c],m[r-1][c-1]):E))&&C
                                             
