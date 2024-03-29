const swap = (arr, indexOne, indexTwo) => {
	const temp = arr[indexTwo];
	arr[indexTwo] = arr[indexOne];
	arr[indexOne] = temp;
};

export const quicksort = (
	array,
	leftBound = 0,
	rightBound = array.length - 1,
) => {
	console.log('AAA leftBound', leftBound);
	console.log('AAA rightBound', rightBound);

	if (leftBound < rightBound) {
		const pivotIndex = partition(array, leftBound, rightBound);
		partition(array, leftBound, pivotIndex - 1);
		partition(array, pivotIndex, rightBound);
	}
	return array;
};

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

const array = [5, 3, 8, 1, 4, 2];
console.log('Original array:', array);
const sortedArray = quicksort(array);
console.log('Sorted array:', sortedArray);
