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
    const one = "one";
    const two = "two";
    const three = "three";
    const four = "four";
    const five = "five";
    const six = "six";
    const seven = "seven";
    const eight = "eight";
    const nine = "nine";
    
    const appendPairs = (three, resPair) => {
        if (three === true) {
            const splitPairs = resPair;
            splitPairs.shift();
            let retString3 = "";
            const num1 = parsetInt(splitPairs[0], 10);
            const num2 = parsetInt(splitPairs[1], 10);
            if (num1 === 1 && num2 === 0) {
                retString3 += "ten"
            } else if (num1 === 1 && num2 === 0){
                retString3 += ""
            } else if (num1 === 1 && num2 === 0) {
                
            } else if (num1 === 1 && num2 === 0) {
                
            } else (num1 === 1 && num2 >= 14) {
                
            }
        } else {
            const splitPairs = resPair;
            splitPairs.shift();
            splitPairs.shift();
            let retString2 = "";
            const num1 = parsetInt(splitPairs[0], 10);
        }
    }
    
    // number pair of max length of 3... 1,235,555
    // index is the highest in the number pair
    // number === 1 or number === 235 or number === 555
    // index === 7, index === 6, index === 3
    const appendTo = (index, pairN) => {
        let quantity;
        if (index >= 13  && index <= 15) {
            quantity = "trillion"
        } else if (index >= 10  && index <= 12) {
            quantity = "billion"
        } else if (index >= 7  && index <= 9) {
            quantity = "million"            
        } else if (index >= 4  && index <= 6) {
            quantity = "thousand"
        } else if (index === 3) {
            quantity = "hundred"
        } else if (index === 2) {
            quantity = "lol ten to ninety"
        } else if (index === 1) {
            quantity = "one"
        } else {
            
        }
        // check length of pair
        if (pairN.split("") === 3) {
            appendPairs(true, pairN.split(""))
        } else if (pairN.split("") === 2) {
            appendPairs(false, pairN.split(""))
        } else {
            
        }
    
        console.log('function called, index:', index, " pair:", pairN, " quantity:", quantity)
        
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
