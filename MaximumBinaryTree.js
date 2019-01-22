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
    let max=nums[0],max_ind=0;
    nums.map((value,index)=>{
        if(max<value) {
            max=value;
            max_ind=index;
        }
    });
    return max_ind;
}
var constructMaximumBinaryTree = function(nums) {
    if(!nums.length) return null;
    let max_ind=max(nums);
    let tree=new TreeNode(nums[max_ind]);
    tree.left=constructMaximumBinaryTree(nums.slice(0,max_ind));
    tree.right=constructMaximumBinaryTree(nums.slice(max_ind+1));
    return tree;
};
