/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const result = [];
    let tracker = 0;
    while (nums[tracker] !== undefined) {
        let sum = 0;
        let inTrack = 0;
        for (let i = 0; nums.length > i; i++) {
            if (i !== tracker) {
                if (inTrack === 0) {
                    sum += nums[i];
                    inTrack++;
                } else {
                        sum *= nums[i]
                }
            }
        }
        
        tracker++;
        result.push(sum);
    }
    
    return result
    
};
