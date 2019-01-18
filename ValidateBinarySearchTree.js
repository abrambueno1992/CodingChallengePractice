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
var isValidBST = function(root) {
    return checkVal(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    
};

function checkVal(node, min, max) {
  if (!node) {
    return true;
  }

  if (node.val < min || node.val > max) {
    return false;
  }

  // Current val is max for left child and min for right child
    // node.val === root
    // min === minimum on left, left nodes are always less than root
    // node.val - 1 === max on left, left is less than root
    
    // node.val + 1 === minimum on right, right is bigger than root
    // max === maximum on right, right is always bigger than root
  return checkVal(node.left, min, node.val - 1) && checkVal(node.right, node.val + 1, max);
}
