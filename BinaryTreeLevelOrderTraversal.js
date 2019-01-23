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
    const nodeTrack = root;
    const nodesArr = [];
    nodesArr.push([]);
    let tracker = 0;
    nodesArr[tracker].push(root.val);
    tracker++;
    
    const checkValues = (lnode, rnode) => {
        console.log('locked')
        if (!lnode && !rnode) return;
        if (lnode && rnode) {
            nodesArr.push([]);
            nodesArr.push(lnode.val);
            nodesArr[tracker].push(rnode.val);
            tracker++;
            checkValues(lnode.left, rnode.right);
        } else if (lnode && !rnode) {
            nodesArr.push([]);
            nodesArr[tracker].push(lnode.val);
            tracker++;
            checkValues(lnode.left, rnode);
        } else if (!lnode && rnode) {
            nodesArr.push([]);
            nodesArr[tracker].push(rnode.val);
            tracker++;
            checkValues(lnode, rnode.right);
        } else {
            return
        }
    }
    if (!root) return null;
    
    
    checkValues(nodeTrack.left, nodeTrack.right);
    return nodesArr;
    console.log("end values:", nodesArr)
    
};
