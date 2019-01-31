/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = this.val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry = 0;
    let newNode = new ListNode(0);
    let current = newNode;
    // only one of them has to not be null
    while(l1 || l2 || carry) {
        // sum l1.va + l2.val + carry
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        
        // remainder sum % 10 === this.val of next node
        // current.next has the remainder of sum % 10
        current.next = new ListNode(sum % 10);
        
        // sets next pointer, curent.next = new ListNode(sum % 10);
        current = current.next;
        
        // remainder if sum >= 10
        carry = sum >= 10 ? 1 : 0;
        // if l1 !== null, l1 = l1.next
        l1 = l1 ? l1.next : null; 
        // if l2 !== null, l2 = l2.next
        l2 = l2 ? l2.next : null;
  }
  return newNode.next;
};
