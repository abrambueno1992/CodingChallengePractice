/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
var inorderSuccessor = function(root, p) {
    
    let nodeTrack = root;
    if (!root) return null
    const numsArr = [];
    const mapNodes = new Map();
    const checkValues = node => {
        if (!node) return;
        // console.log("Current value:", node.val)
        if (node) {
            if (node.val > p.val) {
                mapNodes.set(node.val, [node]);
            }
        }
        checkValues(node.left);
        checkValues(node.right);
    }
    
    // if (nodeTrack.val > p.val) {
    //     mapNodes.set(nodeTrack.val, [nodeTrack]);
    // }
    checkValues(nodeTrack);
    
    let result = null;
    for (let [k, v] of mapNodes) {
        if (result === null) {
            result = v
        } else {
            // let min = Math.min(v.val, result.v);
            if (result.val > v.val) {
                result = v
            }
        }
        // console.log('k: ', k, " v: ", v)
        // console.log(k, v);
    }
    console.log('result', result);
    return result;
    // let test = Object.keys(mapNodes).sort((k1,k2) => {
    //     console.log("LOOPING, K1:", k1, " k2: ", k2)
    // })
    
    
    // console.log("Nums Arr:", numsArr," mapNodes", mapNodes, mapNodes.val);
};
