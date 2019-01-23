/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if (!root) return [];
    let res = [];
    // root as an array
    // all nodes into level, at root level
    let level = [root];
    
    while (level.length > 0) {
        // push value of node into res array
        res.push(level.map(node => node.val));
        // temp array holds left and right nodes
        let temp = [];
        for (let i=0; i<level.length; i++){
            // if theres a left, push to temp array
            if (level[i].left)  temp.push(level[i].left);
            // if there's a right, push to temp array
            if (level[i].right) temp.push(level[i].right);
        }
        // level is now temp, holding left and right nodes
        // one level deeper
        level = temp;
    }
    // returns res array, the result
    return res;
    
};
