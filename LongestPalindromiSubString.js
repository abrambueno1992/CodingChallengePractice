/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const sStr = s.split('');
    console.log("String is ", sStr)
    const lgStr = [];
    let shStr = "";
    let tracker = 0;
    while (tracker !== sStr.length - 1) {
        let curChar = "";
        for (let i = tracker; sStr.length > i; i++) {
            if (i === tracker) {
                curChar = sStr[tracker]
            }
            // console.log("Current character is ", curChar)
            
            if (i !== tracker) {
                if (curChar === sStr[i]) {
                    console.log("Matching... curChar: ", curChar, " sStr[i]: ", sStr[i])
                    const diff = i - tracker;
                    
                    
                    if (lgStr[0] === undefined) {
                            lgStr.push(diff)
                    }
                    const last = lgStr.length - 1;
                    console.log("last: ", last, " diff: ", diff)
                    
                    
                    if (lgStr[last] < diff || shStr === "") {
                        console.log("Condition met")
                        shStr = "";
                        for (let j = tracker; i >= j; j++) {
                            shStr += sStr[j]
                        }
                        lgStr.push(diff);
                        lgStr.sort();
                    }
                } else {
                    
                }
            }
            
            
        }
        tracker++;
    }
    return shStr;
    
    
    
};
