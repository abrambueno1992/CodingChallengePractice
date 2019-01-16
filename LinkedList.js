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
    let cur1 = l1;
    const sumArr = [];
    
    let tracker = 0;
    while (cur1 !== null) {
        console.log(cur1.val);
        sumArr[tracker] = cur1.val;
        cur1 = cur1.next;
        tracker++;
    }
    
    let cur2 = l2;
    
    tracker = 0;
    while (cur2 !== null) {
        // console.log(cur2.val);
        let sum = sumArr[tracker] + cur2.val;
        if (sum >= 10) {
            sum = sum.toString();
            sum = sum.split("");
            sum[0] = parseInt(sum[0], 10);
            sum[1] = parseInt(sum[1], 10);
            
            sumArr[tracker] = sum[1];
            sumArr[tracker + 1] += sum[0];
            
            cur2 = cur2.next;
            tracker++
            
            console.log('first: ', sum[0], " second: ", sum[1], sumArr[tracker])
        } else {
            sumArr[tracker] += cur2.val;
            cur2 = cur2.next;
            tracker++
        }
        
    }
    
    console.log('sumArr: ', sumArr)
    const newLlist = new ListNode(sumArr[0]);
    let newT = newLlist;
    
    console.log("fresh list: ", newLlist);
    // newLlist = newLlist.next;
    let trackI = 1;
    while (sumArr[trackI] !== undefined) {
        newT.next = new ListNode(sumArr[trackI]);
        console.log('newLlist: ', newLlist)
        newT = newT.next;
        trackI++;
    }
    return newLlist;
    // return sumArr;
};
