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
    // root pushed into array
    let myQ = [[root, 0]], myMap = {};
    // while there's a node
    while (myQ.length !== 0) {
        // shift node from front and index
        let [node, i] = myQ.shift();
        
        // myMap object at index, if undefined assign, else push node value
        // myMap tracks index with node values
        myMap[i] === undefined ? myMap[i] = [node.val] : myMap[i].push(node.val);
        // node.left exists, push the left node to myQ array, with i - 1 index
        if (node.left) myQ.push([node.left, i-1]);
        // node.right exists, push the right node to myQ array, with i + 1 index
        if (node.right) myQ.push([node.right, i+1]);
    }
    // go through myMap object keys
    // returning the proper node values after sorting and mapping
    return Object.keys(myMap).sort((k1, k2) => k1 - k2).map(k => myMap[k]);
};
