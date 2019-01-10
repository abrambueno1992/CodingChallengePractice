/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let split = x.toString().split('')
    let reverse = split.reverse().join('');
    reverse = parseInt(reverse, 10);
    if (x === reverse) {
        console.log(x === reverse)
        return true;
    } else {
        console.log(x === reverse);
        return false
    } 
    
};
