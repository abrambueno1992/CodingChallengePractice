/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    let sum=0;
    let sumMap=new Map();
    
    // key 0 === -1
    sumMap.set(0,-1);

    let maxSumSubArrayLen =0;

    for(let i=0; i<nums.length; i++){
        sum+=nums[i];

        if(!sumMap.has(sum)) sumMap.set(sum,i);
        
        // if (sum - k) === 0, sumMap has key 0 === -1
        if(sumMap.has(sum-k)){
            // sumMap.get(0) === - 1
            // Math.max(currentMax, i -- 1)
            maxSumSubArrayLen = Math.max(maxSumSubArrayLen, i-sumMap.get(sum-k));
        }
    }

    return maxSumSubArrayLen;
    
};
