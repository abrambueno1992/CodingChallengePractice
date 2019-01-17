/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let tracker = 0;
    let lArr= lists[tracker];
    const lValues = [];
    if (lists.length === 0 || lists[0] === undefined || lists === [] || !lists) {
        return lists
    }
    
    const loopNodes = lArr => {
        while (lArr) {
            console.log(lArr.val);
            lValues.push(lArr.val);
            lArr = lArr.next;
        }
        tracker++;
        lArr = lists[tracker];
        if (lArr) {
            loopNodes(lArr);
        }
    }
    loopNodes(lArr)
    lValues.sort((a, b) => a - b)
    
    console.log('Values are:', lValues);
    let newNode = new ListNode(lValues[0]);
    // newNode = newNode.next;
    let nNode = newNode;
    let trackNew = 1;
    while (lValues[trackNew] !== undefined) {
        nNode.next = new ListNode(lValues[trackNew]);
        nNode = nNode.next
        trackNew++;
    }
    // if (newNode[0] === undefined) {
    //     return lists
    // }
    return newNode;
};
