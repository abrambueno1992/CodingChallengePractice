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


const mergeTwoLists = (l1, l2) => {
	if (l1 === null) return l2
	if (l2 === null) return l1
	let newList = null

	if (l1.val > l2.val) {
		newList = new ListNode(l2.val)
		newList.next = mergeTwoLists(l1, l2.next)
	} else {
		newList = new ListNode(l1.val)
		newList.next = mergeTwoLists(l1.next, l2)
	}
	return newList
}

var mergeKLists = function(lists, lo = 0, hi = lists.length - 1) {
    if (lists.length === 0) return null
	if (lo === hi) return lists[lo] // return a single list to merge later
	let mid = Math.floor((lo + hi) / 2)
	let left = mergeKLists(lists, lo, mid) // merge all lists on the left side 
	let right = mergeKLists(lists, mid + 1, hi) // merge all lists on the right side 

	return mergeTwoLists(left, right)

};


