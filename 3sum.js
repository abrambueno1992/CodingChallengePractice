/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let tracker = 0;
    let innerTrack = 1;
    const sums = [];
    while (nums[tracker + 2] !== undefined) {
        for (let i = innerTrack; nums.length > i; i++) {
            let sum = nums[tracker] + nums[innerTrack] + nums[i];
            if (sum === 0) {
                let tempSum = [];
                tempSum.push(nums[tracker]);
                tempSum.push(nums[innerTrack]);
                tempSum.push(nums[i])
                sums.push(tempSum);
            }
            
        }
        innerTrack++
        if (nums[innerTrack] === undefined) {
            tracker++;
            innerTrack = tracker + 1;
        }
    }
    return sums;
    
};
