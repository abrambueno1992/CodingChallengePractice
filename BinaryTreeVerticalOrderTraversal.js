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
var verticalOrder = function(root) {
    if (!root) return [];
    // push all nodes into myQ, as an array
    let myQ = [[root, 0]], myMap = {};
    
    while (myQ.length !== 0) {
        // remove nodes from the front
        // after shift, myQ is empty
        let [node, i] = myQ.shift();
        // push the values at index to myMap
        // node value saved in myMap[i] index
        myMap[i] === undefined ? myMap[i] = [node.val] : myMap[i].push(node.val);
        // nodes on the left have a negative index
        if (node.left) myQ.push([node.left, i-1]);
        // nodes on the right have a positive index
        if (node.right) myQ.push([node.right, i+1]);
    }
    // sorts myMap in order of indexes, negative to positive order
    let res1 = Object.keys(myMap).sort((k1, k2) => k1 - k2);
    // get the values of each of the indexes in order
    // from negative to positive
    let res2 = res1.map(k => myMap[k]);
    return res2;
};
