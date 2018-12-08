/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    const retArr = [];
    for (let i = 0; nums.length > i; i++) {
        let j = i + 1;
        while(nums[j] !== undefined) {
            let sum = nums[j] + nums[i];
            if (sum === target) {
                retArr.push(i);
                retArr.push(j);
                return retArr;
            }
            j++
        }
        
    }
    
    
};
