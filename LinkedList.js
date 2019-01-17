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
    const HandleLarge = sum1 => {
            sum1[0] = parseInt(sum1[0], 10);
            sum1[1] = parseInt(sum1[1], 10);
            
            sumArr[tracker] = sum1[1];
            if (sumArr[tracker + 1] !== undefined && sumArr[tracker + 1] < 10) {
                sumArr[tracker + 1] += sum1[0];
            } else if (sumArr[tracker + 1] < 10) {
                sumArr[tracker + 1] = sum1[0];
            } 
            else {
                console.log("Large inside sum1[0] ",sum1[0], " sum1[1]:", sum1[1] )
                if (sum1[1] >= 10) {
                    let another = sum1[1].toString();
                    another = another.toString("");
                    another[0] = parseInt(another[0], 10);
                    another[1] = parseInt(another[1], 10);
                    HandleLarge(another);
                    
                }  else {
                    sumArr[tracker] = sum1[1]
                }
                
                
                sumArr[tracker + 1] = sum1[0];
                // sum2 = sum1.toString();
                // sum2 = sum1.split("");
            }
        // if (sumArr[tracker + 1] >= 10) {
        //     console.log("Large inside of handleLarge, recurse?: ", sumArr[tracker + 1])
        //     sum2 = sum1.toString();
        //     sum2 = sum1.split("");
        //     // HandleLarge(sumArr[tracker + 1])
        //     // tracker++;
        //     // cur2 = cur2.next;
        //     // tracker++
        // } 
        
    }
    while (cur2 !== null) {
        // console.log(cur2.val);
        let sum = sumArr[tracker] + cur2.val;
        if (sum >= 10) {
            
            sum = sum.toString();
            sum = sum.split("");
            
            // let resu = HandleLarge(sum);
            sum[0] = parseInt(sum[0], 10);
            sum[1] = parseInt(sum[1], 10);
            
            sumArr[tracker] = sum[1];
            console.log('sum[0]: ', sum[0], 'sum[1]: ', sum[1])
            if (sumArr[tracker + 1] !== undefined && sum[0] < 10) {
                sumArr[tracker + 1] += sum[0];
            } else if (sum[0] < 10) {
                sumArr[tracker + 1] = sum[0];
            } else {
                let sum22 = sum[0].toString();
                sum22 = sum[0].split("");
                sum22[0] = parseInt(sum22[0], 10);
                sum22[1] = parseInt(sum22[1], 10);
                sumArr[tracker + 1] = sum[1];
                if (sumArr[tracker + 2] !== undefined) {
                    sumArr[tracker + 2] += sum22[0];
                } else if (sum22[0] < 10) {
                    sumArr[tracker + 2] = sum22[0];
                } else {
                    
                }
            }
            
            
            cur2 = cur2.next;
            tracker++
            
            console.log('first: ', sum[0], " second: ", sum[1], sumArr[tracker])
        } else {
            if (sumArr[tracker] !== undefined) {
                sumArr[tracker] += cur2.val;
            } else {
                sumArr[tracker] = cur2.val;
            }
            
            cur2 = cur2.next;
            tracker++
        }
        
    }
    
    console.log('sumArr: ', sumArr);
    sumArr.forEach((each, i) => {
        if (each >= 10) {
            
        }
    })
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
    console.log('FINAL newLlist: ', newLlist)
    return newLlist;
    // return sumArr;
};
