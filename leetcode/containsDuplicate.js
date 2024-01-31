const containsDuplicateSlow = function (numbers) {
	const sortedArr = numbers.sort();
	for (let i = 0; i < sortedArr.length - 1; i++) {
		if (sortedArr[i] === sortedArr[i + 1]) return true;
	}
	return false;
};

const containsDuplicateFast = function (numbers) {
	const set = new Set(numbers);
	return set.size !== numbers.length;
};
