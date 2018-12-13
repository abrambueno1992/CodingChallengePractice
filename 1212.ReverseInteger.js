/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // console.log(x)
    let negative = false;
    if (0 > x) {
        negative = true;
        x *= -1;
    }
    let split = x.toString().split('').reverse();
    console.log(split);
    let joined = split.join('')
    console.log(joined);
    if (negative === false) {
        const final = parseInt(joined, 10);
        if (final > ((Math.pow(2, 31)) - 1) || ((Math.pow(-2, 31)) > final)){
            return 0;
        } else {
            return final;
        }
    } else {
        const final = -1 * parseInt(joined, 10);
        if (final > ((Math.pow(2, 31)) - 1) || ((Math.pow(-2, 31)) > final)){
            return 0;
        } else {
            return final;
        }
    }
    
    
};
