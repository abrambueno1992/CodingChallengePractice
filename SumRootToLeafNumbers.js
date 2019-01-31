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
        // end
        if(!root) return
        // both left and right are NOT null
        if(!root.left && !root.right){
            // currentPath = "" + root.val;
            // currentPath = root.val as a string
            currentPath += root.val
            // add to result the currentPath
            // result = result + parseInt(currentPath)
            result += parseInt(currentPath)
        }
        // recursive going left from root and going deeper each time
        dfs(root.left, currentPath + root.val)
        //recursive going right from root and going deeper each time
        dfs(root.right, currentPath + root.val)
    }
    
    return result
};
