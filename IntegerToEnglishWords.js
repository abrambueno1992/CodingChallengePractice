/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    console.log(typeof num, num);
    let numArr = num.toString();
    numArr = numArr.split("");
    let pair = "";
    let pCount = 0;
    const lArr = numArr.length;
    let indexTrack = lArr;
    let currentLength = lArr;
    
    let finalString = "";
    
    // number pair of max length of 3... 1,235,555
    // index is the highest in the number pair
    // number === 1 or number === 235 or number === 555
    // index === 7, index === 6, index === 3
    const appendTo = (index, pairN) => {
        let quantity;
        if (index === 9) {
            quantity = "billion"
        } else if (index === 8) {
            quantity = "million"            
        } else if (index === 7) {
            
        } else if (index === 6) {
            
        } else if (index === 5) {
            
        } else if (index === 4) {
            
        } else if (index === 3) {
            
        } else if (index === 2) {
            
        } else if (index === 1) {
            
        }
        console.log('function called, index:', index, " pair:", pairN)
        
    }
    
    numArr.forEach((each, i) => {
        
        if (currentLength % 3 === 1) {
            if (pCount !== 1) {
                pair += each;
                pCount++;
            } 
            if (pCount === 1) {
                appendTo(indexTrack, pair);
                indexTrack -= 1;
                pCount = 0;
                console.log("Pair of 1: ", pair);
                pair = "";
                currentLength = 3;
            }
            
        }  else if (currentLength % 2 === 2) {
            if (pCount !== 2) {
                pair += each;
                pCount++;
            }
            if (pCount === 2) {
                appendTo(indexTrack, pair);
                indexTrack -= 2;
                pCount = 0;
                console.log("Pair of 2: ", pair);
                pair = "";
                currentLength = 3;
            }
            
        } else {
            if (pCount !== 3) {
                pair += each;
                pCount++;
            } 
            if (pCount === 3) {
                appendTo(indexTrack, pair);
                indexTrack -= 3;
                pCount = 0;
                console.log("Pair of 3: ", pair);
                pair = "";
            }
            
            // pCount = 0;
            // console.log("Pair of 3: ", pair);
            // pair = "";
        }
        console.log("Each: ", each)
    })
    
    
};
