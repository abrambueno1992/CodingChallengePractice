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
var isSymmetric = function(root) {
    let nodeTrack = root;
    if (!root) return null;
    const rootVal = root.val
    const lNodes = [];
    const rNodes = [];
    const aNodes = [];
    const findNodes = (node, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) => {
        if (node) {
            aNodes.push(node.val);
            findNodes(node.left);
            findNodes(node.right);
        }
    }
    
    let left = findNodes(root.left);
    let lengthL = 0;
    const leftNodes = [];
    if (aNodes.length !== 0) {
        lengthL = aNodes.length;
        let trackI = 0;
        while (aNodes[trackI] !== undefined) {
            leftNodes.push(aNodes.shift());
        }
    }
    
    let right = findNodes(root.right)
    let lengthR = 0;
    const rightNodes = [];
    if (aNodes.length !== 0) {
        console.log('right nodes', aNodes)
        lengthR = aNodes.length;
        let trackI = 0;
        while (aNodes[trackI] !== undefined) {
            rightNodes.push(aNodes.shift());
        }
    }
    console.log('all nodes', leftNodes, rightNodes);
    if (rightNodes[0] === undefined && leftNodes[0] === undefined) {
        if (root) {
            return true;
        } else {
            return false;
        }
    }
    if ((rightNodes.length === leftNodes.length)) {
        console.log('left length', leftNodes.length, ' righ length', rightNodes.length)
        if (leftNodes.length % 2 === 0 && rightNodes.length === 1) {
            return true;
        } else if (leftNodes.length >= 3) {
            if (leftNodes.lenght % 2 !== 0) {
                return true
            }
            // return false;
        } else {
            return false
        }
        
    } 
//     else if ((rightNodes.length === leftNodes.length) && (leftNodes.length === 0)) {
        
//         return true
//     } 
    else {
        return false;
    }
    
    
};
