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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const hash = {}
    
    function search(node, level, parent){
        if(node === null) return
        if(node.val === x || node.val === y) hash[node.val] = [level, parent]
        search(node.left, level+1, node)
        search(node.right, level+1, node)
    }
    
    search(root,0)
    
    return hash[x][0] === hash[y][0] && hash[x][1] !== hash[y][1]
};

//Code golf - 130 chars
var isCousins=(r,x,y,h={},t=(n,l,p)=>n?h[n.val]=[l++,p,t(n.left,l,n),t(n.right,l,n)]:0)=>t(r,0)|h[x][0]==h[y][0]&&h[x][1]!=h[y][1]
