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
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const nums = [];
    let trackNode = root;
    const checkValues = node => {
        // if node is NOT null
       if (node) {
           // push root value to nums
           nums.push(node.val);
           // recursively call checkValues with left nodes
           checkValues(node.left) 
           // recursively call checkValues with right nodes
           checkValues(node.right);
       } 
    }
    
    // push root value to nums
    nums.push(root.val)
    // recursively go through left nodes
    checkValues(trackNode.left)
    // recursively go through right nodes
    checkValues(trackNode.right);
    
    let tracker = 0;
    while (nums[tracker] !== undefined) {
        // value at index tracker
        let current = nums[tracker];
        for (let i = tracker + 1; nums.length > i; i++) {
            // sum of current value and value at i index
            let newSum = current + nums[i];
            // if newSum is equal to k, solution found
            if (newSum === k) {
                return true;
            }
        }
        // increment tracker
        tracker++;
    }
    // return false, if newSum !== k for all values
    return false
    
    
    
};
