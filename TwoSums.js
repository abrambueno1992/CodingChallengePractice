/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let track = 0;
    let current;
    const pNums = [];
    while (nums[track] !== undefined) {
        current = nums[track];
        for (let i = track; nums.length > i; i++) {
            if (i !== track) {
                let summed = nums[track] + nums[i];
                if (summed === target) {
                    pNums.push(track);
                    pNums.push(i);
                    track = -2;
                    return pNums;
                }
            }
        }
        track++;
    }
    
};
