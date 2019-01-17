/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    
    let trackA = headA;
    let trackB = headB;
    // if either Nodes are null, return null
    if (!headA || !headB) {
    return null;
  }

    
    while (trackA !== trackB) {
        // if trackA !== null, trackA = trackA.next
        // if trackA === null, trackA = headB
        trackA = trackA ? trackA.next : headB;
        
        // if trackB !== null, trackB = trackB.next
        // if trackB === null, trackB = headA;
        trackB = trackB ? trackB.next : headA;
        
    }
    return trackA;
 
    
};
