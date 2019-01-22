/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    let nodeTrack = s;
    const traverse = (tree, orT) => {
        let origN = orT;
        let newN = tree;
        // while (tree) {
            if (!origN && newN) return;
        if (!newN && origN) return;
        if (!origN && !newN) return true;
            if (tree.val !== origN.val) {
                return;
            }
        console.log('iter, val:', tree.val)
        traverse(newN.left, orT);
        traverse(newN.right, orT);
        
            
        // }
    }
    const checkValue = node => {
        if (!node && !t) return true;
        if (!node && t) return false;
        if (!t && node) return false;
        if (node) {
            
            console.log('current node: ', node.val, 'node:', node.val, 't:', t.val)
            traverse(node.left, t);
            traverse(node.right, t);
        }
    }
    if (!s) return null;
    if (s === t) {
        return true;
    }
    checkValue(nodeTrack);
    // checkValue(nodeTrack.right);
    return false;
};
