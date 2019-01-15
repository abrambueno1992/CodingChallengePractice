/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubArrayLen = function(nums, k) {
    const arrNums = [];
    
    // tracking
    let track = 0;
    let sumTrack = 0;
    
    // current sum
    
    const tempPairs = [];
    if (nums[0] === k) return 1
    
    while (nums[track] !== undefined) {
        let tempSum = 0;
        for (let i = track; nums.length > i; i++) {
            if (i !== track) {
                
                if (i - 1 === track) {
                    tempSum = nums[track] + nums[i];
                    console.log(track,"initial addition: ", tempSum)
                } else {
                    tempSum += nums[i]
                }
            }
        }
        for (let i = nums.length - 1; i >= track; i--) {
            let summed = 0;
            console.log('tempSum: ', tempSum)
            if (i !== track) {
                if (tempSum === k) {
                    let result = i - track;
                    result++;
                    const tempA = [];
                    for (let j = track; i > j; j++) {
                        tempA.push(nums[j]); 
                    }
                    arrNums.push(tempA);
                    tempPairs.push(result);
                    // break;
                    // return result;
                } else {
                    summed = tempSum - nums[i];
                }
                if (summed === k) {
                    let result = i - track;
                    result++;
                    const tempA = [];
                    for (let j = track; i > j; j++) {
                        tempA.push(nums[j]); 
                    }
                    arrNums.push(tempA);
                    tempPairs.push(result);
                    
                    // break;
                    // return result;
                }
            }
        }
        
        track++;
    }
    tempPairs.sort();
    console.log('final array', tempPairs)
    arrNums.sort();
    console.log("all arrays: ", arrNums)
    let largest =-10;
    arrNums.forEach((each, i) => {
        if (each.length > largest) {
            largest = each.length
        }
    })
    if (largest > 0) {
        return largest
    }
    return 0;
    // return tempPairs[tempPairs.length - 1];
    
};
