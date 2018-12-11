/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const string1 = [];
    const string2 = [];
    let current = 's1';
    const emptyInsert = (define, array, value) => {
        let inTrack = array.length - 1;
        while (array[inTrack] !== undefined) {
            array.pop();
            inTrack--;
        }
        current = define;
        if (value !== undefined) {
            array.push(value);
        }
    }
    
    const remptyInsert = (define, array, value) => {
        let inTrack = array.length - 1;
        while (array[inTrack] !== undefined) {
            array.pop();
            inTrack--;
        }
        rcurrent = define;
        if (value !== undefined) {
            array.push(value);
        }
    }
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
                                emptyInsert("s2", string2)
                            } else if (string2.length > string1.length) {
                                emptyInsert("s1", string1)
                            } else {
                                emptyInsert("s1", string1)
                            }
                            
                        } else {
                            current = 's2';
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
                            
                            emptyInsert("s2", string2, s[i])
                        } else if (string2.length > string1.length) {
                           
                            emptyInsert("s1", string1, s[i])
                        } else {
                            
                            emptyInsert("s1", string1, s[i])
                            
                        }
                        
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
    
    // Reversed loop
    const rstring1 = [];
    const rstring2 = [];
    let rcurrent = 's1';
    
    for (let i = s.length - 1; i >= 0; i--) {
        if (i === s.length - 1) {
            rstring1.push(s[i]);
        }
        if (i !== s.length - 1) {
            if (rcurrent === "s1") {
                let tracker = 0;
                while (rstring1[tracker] !== undefined) {
                    if (rstring1[tracker] === s[i]) {
                        if (rstring2[0] !== undefined) {
                            if (rstring1.length > rstring2.length) {
                                remptyInsert("s2", rstring2)
                            } else if (rstring2.length > rstring1.length) {
                                remptyInsert("s1", rstring1)
                            } else {
                                remptyInsert("s1", rstring1)
                            }
                            
                        } else {
                            rcurrent = 's2';
                            console.log('switch to s2', rcurrent)
                        }
                        
                    }
                    tracker++;
                }
                if (rstring1[tracker] === undefined && rcurrent === "s1") {
                    rstring1.push(s[i])
                }
            }
            if (rcurrent === "s2") {
                let tracker = 0;
                while (rstring2[tracker] !== undefined) {
                    if (rstring2[tracker] === s[i]) {
                        if (rstring1.length > rstring2.length) {
                            
                            remptyInsert("s2", rstring2, s[i])
                        } else if (rstring2.length > rstring1.length) {
                           
                            remptyInsert("s1", rstring1, s[i])
                        } else {
                            
                            remptyInsert("s1", rstring1, s[i])
                            
                        }
                        
                    }
                    tracker++;
                }
                if (rstring2[tracker] === undefined && rcurrent === 's2') {
                    rstring2.push(s[i]);
                }
            }
        }
        console.log('reverse loop', rstring1, rstring2)
    }
    console.log('end', string1, string2, rstring1, rstring2);
    let max1;
    let max2;
    if (string1.length > string2.length) {
        max1 = string1.length;
    } else max1 = string2.length;
    
    if (rstring1.length > rstring2.length) {
        max2 = rstring1.length;
    } else max2 = rstring2.length;
    if (max1 > max2) {
        return max1
    } else {
        return max2
    }
    if (string1.length === string2.length) return string2.length;
    if (string1.length > string2.length) {
      return string1.length  
    } else {
        return string2.length;
    } 
};
