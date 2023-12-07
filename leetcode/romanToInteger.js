/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	const map = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500,
		M: 1000,
	};
	const romanNumArr = s.split('');
	let result = 0;

	for (let i = romanNumArr.length - 1; i >= 0; i--) {
		if (i === romanNumArr.length - 1) {
			const firstNum = map[romanNumArr[i]];
			result += firstNum;
		} else {
			const currentRomanNum = romanNumArr[i];
			const currentNum = map[currentRomanNum];
			const prevRomanNum = romanNumArr[i + 1];
			const prevNum = map[prevRomanNum];
			if (currentNum < prevNum) {
				result -= currentNum;
			} else {
				result += currentNum;
			}
		}
	}
	return result;
};
