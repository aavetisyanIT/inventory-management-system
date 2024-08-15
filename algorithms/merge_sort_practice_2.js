function mergeSort(array) {
	if (array.length === 1) {
		return array;
	}

	const midIndex = Math.floor(array.length / 2);
	const leftArray = mergeSort(array.slice(0, midIndex));
	const rightArray = mergeSort(array.slice(midIndex));

	return sort(leftArray, rightArray);
}

function sort(array1, array2) {
	const sorted = [];

	while (array1.length && array2.length) {
		if (array1[0] < array2[0]) {
			sorted.push(array1[0]);
			array1.shift();
		} else {
			sorted.push(array2[0]);
			array2.shift();
		}
	}
	return sorted.concat(array1).concat(array2);
}

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));
