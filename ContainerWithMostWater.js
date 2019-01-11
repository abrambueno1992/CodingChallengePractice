/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    console.log(height)
    let largest = 0;
    let tracker = 0;
    while (tracker !== height.length - 1) {
        const curNum = height[tracker];
        for (let i = tracker; height.length > i; i++) {
            if (i !== tracker) {
                const squared = (curNum <= height[i]) ? curNum * curNum : height[i];
                if (squared > largest) {
                    largest = squared;
                }
            }
        }
        tracker++;
    }
    return largest;
    
};
