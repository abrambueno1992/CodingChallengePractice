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
        let n1 = parseInt(num[i], 10);
        let n2 = parseInt(num2[i], 10);
        console.log("Each value.. v1: ",num[i], " v2: ", num2[i])
        
        if (n2 > n1 || (num[i] === undefined && num2[i] !== undefined)) {
            if (n2 === 0 && i === largest.length - 1) {
                return 0;
            }
            return -1;
        }
        if (n1 > n2 || (num2[i] === undefined && num[i] !== undefined)) {
            if (n1 === 0 && i === largest.length - 1) {
                return 0;
            }
            return 1;
        }
    }
    return 0;
    console.log(num, num2, largest)
    
};
