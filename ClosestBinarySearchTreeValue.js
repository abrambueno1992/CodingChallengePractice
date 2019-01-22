/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let larger = Infinity; 
    let smaller = -Infinity;
    
    while(root != null)
        {
            if(target < root.val)
                {
                    larger = Math.min(root.val, larger);
                    root = root.left;
                }
            else
                {
                    smaller = Math.max(root.val, smaller);
                    root = root.right;
                }
        }
    if(larger-target < target-smaller) return larger;
    else return smaller;
};
