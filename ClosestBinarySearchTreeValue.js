/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let nodeTrack = root;
    let closest = target * 5; // for laughs
    const checkValue = nodeV => {
        if (nodeV) {
            let dif = target - closest;
            
            let difNode = target - nodeV.val;
            
                if (dif < 0) {
                    dif *= -1;
                }
                if (difNode < 0) {
                    difNode *= -1;
                }
                
            let result;
            if (difNode > 0 ) {
                result = (dif < difNode) ? closest : nodeV.val;
                console.log('result: ', result, 'nodeV.val: ', nodeV.val)
                
            } else {
                result = closest;
            }
            
            console.log('dif: ', dif, 'result:', result);
            closest = result;
        }
        if (nodeV) {
            checkValue(nodeV.left) && checkValue(nodeV.right);
            
        }
    }
    closest = root.val;
    checkValue(nodeTrack.left);
    checkValue(nodeTrack.right);
    return closest;
};
