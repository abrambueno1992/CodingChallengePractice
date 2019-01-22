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
var sumNumbers = function(root) {
    let result = 0
    dfs(root, "")
    
    function dfs(root, currentPath){
        if(!root) return
        if(!root.left && !root.right){
            currentPath += root.val
            result += parseInt(currentPath)
            return
        }
        dfs(root.left, currentPath + root.val)
        dfs(root.right, currentPath + root.val)
    }
    
    return result
};
