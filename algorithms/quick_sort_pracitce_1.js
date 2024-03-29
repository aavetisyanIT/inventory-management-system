const swap = require('./swap');

const partition = (array, leftIndex, rightIndex) => {
	const pivot = array[Math.floor((rightIndex + leftIndex) / 2)];
	while (leftIndex <= rightIndex) {
		while (array[leftIndex] < pivot) {
			leftIndex++;
		}
		while (array[rightIndex] > pivot) {
			rightIndex--;
		}
		if (leftIndex <= rightIndex) {
			swap(array, leftIndex, rightIndex);
			leftIndex++;
			rightIndex--;
		}
	}
	return leftIndex;
};
