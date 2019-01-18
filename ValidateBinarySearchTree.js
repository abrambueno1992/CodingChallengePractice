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
var isValidBST = function(root) {
    // console.log('root', root, root.val);
    const left = [];
    const right = [];
    let checkValuesR;
    let checkValuesL;
    const rootVal = root ? root.val : null;
    if (rootVal === null) return root
    checkValuesL = (root1) => {
        if (root1) {
            left.push(root1.val)
        }
        if (root1) {
            checkValuesR(root1.right);
        }
        if (root1) {
            checkValuesL(root1.left)
        }
    }
    
    checkValuesR = (root1) => {
        if (root1) {
            right.push(root1.val)
        }
        if (root1) {
            checkValuesR(root1.right);
        }
        if (root1) {
            checkValuesL(root1.left)
        }
    }
    let resL = checkValuesL(root.left);
    let resR = checkValuesR(root.right);
    let large;
    let small;
    if (right.length > left.length) {
        large = right;
        small = left;
    } else {
        large = left;
        small = right;
    }
    let lroot = 0;
    let rroot = 0;
    for (let i = 0; large > i; i++) {
        
        if (i === 0) {
            if (left[0] > rootVal) {
                return false;
            }
            if (right[0] < rootVal) {
                return false
            }
            if (left[0] > right[0]) {
                return false;
            }
            
        } else {
            lroot = left[i - 1];
            rroot = right[i - 1];
            if (left[i] > right[i]) {
                return false;
            }
            if (rroot > right[i]) {
                return false;
            }
            if (lroot < left[i]) {
                return false
            }
        }
    }
    console.log(left, right)
    return true;
    
};
