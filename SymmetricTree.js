/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    // An empty tree is balanced by default
  if (!root) return true;
  const symmHelp = (left, right) => {
    if (!left || !right) return left === right
    if (left.val !== right.val) return false
      // symmetry
      // left node.left, right node.right, left node.right right node.left
      // symmetrical left and right nodes are mirror
    return symmHelp(left.left, right.right) && symmHelp(left.right, right.left)
  }
  
  return symmHelp(root.left, root.right)

};
