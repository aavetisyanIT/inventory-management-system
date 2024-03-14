function mergeSort(array) {
	if (array.length === 1) return array;

	const mid = Math.floor(array.length / 2);
	const leftArray = mergeSort(array.slice(0, mid));
	const rightArray = mergeSort(array.slice(mid));

	return merge(leftArray, rightArray);
}

function merge(leftArray, rightArray) {
	const sorted = [];
	while (leftArray.length && rightArray.length) {
		if (leftArray[0] < rightArray[0]) {
			sorted.push(leftArray[0]);
			leftArray.shift();
		} else {
			sorted.push(rightArray[0]);
			rightArray.shift();
		}
	}

	return [...sorted, ...leftArray, ...rightArray];
}

const inputArr = [3, 5, 2, 90, 4, 7];

console.log(mergeSort(inputArr));
