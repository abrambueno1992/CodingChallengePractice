/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const string1 = [];
    const string2 = [];
    let current = "s1";
    for (let i = 0; s.length > i; i++) {
        const track1 = string1.length - 1;
        const track2 = string2.length - 1;
        
        if (i === 0) {
            string1.push(s[i]);
            
        } else {
            if (s[i] !== s[i - 1]) {
                if (current === "s1") {
                    string1.push(s[i]);
                } else {
                   string2.push(s[i]); 
                }
                
            } else if (string2 === []) {
                string2.push(s[i]);
                current = "s2"
            } else {
                if (track1 > track2) {
                    while (string2[track2] !== undefined) {
                        string2.pop();
                    }
                    string2.push(s[i]);
                    current = "s2"
                } else if (track2 > track1) {
                    while (string1[track1] !== undefined) {
                        string1.pop();
                    }
                    string1.push(s[i]);
                    current = "s1";
                } else {
                    while (string2[track2] !== undefined) {
                        string2.pop();
                    }
                    string2.push(s[i]);
                    current = "s2"
                }
            }
        }
        if (string1.length > 2 || string2.length > 2) {
            if (current === "s1"){
                let trackChar = 1;
                while (string1[trackChar] !== undefined) {
                    string1.forEach((each, i) => {
                        if (i !== trackChar) {
                            if (each === string1[trackChar]) {
                                string1.pop();
                                // check length of string 1
                                // check length of string 2
                                // whichever string is longest is kept
                                // the other string is cleared, and used for new values
                                if (track1 > track2) {
                                    while (string2[track2] !== undefined) {
                                        string2.pop();
                                    }
                                    string2.push(s[i]);
                                    current = "s2"
                                } else if (track2 > track1) {
                                    while (string1[track1] !== undefined) {
                                        string1.pop();
                                }   
                                    string1.push(s[i]);
                                    current = "s1";
                                } else {
                                    while (string2[track2] !== undefined) {
                                    string2.pop();
                                }
                                    string2.push(s[i]);
                                    current = "s2"
                                }
                            }
                        }
                    })
                    trackChar++
                }
            } else {
                let trackChar = 1;
                while (string2[trackChar] !== undefined) {
                    string2.forEach((each, i) => {
                        if (i !== trackChar) {
                            if (each === string2[trackChar]) {
                                string2.pop();
                               
                                if (track1 > track2) {
                                    while (string2[track2] !== undefined) {
                                        string2.pop();
                                    }
                                    string2.push(s[i]);
                                    current = "s2"
                                } else if (track2 > track1) {
                                    while (string1[track1] !== undefined) {
                                        string1.pop();
                                }   
                                    string1.push(s[i]);
                                    current = "s1";
                                } else {
                                    while (string2[track2] !== undefined) {
                                    string2.pop();
                                }
                                    string2.push(s[i]);
                                    current = "s2"
                                }
                            }
                        }
                    })
                    trackChar++
                
            }}
        }
    }
    console.log(string1, string2);
    if (string1.length === string2.length) {
        let track = 0;
        const comboArr = [];
        
        
        while (string2[track] !== undefined) {
            comboArr.push(string2[track]);
            track++;
        }
        
        // track = 0;
        let lastValue = string1.length - 1;
        let value;
        let end = false;
        while (end === false) {
            if (string1[lastValue] !== undefined) {
                    value = string1[lastValue];
                    console.log('tracking', string1[lastValue])
                    
                }
            for (let i = 0; comboArr.length > i; i++) {
                
                if (string1[lastValue - 1] === comboArr[i] || string1[lastValue - 1] === comboArr[i - 1]) {
                        end = true;
                    
                }
                if (value !== "" && end === false) {
                    comboArr.unshift(value);
                }
                
            }
            lastValue--;
        }
        if (comboArr.length > string1.length || comboArr.length > string2.length) {
            // if (comboArr[0] !== undefined) comboArr.shift();
            
            console.log("same", comboArr.length, comboArr);
            
            return comboArr.length;
        }
        
    }
    if (string1.length > string2.length) {
        return string1.length;
    } else return string2.length;
    
};
