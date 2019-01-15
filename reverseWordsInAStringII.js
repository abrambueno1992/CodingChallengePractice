/**
 * @param {character[]} str
 * @return {void} Do not return anything, modify str in-place instead.
 */
var reverseWords = function(str) {
    str.reverse();
    let i = 0, j = 0;
    while (j <= str.length) {
        if (str[j] === ' ' || j === str.length) {
            for (let a = i, b = j - 1; a < b; a++, b--) {
                [str[a], str[b]] = [str[b], str[a]];
            }
            i = j = j + 1;
        } else {
            j++;
        }
    }

};
