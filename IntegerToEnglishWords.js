/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    // num = 0;
    let belowTen = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
	let belowTwenty = ['Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
	let belowHundred = ['Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];
	if (num === 0) return 'Zero'
	function helper(num) {
		let word
		if (num < 10) {
			word = belowTen[num] + ' '
		}
		else if (num < 20) {
			word = belowTwenty[num - 10] + ' '
		}
		else if (num < 100) {
			let rem = helper(num % 10);
            // if num === 98, (num - num % 10) === (98 - 8) === 90, ((90) / 10 - 2) === 9 - 2 === 7
			word = belowHundred[(num - num % 10) / 10 - 2] + ' ' + rem
		}
		else if (num < 1000) {
            console.log("LEss than 1000")
			word = belowTen[Math.trunc(num / 100)] + ' Hundred ' + helper(num % 100)
		}
		else if (num < 1000000) {
			word = helper(parseInt(num / 1000)).trim() + ' Thousand ' + helper(num % 1000)
		}
		else if (num < 1000000000) {
			word = helper(parseInt(num / 1000000)).trim() + ' Million ' + helper(num % 1000000)
		}
		else {
			word = helper(parseInt(num / 1000000000)).trim() + ' Billion ' + helper(num % 1000000000)
		}
		return word
	}
	let result = helper(num) 
	return result.trim()
  
    
};
