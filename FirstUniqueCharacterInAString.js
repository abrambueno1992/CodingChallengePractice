/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let states = Array(26).fill(-1)
    let order = []
    
    for (let i = 0; i < s.length; i++) {
        let char = s.charCodeAt(i) - 97
        
        if (states[char] === -1) {
            order.push(char)
            states[char] = i
        } else {
            states[char] = -2
        }
    }
    
    for (let i = 0; i < order.length; i++) {
        let char = order[i]
        let index = states[char]
        if (index > -1) return index
    }
    
    return -1
    
};
