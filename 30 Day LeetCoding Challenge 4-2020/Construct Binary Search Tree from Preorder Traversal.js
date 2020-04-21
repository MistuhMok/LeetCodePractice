/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let root = new TreeNode(preorder[0])
    let val = preorder[0]
    
    for(let i = 1; i < preorder.length; i++) {
        val = preorder[i]
        root = insert(root)
    }
        
    return root
    
    function insert(node) {
        if(!node) {
            node = new TreeNode(val)
            return node
        } else {        
            if(val < node.val){
            node.left = insert(node.left)
            } else node.right = insert(node.right)
        }
        
        return node
    } 
};
