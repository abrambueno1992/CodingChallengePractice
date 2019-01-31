/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isEqual= function(s, t) {
    // end, both null, true
    if(!s&&!t) return true;
    
    // s.val === t.val return recursively isEqual(left nodes) && isEqual(right nodes)
    // if true on left and right, returns true;
    // if either left or right is false, return false
    if(s&&t&&s.val===t.val) return isEqual(s.left,t.left)&&isEqual(s.right,t.right);
    return  false;
}
var isSubtree = function(s, t) {
    
    // end, both null, true
    if(!s&&!t) return true;
    
    // if isEqual(s,t) returns true, then it's true;
    if(isEqual(s,t)) return true;
    
    // Go through left nodes first, until the end or it return true
    // Go through right nodes next, until the end of it or it returns true;
    else if (s) return isSubtree(s.left,t)||isSubtree(s.right,t);
    return false;
};
