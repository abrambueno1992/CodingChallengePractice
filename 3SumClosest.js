/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    let closest = 0;
    let tracker = 0;
    let innerTrack = 1;
    const sums = [];
    const sCompare = [];
    let tempSum = -101;
    
    while (nums[tracker + 2] !== undefined) {
        for (let i = innerTrack; nums.length > i; i++) {
            let sum = nums[tracker] + nums[innerTrack] + nums[i];
            if (sum === target) {
                tempSum = sum;
                return tempSum;
                sums.push(nums[tracker]);
                sums.push(nums[innerTrack]);
                sums.push(nums[i])
                sums.push(tempSum);
                return sums;
            } else {
                let newC = sum - target;
                if (0 > newC) newC *= -1;
                let old = tempSum - target;
                if (0 > old) old *= -1;
                old = (newC < old) ? newC : old;
                if (old === newC) {
                    tempSum = sum;
                    if (sCompare[0] !== undefined) {
                        sCompare.pop();
                        sCompare.pop();
                        sCompare.pop();
                        sCompare.push(nums[tracker]);
                        sCompare.push(nums[innerTrack]);
                        sCompare.push(nums[i]);
                    } else {
                        sCompare.push(nums[tracker]);
                        sCompare.push(nums[innerTrack]);
                        sCompare.push(nums[i]);
                    }
                }
                console.log("loop, sCompare: ", " sum: ", sum," tempSum:", tempSum, " old: ", old, " new: ", newC, sCompare, " sums: ", sums)
                
            }
            
        }
        innerTrack++
        if (nums[innerTrack] === undefined) {
            tracker++;
            innerTrack = tracker + 1;
        }
    }
    console.log("END", tempSum)
    if (sums[0] !== undefined) {
        return tempSum;
        // return sums;
    } else {
        return tempSum;
        // return sCompare;
    }
    
    
};
