/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    let strS = str.split('');
    let strN = "";
    for (let i = 0; strS.length > i; i++) {
        if (strS[i] !== "") {
            strN += (strS[i]);
        }
    }
    if (typeof parseInt(strN[0], 10) >= 9) {
        console.log('type', typeof parseInt(strN[0], 10))
        return 0;
    }
    console.log('String', strN)
    if (strN[0] === "-") {
        strS.shift();
        let num = parseInt(strN, 10);
        console.log(parseInt("end, typeof: ", typeof strN[0], 10))
        num *= -1;
        return num;
    } else if (parseInt(strN[0], 10) !== NaN) {
        let num = parseInt(strN, 10);
        // num *= -1;
        console.log(parseInt("end, typeof: ", typeof strN[0], 10))
        return num;
    } else {
        console.log(parseInt("end, typeof: ", typeof strN[0], 10))
        return 0;
    }
    
};
