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
       if (node) {
           nums.push(node.val);
           checkValues(node.left) 
           checkValues(node.right);
       } else {
           return;
       }
        
    }
    
    
    
    checkValues(trackNode.left)
    checkValues(trackNode.right);
    nums.push(root.val)
    let tracker = 0;
    // console.log("FIRST: ", nums[tracker], nums[0], nums[1], nums)
    while (nums[tracker] !== undefined) {
        let current = nums[tracker];
        for (let i = tracker + 1; nums.length > i; i++) {
            let newSum = current + nums[i];
            // console.log('newSum: ', newSum, ' tracker:', tracker)
            if (newSum === k) {
                return true;
            }
        }
        tracker++;
    }
    // console.log('nums: ', nums);
    return false
    
    return nums;
    
    
};
