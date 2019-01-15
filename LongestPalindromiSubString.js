/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let origStr = s.split("");
    if (origStr.length === 1) return s[0]
    const trackValues = new Map();
    
    let tracker = 0;
    while (origStr[tracker] !== undefined) {
        let curChar = origStr[tracker];
        for (let i = tracker; origStr.length > i; i++) {
            if (i !== tracker) {
                if (curChar === origStr[i]) {
                    let lengthStr = i - tracker;
                    lengthStr++;
                    let strCompare = "";
                    for (let j = tracker; i >= j; j++) {
                        strCompare += origStr[j];
                    }
                    
                    trackValues.set(lengthStr, strCompare)
                }
            }
        }
        tracker++;
    }
    
    let longestString = "";
    let currentMax = 0;
    trackValues.forEach((key, value) => {
        if (value > currentMax) {
            currentMax = value;
            longestString = key;
        }
        
        console.log('key: ', key, " value: ", value, ' length', value.length);
    })
    
    console.log('trackValues: ', trackValues);
    if (trackValues === new Map()) {
        return origStr[0]
    }
    return longestString
    
    
};
