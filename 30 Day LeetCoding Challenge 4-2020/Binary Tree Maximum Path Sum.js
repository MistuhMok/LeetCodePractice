/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = -Infinity
    search(root)
    return max
    
    function search(node){
        if (node === null) return 0
        
        let left = Math.max(search(node.left), 0)
        let right = Math.max(search(node.right), 0)
        
        max = Math.max(max, node.val + left + right)
        return node.val + Math.max(left, right)
    }
};

//Code golf - 146
var maxPathSum=(r,m=-Infinity,h=(r,L=r&&h(r.left),R=r&&h(r.right))=>r?(m=Math.max(m,r.val+(L>0&&L)+(R>0&&R)))*0+r.val+Math.max(0,L,R):0)=>h(r)*0+m
