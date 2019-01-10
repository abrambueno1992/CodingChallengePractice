/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let split = s.split('');
    let track = 0;
    let count = 0;
    let set = 0;
    while (split[track] !== undefined) {
        if (split[track] === "I") {
            if (split[track + 1] === "V") {
                count += 4;
                set += 2;
            } else if (split[track + 1] === "X") {
                count += 9;
                set += 2;
            } else {
                count += 1;
                set++
            }                      
        }
        
        
        
        if (split[track] === "X") {
            if (split[track + 1] === "L") {
                count += 40;
                set += 2;
            } else if (split[track + 1] === "C") {
                count += 90;
                set += 2;
            } else {
                count += 10;
                track++;
            }
        }
        
        if (split[track] === "C") {
            if (split[track + 1] === "D") {
                count += 400;
                set += 2;
            } else if (split[track + 1] === "M") {
                count += 900;
                set += 2;
            } else {
                count += 100;
                set++;
            }
        }
        if (track > 0 && split[track - 1] !== "I" && track > 0 && split[track - 1] !== "X" && track > 0 && split[track - 1] !== "C") {
            if (split[track] === "V" && set === 0) {
                count += 5;
                track++;
            } else if (split[track] === "X" && set === 0) {
                count += 10;
                track++;
            } else if (split[track] === "L" && set === 0) {
                count += 50;
                track++;
            } else if (split[track] === "C" && set === 0) {
                count += 100;
                track++;
            } else if (split[track] === "D" && set === 0) {
                count += 500;
                track++;
            } else if (split[track] === "M" && set === 0) {
                count += 1000;
                track++;
            } else {
                
            }
        }
        track += set;
        // console.log('track', track, 'set', set, 'count', count, 's', split)
        set = 0;
        
    }
    return count;
    
};
