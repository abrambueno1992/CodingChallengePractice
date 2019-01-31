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
                    // return the smallest value, root.val or larger
                    larger = Math.min(root.val, larger);
                    // root changed to root.left
                    // left nodes have lower values
                    root = root.left;
                }
            else
                {
                    // value is less than target
                    // return the maximum value, root.val or smaller
                    smaller = Math.max(root.val, smaller);
                    // root changed to root.right
                    // right nodes have higher values
                    root = root.right;
                }
        }
    // if larger < target
    // if target > smaller
    // return larger
    if(larger-target < target-smaller) return larger;
    // else if larger > target, larger is above the target
    else return smaller;
};
