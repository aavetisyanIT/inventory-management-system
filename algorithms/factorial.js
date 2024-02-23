const iterativeFactorial = n => {
	let result = 1;
	while (n > 0) {
		result *= n;
		n -= 1;
	}
	return result;
};

// Set fourFactorial
const fourFactorial = iterativeFactorial(4);
console.log(fourFactorial);
