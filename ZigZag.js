/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const arrayChar = [];
    for (let i = 0; numRows > i; i++) {
        arrayChar.push([]);
    }
    const endString = s.length - 1;
    const endRow = numRows - 1; // array starts at 0
    let iRow = 0;
    let iColumn = 0;
    let tracker = 0;
    
    const loopThrough = (index, ascending) => {
        if (ascending === true) {
            for (let i = iRow; endRow >= i; i++) {
                arrayChar[iRow].push(s[tracker]);
                tracker++;
            }
            iRow = endRow - 1;
            iColumn++;
            // console.log("SET iRow", iRow, " endRow: ", endRow, " iColumn :", iColumn, " array: ", arrayChar)
        } else {
            for (let i = 0; endRow >= i; i++) {
                if (i !== iRow) {
                    arrayChar[i].push("");
                } else {
                    arrayChar[i].push(s[tracker]);
                    tracker++;
                }
            }
            iColumn++;
            iRow = 0;
            // console.log('ENDING: ', arrayChar)
            
                
            
        }
    }
    while (tracker <= endString) {
        const ascending = (iRow !== 0) ? false : true;
        loopThrough(tracker, ascending);
        console.log('tracker ', tracker, 'endString ', endString)
        // tracker++;
        
    }
    
    
    console.log('end of loop: ', arrayChar);
    return arrayChar;
    
    
};
