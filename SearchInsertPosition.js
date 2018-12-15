/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let num;
    nums.forEach((each, i) => {
        if (each === target) {
            console.log('true', each, target)
            if (num === undefined) num = i;
            return i;
        } else if (each > target) {
             if (num === undefined) num = i;
            return i;
        } else {
            
        }
    });
    if (num !== undefined) return num;
    return nums.length;
    
};
