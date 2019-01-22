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
    const start = root.val;
    let index = 0;
    const sums = [];
    sums.push(start);
    const checkValues = (nodes, track) => {
        if (sums[track] === undefined) {
            if (nodes) {
               sums[track] =(nodes.val); 
            }
            
        } else if (nodes){
            // let newSum = sums[index] + nodes.val;
            sums[track] += nodes.val;
            // index++
            checkValues(nodes.left, track + 1)
            checkValues(nodes.right, track + 2);
        } else {
            
        }
        
        
        
    }
    checkValues(root.left, index + 1) && checkValues(root.right, index + 2);
    console.log('result: ', sums)
    return sums
};
