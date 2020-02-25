//https://leetcode.com/problems/validate-binary-tree-nodes/submissions/

/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */
var validateBinaryTreeNodes = function(n, leftChild, rightChild) {
    const q = [0]
    const visited = new Set();
    let visits = 0;
    
    while (q.length) {
        const curr = q.shift();
        visits++;
        if (curr === -1) continue;
        if (visited.has(curr)) return false;
        visited.add(curr);
        q.push(leftChild[curr], rightChild[curr]);
    }
  
    return (visits - 1) / 2 === n;
};
