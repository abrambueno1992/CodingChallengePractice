/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let num = version1.split(".");
    let num2 = version2.split(".");
    const largest = (num.length > num2.length) ? num : num2;
    for (let i = 0; largest.length > i; i++) {
        let n1 = (num[i]) ? parseInt(num[i], 10) : 0;
        let n2 = (num2[i]) ? parseInt(num2[i], 10) : 0;
        
        if (n2 > n1 ) {
            return -1;
        }
        if (n1 > n2 ) {
            return 1;
        }
    }
    return 0;
    
};
