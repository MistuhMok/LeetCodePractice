/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    let res
  
    function traverse(root) {
        if (!root) return

    traverse(root)
    return res
         traverse(root.left)
        if(--k === 0) res = root.val
        traverse(root.right)
    }
};

//Code golf - 85
var kthSmallest=(r,k,R=[],f=(n)=>n?f(n.left)|R.push(n.val)|f(n.right):0)=>f(r)&R[k-1]
