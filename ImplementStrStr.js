/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    console.log('needle',needle)
    if (needle === "" || needle === haystack) return 0;
    const sNeedle = needle.split('');
    const lengthN = needle.split('').length;
    
    const sHay = haystack.split('');
    let track = 0;
    let string = '';
    while (sHay[track] !== undefined) {
        string = '';
        if (sHay[track + lengthN - 1] !== undefined) {
            for (let i = track; (track + lengthN) > i; i++) {
                string += sHay[i];
            }
        }
        
        if (string === needle) {
            return track;
        } else track++;
    };
    console.log('string',string)
    return -1;
    
    
};
