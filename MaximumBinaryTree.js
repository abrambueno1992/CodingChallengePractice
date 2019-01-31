/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


var max=function(nums){
    // initial max is first value
    let max=nums[0],max_ind=0;
    nums.map((value,index)=>{
        // reassign max values
        if(max<value) {
            max=value;
            max_ind=index;
        }
    });
    // return max index
    return max_ind;
}
var constructMaximumBinaryTree = function(nums) {
    // if no length, return null
    if(!nums.length) return null;
    // get max index of nums array
    let max_ind=max(nums);
    // tree with maximum node value at root
    let tree=new TreeNode(nums[max_ind]);
    // left nodes with smaller node values
    // from 0 index to max_ind, slice
    tree.left=constructMaximumBinaryTree(nums.slice(0,max_ind));
    // right nodes with larger node values
    // from max_ind + 1 to the end, slice
    tree.right=constructMaximumBinaryTree(nums.slice(max_ind+1));
    
    // return tree after adding nodes
    return tree;
};
