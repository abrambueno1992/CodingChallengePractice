/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const arr1 = [];
    const arr2 = [];
    const tiedArr = [];
    let current = 's1'
    
    for (let i = 0; s.length > i; i++) {
        if (i === 0) {
            arr1.push(s[i]);
        }
        const lastArr1 = (arr1.length - 1);
        const lastArr2 = (arr2.length - 1);
        
        if (s[i] !== arr1[lastArr1] && current === 's1') {
            arr1.push(s[i])
        }
        if (s[i] !== arr2[lastArr2] && current === 's2') {
            arr2.push(s[i])
        }
        // console.log('looping... arr2[lastArr2]', arr2[lastArr2], arr2, 'arr1[lastArr1]', arr1[lastArr1], arr1[arr1.length - 1])
        if (s[i] === arr2[lastArr2] && i !== 0 || s[i] === arr1[lastArr1] && i !== 0){
            if (current === "s1") {
                current = "s2";
                console.log('switch to s2', 'last', s[i - 1], 'current', s[i], i)
                arr2.push(s[i]);
            } else {
                current = "s1";
                console.log('switch to s1', 'last', s[i - 1], 'current', s[i], i)
                arr1.push(s[i]);
            }
        }
    };
    console.log('end of loop 1', arr1, arr2)
    
    // loop in reverse to find longest string in opposite direction
    const temp = [];
    const lastTemp = temp.length - 1;
    for (let i = (s.length - 1); i >= 0; i--) {
        if (i === (s.length - 1)) {
            temp.push(s[i])
        };
        if (s[i] !== temp[lastTemp]) {
            temp.push(s[i])
        }
        if (s[i] === temp[lastTemp]) {
            const length1 = arr1.length;
            const length2 = arr2.length;
            const tempLength = temp.length;
            let smaller;
            if (length2 > length1) {
                smaller = "a1";
            }
            if (length1 > length2) {
                smaller = "a2";
            }
            if (smaller === "a1") {
                if (temp.length > arr1.length) {
                    let tracker = arr1.length - 1;
                    while (arr1[tracker] !== undefined){
                        arr1.pop();
                    } 
                    temp.forEach(each => {
                        arr1.push(each)
                    })
                } else {
                    let tracker = temp.length - 1;
                    while (temp[tracker] !== undefined) {
                        temp.pop();
                    } 
                    temp.push(s[i])
                }
            };
            if (smaller === "a2") {
                if (temp.length > arr2.length) {
                    let tracker = arr2.length - 1;
                    while (arr2[tracker] !== undefined) {
                        arr2.pop();
                    } 
                    temp.forEach(each => {
                        arr2.push(each)
                    });
                    while (temp[tracker] !== undefined) {
                        temp.pop();
                    } 
                } else {
                    let tracker = temp.length - 1;
                    while (temp[tracker] !== undefined) {
                        temp.pop();
                    } 
                    temp.push(s[i])
                }
                
            }
        }
    }
    console.log('arr1', arr1,'arr2', arr2, temp)
    
};
