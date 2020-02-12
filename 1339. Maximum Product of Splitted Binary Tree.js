//https://leetcode.com/problems/maximum-product-of-splitted-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxProduct = function(root) {
    let sum = getSum(root);
    let max = 0
    getMax(root)
    
    return max % (Math.pow(10, 9) + 7)

    function getSum(root) {
        if(!root) return 0
        
        let left = getSum(root.left)
        let right = getSum(root.right)
        
        return left + right + root.val  
    }
    
    function getMax(root) {
        if(!root) return 0
        
        let left = getMax(root.left)
        let right = getMax(root.right)
        
        max = Math.max((sum - left) * left, (sum - right) * right, max)
        return left + right + root.val
    }
};
