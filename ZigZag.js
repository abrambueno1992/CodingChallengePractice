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
        } else {
            console.log('Before End', s[tracker],s, arrayChar, numRows)
            
            arrayChar[iRow][iColumn] = (s[tracker]);
            console.log('End', s[tracker],s, arrayChar)
            
            tracker++;
            iRow--;
            iColumn++;
                
            
        }
    }
    while (tracker !== endString) {
        const ascending = (iRow !== 0) ? false : true;
        loopThrough(tracker, ascending);
        // tracker++;
        
    }
    
    
    console.log('end of loop: ', arrayChar)
    
}
