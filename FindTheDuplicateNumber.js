/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let tracker = 0;
    let curNum = 0;
    while (nums[tracker] !== undefined) {
        curNum = nums[tracker]
        for (let i = tracker; nums.length > i; i++) {
            if (i !== tracker) {
                if (nums[i] === curNum) {
                    return curNum;
                }                
            }
        }
        tracker++
    }
    
};
