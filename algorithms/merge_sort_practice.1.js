const partition = (array, leftIndex, rightIndex) => {
	const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
	while (leftIndex <= rightIndex) {
		while (array[leftIndex] < pivot) {
			leftIndex++;
		}

		while (array[rightIndex] > pivot) {
			rightIndex--;
		}
	}
};

module.exports = {
	partition,
};
