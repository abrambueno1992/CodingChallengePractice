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
    let arr = [];
    let arr2 = [];
    while(l1 !== null){
        arr.unshift(l1.val);
        l1 = l1.next
    }
    
    while(l2 !== null){
        arr2.unshift(l2.val);
        l2 = l2.next
    }
    
    let arrsum = '';
    let arrsum2 = '';
    
    
    arr.forEach((x,index)=> {
        arrsum += x.toString()
        arrsum2 += arr2[index].toString();
    })
    
    
    arrsum = parseInt(arrsum,10)
    arrsum2 = parseInt(arrsum2,10)
    
    let total = arrsum + arrsum2;
    let x =total.toString();
    let y = x.split('');
    
    
    let l3;
    let l4;
//     for(let z = 0; z < y.length -1 ; y++){
//         if(z === 0){
//            l3 = new ListNode()
//             l3.val = parseInt(y[z], 10);
            
//             l3.next.next = new ListNode(parseInt(y[z+ 2], 10))
//         }
//         else{
//             l3.next = new ListNode(parseInt(y[z+ 1], 10))
//             l3 = l3.next
//             l3.val = parseInt(y[z + 1], 10);
//             l3.next = new ListNode()
//         }
  
// //         l3.next = new ListNode(parseInt(y[z+1], 10))
// //         l3 = l3.next
        
        
//     }
    
    l3 = new ListNode();
    l3.val = parseInt(y[0], 10);
    l3.next = new ListNode();
    console.log('y length', y.length)
    for(let z=1; z < y.length; y++ ){
        if(l3.next === null && l3.val === undefined){
            l3.next = new ListNode(parseInt(y[z], 10));
        } else {
            let test = l3
            console.log('test before', test)
            while (test.next !== null) {
                test = test.next;
            }
            console.log('else test', test, 'l3', l3)
            test.next = new ListNode(parseInt(y[z], 10));
        
        }
        
        
        // console.log("l3", l3.next)
        // l3 = l3.next
    }
    
    return l3
}; 
