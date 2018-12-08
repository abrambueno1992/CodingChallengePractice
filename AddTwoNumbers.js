/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    console.log(l1.val)
    // console.log("Buffer to next linked list");
    const arr1 = [];
    const arr2 = [];
    const retArr = [];
    if (l1.val || l1.val === 0) {
        arr1.push(l1.val)
        let current = l1.next;
        while (current) {
            console.log('unshift', current.val);
            arr1.unshift(current.val)
            current = current.next
        }
        console.log('arr1', arr1)
    }
    
    console.log(l2.val);
    if (l2.val || l2.val === 0) {
        arr2.push(l2.val);
        let current2 = l2.next;
        while (current2) {
            arr2.unshift(current2.val)
            console.log('unshift', current2.val);
            current2 = current2.next
        }
    }
    console.log(arr1, arr2)
    let str1 = '';
    let str2 = '';
    for (let i = 0; arr1.length > i; i++) {
        str1 += arr1[i];
        str2 += arr2[i];
    }
    str1 = parseInt(str1, 10);
    str2 = parseInt(str2, 10);
    let strSum = str1 + str2;
    strSum = strSum.toString().split('').reverse();
    let newList = new ListNode();
    let diffeNode = null;
    strSum.forEach((each, i) => {
        let num = parseInt(each, 10);
        
        if (i === 0) {
            if (num === 0 && strSum.length === 1) {
                diffeNode = new ListNode(0);
                console.log("END condition", diffeNode, l1)
                // return diffeNode;
            }
            newList.val = each;
            let another = new ListNode();
            newList.next = another;    
            console.log('DEBUG FIRST', each === 0, typeof each, strSum.length === 1, strSum.length)
        } else {
            if (i !== (strSum.length - 1)) {
                newList.next.val = each;
                // let another = new ListNode();
                // newList.next = another;
                console.log('DEBUG !!')
            } else {
                // newList.next.val = each;
                let another = new ListNode();
                newList.next.next = another;
                newList.next.next.val = each;
                console.log('DEBUG LAST')
                
            }
        }
        
        retArr.push(num)
    })

    console.log(newList)
    
    if (diffeNode) {
        return diffeNode
    } else {
        return newList
    }
    // return newList
    console.log(strSum, retArr);
};
