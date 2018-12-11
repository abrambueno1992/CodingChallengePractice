/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const string1 = [];
    const string2 = [];
    let current = 's1';
    for (let i = 0; s.length > i; i++) {
        if (i === 0) {
            string1.push(s[i]);
        }
        if (i !== 0){
            if (current === "s1") {
             let tracker = 0;
                while (string1[tracker] !== undefined) {
                    if (string1[tracker] === s[i]) {
                        if (string2[0] !== undefined) {
                            if (string1.length > string2.length) {
                                let inTrack = string2.length - 1;
                                while (string2[inTrack] !== undefined) {
                                    string2.pop();
                                    inTrack--
                                }
                                current = "s2";
                                // string2.push(s[i]);
                                console.log('switch to s2', current, 'emptied', string2)
                            } else if (string2.length > string1.length) {
                                let inTrack = string1.length - 1;
                                while (string1[inTrack] !== undefined) {
                                    string1.pop();
                                    inTrack--
                                }
                                current = "s1";
                                // string1.push(s[i]);
                                console.log('switch to s1', current, 'emptied', string1)
                            } else {
                                 let inTrack = string1.length - 1;
                                while (string1[inTrack] !== undefined) {
                                    string1.pop();
                                    inTrack--
                                }
                                current = "s1";
                                // string1.push(s[i]);
                                console.log('switch to s1', current, 'emptied', string1)
                            }
                            
                        } else {
                            current = 's2';
                            // string2.push(s[i]);
                            console.log('switch to s2', current)
                        }
                        
                    }
                    tracker++;
                }
                if (string1[tracker] === undefined && current === "s1") {
                    console.log('what is current', current, 'value of element ', s[i])
                    string1.push(s[i]);
                }
            }
            if (current === "s2") {
                let tracker = 0;
                while (string2[tracker] !== undefined) {
                    if (string2[tracker] === s[i]) {
                        if (string1.length > string2.length) {
                            let inTrack = string2.length - 1;
                            while (string2[inTrack] !== undefined) {
                                string2.pop();
                                inTrack--
                            }
                            current = "s2";
                            string2.push(s[i]);
                            console.log('switch to s2', current, 'emptied', string2)
                        } else if (string2.length > string1.length) {
                            let inTrack = string1.length - 1;
                            while (string1[inTrack] !== undefined) {
                                string1.pop();
                                inTrack--
                            }
                            current = "s1";
                            string1.push(s[i]);
                            console.log('switch to s1', current, 'emptied', string1)
                        } else {
                            let inTrack = string1.length - 1;
                            while (string1[inTrack] !== undefined) {
                                string1.pop();
                                inTrack--;
                            }
                            current = "s1";
                            string1.push(s[i]);
                            console.log('switch to s1', current, string1, 'emptied', string1)
                            
                        }
                        // current = 's1';
                        // string1.push(s[i]);
                    }
                    tracker++;
                }
                if (string2[tracker] === undefined && current === 's2') {
                    string2.push(s[i]);
                }
            }
        }
        console.log('loop', ' i ', i, 'string1 ', string1, ' string2 ', string2);
    }
    console.log('end', string1, string2)
    if (string1.length === string2.length) return string2.length;
    if (string1.length > string2.length) {
      return string1.length  
    } else {
        return string2.length;
    } 
};
