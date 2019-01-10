/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let count = 0;
    nums.forEach((each, i) => {
        if(each !== val) nums[count++] = each;
    });
    return count;
    
};
